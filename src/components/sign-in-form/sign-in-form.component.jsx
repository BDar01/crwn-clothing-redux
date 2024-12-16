import { useState } from "react";
import { useDispatch } from "react-redux";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";
//import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    const signInWithGoogle = async () => {
        //await signInWithGooglePopup();
        dispatch(googleSignInStart());
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            //await signInAuthUserWithEmailAndPassword(email, password);
            dispatch(emailSignInStart(email, password));

            resetFormFields();

        } catch (error) {
            switch(error.code) {
                case 'auth/invalid-credential':
                    alert('incorrect password or email');    
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;