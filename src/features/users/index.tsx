import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { deleteUser } from "./usersSlice";

export default function UsersPage() {
  const users = useAppSelector((s) => s.users);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold mb-4">Список пользователей</h2>
      <ul className="bg-white rounded-xl shadow p-4 w-96">
        {users.map((u) => (
          <li key={u.email} className="flex justify-between border-b py-2">
            <span>{u.name} ({u.email})</span>
            <button
              onClick={() => dispatch(deleteUser(u.email))}
              className="text-red-600 hover:text-red-800"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}