import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/Colors';
import { createPillMutation , createPtpPillMutation } from '../../apis/MyPill';

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: 'block';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: 'block';
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 20px;
  width: 90%;
  max-width: 600px;
  height: auto;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 30px 40px 100px 40px;
`;
const RadioBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 40px;
  row-gap: 30px;
`;
const RadioInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  &:checked + label {
    background-color: ${Colors.main3};
    color: #fff;
  }
`;
const RadioRabel = styled.label`
  width: 20px;
  padding: 8px 15px;
  border-radius: 20px;
  border: 2px solid ${Colors.main3};
  font-size: 1.2rem;
`;
const Descript = styled.div`
  font-size: 1.3rem;
`;
const DateInput = styled.input`
  background-color: #eeeeee;
  border: none;
  padding: 15px;
  font-size: 1rem;
  border-radius: 8px;
`;
const SubmitBtn = styled.div`
  background-color: ${Colors.main3};
  color: #fff;
  padding: 10px 17px;
  border-radius: 8px;
  font-size: 1.3rem;
  float: right;
  margin-top: 20px;
`;

const Modal = ({ setModal, medicineId }) => {
  const pillType = [
    { type: 'PILL', name: '알약' },
    { type: 'SYRUP', name: '시럽약' },
    { type: 'POWDER', name: '가루약' },
    { type: 'OINTMENT', name: '연고' },
    { type: 'DROP', name: '안약류' },
    { type: 'PTP', name: 'PTP약' },
  ];
  const [type, setType] = useState('PILL');

  useEffect(() => {
    document.getElementById('currentDate').value = new Date().toISOString().substring(0, 10);
  }, []);

  const onChangeRadio = (e) => {
    setType(e.target.value);
  };

  const usePostPill = async () => {
    const data = { type: type, startTime: '2024-02-21T09:59:21.055Z' }
    createPillMutation.mutate(data);
  };

  const usePostPtpPill = async () => {
    const data = {startTime: '2024-02-21T09:59:21.055Z'}
    createPtpPillMutation.mutate(data)
  };
  return (
    <>
      <ModalOverlay />
      <ModalWrapper tabIndex="-1">
        <ModalInner tabIndex="0" className="modal-inner">
          <h1>약의 종류가 무엇인가요?</h1>
          <button onClick={() => setModal(false)}>닫기</button>
          {medicineId}
          <RadioBox>
            {pillType.map((item) => (
              <div key={item.name}>
                <RadioInput
                  type="radio"
                  id={item.type}
                  name={'pilltype'}
                  value={item.type}
                  checked={type === item.type}
                  onChange={onChangeRadio}
                />
                <RadioRabel htmlFor={item.type}>{item.name}</RadioRabel>
              </div>
            ))}
          </RadioBox>
          {type === 'PTP' ? (
            <>
              <Descript>약에 쓰여있는 유통기한을 입력해주세요.</Descript>
              <br />
              <DateInput type="date" />
              <br />
              <SubmitBtn onClick={() => usePostPtpPill()}>등록하기</SubmitBtn>
            </>
          ) : (
            <>
              <Descript>처방받은 날짜를 입력해주세요.</Descript>
              <br />
              <DateInput type="date" id="currentDate" />
              <br />
              <SubmitBtn onClick={() => usePostPill()}>등록하기</SubmitBtn>
            </>
          )}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default Modal;
