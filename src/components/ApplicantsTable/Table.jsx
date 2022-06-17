import React from "react";
import { DelBtn } from "../DelBtn";


export const Table = ({ applicant }) => {
  const variable = "applicant"
  return (
    <div className="table-holder3">
      <table className="table table-bordered table-width fixed">
       
        <tbody>
          <tr className="wrap">
           
            <td className="overflow"> <div className="content-holder">{applicant.name}</div></td>
            <td className="overflow"><div className="content-holder">{applicant.emailaddress} </div></td>
            <td className="overflow"><div className="content-holder">{applicant.phoneno}</div></td>
            <td className="overflow"><div className="content-holder">{applicant.address}</div></td>
            <td className="overflow"><div className="content-holder">{applicant.type}</div></td>
            <td>
              <DelBtn path={applicant._id} keys={variable} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
