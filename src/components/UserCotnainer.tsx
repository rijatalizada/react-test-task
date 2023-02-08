import React from "react";
import { User } from "../Types";
import UserItem from "./UserItem";


const UserCotnainer = ({users}: {users: User[]}) => {
  return <tbody className="">
    {users.map((user) => {
      return <UserItem user={user} key={user.id} />
    })}
  </tbody>;
};

export default UserCotnainer;
