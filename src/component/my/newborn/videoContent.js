import React from 'react'

export default function NewBornVideoContent() {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 py-3">
        <h4>ビデオの作成方法</h4>
        <iframe title="newbornvideosample"
          height="380"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
      <div className="col-sm-12 col-md-6 text-start">
        <div className="d-flex justify-content-end py-2">
          <button className="btn btn-primary">セーブ</button>
        </div>
        <h4 className="text-center w-100">
          ビデオフォーム 
        </h4>
        <div className="row">
          <div className="col-12">
            <input className="form-control w-100 mb-2" />
              <div className="ps-5">
                <div>
                  <label htmlFor="vfamily">こども氏名</label>
                  <input className="form-control w-100" />
                </div>
                <div>
                  <label htmlFor="vfamily">生年月日</label>
                  <input className="form-control w-100" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
