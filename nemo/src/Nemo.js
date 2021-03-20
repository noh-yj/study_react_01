import React, { useState } from 'react';

const Nemo = (props) => {
  const [count, setCount] = useState(3);

  const addNemo = () => {
    setCount(count + 1);
  };
  const removeNemo = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  const nemo_count = Array.from({ length: count }, (v, idx) => idx);

  return (
    <div className='App'>
      {nemo_count.map((num, index) => {
        return (
          <div
            key={index}
            style={{
              width: '150px',
              height: '150px',
              background: '#eee',
              margin: '10px',
            }}
          >
            nemo
          </div>
        );
      })}
      <button onClick={addNemo}>하나 추가</button>
      <button onClick={removeNemo}>하나 빼기</button>
    </div>
  );
};

export default Nemo;
