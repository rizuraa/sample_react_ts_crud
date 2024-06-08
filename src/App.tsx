import "./App.css";
import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";
import React from "react";
import UserData from "./components/shared/UserData";

const App: React.FC = () => {
  return (
    <>
      <section className="bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Input Data</h1>
            <Input placeholder="name" />
            <Input
              type="email"
              placeholder="email"
            />
            <Input placeholder="role" />
            <Input
              type="password"
              placeholder="password"
            />
            <Button type="submit">Submit</Button>
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
