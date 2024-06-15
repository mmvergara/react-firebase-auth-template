import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <main>
      <Link className="home-link" to="/">
        ◄ Home
      </Link>
      <form className="main-container">
        <h1 className="header-text">Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <Link className="auth-link" to="/auth/sign-up">
          Don't have an account? Sign Up
        </Link>
      </form>
    </main>
  );
};

export default SignInPage;
