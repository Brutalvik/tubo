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

const Login = () => {
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
        className="fixed right-0 top-0 mt-16 mr-4" // Added custom classes to align modal
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <h1>LOGIN</h1>
              </ModalBody>

              <ModalFooter>
                <Button color="primary" onPress={handleModalClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
