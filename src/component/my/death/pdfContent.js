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
          <iframe height="380" src="/"></iframe>
        </div>
        <div className="col-sm-12 col-md-6 py-3">
          <div class="mb-3 mt-3">
            <h4 htmlFor="will" class="form-label">
              遺言書
            </h4>
            <textarea class="form-control" rows="5" id="comment" name="text" />
          </div>
          <div className="col-12 text-start">
            <label htmlFor="vfamily">家族・恋人</label>
            <div class="form-check mb-3 text-start">
              <label class="form-check-label">
                <input
                  class="form-check-input bg-primary"
                  type="checkbox"
                  name="remember"
                  checked={fvrChk}
                  onClick={() => setfvrChk(!fvrChk)}
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
                  <input className="form-control w-100" />
                </div>
              </div>
            )}
          </div>
          <div className="p-5 rounded-4 mb-2 bg-primary text-light">
            ドラッグ・アンド・ドロップ
          </div>
          <div className="col-12 text-start">
            <label htmlFor="vfamily">親族</label>
            <div class="form-check mb-3 text-start">
              <label class="form-check-label">
                <input
                  class="form-check-input bg-primary"
                  type="checkbox"
                  name="remember"
                  checked={rvrChk}
                  onClick={() => setrvrChk(!rvrChk)}
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
                  <input className="form-control w-100" />
                </div>
              </div>
            )}
          </div>
          <div className="p-5 rounded-4 mb-2 bg-primary text-light">
            ドラッグ・アンド・ドロップ
          </div>
          <div className="col-12 text-start">
            <label htmlFor="vfamily">その他</label>
            <div class="form-check mb-3 text-start">
              <label class="form-check-label">
                <input
                  class="form-check-input bg-primary"
                  type="checkbox"
                  name="remember"
                  checked={ovrChk}
                  onClick={() => setovrChk(!ovrChk)}
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
                  <input className="form-control w-100" />
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
