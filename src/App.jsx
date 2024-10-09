import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@mantine/core/styles.css';
import "@mantine/dates";
import {SigninClient} from './pages/SigninClient';
import { SigninProfessional } from './pages/SigninProfessional';
import { Register } from './pages/Register';

function App() {

  return (
    <>
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signinclient" element={<SigninClient />} />
          <Route path="/signinprofessional" element={<SigninProfessional />} />
          {/* <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/bookappointment" element={<BookAppointment/>}/>
          <Route path="/thankYou" element={<ThankYou/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/> */}
        </Routes>
      </Router>
    </MantineProvider>
    </>
  )
}

export default App
