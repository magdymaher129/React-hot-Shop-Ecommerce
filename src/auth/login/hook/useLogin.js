import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(
      input: { identifier: $email, password: $password, provider: "local" }
    ) {
      jwt
      user {
        id
        username
      }
    }
  }
`;

function useLogin() {
const navigate = useNavigate(); // Navigation hook for redirecting to different routes
const [token, setToken] = useState(""); // State to store the authentication token
const [email, setEmail] = useState(""); // State to store the email value
const [password, setPassword] = useState(""); // State to store the password value
const [error, setError] = useState(); // State to store any error messages
const signIn = useSignIn(); // Sign in hook for handling user authentication
const [id, setID] = useState(); // State to store the user ID

 // Function to handle login mutation
const [login] = useMutation(LOGIN_MUTATION, {
  variables: {
    email: email,
    password: password,
  },
  onCompleted: ({ login }) => {
    // localStorage.setItem(AUTH_TOKEN, login.jwt);
    setID(login.user.id);
    setToken(login.jwt);
    if (
      signIn({
        token: token,
        expiresIn: 36000,
        tokenType: "Bearer",
        authState: { user: login.user.username, id: login.user.id },
      })
    )
      navigate("/");
  },
  onError: () => {
    setError("Email Or Password Is invalid");
  },
});

  // Function to handle email submission
const emailSubmit = (e) => {
  setEmail(e.target.value);
};

// Function to handle password submission
const PasswordSubmit = (e) => {
  setPassword(e.target.value);
};

// Function to handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  try {
    login(email, password);
  } catch (error) {
    console.log(error);
  }
};
  return { handleSubmit, emailSubmit, PasswordSubmit, error };
}

export default useLogin;
