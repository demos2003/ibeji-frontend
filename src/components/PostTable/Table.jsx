import React from "react";
import "./table.css";
import FullBtn from "../SvgFunc/FullBtn";

export const Table = ({ post }) => {
  return (
    <div className="table-holder2">
      <table  className="table table-bordered table-width fixed ">
        <tbody>
          <tr className="wrap">
            <td className="overflow"><div className="content-holder">{post.title}</div></td>
            <td className="overflow"><div className="content-holder">{post.desc}</div></td>
            <td className="overflow">Farm.jpg</td>
            <td className="overflow" ><div className="content-holder">{post.beneficiary}</div></td>
            <td >
              <FullBtn
                path={post._id}
                post={post}                
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
