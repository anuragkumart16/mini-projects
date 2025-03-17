import { useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./css/auth.css";
import { Tooltip } from "react-tooltip";

export default function Auth() {
  const [isSignup, setSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailTip, setEmailTip] = useState("");
  const [passwordTip, setPasswordTip] = useState("");
  const [confirmPasswordTip, setConfirmPasswordTip] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  function handleSignup() {
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef?.current?.value;

    let isValid = true;

    // Email validation
    if (!email) {
      setEmailTip("Please enter an email");
      isValid = false;
    } else if (!email.includes("@") || !email.includes(".") || email.includes(" ")) {
      setEmailTip("Please enter a valid email");
      isValid = false;
    } else {
      setEmailTip("");
    }

    // Password validation
    if (!password) {
      setPasswordTip("Please enter a password");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordTip("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordTip("");
    }

    // Confirm password validation
    if (!confirmPassword) {
      setConfirmPasswordTip("Please confirm your password");
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordTip("Passwords must match");
      isValid = false;
    } else {
      setConfirmPasswordTip("");
    }

    if (isValid) {
      setSignupEmail(email);
      setSignupPassword(password);
      alert("User Created Successfully");
    }
  }

  function handleSignin() {
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;

    let isValid = true;

    // Email validation
    if (!email) {
      setEmailTip("Please enter an email");
      isValid = false;
    } else if (!email.includes("@") || !email.includes(".") || email.includes(" ")) {
      setEmailTip("Please enter a valid email");
      isValid = false;
    } else {
      setEmailTip("");
    }

    // Password validation
    if (!password) {
      setPasswordTip("Please enter a password");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordTip("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordTip("");
    }

    if (isValid) {
      if (email === signupEmail && password === signupPassword) {
        alert("Sign In Successful");
      } else {
        alert("Invalid Email or Password");
      }
    }
  }

  function handleAuth() {
    if (isSignup) {
      handleSignup();
    } else {
      handleSignin();
    }
  }

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <h1>{isSignup ? "Sign Up" : "Sign In"}</h1>
        <div className="auth-holder">
          {emailTip && (
            <Tooltip
              anchorSelect="#auth-email"
              place="top"
              content={emailTip}
              style={{ fontSize: "1rem" }}
              isOpen={emailTip !== ""}
            />
          )}
          <input type="text" placeholder="Enter your email" className="auth-input" id="auth-email" ref={emailRef} />

          {passwordTip && (
            <Tooltip
              anchorSelect="#auth-password"
              place="top"
              content={passwordTip}
              style={{ fontSize: "1rem" }}
              isOpen={passwordTip !== ""}
            />
          )}
          <input type={!showPassword ? "password" : "text"} placeholder="Enter your password" className="auth-input" id="auth-password" ref={passwordRef} />

          {isSignup && (
            <>
              {confirmPasswordTip && (
                <Tooltip
                  anchorSelect="#auth-confirm-password"
                  place="top"
                  content={confirmPasswordTip}
                  style={{ fontSize: "1rem" }}
                  isOpen={confirmPasswordTip !== ""}
                />
              )}
              <input type={!showPassword ? "password" : "text"} placeholder="Confirm password" className="auth-input" id="auth-confirm-password" ref={confirmPasswordRef} />
            </>
          )}

          <label className="auth-label" onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? "Show password" : "Hide password"}
          </label>

          <button className="auth-button" onClick={handleAuth}>
            {isSignup ? "Sign up" : "Sign in"}
          </button>

          <label style={{ textDecoration: "none" }} className="auth-label">
            {isSignup ? "Already have an account? " : "Don't have an account? "}
            <label className="auth-label" onClick={() => setSignup(!isSignup)}>
              {isSignup ? "Sign in" : "Sign up"}
            </label>
          </label>
        </div>
      </div>
    </>
  );
}