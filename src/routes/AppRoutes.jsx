import { Routes, Route, Navigate } from "react-router-dom";

import WelcomePage from "../pages/WelcomePage";
import PasswordPage from "../pages/PasswordPage";
import TeddyPage from "../pages/TeddyPage";
import CakePage from "../pages/CakePage";
import BirthdayPage from "../pages/BirthdayTemp";
import LetterPage from "../pages/LetterPage";
import FinalSurprise from "../pages/FinalSurprise";

function AppRoutes() {
  const RequireAuth = ({ children }) => {
    let unlocked = false;
    try {
      unlocked = localStorage.getItem("unlocked") === "true";
    } catch (e) {
      unlocked = false;
    }

    return unlocked ? children : <Navigate to="/" replace />;
  };

  return (
    <Routes>
      <Route path="/" element={<PasswordPage />} />

      <Route
        path="/welcome"
        element={
          <RequireAuth>
            <WelcomePage />
          </RequireAuth>
        }
      />

      <Route
        path="/teddy"
        element={
          <RequireAuth>
            <TeddyPage />
          </RequireAuth>
        }
      />

      <Route
        path="/cake"
        element={
          <RequireAuth>
            <CakePage />
          </RequireAuth>
        }
      />

      <Route
        path="/birthday"
        element={
          <RequireAuth>
            <BirthdayPage />
          </RequireAuth>
        }
      />

      <Route
        path="/letter"
        element={
          <RequireAuth>
            <LetterPage />
          </RequireAuth>
        }
      />

      <Route
        path="/final"
        element={
          <RequireAuth>
            <FinalSurprise />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
