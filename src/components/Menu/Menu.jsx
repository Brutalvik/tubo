import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "@store/modal.js";

//icons
import { CiLogin, CiUser } from "react-icons/ci";
import { RiCarLine } from "react-icons/ri";
import {
  MdOutlineExplore,
  MdHelpOutline,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { LiaHandPointRightSolid } from "react-icons/lia";

const Menu = () => {
  const isModalOpen = useSelector(({ modal }) => modal.isModalOpen);
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
                <ul className="divide-y divide-gray-300">
                  <li className="py-3">
                    <a
                      href="/login"
                      className="flex items-center gap-x-2 hover:underline"
                    >
                      <CiLogin size="20px" /> Login
                    </a>
                  </li>
                  <li className="py-3 border-b border-gray-300">
                    <a
                      href="/signup"
                      className="flex items-center gap-x-2 hover:underline"
                    >
                      <CiUser size="20px" /> Signup
                    </a>
                  </li>
                  <li className="py-3 border-b border-gray-300">
                    <a
                      href="/be-a-host"
                      className="flex items-center gap-x-2 hover:underline"
                    >
                      <RiCarLine size="20px" /> Be a Host
                    </a>
                  </li>
                  <li className="py-3">
                    <a
                      href="/discover"
                      className="flex items-center gap-x-2 hover:underline"
                    >
                      <MdOutlineExplore size="20px" /> Discover Tubo
                    </a>
                  </li>
                  <li className="py-3">
                    <a
                      href="/help"
                      className="flex items-center gap-x-2 hover:underline"
                    >
                      <MdHelpOutline size="20px" /> Get Help
                    </a>
                  </li>
                  <li className="py-3">
                    <a
                      href="/rights"
                      className="flex items-center gap-x-2 hover:underline"
                    >
                      <LiaHandPointRightSolid size="20px" /> Your Rights
                    </a>
                  </li>
                  <li className="py-3">
                    <a
                      href="/safety-insurance"
                      className="flex items-center gap-x-2 hover:underline"
                    >
                      <MdOutlineHealthAndSafety size="20px" /> Safety &
                      Insurance
                    </a>
                  </li>
                </ul>
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

export default Menu;
