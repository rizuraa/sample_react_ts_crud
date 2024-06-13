import "./App.css";
import React, { useState, useEffect } from "react";
import UserData from "./components/shared/UserData";
import FormInput from "./components/shared/FormInput";
import { useCreateUser, useUpdateUser } from "./services/queries";
import { IUser } from "./Interfaces/IUser";

const App: React.FC = () => {
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();
  const [editingUser, setEditingUser] = useState<Partial<IUser> | null>(null);

  useEffect(() => {
    if (updateUserMutation.isSuccess) {
      setEditingUser(null);
    }
  }, [updateUserMutation.isSuccess]);

  const handleFormSubmit = (data: Omit<IUser, "id">) => {
    if (editingUser && editingUser.id) {
      updateUserMutation.mutate({ id: editingUser.id, user: data });
    } else {
      createUserMutation.mutate(data);
    }
  };

  const handleEditUser = (user: IUser) => {
    setEditingUser(user);
  };

  return (
    <>
      <section className="bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col gap-8">
            <FormInput
              onSubmit={handleFormSubmit}
              defaultValues={editingUser || undefined}
              isUpdate={!!editingUser}
              resetForm={() => setEditingUser(null)}
            />
          </div>
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Data</h1>
            <UserData onEditUser={handleEditUser} />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
