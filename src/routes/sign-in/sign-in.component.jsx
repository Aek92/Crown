import {
  signInWithGooglePopup,
  createUserDocumenFromAuth,
} from "../../utils/firbase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = createUserDocumenFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Signin with Google Popup</button>
    </div>
  );
};

export default SignIn;
