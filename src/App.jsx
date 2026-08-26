import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

import BirthdayMusic from "./components/BirthdayMusic";
import BirthdayBanner from "./components/BirthdayBanner";
import DancingTeddy from "./components/DancingTeddy";
import BirthdayAgeBackground from "./components/BirthdayAgeBackground";

function App() {
  return (
    <BrowserRouter>
      {/* 🎵 MUSIC */}
      <BirthdayMusic />

      {/* 🎉 21ST BIRTHDAY BACKGROUND */}
      <BirthdayAgeBackground />

      {/* 🎂 HAPPY BIRTHDAY BANNER */}
      <BirthdayBanner />

      {/* 🧸 ONE DANCING TEDDY */}
      <DancingTeddy />

      {/* PAGES */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
