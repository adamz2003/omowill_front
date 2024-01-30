import React, { useState } from "react";

export default function NewBornPdfContent() {
  return (
    <div className="py-2 container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 py-3">
          <h4>動画{"(Youtube)"}</h4>
          <iframe height="380" src="/"></iframe>
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
          <div className="p-5 rounded-4 mb-2 bg-primary text-light">
            ドラッグ・アンド・ドロップ
          </div>
        </div>
      </div>
    </div>
  );
}
