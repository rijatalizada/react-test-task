import React from "react";
import { User } from "../Types";
import UserItem from "./UserItem";


const UsersCotnainer = ({users}: {users: User[]}) => {

  return <tbody className="!h-[30rem] px-4 overflow-y-scroll block">
    {users.map((user) => {
      return <UserItem user={user} key={user.id} />
    })}
  </tbody>;
};

export default UsersCotnainer;
