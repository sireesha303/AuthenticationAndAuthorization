import { Component } from "react";
import './index.css'

class LoginForm extends Component{

    render(){
        return(
            <div className="login-form-container">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="ecommerce-login-page-img" className="login-img"/>   
                <form className="login-form">
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="ecommerce-img" className="login-website-logo-img"/>
                    <label htmlFor="UserName" className="label-el">UserName</label>
                    <input type="text" id="UserName" placeholder="enter username" className="input-el"/>
                    <label htmlFor="PassWord" className="label-el">PassWord</label>
                    <input type="password" id="PassWord" placeholder="enter password" className="input-el"/>
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm