import styled from 'styled-components';
import media from '../../utils/media';

export const LoginContainer = styled.div`

  ${media.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  ${media.desktopMiddle} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  ${media.desktop} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`

  ${media.mobile} {
    width: 50%;
    height: 5%;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    transition: 1s;
    font-size: 1rem;

    &:hover {
      background-color: #FFF;
      transition: 1s;
      color: #FFF;
    
    }

    &:active {
      background-color: #FFF;
      transition: 1s;
      color: #FFF;
      
    }
  }

  ${media.desktopMiddle} {
    width: 50%;
    height: 10%;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    transition: 1s;
    font-size: 1rem;

    &:hover {
      background-color: #FFF;
      transition: 1s;
      color: #FFF;
      
    }

    &:active {
      background-color: #FFF;
      transition: 1s;
      color: #FFF;
      
    }
  }

  ${media.desktop} {
    width: 50%;
    height: 10%;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    transition: 1s;
    font-size: 1rem;

    &:hover {
      background-color: #FFF;
      transition: 1s;
      color: #FFF;
    
    }

    &:active {
      background-color: #FFF;
      transition: 1s;
      color: #FFF;
    
    }
  }
`;

export const Form = styled.form`

  ${media.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;

    div.step1 {
      width: 100%;

      h5{
        font-size: 1.2rem;
      }
    }
    
    div.step2 {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-direction: column;

      label {
        width: 100%;

        font-size: 1rem;
        font-weight: 400;
      }
      input {
        width: 100%;
        height: 30px;
        border: 2px solid #000000;
        background-color: none;
        border-radius: 5px;
        margin-top: 5px;
        padding-left: 5px;
      }
    }
    
    div.step3 {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      
      button {
        border-radius: 5px;
        width: 25%;
        height: 30px;
        background-color: ${(props) => (props.disb ? '#000000' : '#c4c4c4')};
        color: #ffffff;
        border: none;
        cursor: ${(props) => (props.disb ? 'pointer' : 'not-allowed')};

      }
    }

  }

  ${media.desktopMiddle} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;

    div.step1 {
      width: 100%;

      h5{
        font-size: 1.2rem;
      }
    }
    
    div.step2 {
      width: 100%;

      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-direction: column;

      label {        
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
      }
      input {
        width: 100%;
        height: 30px;

        border: 2px solid #000000;
        background-color: none;
        border-radius: 5px;
        margin-top: 5px;
        padding-left: 5px;
      }
    }
    
    div.step3 {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      
      button {
        border-radius: 5px;
        width: 25%;
        max-width: 100px;
        height: 30px;
        background-color: ${(props) => (props.disb ? '#000000' : '#7695EC')};
        color: #ffffff;
        border: none;
        cursor: ${(props) => (props.disb ? 'pointer' : 'not-allowed')};
      }
    }
  }

  ${media.desktop} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;

    div.step1 {
      width: 100%;

      h5{
        font-size: 1.2rem;
      }
    }
    
    div.step2 {
      width: 100%;

      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-direction: column;

      label {
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
      }
      input {
        width: 100%;
        height: 30px;
        border: 2px solid #000000;
        background-color: none;
        border-radius: 5px;
        margin-top: 5px;
        padding-left: 5px;
      }
    }
    
    div.step3 {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      
      button {
        border-radius: 5px;
        width: 25%;
        max-width: 100px;
        height: 30px;
        background-color: ${(props) => (props.disb ? '#7695EC' : '#c4c4c4')};
        color: #ffffff;
        border: none;
        cursor: ${(props) => (props.disb ? 'pointer' : 'not-allowed')};
      }
    }
  }
`;
