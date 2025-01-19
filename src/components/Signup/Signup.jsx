import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { useSelector, useDispatch } from "react-redux";
import { closeSignupModal } from "@store/signupModal";
import { Input } from "@heroui/react";
import { FaUserCircle } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { openLoginModal } from "@store/loginModal";
import { useFormik } from "formik";
import { doCreateUserWithEmailAndPassword } from "@firebase/auth";

const Signup = () => {
  const [submitting, setSubmitting] = useState(false);
  //form data
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setSubmitting(true);
      console.log("Submitted values:", values);
      const user = await doSignInWithEmailAndPassword();
      console.log("user : ", user);
      setSubmitting(false);
      formik.resetForm();
    },
  });

  const [isVisible, setIsVisible] = useState(false);
  const isModalOpen = useSelector(({ signup }) => signup.isSignupModalOpen);

  const dispatch = useDispatch();

  const handleModalClose = () => dispatch(closeSignupModal());

  const handleLoginModal = () => {
    dispatch(openLoginModal());
    dispatch(closeSignupModal());
  };

  const { values } = formik;

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        size="sm"
        onClose={handleModalClose}
        aria-labelledby="modal-title"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex items-center justify-center gap-4 text-center">
                <FaUserCircle className="text-2xl" />
                <h1 className="text-xl font-bold">
                  Sign up (Start your Engines !)
                </h1>
              </ModalHeader>

              <ModalBody>
                <form
                  autoComplete="off"
                  className="flex flex-col gap-4 pb-4"
                  onSubmit={formik.handleSubmit}
                >
                  <Input
                    name="firstName"
                    label="First Name"
                    type="text"
                    className="w-full"
                    value={values.firstName}
                    onChange={formik.handleChange}
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    type="text"
                    className="w-full"
                    value={values.lastName}
                    onChange={formik.handleChange}
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    className="w-full"
                    value={values.email}
                    onChange={formik.handleChange}
                  />
                  <Input
                    label="Password"
                    name="password"
                    type={isVisible ? "text" : "password"}
                    value={values.password}
                    onChange={formik.handleChange}
                    className="w-full"
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
                    onPress={handleModalClose}
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
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
