import React from "react";

const tableHeader = () => {
  return (
    <thead>
      {/* grid-cols-[18%,11%,11%,13%,13%,12%,9%,13%] */}
      <tr
        id="header"
        className={`grid grid-cols-[60%,10%,10%,10%,10%] bg-[#f5f5f5] py-2 rounded-sm`}
      >
        <th
          className="text-left font-semibold text-[#B5B5B5] pl-4"
        >
          User Name
        </th>
        <th className="text-left font-semibold text-[#B5B5B5] ">
          View
        </th>
        <th className="text-left font-semibold text-[#B5B5B5]">
          Execute
        </th>
        <th className="text-left font-semibold text-greylish dark:text-[#aaaaaa]">
          Modify
        </th>
        <th className="text-left font-semibold text-greylish dark:text-[#aaaaaa] ">
          Delete
        </th>
      </tr>
    </thead>
  );
};

export default tableHeader;
