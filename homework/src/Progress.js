import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Progress(props) {
  const quize_list = useSelector((state) => state.quiz.quiz);
  const answers = useSelector((state) => state.quiz.answers);
  const count = answers.length;
  return (
    <div>
      <ProgressBar>
        <HighLight width={(count / quize_list.length) * 100 + '%'}></HighLight>
        <Dot />
      </ProgressBar>
    </div>
  );
}

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 20px;
  display: flex;
  border-radius: 10px;
  align-items: center;
`;

const HighLight = styled.div`
  background: #673ab7;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 10px;
  transition: 2s;
`;

const Dot = styled.div`
  background: #fff;
  border: 5px solid #673ab7;
  box-sizing: border-box;
  margin: 0px 0px 0px -10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
export default Progress;
