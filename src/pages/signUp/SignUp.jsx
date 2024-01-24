import { Typography } from "@mui/material";
import signUp from "../../assets/signUp.png";
import User from "../../assets/User.svg";
import EnvelopeSimple from "../../assets/EnvelopeSimple.svg";
import LockKey from "../../assets/LockKey.svg";

import "./signUp.scss";
import TypeForm from "../../components/typeForm/TypeForm";

const SignUp = () => {
  return (
    <>
      <div className="sign-up-container">
        <div className="photo">
          <img src={signUp} alt="sign up image" />
        </div>
        <div className="create-account">
          <div className="account-headline">
            <Typography variant="h2">Create Account</Typography>
            <Typography variant="body">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </Typography>
          </div>
          <form action="">
            <TypeForm icon={User} type="text" placeholder="Username" />
            <TypeForm
              icon={EnvelopeSimple}
              type="email"
              placeholder="Username"
            />
            <TypeForm icon={LockKey} type="password" placeholder="Password" />
            <TypeForm
              icon={LockKey}
              type="password"
              placeholder="Confirm Password"
            />
            <input
              type="submit"
              className="submit-btn"
              value="Create Account"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
