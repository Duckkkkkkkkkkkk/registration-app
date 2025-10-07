import { type User } from "../usersSlice";
import { useState } from "react";
import EditUserModal from "./EditUserModal";
import Button from "../../UI/Button";

interface UserListProps {
  users: User[];
  onDeleteUser: (email: string) => void;
  onUpdateUser: (email: string, updates: Partial<User>) => void;
}

export function UserList({ users, onDeleteUser, onUpdateUser }: UserListProps) {
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [editForm, setEditForm] = useState({ name: "", email: "" });

  const handleEditClick = (user: User) => {
    setEditingUser(user);
    setEditForm({ name: user.name, email: user.email });
  };

  const handleSaveEdit = (email: string, updates: Partial<User>) => {
    onUpdateUser(email, updates);
    setEditingUser(null);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  if (users.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8 text-center border">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">Пользователей нет</h3>
        <p className="text-gray-500">Зарегистрированные пользователи появятся здесь</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <div className="px-6 py-4 border-b bg-gray-50">
          <h2 className="text-[24px] leading-[28px] font-semibold text-gray-800">
            Список пользователей
          </h2>
        </div>
        <div className="divide-y">
          {users.map((user) => (
            <div
              key={user.email}
              className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-800 text-lg truncate">{user.name}</h3>
                  <p className="text-gray-500 text-base truncate">{user.email}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                <Button
                  text="Редактировать"
                  color="blue"
                  onClick={() => handleEditClick(user)}
                  type="button"
                  className="w-full sm:w-36"
                />
                <Button
                  text="Удалить"
                  color="red"
                  onClick={() => onDeleteUser(user.email)}
                  type="button"
                  className="w-full sm:w-28"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 border-t bg-gray-50">
          <p className="text-sm text-gray-500">
            Показано {users.length} пользовател{users.length === 1 ? 'ь' : users.length > 1 && users.length < 5 ? 'я' : 'ей'}
          </p>
        </div>
      </div>

      <EditUserModal
        user={editingUser}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
        existingUsers={users}
      />
    </>
  );
}

export default UserList;