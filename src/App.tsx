import React from "react";
import { FaSearch } from "react-icons/fa";
import TableHeader from "./components/TableHeader";
import UsersCotnainer from "./components/UsersCotnainer";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "./redux/store";
import { searchUser } from "./features/user/userSlice";


function App() {
  const { users, usersAmount, reversed } = useSelector((state: StoreType) => state.user);
  const dispatch = useDispatch()

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    dispatch(searchUser(e.target.value.trim()))
  }

  return (
    <div className="px-16 mx-auto mt-10 pb-4">
      <div className="heading grid grid-cols-[60%,40%] px-4 ">
        <p className="text-2xl">Users <sup className="text-[#B5B5B5] text-sm mt-2">{usersAmount}</sup> </p>
        <div className="relative w-full">
          <button className="absolute top-0 left-3 bottom-0 flex items-center">
            <FaSearch className="text-gray-400" />
          </button>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) =>  onSearch(e)}
            className="pl-10 p-2 focus:outline-none w-full bg-gray-100 rounded-[20px]"
          />
        </div>
      </div>
      <table className="w-full mt-10">
        <TableHeader reversed={reversed} />
        <UsersCotnainer users={users} />
      </table>
      <div className="px-4">
        <button className="bg-black mt-5 text-white w-[12rem] opacity-[0.8] h-[3.2rem] rounded-lg text-sm ">
          Save
        </button>
      </div>
    </div>
  );
}

export default App;
