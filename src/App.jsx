import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@mantine/core/styles.css';
import "@mantine/dates";
import {SigninClient} from './pages/SignInClient/SigninClient';
import { SigninProfessional } from './pages/SignInProfessional/SigninProfessional';
import { Register } from './pages/Onboarding/Register';
import { AppointmentCard } from './pages/Appointment/AppointmentCard';
import { Profile } from './pages/Profile/Profile';
import { SignUp } from './pages/SignUp/SignUp';

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
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </MantineProvider>
    </>
  )
}

export default App
