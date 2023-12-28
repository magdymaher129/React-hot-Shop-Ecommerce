import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      user {
        id
        username
        email
      }
    }
  }
`;
function useRegister() {
  const [error, setError] = useState();  //State to store the error state
  const navigate = useNavigate();  //Navigate to
  const [userName, setUserName] = useState();  //State to store the user name
  const [email, setEmail] = useState();  //State to store the email
  const [password, setPassword] = useState();  //State to store the password
  const [validated, setValidated] = useState(false);  //State to store the validated
  const [RegisterUser] = useMutation(REGISTER_USER);  //State to store the registration 
  //set the user name
  const userSubmit = (e) => {
    setUserName(e.target.value);
  };
//set the  email address
  const emailSubmit = (e) => {
    setEmail(e.target.value);
  };
  //set the password
  const PasswordSubmit = (e) => {
    setPassword(e.target.value);
  };
  // handle the registration
  const handleRegister = async (e) => {
    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
      e.preventDefault();
      // e.stopPropagation();
    // }

    // setValidated(true);
  

    await RegisterUser({
      variables: { username: userName, email: email, password: password },
      onCompleted: () => {
        navigate("/");
      },
      onError: (error) => {
        console.log("Error", error.message);

        setError(error.message);
      },
    });
  };
// return items valuues
  return { handleRegister, error, userSubmit, emailSubmit, PasswordSubmit,validated };
}
export default useRegister;
