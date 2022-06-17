import { useState } from "react";
import Svg2 from "../components/SvgFunc/Svg2";
import Popup3 from "./Popup/Popup3";
import "./delbtn2.css";
import axios from "axios";

export const DelBtn = ({ path, keys }) => {
  const [buttonPopup2, sBtn2] = useState(false);

  const handleDelete = async () => {
    if (keys === "applicant") {
      try {
        await axios.delete(`/applicants/${path}`);
        window.location.replace("/admin");
      } catch (err) {}
    } else if (keys === "contact") {
      try {
        await axios.delete(`/contacts/${path}`);
        window.location.replace("/admin");
      } catch (err) {}
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          sBtn2(true);
        }}
        className="spc2 spc3"
      >
        <Svg2></Svg2>
      </button>
      <Popup3 trigger={buttonPopup2} setTrigger={sBtn2}>
        <h3>Are you sure you want to delete ?</h3>
        <button
          className="btn del-btn"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
      </Popup3>
    </div>
  );
};
