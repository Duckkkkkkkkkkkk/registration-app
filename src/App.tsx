import { Routes, Route } from "react-router-dom";
import UsersPage from "./features/users";
import RegistrationPage from "./features/registration";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
}