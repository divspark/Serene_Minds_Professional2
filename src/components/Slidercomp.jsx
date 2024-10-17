import { useState } from 'react';
import { Group, Button } from '@mantine/core';
import { 
  IconCategory, 
  IconCalendar, 
  IconUserCheck, 
  IconCalendarEvent, 
  IconCreditCard, 
  IconNotebook, 
  IconUserCircle, 
  IconSettings, 
  IconSwitchHorizontal 
} from '@tabler/icons-react'; // Importing Tabler icons
import classes from '../../styles/NavbarSimple.module.css';
import Logo from "../assets/Logo-black.png";

// Top navigation links
const topData = [
  { link: '', label: 'Home', icon: IconCategory },
  { link: '/appointments', label: 'Appointments', icon: IconCalendar },
];

// Main navigation links
const mainData = [
  { link: '/clients', label: 'My clients', icon: IconUserCheck },
  { link: '/calender', label: 'Calendar', icon: IconCalendarEvent },
  { link: '/payment', label: 'Payments', icon: IconCreditCard },
  { link: '/journal', label: 'Journals', icon: IconNotebook },
  { link: '/profile', label: 'Profile', icon: IconUserCircle },
  { link: '/settings', label: 'Settings', icon: IconSettings },
];

export function Slidercomp() {
  const [active, setActive] = useState('Billing');
  const [appointmentsCount, setAppointmentsCount] = useState(0);

  const handleLinkClick = (label) => {
    setActive(label);
    if (label === 'Appointments') {
      setAppointmentsCount((prev) => prev + 1);
    }
  };

  const renderLink = (item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={() => handleLinkClick(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  );

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {/* Header with Logo and "Add New" Button */}
        <Group className={classes.header} justify="center" align="center">
          <img src={Logo} className="w-24" alt="Logo" />
          <Button
            className="bg-[#3788E5] rounded-lg text-white font-medium px-14 mt-2 py-2"
            onClick={(e) => e.preventDefault()} // Add your add-new logic here
          >
            Add New
          </Button>
        </Group>

        {/* Top Links: Home and Appointments */}
        <div className={classes.linksSection}>
          {topData.map((item) => (
            <a
              className={classes.link}
              data-active={item.label === active || undefined}
              href={item.link}
              key={item.label}
              onClick={() => handleLinkClick(item.label)}
            >
              <item.icon className={classes.linkIcon} stroke={1.5} />
              <span>
                {item.label}
                {item.label === 'Appointments' && (
                  <span className="ml-9 bg-red-500 px-2 py-1 rounded-md text-white">
                    {appointmentsCount}
                  </span>
                )}
              </span>
            </a>
          ))}
        </div>

        {/* Horizontal Separator */}
        <hr className="my-6 text-slate-700 mx-3 font-extrabold" />

        {/* Main Links */}
        <div className={classes.linksSection}>{mainData.map(renderLink)}</div>
      </div>

      {/* Footer Links: Log Out */}
      <div className={classes.footer}>
        <a
          href="#"
          className="flex items-center mx-3 text-red-500 "
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} color='red' stroke={1.5} />
          <span className='text-base font-medium'>Log Out</span>
        </a>
      </div>
    </nav>
  );
}
