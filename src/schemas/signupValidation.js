import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const signupValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Minimum 3 characters required")
    .required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .required()
    .min(8, "Minimum 8 characters required")
    .matches(passwordRules, {
      message: "At least 1 uppercase, 1 lowercase and 1 number",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match !")
    .required("Required"),
});
