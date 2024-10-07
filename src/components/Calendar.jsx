import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

export function Calendar() {
  const [value, setValue] = useState<Date | null>(null);
  return <DatePicker allowDeselect value={value} onChange={setValue} />;
}