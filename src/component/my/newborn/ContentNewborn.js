import React, { useState } from "react";
import "../my.css";
import NewBornVideoContent from "./videoContent";
import NewBornPdfContent from "./pdfContent";

export default function ContentNewborn() {
  const [content, setContent] = useState(true)
  return (
    <div className="my-container">
      <div className="my-container container-fluid">
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item" onClick={() => setContent(true)}>
            <a className={content === true ? "nav-link active" : "nav-link"}>
              動画
            </a>
          </li>
          <li className="nav-item" onClick={() => setContent(false)}>
            <a className={content === false ? "nav-link active" : "nav-link"}>
              生誕メッセージPDF
            </a>
          </li>
        </ul>
        {content ? <NewBornVideoContent /> : <NewBornPdfContent />}
      </div>
    </div>
  );
}
