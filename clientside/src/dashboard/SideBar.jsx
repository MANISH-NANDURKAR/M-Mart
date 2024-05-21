import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

import userImg from "../assets/pics/profile.jpeg";
import { Authcontext } from "../contects/AuthProvider";
import { useLocation, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const {user} = useContext(Authcontext)

  const {logout} = useContext(Authcontext);
  const location = useLocation();
  const navigate = useNavigate();
  
  const from = location.state?.from?.pathname || "/";
  const handleLogout = () =>{
      logout().then(() =>{
          alert("logout successfull");
          navigate('/')
      }).catch((e) =>{
          
      });
  }
  return (
    <Sidebar aria-label="Sidebar with content separator example" className="bg-sky-100 ">
      <Sidebar.Logo img={user?.photoURL || userImg} className="w-16 h-16 rounded">
        <p className="items-center">{user?.displayName || "DEMO User"}</p>
      </Sidebar.Logo>
      <Sidebar.Items >
        <Sidebar.ItemGroup>
        <Sidebar.Item href="/" icon={HiHome} className="items-start">
            <p>Home</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="items-start">
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            <p>Upload Goods</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            <p>Manage Goods</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <p>User</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            <p>Products</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            <p>Log In</p>
          </Sidebar.Item>
          <Sidebar.Item icon={HiTable}>
            <p onClick={handleLogout}>Logout</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiSupport}>
            <p>Help</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
