import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./views/core/Index";
import Detail from "./views/core/Detail";
import Search from "./views/core/Search";
import Category from "./views/core/Category";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";
import Logout from "./views/auth/Logout";
import ForgotPassword from "./views/auth/ForgotPassword";
import CreatePassword from "./views/auth/CreatePassword";
import Dashboard from "./views/dashboard/Dashboard";
import Posts from "./views/dashboard/Posts";
import AddPost from "./views/dashboard/AddPost";
import EditPost from "./views/dashboard/EditPost";
import Comments from "./views/dashboard/Comments";
import Notifications from "./views/dashboard/Notifications";
import Profile from "./views/dashboard/Profile";

import MainWrapper from './layouts/MainWrapper'

function App() {

  return (
    <>
    <MainWrapper>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/search' element={<Search />} />
            <Route path='/category' element={<Category />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/forgot_password' element={<ForgotPassword />} />
            <Route path='/notifications' element={<CreatePassword />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/add-post' element={<AddPost />} />
            <Route path='/edit_post' element={<EditPost />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/comments' element={<Comments />} />
          </Routes>
        </BrowserRouter>
    </MainWrapper>
    </>
  )
}

export default App
