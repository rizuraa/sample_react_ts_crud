import "./App.css";
import React from "react";
import UserData from "./components/shared/UserData";
import FormInput from "./components/shared/FormInput";
import { useCreateUser } from "./services/queries";
import { IUser } from "./Interfaces/IUser";

const App: React.FC = () => {
  const createUserMutation = useCreateUser();

  const handleFormSubmit = (data: Omit<IUser, "id">) => {
    createUserMutation.mutate(data);
  };
  return (
    <>
      <section className="bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col gap-8">
            <FormInput onSubmit={handleFormSubmit} />
          </div>
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Data</h1>
            <UserData />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
