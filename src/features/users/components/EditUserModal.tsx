import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { type User } from "../usersSlice";
import { useState, useEffect } from "react";

interface EditUserModalProps {
  user: User | null;
  onSave: (email: string, updates: Partial<User>) => void;
  onCancel: () => void;
  existingUsers: User[];
}

interface ValidationErrors {
  name?: string;
  email?: string;
}

export default function EditUserModal({ user, onSave, onCancel, existingUsers }: EditUserModalProps) {
  const [editForm, setEditForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<ValidationErrors>({});

  useEffect(() => {
    if (user) {
      setEditForm({ name: user.name, email: user.email });
      setErrors({});
    }
  }, [user]);

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!editForm.name.trim()) {
      newErrors.name = "Имя обязательно для заполнения";
    } else if (editForm.name.trim().length < 2) {
      newErrors.name = "Имя должно содержать минимум 2 символа";
    }

    if (!editForm.email.trim()) {
      newErrors.email = "Email обязателен для заполнения";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editForm.email)) {
      newErrors.email = "Введите корректный email адрес";
    } else if (user && existingUsers.some(u => u.email === editForm.email && u.email !== user.email)) {
      newErrors.email = "Пользователь с таким email уже существует";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (user && validateForm()) {
      onSave(user.email, {
        name: editForm.name.trim(),
        email: editForm.email.trim(),
      });
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  const handleFieldChange = (field: keyof typeof editForm, value: string) => {
    setEditForm(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  if (!user) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div
        onKeyPress={handleKeyPress}
        className="bg-white rounded-2xl p-6 w-full max-w-md relative"
      >
        <button
          onClick={onCancel}
          className="absolute top-3 right-3 text-gray-800 hover:text-gray-600 text-2xl font-semibold"
          aria-label="Закрыть"
        >
          &times;
        </button>
        <h3 className="text-xl font-semibold mb-4">Редактировать пользователя</h3>
        
        <div className="space-y-4">
          <Input
            label="Имя"
            type="text"
            placeholder="Введи имя"
            value={editForm.name}
            onChange={(value) => handleFieldChange('name', value)}
            error={errors.name}
          />
          <Input
            label="Корпоративный e-mail"
            type="email"
            placeholder="Введи e-mail"
            value={editForm.email}
            onChange={(value) => handleFieldChange('email', value)}
            error={errors.email}
          />
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <Button 
            text="Отмена" 
            color="gray" 
            onClick={onCancel}
            type="button"
            className="w-1/2"
          />
          <Button 
            text="Сохранить" 
            color="blue" 
            onClick={handleSave}
            type="button"
            className="w-1/2"
          />
        </div>
      </div>
    </div>
  );
}