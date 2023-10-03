import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    BrowserRouter,
    Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClickToComponent } from 'click-to-react-component'

function App() {
    return (
        <div className='bg-black'>
            <ClickToComponent />
            <Header />

            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Router>

            <ToastContainer />
        </div>
    );
}

export default App;
