import { Calendar } from "@mantine/dates";
import { useState } from "react";
import dayjs from "dayjs";

function CalendarPicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected date:", dayjs(date).format("YYYY-MM-DD")); // Using dayjs to format the date
  };

  return (
    <>
      <Calendar value={selectedDate} onChange={handleDateChange} />;
    </>
  );
}

export default CalendarPicker;
