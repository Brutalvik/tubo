import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { closeSignupModal } from "@store/signupModal.js";
import { Input } from "@nextui-org/react";
import { FaUserCircle } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { openLoginModal } from "@store/loginModal.js";

const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isModalOpen = useSelector(({ signup }) => signup.isSignupModalOpen);

  const dispatch = useDispatch();

  const handleModalClose = () => dispatch(closeSignupModal());

  const handleLoginModal = () => {
    dispatch(openLoginModal());
    dispatch(closeSignupModal());
  };

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
                <Input label="First Name" type="text" className="w-[250px]" />
                <Input label="First Name" type="text" className="w-[250px]" />
                <Input label="Email" type="email" className="w-[250px]" />
                <Input
                  className="w-[250px]"
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
                  <p
                    onClick={handleLoginModal}
                    className="text-right flex items-center gap-x-2 hover:underline cursor-pointer"
                  >
                    Already a Tubo member ?
                  </p>
                </div>

                <Button color="primary" onPress={handleModalClose}>
                  Register
                </Button>
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
