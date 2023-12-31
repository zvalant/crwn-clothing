import {useState, useContext} from "react"
import { createAuthUserWithEmailandPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from"../form-input/form-input.component";
import "./sign-up-form.styles.scss"
import Button from "../button/button.component";
import {UserContext,UserProvider} from "../../contexts/user.context";
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};
const SignUpForm = () =>{
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;
    console.log(formFields);

    const handleSubmit = async (event) =>{
        const resetFormFields = () => {
            setFormFields(defaultFormFields);
        }
        event.preventDefault(defaultFormFields);
        if (password.length < 6){
            alert("Password must be at least 6 character long")
            return;
        }else if (password!==confirmPassword){
            alert("Passwords do not Match");
            return;
        }
        try {
            const {user}= await createAuthUserWithEmailandPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields()
            alert("Account successfully made!")   
            }catch (error){
                if (error.code === "auth/email-already-in-use"){
                    alert("Cannont create user, email already in use")
                    return;
                }else{
                    alert("Cannot create user. An error occured")
                }
            }
    };
    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]: value})
    };
    return (
        <div className = "sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label='Display Name'
                type='text'
                required
                onChange={handleChange}
                name='displayName'
                value={displayName}
                />
                <FormInput
                label='Email'
                type='email'
                required
                onChange={handleChange}
                name='email'
                value={email}
                />
                <FormInput
                label='Password'
                type='password'
                required
                onChange={handleChange}
                name='password'
                value={password}
                />
                <FormInput
                label='Confirm Password'
                type='password'
                required
                onChange={handleChange}
                name='confirmPassword'
                value={confirmPassword}
                />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;