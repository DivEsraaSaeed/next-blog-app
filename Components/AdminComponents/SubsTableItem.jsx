import React from "react";

const SubsTableItem = ({ email, deleteEmail, mongoId, date }) => {
  const emailDate = new Date(date);

  return (
    <tr className="bg-white border-b text-left">
      <td
        scope="row"
        className="items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {email ? email : "no email"}
      </td>
      <td className="px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>
      <td
        className="px-6 py-4 cursor-pointer"
        onClick={() => deleteEmail(mongoId)}
      >
        x
      </td>
    </tr>
  );
};

export default SubsTableItem;
