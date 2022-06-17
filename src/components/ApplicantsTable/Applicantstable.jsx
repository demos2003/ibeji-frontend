import React from "react";
import "./apptable.css";
import { Table } from "./Table";

export const Applicantstable = ({applicants}) => {
  return (
    <div className="post">
      <h1 className="page-head">Applicants</h1> 
      <table  className="table table-bordered table-width fixed header-position1">
      <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Phone Number </th>
            <th scope="col">Home Address</th>
            <th scope="col">Types of Application</th>
            <th scope="col">Control</th>
          </tr>
        </thead>  
        </table>
      {applicants.map((p) => (
        <Table applicant={p}/>
      ))}   
    </div>
  );
};
