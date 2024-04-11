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
import MaintenanceModal from "./components/maintenanceModal";
import Privacy from "./components/privacy"
function App() {
    return (
        <div className='bg-gradient-to-t from-gray-900 to-slate-900'>
            {/* <MaintenanceModal /> */}
            <ClickToComponent />
            <Header />

            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/privacy" element={<Privacy />} />
                </Routes>
            </Router>

            <ToastContainer />
        </div>
    );
}

export default App;
