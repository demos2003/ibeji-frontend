import React from "react";
import "./contacttable.css";
import { Table } from "./Table";

export const ContactTable = ({contacts}) => {
  return (
    <div className="post">
      <h1 className="page-head">Contacts</h1>
      <table className="table table-bordered table-width fixed head-position">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No</th>
            <th scope="col">Message</th>
            <th scope="col">Control</th>
          </tr>
        </thead>
        </table>
      {contacts.map((p) => (
        <Table contact={p}/>
      ))} 
    </div>
  );
};
