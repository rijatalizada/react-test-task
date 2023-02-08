import React from "react";
import { FaSortAmountDown, FaSortAmountUpAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { reverseArray } from "../features/user/userSlice";

const TableHeader = ({reversed}:  {reversed:boolean}) => {
  const dispatch = useDispatch()
  return (
    <thead className="px-4 block">
      {/* grid-cols-[18%,11%,11%,13%,13%,12%,9%,13%] */}
      <tr
        id="header"
        className={`grid grid-cols-[36%,15%,15%,15%,15%,4%] bg-[#f5f5f5] py-2 rounded-sm`}
      >
        <th
          className="text-left font-semibold text-[#B5B5B5] pl-4 flex items-center gap-1 cursor-pointer"
          onClick={() => {
            dispatch(reverseArray(""))
          }}
        >
          User Name
          {reversed ? <FaSortAmountUpAlt/> : <FaSortAmountDown /> } 
        </th>
        <th className="text-center font-semibold text-[#B5B5B5] ">
          View
        </th>
        <th className="text-center font-semibold text-[#B5B5B5]">
          Execute
        </th>
        <th className="text-center font-semibold text-greylish dark:text-[#aaaaaa]">
          Modify
        </th>
        <th className="text-center font-semibold text-greylish dark:text-[#aaaaaa] ">
          Delete
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
