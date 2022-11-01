import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import image from "../../assets/images/login/login.svg";
import OrangeButton from "../Shared/Buttons/OrangeButton";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(result => {
      console.log(result.user)
      form.reset();
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
          className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 py-10"
          onSubmit={handleSignUp}
        >
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control mt-5 mb-3">
              <OrangeButton type="submit">Sign Up</OrangeButton>
            </div>
            <h6 className="label-text-alt text-center">
              Already have an account? {" "}
              <Link to="/login" className="link link-hover text-orange-600">
                Login
              </Link>
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
