import Dashboard from "../assets/svgs/Dashboard";
import Employees from "../assets/svgs/Employees";
import Profile from "../assets/svgs/Profile";
import Attendance from "../assets/svgs/Attendance";
import Tasks from "../assets/svgs/Tasks";
import Payroll from "../assets/svgs/Payroll";
import Holiday from "../assets/svgs/Holiday";
import Payments from "../assets/svgs/Payments";
export default [
  {
    name: "Dashboard",
    icon: <Dashboard />,
    to: "/Dashboard",
  },
  {
    name: "Employees",
    icon: <Employees />,
    Dropdown: {
      menu: [
        { icon: <Profile />, name: "Profile", to: "/Employees/profile" },
        {
          icon: <Attendance />,
          name: "Attendance",
          to: "/Employees/attendance",
        },
        { icon: <Tasks />, name: "Tasks", to: "/Employees/tasks" },
      ],
    },
  },
  {
    name: "Payroll",
    icon: <Payroll />,
    to: "/payroll",
  },
  {
    name: "Holidays",
    icon: <Holiday />,
    Dropdown: {
      menu: [
        { icon: <Profile />, name: "Holiday-1", to: "holiday1" },
        { icon: <Attendance />, name: "Holiday-2", to: "holiday2" },
        { icon: <Tasks />, name: "Holiday-3", to: "holiday3" },
      ],
    },
  },
  {
    name: "Advanced Payment",
    icon: <Payments />,
    to: "advanced-payment",
  },
];
