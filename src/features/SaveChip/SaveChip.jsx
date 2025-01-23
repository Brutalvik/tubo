import React from "react";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

const SaveChip = ({ amount, style }) => {
  return (
    <div
      className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 mb-2"
      style={style}
    >
      <LiaMoneyBillWaveSolid size={18} className="text-green-600" />
      <span className="text-sm font-medium text-gray-800">Save</span>
      <span className="text-sm font-medium text-gray-900">${amount}</span>
    </div>
  );
};

export default SaveChip;
