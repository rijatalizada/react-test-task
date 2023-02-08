import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import TableHeader from "./components/TableHeader";
import UserCotnainer from "./components/UserCotnainer";
import { useSelector } from "react-redux";
import { StoreType } from "./redux/store";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const { users } = useSelector((state: StoreType) => state.user);
  console.log(users);

  return (
    <div className="container mx-auto mt-10">
      <div className="heading grid grid-cols-[60%,40%]">
        <p className="text-2xl">Users</p>
        <div className="relative w-full">
          <button className="absolute top-0 left-3 bottom-0 flex items-center">
            <FaSearch className="text-gray-400" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 p-2 focus:outline-none w-full bg-gray-100 rounded-[20px]"
          />
        </div>
      </div>
      <table className="w-full mt-10">
        <TableHeader />
        <UserCotnainer users={users} />
      </table>
    </div>
  );
}

export default App;
