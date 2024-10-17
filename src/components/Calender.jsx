import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function Demo() {
  const [selected, setSelected] = useState([]);

  const handleSelect = (date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));

    if (isSelected) {
      setSelected((current) =>
        current.filter((d) => !dayjs(d).isSame(date, 'date'))
      );
    } else {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <Calendar
      multiple  // Enable multiple date selection
      value={selected}  // Bind the selected state to the calendar value
      onChange={(dates) => setSelected(dates)}  // Update state on change
      getDayProps={(date) => ({
        onClick: () => handleSelect(date),
        selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
      })}
    />
  );
}

export default Demo;
