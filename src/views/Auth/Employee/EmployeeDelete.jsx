import React from "react";
import axios from "axios";

const EmployeeDelete = ({ onClose, user = null, setUser }) => {
  const formSubmit = (data) => {
    return data === false ? null : deleteUser();
  };

  async function deleteUser() {
    await axios({
      method: "DELETE",
      url: `user/${user._id}`,
      responseType: "json",
    }).then(() => handleOnClose());
  }

  const handleOnClose = () => {
    onClose(false);
    setUser(null);
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full pb-8 pt-6 px-9 md:px-10 md:w-1/2 bg-white rounded-lg">
        <h2 className="text-[25px] mb-1 font-bold">Delete Confirmation</h2>
        <h3 className="text-md mb-3">
          Are you sure, You want to delete this Employee?
        </h3>

        <div>
          <div className="flex justify-end align-center gap-5">
            <div className="pt-[1rem] flex justify-center h-[3.5rem] gap-3">
              <button
                type="submit"
                onClick={() => {
                  formSubmit(true);
                }}
                className="px-10 rounded-md border border-transparent bg-primary text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Yes
              </button>
              <button
                type="submit"
                onClick={() => {
                  formSubmit(false);
                  handleOnClose();
                }}
                className="px-10 bg-black/30 rounded-md border border-transparent bg-primary text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDelete;
