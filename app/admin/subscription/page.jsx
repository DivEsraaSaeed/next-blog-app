"use client";
import SubsTableItem from "@/Components/AdminComponents/SubsTableItem";
import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {
  const [email, setEmail] = useState([]);
  const fetchEmail = async () => {
    const response = await axios.get("/api/email");
    setEmail(response.data.emails);
  };

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete("/app/api/email", {
      params: { id: mongoId },
    });
    // console.log(response.data.message);
    if (response.data.success) {
      toast.success(response.data.message);
      fetchEmail();
    } else {
      toast.error("error");
    }
  };

  useEffect(() => {
    axios.get("/api/email").then((response) => {
      setEmail(response.data.emails);
    });
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All subscriptions</h1>
      <div className="relative h-[80vh] max-w-[600px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-700 uppercase text-left bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                email subscriptions
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3">
                date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {email.map((item, index) => {
              return (
                <SubsTableItem
                  key={index}
                  email={item.email}
                  date={item.date}
                  mongoId={item._id}
                  fetchEmail={fetchEmail}
                  deleteEmail={deleteEmail}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
