import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AllStudents from "./components/AllStudents";
import AddStudents from "./components/AddStudents";
import EditStudent from './components/EditStudent';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

export const studentContext = React.createContext("");

//const url = "https://625fa90292df0bc0f337f5e7.mockapi.io/students/";
function App() {
  let data = {
    earning: "40,000",
    annual: "2,40,000",
    task: 20,
    pending: 26,
  };
  let [students, setStudent] = useState([]);

  

  return (
      <>
        <BrowserRouter>
          <studentContext.Provider value={{ students, setStudent }}>
            <div>
              <div>
                <Sidebar />
              </div>
              <div>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard data={data} />} />
                  <Route path="/all-students" element={<AllStudents />} />
                  <Route path="/add-student" element={<AddStudents />} />
                  <Route path="/edit-student/:id" element={<EditStudent />} />
                  <Route path="/" element={<Dashboard data={data} />} />
                </Routes>
              </div>
            </div>
          </studentContext.Provider>
  
        </BrowserRouter>
      </>
    );
}

export default App;
