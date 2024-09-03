import Person from "../assets/svgs/Person";
import ProfInformation from "../assets/svgs/ProfInformation";
import Documents from "../assets/svgs/Documents";
import Account from "../assets/svgs/Account";
export default [
  {
    title: "Personal Informations",
    icon: <Person />,
    First_Name: "Mariem",
    Last_Name: "Aly",
    image: "../assets/imgs/Mariem.jpg",
    Mobile_Number: "010567240256",
    Email_Address: "mariem@gmail.com",
    Date_of_Birth: "July 14, 1995",
    Marital_Status: "Single",
    Gender: "Female",
    Nationality: "Egypt",
    Address: "Maadi",
    City: "Cairo",
    State: "Cairo",
    Zip_Code: "35624",
    financialInformation: {
      Works_hours: "180",
      Salary_hour: "300",
      Total_Salary: "54000",
    },
  },
  {
    title: "Professional Information",
    icon: <ProfInformation />,
  },
  {
    title: "Documents",
    icon: <Documents />,
  },
  {
    title: "Account Access",
    icon: <Account />,
  },
];
