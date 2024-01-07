import logo from './logo.svg';
import './App.css';
import Layout from './layout/layout';
import {Route, Routes} from 'react-router-dom';
import {Tasks} from './components/tasks/tasks';
import {Calendar} from './components/calendar/calendar';
import {Analysis} from './components/analysis/analysis';
import {Settings} from './components/settings/settings';
import {Login} from './components/login/login';
import Home from './Home';
import List from './components/list'


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Logout" element={<Login/>}/>

            </Routes>

            {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
        </div>
    );
}

export default App;
