import {useState, useContext} from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {signInWithGooglePopup,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword,} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss"
const defaultFormFields = {
    email: "",
    password:"",
};
const SignInForm = () =>{
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;
    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    };
    const signInWithGoogle = async () =>{
        try{
            const {user} = await signInWithGooglePopup()
            await createUserDocumentFromAuth(user);
            alert("Login Successful")
        }catch (error){
            alert("Popup login closed, try again.")
        };
    };
    const handleSubmit = async (event) => {
        event.preventDefault(defaultFormFields);
        const resetFormFields = () => {
            setFormFields(defaultFormFields);
        }
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(
                email,
                password,
            )
            resetFormFields(defaultFormFields);
            alert("successful sign in")
        }catch (error){
            switch(error.code){
                case "auth/invalid-login-credentials":
                    alert("Incorrect Credentials");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error)
            }
            console.log(error)
       
        };
    };
    return (

        <div className = "sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and passsword</span>
            <form onSubmit = {handleSubmit}>
                <FormInput
                label = "Email"
                type = "text"
                required
                onChange={handleChange}
                name = "email"
                value = {email}
                />
                <FormInput
                label = "Password"
                type = "password"
                required
                onChange={handleChange}
                name = "password"
                value = {password}
                />
                <div className = "buttons-container">
                    <Button type = "button" buttonType = "google" onClick = {signInWithGoogle}>Google Sign In</Button>
                    <Button type = "submit">Sign In</Button>
                </div>
              
            </form>
        </div>
    )
}
export default SignInForm;