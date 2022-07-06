import './App.css';
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import { TextForm } from './components/TextForm';
import About from './components/About'
import { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)

    function showAlert(head, msg) {
        setAlert({
            head: head,
            msg: msg,
        })
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }

    return (<>
        <Router>
            <Navbar title="TextUtils" mode={mode} setMode={setMode} showAlert={showAlert} />
            <Routes>
                <Route path='/' element={
                    <>
                        <Alert alert={alert} />
                        <TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert} />
                    </>
                } />
                <Route path='about' element={
                    <About mode={mode} />
                } />
            </Routes>
        </Router>

    </>);
}

export default App;
