import { useState } from 'react';
import { useForm } from "react-hook-form";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { LoginForm } from './components/LoginForm/LoginForm.jsx';
import PasswordForm from './components/PasswordForm/PasswordForm.jsx';

function App() {
  const [userData, setUserData] = useState(null); 
  const [showLoginForm, setShowLoginForm] = useState(true); 

  const handleLoginSubmit = (data) => {
    setUserData(data);   
    setShowLoginForm(false); 
  };

  return (
    <div>
      <div className='container-fluid header'>
        <Header />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }} className='container'>
        {showLoginForm ? (
          <div className="col-md-3">
            <LoginForm onSubmit={handleLoginSubmit} />
            <div className='text-with-line mt-2 mb-3'>
              <div className='background-line'></div>
            </div>
            <p className='agree-rules'>
              Входячи в акаунт або створюючи новий, ви погоджуєтеся з нашими Правилами та умовами та Політикою конфіденційності
            </p>
          </div>
        ) : (
          <PasswordForm userData={userData} setUserData={setUserData} />  
        )}
      </div>
    </div>
  );
}

export default App;
