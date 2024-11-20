import { DatePicker } from "@mantine/dates";
import { Checkbox } from "@mantine/core";
import { useState } from "react";
import { Chip } from "@mantine/core";
import React from "react";

export const ClientAppointmentBooking = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="flex p-4">
        <p className="text-3xl font-semibold">Appointment</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 p-4 ml-9">
          <p className="text-2xl font-semibold mb-3">Calendar</p>
          <DatePicker size="xl" withCellSpacing={true} />
          <div className="mt-4 p-2 ml-4">
            <Checkbox defaultChecked label="Let the client make appointment" />
          </div>
        </div>
        <div className="col-span-1 p-4 ml-9">
          <p className="text-2xl font-semibold mb-3">Availabilty</p>
          <div>
            <Chip.Group>
              <Group justify="center">
                <Chip value="1">Single chip</Chip>
                <Chip value="2">Can be selected</Chip>
                <Chip value="3">At a time</Chip>
              </Group>
            </Chip.Group>
          </div>
        </div>
      </div>
    </>
  );
};
