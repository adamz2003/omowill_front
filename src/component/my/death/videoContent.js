import React, { useState } from "react";

export default function DeathVideoContent() {
  const [fvrChk, setfvrChk] = useState(true);
  const [rvrChk, setrvrChk] = useState(true);
  const [ovrChk, setovrChk] = useState(true);
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 py-3">
        <h4>ビデオの作成方法</h4>
        <iframe
          title=""
          height="380"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
      <div className="col-sm-12 col-md-6 text-start">
        <div className="d-flex justify-content-end py-2">
          <button className="btn btn-primary">セーブ</button>
        </div>
        <h4 className="text-center w-100">
          ビデオフォーム {"(Youtube-最大3リンク)"}
        </h4>
        <div className="row">
          <div className="col-12">
            <label htmlFor="vfamily">家族・恋人</label>
            <input className="form-control w-100" />
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
              <div className="ps-5">
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
          <div className="col-12">
            <label htmlFor="vfamily">親族</label>
            <input className="form-control w-100" />
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
              <div className="ps-5">
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
          <div className="col-12">
            <label htmlFor="vfamily">その他</label>
            <input className="form-control w-100" />
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
              <div className="ps-5">
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
        </div>
      </div>
    </div>
  );
}
