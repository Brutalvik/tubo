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
    <>
      <Input
        label="From"
        labelPlacement="inside"
        type="datetime-local"
        value={moment(startDate).format("YYYY-MM-DDTHH:mm")}
        onChange={handleStartDateChange}
        className="rounded-lg cursor-pointer"
      />
      <Input
        label="To"
        labelPlacement="inside"
        type="datetime-local"
        value={moment(endDate).format("YYYY-MM-DDTHH:mm")}
        onChange={handleEndDateChange}
        className="rounded-lg"
      />
    </>
  );
};

export default DateRangePickerWithTime;
