import { useState } from "react";
import { Button, NavLink, Stack, Box, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
  IconCategory,
  IconCalendar,
  IconUserCheck,
  IconCalendarEvent,
  IconCreditCard,
  IconNotebook,
  IconUserCircle,
  IconSettings,
  IconSwitchHorizontal,
} from "@tabler/icons-react"; // Importing Tabler icons
import classes from "../../styles/NavbarSimple.module.css";
import Logo from "../assets/Logo-black.png";

// Main navigation links
const mainData = [
  { link: "/", label: "Home", icon: IconCategory },
  { link: "/appointments", label: "Appointments", icon: IconCalendar },
  { link: "/clients", label: "My clients", icon: IconUserCheck },
  { link: "/calender", label: "Calendar", icon: IconCalendarEvent },
  { link: "/payment", label: "Payments", icon: IconCreditCard },
  { link: "/journal", label: "Journals", icon: IconNotebook },
  { link: "/profile", label: "Profile", icon: IconUserCircle },
  { link: "/settings", label: "Settings", icon: IconSettings },
];

export function Slidercomp() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const handleBtnClick = () => {
    navigate("/clients/new");
  };

  return (
    <Box component="nav" px={10}>
      {/* Header with Logo and "Add New" Button */}
      <Stack gap={23} align="center" mt={19} mb={25}>
        <Image w={130} src={Logo} alt="Logo" />
        <Button
          className="primary"
          size="md"
          w="70%"
          radius="md"
          fz="md"
          fw="bold"
          onClick={handleBtnClick} // Add your add-new logic here
        >
          Add New
        </Button>
      </Stack>

      {/* Main Links */}
      <Stack gap={10}>
        {mainData.map((item, index) => (
          <NavLink
            key={item.link} 
            className={classes.link}
            label={item.label}
            active={active === index}
            onClick={() => {
              setActive(index);
              navigate(item.link);
            }}
            leftSection={<item.icon className={classes.linkIcon} stroke={1.2} />}
          />
        ))}
      </Stack>

      {/* Footer Links: Log Out */}
      <div className={classes.footer}>
        <a
          href="#"
          className="flex items-center mx-3 text-red-500 "
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal
            className={classes.linkIcon}
            color="red"
            stroke={1.5}
          />
          <span className="text-base font-medium">Log Out</span>
        </a>
      </div>
    </Box>
  );
}
