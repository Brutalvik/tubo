import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "@store/loginModal.js";
import { Input } from "@nextui-org/react";
import { FaUserCircle } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isModalOpen = useSelector(({ loginModal }) => loginModal.isOpen);

  const dispatch = useDispatch();

  const handleModalClose = () => dispatch(closeModal());

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
                <a
                  href="#"
                  className="flex items-center gap-x-2 hover:underline"
                >
                  <p>Memory Lag ?</p>
                </a>
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
