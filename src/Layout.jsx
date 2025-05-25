import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { QrCodeGenerator } from "./components/generate/QrCodeGenerator";
import { QRCodeScanner } from './components/scan/QRCodeScanner';
import { GenerateHistory } from "./components/generateHistory";
import { ScanHistory } from "./components/ScanHistory";

const Layout = () => {
    return (
        <div>
             <Navigation />

           <Routes>
            <Route path="/qr-code/generate" element={<QrCodeGenerator />} />
            <Route path="/qr-code/scan" element={<QRCodeScanner />} />
            <Route path="/qr-code/scanHistory" element={<ScanHistory />} />
            <Route path="/qr-code/generateHistory" element={<GenerateHistory />} />
           </Routes>

        </div>
    );
};

export { Layout };