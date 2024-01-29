import './App.css';
import Layout from './layout/layout';
import {Route, Routes} from 'react-router-dom';
import {Login} from './components/login/login';
import Home from './Home';
import User from './components/user/user';
import ConfirmationDialog from './utils/confirmation-dialog';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Logout" element={<Login/>}/>
                <Route path="/user" element={<User/>}/>
                
            </Routes>
            <ConfirmationDialog/>

            {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/category" element={<Category />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
        </div>
    );
}

export default App;
