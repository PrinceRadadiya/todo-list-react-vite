import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Add } from "../redux/Slice/AddTask";

const Addtodo = ({ SetAddTaskModal }) => {
  const [inputText, Setinputtext] = useState([]);

  const dispatch = useDispatch();
  const closeHandle = () => {
    SetAddTaskModal(false);
  };

  const addtask = () =>{
    dispatch(Add(inputText))
    SetAddTaskModal(false)
    // console.log(dispatch(Add(inputText)));
  }
  return (
    <>
      <div className="w-full h-screen bg-black/30 absolute flex justify-center items-center">
        <div className="w-[400px] bg-white rounded">
          <div className="flex flex-col space-y-4 p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold">Add New Task</h1>
              <button
                onClick={() => {
                  closeHandle();
                }}
              >
                <AiOutlineCloseCircle />
              </button>
            </div>
            <input
              type="text"
              placeholder="new task"
              className="w-full outline-0 p-2 bg-gray-100"
              value={inputText}
              onChange={(e) => Setinputtext(e.target.value)}
            />
            <button onClick={()=>addtask()} className="w-28 p-2 rounded-md flex justify-center items-center space-x-1 bg-yellow-400">
              <IoAddCircleOutline size={"1.1rem"} />
              <span>add</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addtodo;
