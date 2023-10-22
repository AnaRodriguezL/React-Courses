import '../styles/login.css'
import '../jquery/login-jquery.js'

import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div class="materialContainer">
                <div class="box">
                    <div class="title">LOGIN</div>
                    
                    <div class="group">
                        <input type="email" id="email" />
                        <label for="email">Email</label>
                        <img src="https://alikinvv.github.io/email-check/build/letter.svg" alt="" class="letter" />
                        <div class="alert">HOlaaaaa</div>
                        <div class="sc"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;