import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./layout/SideBar/Sidebar";
import {
  AllNotes,
  ArchiveNotes,
  ErrorPage,
  TagNotes,
  TrashNotes,
} from "./pages";
import { Navbar } from "./layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="app__container">
          <Navbar />
          <Routes>
            <Route path="/" element={<AllNotes />} />
            <Route path="/archive" element={<ArchiveNotes />} />
            <Route path="/trash" element={<TrashNotes />} />
            <Route path="/tag/:name" element={<TagNotes />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="/*" element={<Navigate to={"/404"} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
