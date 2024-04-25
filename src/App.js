import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from './component/Blog';
import Home from './component/Home';
import Nav from './component/Nav';
import Page from './component/Page';
import Reservation from './component/Reservation';
import Room from './component/Room';
import Page2 from './component/Page2';
import Homepage from './component/Homepage';
import Login from './component/Login';
import Userlist from './component/Userlist';
import News1 from './component/News1';
import Room2 from './component/Room2';
import Room3 from './component/Room3';
import Room4 from './component/Room4';
import Carasoul from './component/Carasoul';



function App() {
  return (
    <>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="page" element={<Page />} />
            <Route path="room" element={<Room />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="blog" element={<Blog />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Homepage />} />
            <Route path="/users" element={<Userlist />} />
            <Route path="ne1" element={<News1 />} />
            <Route path="room2" element={<Room2 />} />
            <Route path="room3" element={<Room3 />} />
            <Route path="room4" element={<Room4 />} />
            <Route path="carasoul" element={<Carasoul />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
