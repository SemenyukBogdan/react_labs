import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage.jsx";
import AboutPage from "./AboutPage/AboutPage.jsx";

function App() {
  return (
    <>
        <Router >
            <Routes>
                <Route    path="/"   element={<HomePage  />}     />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>

    </>
  )
}

export default App
