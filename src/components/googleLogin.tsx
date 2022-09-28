import React, { Component } from "react";
import GoogleLoginBtn from '../assets/google-login-btn.png';
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

const GoogleLogin = (): JSX.Element => {
    const GOOGLE_CLIENT_ID = "715904775794-7md4m9na3gv0po48buqr9iahfuftntua.apps.googleusercontent.com";
    const GOOGLE_REDIRECT_URI = "http://localhost:5555/auth/google/callback";
    const getGoogle = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${GOOGLE_REDIRECT_URI}&client_id=${GOOGLE_CLIENT_ID}`;
    
    const handler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.location.assign(getGoogle);
    }

    return (
        <>
            <StyledButton onClick={handler}>
                <img id="googleLoginBtn" src={GoogleLoginBtn} width="150"/>
            </StyledButton>
        </>
    )
}

export default GoogleLogin;