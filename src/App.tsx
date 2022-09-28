import React from 'react';
import logo from './logo.svg';
import './App.css';
import KakaoLogin from './components/kakaoLogin';
import NaverLogin from './components/naverLogin';
import GoogleLogin from './components/googleLogin';

function App() {
  return (
    <div className="App">
      <KakaoLogin/>
      <NaverLogin/>
      <GoogleLogin/>
    </div>
  );
}

export default App;
