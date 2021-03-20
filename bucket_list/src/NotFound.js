import React from 'react';

function NotFound(props) {
  return (
    <>
      <h1>주소가 옳바르지 않아요!</h1>
      <button
        onClick={() => {
          props.history.goBack();
        }}
      >
        뒤로가기
      </button>
    </>
  );
}

export default NotFound;
