import { useContext } from 'react';
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import image from "../../assets/images/login/login.svg";
import OrangeButton from "../Shared/Buttons/OrangeButton";
import AuthProviders from '../Shared/AuthProviders/AuthProviders';

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
    .then(result => {
      form.reset();
      console.log(result.user);
    })
    .catch(error => console.error(error))
  };

  return (
    <div className="hero py-20">
      <div className="hero-content grid md:grid-cols-2 gap-20">
        <div className="text-center lg:text-left">
          <img src={image} alt="" />
        </div>
        <form
          className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 pt-10"
          onSubmit={handleLogin}
        >
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <label className="label">
              <Link href="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
            <div className="form-control my-3">
              <OrangeButton type="submit">Login</OrangeButton>
            </div>
            <h6 className="label-text-alt text-center">
              New to Car Doctor?{" "}
              <Link to="/signup" className="link link-hover text-orange-600">
                Sign up
              </Link>
            </h6>
            <AuthProviders />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
