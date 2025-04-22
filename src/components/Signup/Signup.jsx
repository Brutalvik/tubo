import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { useSelector, useDispatch } from "react-redux";
import { closeSignupModal } from "@store/reducers/signupModal";
import { Input } from "@heroui/react";
import { FaUserCircle } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { openLoginModal } from "@store/reducers/loginModal";
import { useFormik } from "formik";
import { doCreateUserWithEmailAndPassword } from "@firebaselocal/auth";
import AnimatedSuccessCheck from "@features/AnimatedSuccessCheck/AnimatedSuccessCheck";

//ValidationSchema
import { signupValidationSchema } from "@schemas/signupValidation";

const Signup = () => {
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const [userCreationSuccess, setUserCreationSuccess] = useState(false);
  const [signupError, setSignupError] = useState({
    isError: false,
    errorMessage: "",
  });

  const handleModalClose = () => {
    dispatch(closeSignupModal());
  };
  //form data
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    touched,
    resetForm,
    handleBlur,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values) => {
      setSignupError({ isError: false, errorMessage: "" });
      const confirmedValues = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };
      setSubmitting(true);
      try {
        // Call the doCreateUserWithEmailAndPassword function
        await doCreateUserWithEmailAndPassword(confirmedValues);
        // Handle success, such as redirecting to a login page or home page
        setUserCreationSuccess(true);
        setTimeout(() => dispatch(closeSignupModal()), 2000);
      } catch (error) {
        // setErrorMessage(error.message); // Display error message
        setSignupError({ isError: true, errorMessage: error.message });
        console.error("Error signing up:", error.message);
        setUserCreationSuccess(false);
      } finally {
        setSubmitting(false); // Stop submitting after completion
        resetForm();
      }
    },
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const isModalOpen = useSelector(({ signup }) => signup.isSignupModalOpen);

  const handleLoginModal = () => {
    dispatch(openLoginModal());
    dispatch(closeSignupModal());
  };

  // Reset success state whenever the modal opens
  useEffect(() => {
    if (isModalOpen) {
      setUserCreationSuccess(false);
    }
  }, [isModalOpen]);

  return (
    <Modal
      isOpen={isModalOpen}
      size="sm"
      onClose={handleModalClose}
      aria-labelledby="modal-title"
    >
      {signupError.isError ? (
        <ModalContent>
          <ModalHeader>Signed up already ?</ModalHeader>
          <ModalBody>{signupError.errorMessage}</ModalBody>
          <Button
            color="primary"
            type="submit"
            className="text-center w-full"
            // isLoading={submitting}
          >
            Try logging in
          </Button>
        </ModalContent>
      ) : (
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex items-center justify-center gap-4 text-center">
                <FaUserCircle className="text-2xl" />
                {userCreationSuccess ? (
                  <h1 className="text-xl font-bold">
                    Great ! Start your Engines..
                  </h1>
                ) : (
                  <h1 className="text-xl font-bold">Sign up</h1>
                )}
              </ModalHeader>
              {userCreationSuccess ? (
                <AnimatedSuccessCheck />
              ) : (
                <>
                  <ModalBody>
                    <form
                      autoComplete="off"
                      className="flex flex-col gap-4 pb-4"
                      onSubmit={handleSubmit}
                    >
                      <Input
                        name="firstName"
                        label="First Name"
                        type="text"
                        className="w-full"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={
                          errors.firstName && touched.firstName ? true : false
                        }
                        errorMessage={
                          errors.firstName &&
                          touched.firstName &&
                          errors.firstName
                        }
                      />
                      <Input
                        label="Last Name"
                        name="lastName"
                        type="text"
                        className="w-full"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={
                          errors.lastName && touched.lastName ? true : false
                        }
                        errorMessage={
                          errors.lastName && touched.lastName && errors.lastName
                        }
                      />

                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        className="w-full"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.email && touched.email ? true : false}
                        errorMessage={
                          errors.email && touched.email && errors.email
                        }
                      />
                      <Input
                        label="Password"
                        name="password"
                        type={isPasswordVisible ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full"
                        isInvalid={
                          errors.password && touched.password ? true : false
                        }
                        errorMessage={
                          errors.password && touched.password && errors.password
                        }
                        endContent={
                          <button
                            aria-label="toggle password visibility"
                            className="focus:outline-none"
                            type="button"
                            onClick={() =>
                              setIsPasswordVisible((prev) => !prev)
                            }
                          >
                            {isPasswordVisible ? (
                              <HiEyeOff className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                              <HiEye className="text-2xl text-default-400 pointer-events-none" />
                            )}
                          </button>
                        }
                      />
                      <Input
                        label="Confirm Password"
                        name="confirmPassword"
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full"
                        isInvalid={
                          errors.confirmPassword && touched.confirmPassword
                            ? true
                            : false
                        }
                        errorMessage={
                          errors.confirmPassword &&
                          touched.confirmPassword &&
                          errors.confirmPassword
                        }
                        endContent={
                          <button
                            aria-label="toggle password visibility"
                            className="focus:outline-none"
                            type="button"
                            onClick={() =>
                              setIsConfirmPasswordVisible((prev) => !prev)
                            }
                          >
                            {isConfirmPasswordVisible ? (
                              <HiEyeOff className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                              <HiEye className="text-2xl text-default-400 pointer-events-none" />
                            )}
                          </button>
                        }
                      />
                      <div className="flex justify-between w-full">
                        <p
                          onClick={handleLoginModal}
                          className="text-right flex items-center gap-x-2 hover:underline cursor-pointer"
                        >
                          Already a Tubo member ?
                        </p>
                      </div>
                      <Button
                        color="primary"
                        type="submit"
                        className="text-center w-full"
                        isLoading={submitting}
                      >
                        Register
                      </Button>
                    </form>
                  </ModalBody>

                  <ModalFooter className="flex flex-col justify-center items-center">
                    <p className="mb-4">Alternate Access</p>
                    <div className="flex gap-4 mt-4">
                      <FaFacebook size={25} className="cursor-pointer" />
                      <FaInstagram size={25} className="cursor-pointer" />
                      <FaXTwitter size={25} className="cursor-pointer" />
                    </div>
                  </ModalFooter>
                </>
              )}
            </>
          )}
        </ModalContent>
      )}
    </Modal>
  );
};

export default Signup;
