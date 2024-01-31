import React from "react";
import serverURL from "../../../util/url";
import axios from "axios";

export default function NewBornPdfContent() {
  const handleOver = (e) => {
    e.preventDefault()
  }
  
  const handleDropFile = async (e) => {
    e.preventDefault()
    console.log("file is uploaded")
    const [file] = e.dataTransfer.files;

    const data = new Blob([file], { type: file.type })
    const res = await axios.post(serverURL + '/upload/pdf', { file: data, filename: file.name, filetype: file.type } )
    console.log(res)
  }
  return (
    <div className="py-2 container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 py-3">
          <h4>動画{"(Youtube)"}</h4>
          <iframe title="youtube" height="380" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
        <div className="col-sm-12 col-md-6 py-3">
          <div className="col-12 text-start">
            <div className="ps-5 py-1 text-start">
              <div>
                <label htmlFor="vfamily">氏名</label>
                <input className="form-control w-100" />
              </div>
              <div>
                <label htmlFor="vfamily">生年月日</label>
                <input className="form-control w-100" />
              </div>
            </div>
          </div>
          <div className="p-5 rounded-4 mb-2 bg-primary text-light" onDrop={handleDropFile} onDragOver={handleOver}>
            ドラッグ・アンド・ドロップ
          </div>
        </div>
      </div>
    </div>
  );
}
