import React from "react";
import { DelBtn } from "../DelBtn";

export const Table = ({contact}) => {
    const variable = "contact"
  return (
    <div className="table-holder1">
      <table className="table table-bordered table-width fixed">
       
        <tbody>
          <tr className="wrap">
            <td className="overflow"><div className="content-holder">{contact.firstName}</div></td>
            <td className="overflow"><div className="content-holder">{contact.lastName}</div></td>
            <td className="overflow"><div className="content-holder">{contact.emailaddress}</div></td>
            <td className="overflow"><div className="content-holder">{contact.phoneno}</div></td>
            <td className="overflow"><div className="content-holder">{contact.message}</div></td>
            <td >
              <DelBtn path={contact._id} keys={variable} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
