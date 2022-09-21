import {
  signInWithGooglePopup,
  createUserDocumenFromAuth,
  auth,
} from "../../utils/firbase/firebase.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumenFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Signin with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
