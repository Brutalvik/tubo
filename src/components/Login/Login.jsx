import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { useSelector, useDispatch } from "react-redux";
import { closeLoginModal, openLoginModal } from "@store/reducers/loginModal.js";
import { Input } from "@heroui/react";
import { FaUserCircle } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { openSocialMediaSignupModal } from "@store/reducers/signupModal.js";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidationSchema } from "@schemas/loginValidation";

const Login = ({ redirect = false }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const isModalOpen = useSelector(({ login }) => login.isOpen);

  const dispatch = useDispatch();
  const store = useSelector((app) => app);
  console.log("APP : ", store);

  const handleModalClose = () => {
    console.log("login123");
    if (!redirect) {
      dispatch(closeLoginModal());
      return;
    }

    dispatch(closeLoginModal());
    navigate("/host-dashboard", { replace: true }); // Navigate programmatically to the home page
  };

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
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      const confirmedValues = {
        email: values.email,
        password: values.password,
      };
      resetForm();
      handleModalClose();

      // try {
      //   // Call the doCreateUserWithEmailAndPassword function
      //   await doCreateUserWithEmailAndPassword(confirmedValues);
      //   // Handle success, such as redirecting to a login page or home page
      //   setUserCreationSuccess(true);
      //   setTimeout(() => dispatch(closeSignupModal()), 2000);
      // } catch (error) {
      //   // setErrorMessage(error.message); // Display error message
      //   console.error("Error signing up:", error.message);
      //   setUserCreationSuccess(false);
      // } finally {
      //   setSubmitting(false); // Stop submitting after completion
      //   resetForm();
      // }
    },
  });

  const handleSocialMediaModal = () => {
    dispatch(openSocialMediaSignupModal());
    dispatch(closeLoginModal());
  };

  useEffect(() => {
    if (redirect) {
      dispatch(openLoginModal());
    }
  }, [(redirect, dispatch)]);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        hideCloseButton
        size="sm"
        onClose={handleModalClose}
        aria-labelledby="modal-title"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex items-center justify-center gap-4 text-center z-50">
                <FaUserCircle className="text-2xl" />
                <h1 className="text-xl font-bold">Hop in</h1>
              </ModalHeader>

              <ModalBody>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <Input
                    label="Email"
                    type="email"
                    className="w-full"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={errors.email && touched.email ? true : false}
                    errorMessage={errors.email && touched.email && errors.email}
                  />
                  <Input
                    className="w-full"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                        onClick={() => setIsVisible((prev) => !prev)}
                      >
                        {isVisible ? (
                          <HiEyeOff className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <HiEye className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    label="Password"
                    type={isVisible ? "text" : "password"}
                  />

                  <div className="flex justify-between w-full">
                    <p className="text-right flex items-center gap-x-2 hover:underline cursor-pointer">
                      Forgot password ?
                    </p>

                    <p
                      onClick={handleSocialMediaModal}
                      className="text-right flex items-center gap-x-2 hover:underline cursor-pointer"
                    >
                      Join the Fun!
                    </p>
                  </div>

                  <Button color="primary" type="submit">
                    Jump back in !
                  </Button>
                </form>
              </ModalBody>

              <ModalFooter className="flex flex-col justify-center items-center">
                <p className="mb-4">Alternate Access</p>
                <div className="flex gap-4 mt-4">
                  <FaFacebook size={25} className="cursor-pointer" />
                  <FaXTwitter size={25} className="cursor-pointer" />
                  <FaGoogle size={25} className="cursor-pointer" />
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
