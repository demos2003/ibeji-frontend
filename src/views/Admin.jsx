import React, { useContext } from "react";
import "./admin.css";
import PostTable from "../components/PostTable/PostTable";
import { Applicantstable } from "../components/ApplicantsTable/Applicantstable";
import { useState, useEffect } from "react";

import { ContactTable } from "../components/ContactTable/ContactTable";
import { BsPeople } from "react-icons/bs";
import { AiOutlineTable, AiOutlineContacts } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import axios from "axios";
import { Context } from "../components/context/Context";
import { PasswordChange } from "../components/PasswordChange";

export const Admin = () => {
  const [active, setActive] = useState("FirstTable");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    const fetchApplicants = async () => {
      const res = await axios.get("/applicants");
      setApplicants(res.data);
    };
    fetchApplicants();
  }, []);

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchContacts = async () => {
      const res = await axios.get("/contacts");
      setContacts(res.data);
    };
    fetchContacts();
  }, []);

  return (
    <div className="admin-holder">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className="sidebar">
        <div>
          <div className="sidebar1">
            <div className="user1">
              <h4>Ibeji Foundation</h4>
              <img src="images/icon.png" className="user-icon" alt="icon" />
              <div className="dropdown">
                <div className="logout-dropdown">
                  <p>
                    {user.username}
                    <MdArrowDropDown className="aIcon-pos" />
                  </p>
                </div>
                <div className="dropdown-content">
                  <a href={() => false} onClick={handleLogout}>
                    {user && "Logout"}
                  </a>
                  <PasswordChange id={user._id} />
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="options">
              <p className="option">
                <BsPeople className="o-icon" />
                <a href={() => false} onClick={() => setActive("FirstTable")}>
                  Posts
                </a>
              </p>
              <p className="option">
                <AiOutlineTable className="o-icon" />
                <a href={() => false} onClick={() => setActive("SecondTable")}>
                  Applicants
                </a>
              </p>
              <p className="option">
                <AiOutlineContacts className="o-icon" />
                <a onClick={() => setActive("ThirdTable")}>Contacts</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {active === "FirstTable" && <PostTable posts={posts} />}
      {active === "SecondTable" && <Applicantstable applicants={applicants} />}
      {active === "ThirdTable" && <ContactTable contacts={contacts} />}
    </div>
  );
};
