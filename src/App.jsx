import "./App.css";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Addtodo from "./Component/Addtodo";
//redux
import { Remove } from "./redux/Slice/AddTask";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [addTaskModal, SetAddTaskModal] = useState(false);
  const task = useSelector((state) => state.addTask); // most impotent line for store folder
  const dispatch = useDispatch();

  const RemoveUser = (ind) =>{
    dispatch(Remove(ind))    
  }

  return (
    <div className="App w-full h-screen flex justify-center items-center">
      <div className="w-4/5 md:w-1/2 lg:w-4/12 2xl:w-1/5 m-auto h-1/2 overflow-auto bg-white rounded-md drop-shadow-xl border relative">
        <div className="w-full sticky top-0 bg-[#161616] text-gray-200 p-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">To Do List App</h1>
            <p className="text-xs">manage your tasks</p>
          </div>
          <div className="w-8 h-8 bg-white text-black rounded-full flex justify-center items-center">
            <button>
              <AiOutlinePlus
                onClick={() => SetAddTaskModal(true)}
                size={"1rem"}
              />
            </button>
          </div>
        </div>

        <div className="p-5 text-black">
          <ul className="space-y-4">
            {task &&
              task.map((data, ind) => {
                return(
                  
                <div className="bg-gray-100 flex justify-between" key={ind}>
                  <li className="flex space-x-4 p-4" key={ind}>
                    <input
                      type="checkbox"
                      name=""
                      id="complete"
                      className="peer/complete"
                    />
                    <label
                      htmlFor="complete"
                      className="peer-checked/complete:line-through"
                    >
                      {data}
                    </label>
                  </li>
                  <button onClick={()=>RemoveUser(ind)}>
                    <MdDelete size={"1.5rem"} />
                  </button>
                </div>
                )
              })}
          </ul>
        </div>
      </div>
      {addTaskModal && <Addtodo SetAddTaskModal={SetAddTaskModal} />}
    </div>
  );
}

export default App;
