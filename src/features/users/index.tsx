import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { useNavigate } from 'react-router-dom';
import { deleteUser, updateUser, type User } from "./usersSlice";
import UserList from "./components/UserList";
import Button from "../UI/Button";

export default function UsersPage() {
  const users = useAppSelector((s) => s.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Выход из системы. Текущие пользователи:", users);
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const handleDeleteUser = (email: string) => {
    dispatch(deleteUser(email));
  };

  const handleUpdateUser = (email: string, updates: Partial<User>) => {
    dispatch(updateUser({ email, updates }));
  };

  console.log("Текущий список пользователей:", users);

  return (
    <div className="min-h-screen pt-16 py-6 px-4 sm:px-4 sm:pt-32">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4 sm:gap-0">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-semibold text-gray-800">Пользователи</h1>
            <p className="text-gray-500 mt-1">Управление зарегистрированными пользователями</p>
          </div>
          <Button 
            text="Выйти" 
            color="red" 
            onClick={handleLogout} 
            type="button"
            className="w-full sm:w-52"
          />
        </div>

        <UserList 
          users={users} 
          onDeleteUser={handleDeleteUser}
          onUpdateUser={handleUpdateUser}
        />
      </div>
    </div>
  );
}