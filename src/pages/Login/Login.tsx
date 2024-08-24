import { useNavigate } from "react-router-dom";
import AppBar from "../../components/AppBar/appbar";
import google from "../../assets/google.svg";
import Footer from "../../components/Footer/Footer";
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    
    if(token){
        navigate('/');
    }
    if(!token){
      navigate('/login');
    }

    const handleGoogleLogin = () => {
        window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-ai-ts.vercel.app/";
    };

    return (
        <div>
            <AppBar />
            <div className="login-container">
                <div className="login-box">
                    <div>
                        <div className="login-title">Create a new account</div>
                        <div
                            className="google-login-btn"
                            onClick={handleGoogleLogin}>
                            <img src={google} alt="google" />
                            Sign Up with Google
                        </div>
                    </div>
                    <div className="create">
                        <div onClick={handleGoogleLogin}
                            className="create-account-btn"
                        >
                            Create an Account
                        </div>
                        <div className="signin-link">
                            Already have an account?{" "}
                            <div className="sign-text" onClick={handleGoogleLogin}>
                                Sign In
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
