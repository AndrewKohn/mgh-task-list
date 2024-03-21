import { Link, Route, Routes, useLocation } from "react-router-dom";
import Clearview from "./pages/Clearview";
import Williston from "./pages/Williston";

function App() {
    const location = useLocation().pathname;

    return (
        <main>
            <div className="container">
                <nav>
                    <Link
                        to="/clearview"
                        className={`${location === "/clearview" ? "current-page" : "nav-link"}`}
                    >
                        Clearview
                    </Link>
                    <Link
                        to="/williston"
                        className={`${location === "/williston" ? "current-page" : "nav-link"}`}
                    >
                        Williston
                    </Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Clearview />} />
                    <Route path="/clearview" element={<Clearview />} />
                    <Route path="/williston" element={<Williston />} />
                </Routes>
            </div>
        </main>
    );
}

export default App;
