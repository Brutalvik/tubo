import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "@store/modal.js";
import { openLoginModal } from "@store/loginModal.js";
import { openSocialMediaSignupModal } from "@store/signupModal.js";
import { Link } from "react-router-dom";

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
  const isModalOpen = useSelector(({ modal }) => modal.isOpen);
  const dispatch = useDispatch();

  const handleModalClose = () => dispatch(closeModal());

  const handleLoginModal = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    dispatch(openLoginModal());
    dispatch(closeModal());
  };

  const handleSignupAlternateModal = (e) => {
    e.preventDefault();
    dispatch(openSocialMediaSignupModal());
    dispatch(closeModal());
  };

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
                    <p
                      className="text-right flex items-center gap-x-2 hover:underline cursor-pointer"
                      onClick={handleLoginModal}
                    >
                      <CiLogin size="20px" /> Login
                    </p>
                  </li>
                  <li className="py-3 border-b border-gray-300">
                    <p
                      className="text-right flex items-center gap-x-2 hover:underline cursor-pointer"
                      onClick={handleSignupAlternateModal}
                    >
                      <CiUser size="20px" /> Signup
                    </p>
                  </li>
                  <li className="py-3 border-b border-gray-300">
                    <Link
                      to="/be-a-host"
                      className="flex items-center gap-x-2 hover:underline"
                    >
                      <RiCarLine size="20px" /> Be a Host
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link
                      to="/discover"
                      className="flex items-center gap-x-2 hover:underline"
                    >
                      <MdOutlineExplore size="20px" /> Discover Tubo
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link
                      to="/help"
                      className="flex items-center gap-x-2 hover:underline"
                    >
                      <MdHelpOutline size="20px" /> Get Help
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link
                      to="/rights"
                      className="flex items-center gap-x-2 hover:underline"
                    >
                      <LiaHandPointRightSolid size="20px" /> Your Rights
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link
                      to="/safety-insurance"
                      className="flex items-center gap-x-2 hover:underline"
                    >
                      <MdOutlineHealthAndSafety size="20px" /> Safety &
                      Insurance
                    </Link>
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
