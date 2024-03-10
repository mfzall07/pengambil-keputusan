import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Alternatif, BobotKriteria, Dashboard, Kriteria, Login, NiilaiAlternatif, Perangkingan, Template } from "./pages";

function App() {
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
            <Routes>
                {/* Auth */}
                <Route name='Login' path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Template/>}>
                    <Route index element={<Dashboard/>}/>
                </Route>
                <Route path="/kriteria" element={<Template/>}>
                    <Route index element={<Kriteria/>}/>
                </Route>
                <Route path="/alternatif" element={<Template/>}>
                    <Route index element={<Alternatif/>}/>
                </Route>
                <Route path="/bobot-kriteria" element={<Template/>}>
                    <Route index element={<BobotKriteria/>}/>
                </Route>
                <Route path="/nilai-alternatif" element={<Template/>}>
                    <Route index element={<NiilaiAlternatif/>}/>
                </Route>
                <Route path="/perangkingan" element={<Template/>}>
                    <Route index element={<Perangkingan/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App