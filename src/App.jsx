import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@mantine/core/styles.css';
import "@mantine/dates";
import {SigninClient} from './pages/SigninClient';
import { SigninProfessional } from './pages/SigninProfessional';
import { Register } from './pages/Register';
import { AppointmentCard } from './components/AppointmentCard';
import { Modalcomp } from './components/Modalcomp';

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
          <Route path="/pop" element={<Modalcomp/>}/>
          {/* <Route path="/thankYou" element={<ThankYou/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/> */}
        </Routes>
      </Router>
    </MantineProvider>
    </>
  )
}

export default App
