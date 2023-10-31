import styled from 'styled-components';


const Container = styled.div`
  box-sizing: border-box;
  max-width: 1000px;
  margin: 0 auto;
  padding: 3px;
  border: 1px solid #000000;
  height: calc(100vh - 20px);
  margin-top: 0;
  position: relative;
`;

const SystemInfoBar = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: #f3f6f9;
  text-align: left;
  padding: 10px 20px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 0px;

  label {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  input {
    padding: 10px;
    width: 100%;
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 0px;
  }
`;


const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  background-color: #ffffffa0;
  border: none;
  padding: 15px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  & + & {
    margin-left: 10px;
  }

  span {
    margin-bottom: 10px;
  }

  input {
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
    padding: 10px 20px;
    width: 85%;
    margin-right: 10px;
  }

  input:last-child {
    margin-right: 0;
  }

  p {
    position: absolute;
    right: 20px;
    bottom: 0px;
    font-size: 12px;
    margin: 0;
  }
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 10px 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  button {
    padding: 10px 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    width: 130px;
    height: 40px;

    &:first-child {
      background-color: #dae0e7;
    }

    &:last-child {
      background-color: #003a75;
      color: white;
    }
  }
`;

const RequiredSpan = styled.span`
  &::after {
    content: " *";
    color: #007fff;
  }
`;

const Modify_sys = () => {
  return (
    <Container>
      <Title>정보 수정</Title>
      <SystemInfoBar>시스템 정보</SystemInfoBar>
      <Form>
        <FormRow>
          <InputContainer>
            <RequiredSpan>시스템명</RequiredSpan>
            <input type="text" placeholder="시스템명" />
          </InputContainer>
          <InputContainer>
            <RequiredSpan>시스템 담당자</RequiredSpan>
            <input type="text" placeholder="시스템 담당자" />
          </InputContainer>
          <InputContainer>
            <RequiredSpan>시스템 담당부서</RequiredSpan>
            <input type="text" placeholder="시스템 담당부서" />
          </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer>
                <span>업체명</span>
                <input type="text" placeholder="업체명" />
            </InputContainer>
            <InputContainer>
                <RequiredSpan>담당자</RequiredSpan>
                <input type="text" placeholder="담당자" />
            </InputContainer>
            <InputContainer>
                <RequiredSpan>담당자 연락처</RequiredSpan>
                <InputRow>
                    <input type="text" placeholder="담당자 연락처" />
                    <input type="text" placeholder="0000" />
                    <input type="text" placeholder="0000" />
                </InputRow>
                
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer>
                <RequiredSpan>아이디</RequiredSpan>
                <input type="text" placeholder="아이디" disabled style={{backgroundColor: '#eaedf1'}}/>
                <p>아이디는 수정이 불가능합니다.</p>
            </InputContainer>
            <InputContainer>
                <RequiredSpan>비밀번호</RequiredSpan>
                <input type="text" placeholder="비밀번호" />
            </InputContainer>
            <InputContainer>
            </InputContainer>
        </FormRow>
        <FormRow>
            <InputContainer>    
            </InputContainer>
            <InputContainer>
                <RequiredSpan>비밀번호 확인</RequiredSpan>
                <input type="text" placeholder="비밀번호 확인" />
            </InputContainer>
            <InputContainer>
            </InputContainer>
        </FormRow>
      </Form>
      <ButtonGroup>
        <button>취소</button>
        <button>수정하기</button>
      </ButtonGroup>
    </Container>
  );
};

export default Modify_sys;
