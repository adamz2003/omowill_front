import React, { useState } from "react";
import "../my.css";
import DeathVideoContent from "./videoContent";
import DeathPdfContent from "./pdfContent";

export default function ContentDeath() {
  const [content, setContent] = useState(true)
  return (
    <div className="my-container container-fluid">
      <ul className="nav nav-pills nav-justified">
        <li className="nav-item" onClick={() => setContent(true)}>
          <a className={(content === true ? "nav-link active" : "nav-link")}>
            動画
          </a>
        </li>
        <li className="nav-item" onClick={() => setContent(false)}>
          <a className={(content === false ? "nav-link active" : "nav-link")}>
            遺書PDF
          </a>
        </li>
      </ul>
        {
          content ? <DeathVideoContent /> : <DeathPdfContent />
        }
    </div>
  );
}
