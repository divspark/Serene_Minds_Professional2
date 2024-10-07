import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@mantine/core/styles.css';
import "@mantine/dates";

function App() {

  return (
    <>
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CenterText />} />
          <Route path="/test" element={<Quiz />} />
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
