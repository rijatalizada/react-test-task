import { Checkbox } from "@mui/material";
import React from "react";
import { User } from "../Types";
import {BsThreeDots} from 'react-icons/bs'

const UserItem = ({ user }: { user: User }) => {
  return (
    <tr className="grid grid-cols-[36%,15%,15%,15%,15%,4%] border-solid border-2 mt-1  p-1 pl-0 border-[#F6F6F6] rounded-md">
      <th className="text-left font-semibold pl-4 flex items-center gap-1">
        <div className="bg-black rounded-[50%] h-5 w-5 "></div>
        {user.name}
      </th>
      <th className="flex justify-center">
        <Checkbox
          sx={{
            color: "#D3D3D3",
          }}
        />
      </th>
      <th className="flex justify-center">
        <Checkbox
          sx={{
            color: "#D3D3D3",
          }}
        />
      </th>
      <th className="flex justify-center">
        <Checkbox
          sx={{
            color: "#D3D3D3",
          }}
        />
      </th>
      <th className="flex justify-center">
        <Checkbox
          sx={{
            color: "#D3D3D3",
          }}
        />
      </th>
      <th className="flex justify-center items-center">
        <BsThreeDots className="text-[#D3D3D3] cursor-pointer text-xl"/>
      </th>
    </tr>
  );
};

export default UserItem;
