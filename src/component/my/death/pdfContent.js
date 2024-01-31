import React, { useState } from "react";

export default function DeathPdfContent() {
  const [fvrChk, setfvrChk] = useState(true);
  const [rvrChk, setrvrChk] = useState(true);
  const [ovrChk, setovrChk] = useState(true);
  return (
    <div className="py-2 container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 py-3">
          <h4>ビデオの作成方法</h4>
          <iframe title="deathpdfsamplevideo" height="380" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
        <div className="col-sm-12 col-md-6 py-3">
          <div className="mb-3 mt-3">
            <h4 htmlFor="will" className="form-label">
              遺言書
            </h4>
            <textarea className="form-control" rows="5" id="comment" name="text" />
          </div>
          <div className="col-12 text-start">
            <label htmlFor="vfamily">家族・恋人</label>
            <div className="form-check mb-3 text-start">
              <label className="form-check-label">
                <input
                  className="form-check-input bg-primary"
                  type="checkbox"
                  name="remember"
                  checked={fvrChk}
                  onChange={() => setfvrChk(!fvrChk)}
                />
                受取人 指定
              </label>
            </div>
            {fvrChk && (
              <div className="ps-5 py-1 text-start">
                <div>
                  <label htmlFor="vfamily">氏名</label>
                  <input className="form-control w-100" />
                </div>
                <div>
                  <label htmlFor="vfamily">関係</label>
                  <input className="form-control w-100" />
                </div>
                <div>
                  <label htmlFor="vfamily">生年月日</label>
                  <input type="date" className="form-control w-100" />
                </div>
              </div>
            )}
          </div>
          <div className="p-5 rounded-4 mb-2 bg-primary text-light">
            ドラッグ・アンド・ドロップ
          </div>
          <div className="col-12 text-start">
            <label htmlFor="vfamily">親族</label>
            <div className="form-check mb-3 text-start">
              <label className="form-check-label">
                <input
                  className="form-check-input bg-primary"
                  type="checkbox"
                  name="remember"
                  checked={rvrChk}
                  onChange={() => setrvrChk(!rvrChk)}
                />
                受取人 指定
              </label>
            </div>
            {rvrChk && (
              <div className="ps-5 py-1 text-start">
                <div>
                  <label htmlFor="vfamily">氏名</label>
                  <input className="form-control w-100" />
                </div>
                <div>
                  <label htmlFor="vfamily">関係</label>
                  <input className="form-control w-100" />
                </div>
                <div>
                  <label htmlFor="vfamily">生年月日</label>
                  <input type="date" className="form-control w-100" />
                </div>
              </div>
            )}
          </div>
          <div className="p-5 rounded-4 mb-2 bg-primary text-light">
            ドラッグ・アンド・ドロップ
          </div>
          <div className="col-12 text-start">
            <label htmlFor="vfamily">その他</label>
            <div className="form-check mb-3 text-start">
              <label className="form-check-label">
                <input
                  className="form-check-input bg-primary"
                  type="checkbox"
                  name="remember"
                  checked={ovrChk}
                  onChange={() => setovrChk(!ovrChk)}
                />
                受取人 指定
              </label>
            </div>
            {ovrChk && (
              <div className="ps-5 py-1 text-start">
                <div>
                  <label htmlFor="vfamily">氏名</label>
                  <input className="form-control w-100" />
                </div>
                <div>
                  <label htmlFor="vfamily">関係</label>
                  <input type="date" className="form-control w-100" />
                </div>
                <div>
                  <label htmlFor="vfamily">生年月日</label>
                  <input className="form-control w-100" />
                </div>
              </div>
            )}
          </div>
          <div className="p-5 rounded-4 mb-2 bg-primary text-light">
            ドラッグ・アンド・ドロップ
          </div>
        </div>
      </div>
    </div>
  );
}
