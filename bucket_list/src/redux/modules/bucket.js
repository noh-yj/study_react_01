// bucket.js
import { firestore } from '../../firebase';
const bucket_db = firestore.collection('bucket');

// Actions
const LOAD = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';
const UPDATE = 'bucket/UPDATE';
const LOADED = 'bucket/LOADED';

const initialState = {
  list: [
    { text: '영화관 가기', completed: false },
    { text: '매일 책읽기', completed: false },
    { text: '수영 배우기', completed: false },
  ],
  is_loaded: false,
};

// Action Creators
export const loadBucket = (bucket) => {
  return { type: LOAD, bucket };
};
export const createBucket = (bucket) => {
  return { type: CREATE, bucket };
};
export const deleteBucket = (bucket) => {
  return { type: DELETE, bucket };
};
export const updateBucket = (index) => {
  return { type: UPDATE, index };
};
export const isLoaded = (loaded) => {
  return { type: LOADED, loaded };
};
// firebase
export const loadBucketFB = () => {
  return function (dispatch) {
    bucket_db.get().then((docs) => {
      let bucket_data = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          bucket_data = [...bucket_data, { id: doc.id, ...doc.data() }];
        }
      });

      // 이제 액션 생성 함수한테 우리가 가져온 데이터를 넘겨줘요! 그러면 끝!
      dispatch(loadBucket(bucket_data));
    });
  };
};
export const addBucketFB = (bucket) => {
  return function (dispatch) {
    // 생성할 데이터를 미리 만들게요!
    let bucket_data = { text: bucket.text, completed: false };
    dispatch(isLoaded(false));

    // add()에 데이터를 넘겨줍시다!
    bucket_db
      .add(bucket_data)
      .then((docRef) => {
        // id를 추가한다!
        bucket_data = { ...bucket_data, id: docRef.id };

        // 성공했을 때는? 액션 디스패치!
        dispatch(createBucket(bucket_data));
        dispatch(isLoaded(true));
      })
      .catch((err) => {
        // 여긴 에러가 났을 때 들어오는 구간입니다!
        console.log(err);
        window.alert('오류가 났네요! 나중에 다시 시도해주세요!');
        dispatch(isLoaded(true));
      });
  };
};

export const updateBucketFB = (index) => {
  return function (dispatch, getState) {
    const _bucket_data = getState().bucket.list[index];

    let bucket_data = { ..._bucket_data, completed: true };
    dispatch(isLoaded(false));
    if (!bucket_data.id) {
      return;
    }
    bucket_db
      .doc(bucket_data.id)
      .update(bucket_data)
      .then((docRef) => {
        dispatch(updateBucket(index));
        dispatch(isLoaded(true));
      });
  };
};
export const deleteBucketFB = (index) => {
  return function (dispatch, getState) {
    const _bucket_data = getState().bucket.list[index];
    dispatch(isLoaded(true));
    if (!_bucket_data.id) {
      return;
    }
    bucket_db
      .doc(_bucket_data.id)
      .delete()
      .then((res) => {
        dispatch(deleteBucket(index));
      })
      .catch((err) => {
        console.log(err);
        window.alert('오류가 났네요! 나중에 다시 시도해주세요!');
      });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'bucket/LOAD': {
      if (action.bucket.length > 0) {
        return { list: action.bucket, is_loaded: true };
      }

      return state;
    }
    case 'bucket/CREATE': {
      const new_bucket_list = [...state.list, action.bucket];

      return { list: new_bucket_list };
    }
    case 'bucket/DELETE': {
      const bucket_list = state.list.filter((val, idx) => {
        if (idx !== action.bucket) {
          return val;
        }
      });
      return { list: bucket_list };
    }
    case 'bucket/UPDATE': {
      const bucket_list = state.list.map((l, idx) => {
        if (idx === action.index) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      return { list: bucket_list };
    }
    case 'bucket/LOADED': {
      return { ...state, is_loaded: action.loaded };
    }

    default:
      return state;
  }
}
