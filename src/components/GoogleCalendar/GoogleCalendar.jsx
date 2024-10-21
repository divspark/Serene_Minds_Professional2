import Calendar from "@ericz1803/react-google-calendar";
export default function GoogleCalendar() {
  let calendars = [
    { calendarId: "YOUR_CALENDAR_ID" },
    {
      calendarId: "YOUR_CALENDAR_ID_2",
      color: "#B241D1", //optional, specify color of calendar 2 events
    },
  ];
  return <Calendar apiKey="" calendars={calendars} />;
}
