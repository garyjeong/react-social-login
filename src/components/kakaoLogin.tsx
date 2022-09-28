import React, { Component } from "react";
import KakaoLoginBtn from '../assets/kakao-login-btn.png';
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

const KakaoLogin = (): JSX.Element => {
    const KAKAO_REST_API_KEY = "b5473064135c985bf33837655c4bfe4d";
    const KAKAO_REDIRECT_URI = "http://localhost:5555/auth/kakao/callback";
    const getKakao = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

    const handler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.location.assign(getKakao);
    }

    return (
        <>
            <StyledButton onClick={handler}>
                <img id="kakaoLoginBtn" src={KakaoLoginBtn} width="150"/>
            </StyledButton>
        </>
    )
}

export default KakaoLogin;