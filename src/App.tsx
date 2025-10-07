import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UsersPage from "./features/users";
import RegistrationPage from "./features/registration";
import Header from "./features/UI/Header";
import NotFoundPage from "./features/UI/NotFoundPage";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? <>{children}</> : <Navigate to="/404" replace />;
};

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route 
            path="/users" 
            element={
              <ProtectedRoute>
                <UsersPage />
              </ProtectedRoute>
            } 
          />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </div>
  );
}