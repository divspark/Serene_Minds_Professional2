import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@mantine/core/styles.css';
import "@mantine/dates";
import {SigninClient} from './pages/SigninClient/SigninClient';
import { SigninProfessional } from './pages/SigninProfessional/SigninProfessional';
import { Register } from './pages/Onboarding/Register';
import { AppointmentCard } from './pages/Appointment/AppointmentCard';
import { Profile } from './pages/Profile/Profile';

function App() {

  return (
    <>
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signinclient" element={<SigninClient />} />
          <Route path="/signinprofessional" element={<SigninProfessional />} />
          <Route path="/appointment" element={<AppointmentCard />} />
          <Route path="/profile" element={<Profile/>}/>
          {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
        </Routes>
      </Router>
    </MantineProvider>
    </>
  )
}

export default App
