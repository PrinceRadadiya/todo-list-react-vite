import { configureStore } from '@reduxjs/toolkit'
import AddtodoTask from "./Slice/AddTask"
export const store = configureStore({
  reducer: {
    addTask:AddtodoTask
  },
})