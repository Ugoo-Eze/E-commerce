import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../features/userSlice";
import "../styles/SignIn.css";
import { useHistory } from "react-router-dom";
import "../styles/SignIn.css";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          setActiveUser({
            // userName: result.user.displayName,
            userEmail: result.user.email,
          })
        );
        history.push("/home");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signIn">
      <h2>SIGN IN</h2>
      <img
        src="https://venturesafrica.com/wp-content/uploads/2015/10/JUMIA.png"
        alt="logo"
      />
      <Button onClick={signIn}>login with google</Button>
    </div>
  );
}

export default SignIn;
