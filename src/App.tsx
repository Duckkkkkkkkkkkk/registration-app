import { Routes, Route } from "react-router-dom";
import UsersPage from "./features/users";
import RegistrationPage from "./features/registration";
import Header from "./features/UI/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}