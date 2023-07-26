import * as Yup from "yup";
async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
const initialValues = {
  username: "",
  password: "",
};
const passwordRules = /^(?=.*\d)(?=.*\[a-z])(?=.*\[A-Z]).{5,}$/;
const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(5).required("Password is required"),
});

const handleSubmit = (values, actions) => {
  // Handle form submission
  console.log(values);
  console.log("actions", actions);
};

export {
  loginUser,
  initialValues,
  validationSchema,
  passwordRules,
  handleSubmit,
};
