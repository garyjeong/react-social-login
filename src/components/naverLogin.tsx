import React, { Component } from "react";
import NaverLoginBtn from '../assets/naver-login-btn.png';
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
  background: white;
`;

const NaverLogin = (): JSX.Element => {
    const NAVER_CLIENT_ID = "fnKLjKFVb2cTa0SzBrYx";
    const NAVER_CLIENT_SECRET = "ZooB0MVs14";
    const NAVER_CALLBACK_URL = "http://localhost:3000/auth/naver/callback";
    const getNaver = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_CLIENT_SECRET}&redirect_uri=${NAVER_CALLBACK_URL}`;
    
    const handler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.location.assign(getNaver);
    }

    return (
        <>
            <StyledButton onClick={handler}>
                <img id="naverLoginBtn" src={NaverLoginBtn} width="150"/>
            </StyledButton>
        </>
    )
}

export default NaverLogin;