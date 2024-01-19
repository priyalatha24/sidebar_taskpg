import React from 'react';
import './LoginSignin.css';
import openLoginPopup from './loginjs';
import openSigninPopup from './signin';

const LoginSignin = () => {
  return (
    <>
      <div className="nav">
        <button className="btn" onClick={openLoginPopup}><b>LOGIN</b></button>
        <button className="btn2" type="button" onClick={openSigninPopup}><b>SIGNIN</b></button>
      </div>
      {/* loginbox */}
      <div className="login-box" id="loginPopup">
        <div className="login-header"><span> Login</span></div>

        <div className="input-box">
          <input type="text" id="user" className="input-field" required />
          <label htmlFor="user" className="label">Username</label>
          <i className="bx bx-user icon"></i>
        </div>
        <div className="input-box">
          <input type="password" id="pass" className="input-field" autoComplete="off" />
          <label htmlFor="pass" className="label">Password</label>
          <i className="bx bx-lock-alt icon" id="show-password"></i>
        </div>
        <div className="remember-forgot">
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="forgot">
            <a href="#" role="button">Forgot password</a>
          </div>
        </div>

        <div className="input-box">
          <input type="submit" className="input-submit" value="Login" />
        </div>
        <div className="register">
          <span>Don't have an account?
            <a href=''>Register</a></span>
        </div>
      </div>   
      {/* signin */}
      <div class="login-box" id="signinPopup">
        <div class="login-header">
            <span> signin</span>
        </div>
      
            <div className="input-box">
                <input type="text" id="user" className="input-field" required/>
                <label for="user" className="label">Username
                </label>
                <i className="bx bx-user icon"></i>
            </div>

            <div className="input-box">
                <input type="text" id="user" className="input-field" required/>

                <label for="user" className="label">Email
                </label>
                <i className="bx bx-user icon"></i>
            </div>
            <div className="input-box">
                <input type="password" id="pass" className="input-field" autocomplete="off"/>
                <label for="pass" className="label">Password</label>
                <i className="bx bx-lock-alt icon" id="show-password"></i>
            </div>
            <div className="input-box">
                <input type="text" id="user" className="input-field" required/>
                <label for="Retype_passwrd" className="label">Password_retype
                </label>
                <i className="bx bx-user icon"></i>
            </div>

            <div class="remember-forgot">
                <div className="remember-me">
                    <input type="checkbox" id="remember"/>
                    <label for="remember">Remember me</label>
                </div>
                <div className="forgot">
                    <a href="#">Forgot password</a>
                </div>
            </div>

            <div className="input-box">
                <input type="submit" className="input-submit" value="Login"/>
            </div>
            <div className="register">
                <span> have an account?
                <a href="#">SIGNIN</a></span>
            </div>
        
    </div>
    </>
  );
}

export default LoginSignin;
