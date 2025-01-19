import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  closeSocialMediaSignupModal,
  openSignupModal,
} from "@store/signupModal.js";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { openLoginModal } from "@store/loginModal.js";
import { MdOutlineMailOutline } from "react-icons/md";

import logo from "@assets/tubo_white.png";

const SignupAlternate = () => {
  const isModalOpen = useSelector(
    ({ signup }) => signup.isSocialMediaModalOpen
  );

  const dispatch = useDispatch();

  const handleModalClose = () => dispatch(closeSocialMediaSignupModal());
  const handleLoginModal = () => {
    dispatch(openLoginModal());
    dispatch(closeSocialMediaSignupModal());
  };

  const handleSignupModal = () => {
    dispatch(openSignupModal());
    dispatch(closeSocialMediaSignupModal());
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
              <ModalHeader className="flex flex-col items-center justify-center gap-2 text-center">
                <img src={logo} alt="Tubo" className="h-10 w-25" />
                <h1 className="text-xl font-bold flex items-center">
                  Strap in, You’re in Tubo!
                </h1>
                <p className="font-extralight">
                  Join with any of the platforms below.
                </p>
              </ModalHeader>

              <ModalBody>
                <Button>
                  Go with Google <FaGoogle className="ml-2" size={20} />
                </Button>
                <Button>
                  Dive in with Facebook{" "}
                  <FaFacebook className="ml-2" size={20} />
                </Button>
                <Button>
                  Snap In with Instagram{" "}
                  <FaInstagram className="ml-2" size={20} />
                </Button>
                <Button>
                  Connect with <FaXTwitter className="ml-2" size={20} />
                </Button>
                <Button onPress={handleSignupModal}>
                  Join with Email
                  <MdOutlineMailOutline className="ml-2" size={20} />
                </Button>
              </ModalBody>

              <ModalFooter className="flex justify-center items-center gap-4">
                <p className="text-left">Back for more ?</p>
                <Button color="primary" onPress={handleLoginModal}>
                  Jump back in!
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignupAlternate;
