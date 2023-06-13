import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import AddNewTasks from "../pages/AddNewTasks/AddNewTasks"
import ManageTask from "../pages/ManageTask/ManageTask"
import AllTask from "../pages/AllTask/Alltask"
import TaskUpdate from "../components/TaskUpdate/TaskUpdate"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <AllTask></AllTask>,
                loader: () => fetch(`http://localhost:5000/allTask`)
            },
            {
                path: '/addnewtasks',
                element: <AddNewTasks></AddNewTasks>
            },
            {
                path: '/managetask',
                element: <ManageTask></ManageTask>,
            },
            {
                path: '/updateTask/:id',
                element: <TaskUpdate></TaskUpdate>
            }
        ]
    }
])

export default routes