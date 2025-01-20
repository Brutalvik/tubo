import React from "react";
import { Avatar } from "@heroui/react";
import { useDispatch } from "react-redux";
import { openModal } from "@store/reducers/modal.js";

const UserAvatar = () => {
  const dispatch = useDispatch();
  const handleModalOpen = () => dispatch(openModal());

  return (
    <Avatar
      isBordered
      radius="lg"
      size="sm"
      className="mt-1"
      onClick={handleModalOpen}
    />
  );
};

export default UserAvatar;
