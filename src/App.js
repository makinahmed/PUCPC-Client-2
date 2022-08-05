import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HOME from "./Components/Pages/HOME/HOME";
import Gallery from "./Components/Pages/Gallery/Gallery";
import ClubMember from "./Components/ClubMembers/ClubMember";
import Blog from "./Components/Blog/Blog";
import BlogDetails from "./Components/Blog/BlogDetails";
import Teachers from "./Components/Teachers/Teachers";
import Contact from "./Components/Contact/Contact";
import SingUp from "./Components/SignUp/SingUp";
import Login from "./Components/Login/Login";
import Members from "./Components/Members/Members";
import Footer from "./Components/Footer/Footer";
// import AuthContext from "./Components/Context/AuthContext";



function App() {
  document.title = "Prime University Computer Programming Club";
  return (
    // <AuthContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/home" element={<HOME />} />
          <Route path="/gallary" element={<Gallery />} />
          <Route path="/team" element={<ClubMember />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/members" element={<Members />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    // </AuthContext>
  );
}

export default App;
