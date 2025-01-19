import React from "react";
import { Input } from "@heroui/react";
import moment from "moment";

const DateRangePickerWithTime = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const handleStartDateChange = (e) => {
    onStartDateChange(moment(e.target.value).toDate());
  };

  const handleEndDateChange = (e) => {
    onEndDateChange(moment(e.target.value).toDate());
  };

  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 w-full items-center">
      <Input
        label="From"
        labelPlacement="inside"
        type="datetime-local"
        value={moment(startDate).format("YYYY-MM-DDTHH:mm")}
        onChange={handleStartDateChange}
        className="rounded-lg w-full sm:w-auto text-lg sm:text-base mb-2" // Adjust input width here
      />
      <Input
        label="To"
        labelPlacement="inside"
        type="datetime-local"
        value={moment(endDate).format("YYYY-MM-DDTHH:mm")}
        onChange={handleEndDateChange}
        className="rounded-lg w-full sm:w-auto text-lg sm:text-base mt-2 sm:mt-0" // Adjust input width here
      />
    </div>
  );
};

export default DateRangePickerWithTime;
