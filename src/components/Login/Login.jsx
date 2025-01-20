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
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { openSocialMediaSignupModal } from "@store/reducers/signupModal.js";
import { useNavigate } from "react-router-dom";

const Login = ({ redirect = false }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const isModalOpen = useSelector(({ login }) => login.isOpen);

  const dispatch = useDispatch();

  const handleModalClose = () => {
    if (redirect) {
      dispatch(closeLoginModal());
      navigate("/", { replace: true }); // Navigate programmatically to the home page
    } else {
      dispatch(closeLoginModal());
    }
  };

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
        size="sm"
        onClose={handleModalClose}
        aria-labelledby="modal-title"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex items-center justify-center gap-4 text-center">
                <FaUserCircle className="text-2xl" />
                <h1 className="text-xl font-bold">Hop in</h1>
              </ModalHeader>

              <ModalBody>
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

                <Button color="primary" onPress={handleModalClose}>
                  Jump back in !
                </Button>
              </ModalBody>

              <ModalFooter className="flex flex-col justify-center items-center">
                <p className="mb-4">Alternate Access</p>
                <div className="flex gap-4 mt-4">
                  <FaFacebook size={25} className="cursor-pointer" />
                  <FaInstagram size={25} className="cursor-pointer" />
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
