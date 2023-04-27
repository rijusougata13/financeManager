import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./AuthPage.css"

export default function AuthPage({ setUser }) {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  localStorage.setItem("maxExpense", 0);
  return (
    <main>
      <h1 className="ledgerly">Finance</h1>
      <h3>{showSignUpForm ? "Welcome to Finance" : "Welcome back!"}</h3>
      {showSignUpForm ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
      <Link onClick={() => setShowSignUpForm(!showSignUpForm)}>
        {showSignUpForm ? "Already a user? Log in here." : "New to Finance? Sign up here."}
      </Link>
    </main>
  );
}