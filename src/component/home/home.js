import { Link, useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
    const navigate = useNavigate()

    const gotoRegister = () => {
        navigate("/register")
    }

    const gotoURL = (str) => {
        navigate(str)
    }
    return (
        <div>
            <div className='reason-container w-100 d-flex'>
                <div className='col-sm-12 col-md-12 col-lg-2'></div>
                <div className='col-sm-12 col-md-12 col-lg-3 d-flex justify-content-center align-items-center reason-content'>
                    <div className='d-flex justify-content-between flex-column h-100'>
                        <div></div>
                        <div className='d-flex justify-content-between flex-column'>
                            <h2 className='fw-bold'>震災/津波/災害/戦争</h2>
                            <p className='fw-bold mb-0'>東日本大震災で、写真や手紙など</p>
                            <p className='fw-bold mb-0'>本来、 想いを残してきたツールは</p>
                            <p className='fw-bold mb-0'>津波で跡形もなく消えてなくなる</p>
                            <h1 className='fw-bold mt-4'>OMOW<span className='opacity-3'>I</span>LL</h1>
                            <p className='fw-bold mb-0'>想いを「今」WEB上に残しておく</p>
                            <button className='btn btn-primary mt-3 w-fit-content px-5' onClick={gotoRegister}><i className='fa fa-user-plus'></i>&nbsp;&nbsp;&nbsp;ご利用登録</button>
                        </div>
                        <div>
                            <h2 className='fw-bold'>OMOW<span className="opacity-3">I</span>LLでできること</h2>
                            <p className='fw-bold'>Ability</p>
                            <p>OMOWlLLでは以下の3つのことができます。</p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-7 reason-right-content'>
                    <img src='/assets/img/home.png' alt='' className='w-100' />
                </div>
            </div>

            <div className='ability-container'>
                <div className='d-flex w-100 ability-card-content'>
                    <div className='border p-4 d-flex justify-content-between flex-column'>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold mt-4'>Main</p>
                            <h1 className='opacity-3'>01</h1>
                        </div>
                        <h2 className='fw-bold mt-2'>「亡くなった時」に備えて大切な人にメッセージを残す</h2>
                        <h4 className='fw-bold mt-4'>遺書のようなメッセージを残す</h4>
                        <h6 className='mt-3'>動画投稿サービスであるYoutubeを活用して、 動画でのメッセージをマイページに置いておくことができます。動画ではなく、手紙としてメッセージを置いていきたい方はPDFとして手紙を置いておくことができます。</h6>
                        <div className='d-flex align-items-center ms-4 gap-3 mt-3'>
                            <h6 className='fw-bold mb-0' onClick={() => gotoURL("/mypage/death")}>利用する</h6>
                            <img src='/assets/img/right-arrow-white.png' alt='' className='arrow-btn cursor-pointer' onClick={() => gotoURL("/mypage/death")} />
                        </div>
                    </div>
                    <div className='border p-4 d-flex justify-content-between flex-column'>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold mt-4'>Main</p>
                            <h1 className='opacity-3'>02</h1>
                        </div>
                        <h2 className='fw-bold mt-2'>「生誕時」に産まれた時の気持ちを残す</h2>
                        <h4 className='fw-bold mt-4'>生誕時の想いをメッセージとして残す</h4>
                        <h6 className='mt-3'>動画投稿サービスであるYoutubeを活用して、 動画でのメッセージをマイページに置いておくことができます。動画ではなく、 手紙としてメッセージを置いていきたい方はPDFとして手紙を置いておくことができます。</h6>
                        <div className='d-flex align-items-center ms-4 gap-3 mt-3' >
                            <h6 className='fw-bold mb-0' onClick={() => gotoURL("/mypage/newborn")}>利用する</h6>
                            <img src='/assets/img/right-arrow-white.png' alt='' className='arrow-btn cursor-pointer' onClick={() => gotoURL("/mypage/newborn")} />
                        </div>
                    </div>
                    <div className='border p-4 d-flex justify-content-between flex-column'>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold mt-4'>Sub</p>
                            <h1 className='opacity-3'>03</h1>
                        </div>
                        <h2 className='fw-bold mt-2'>遺言書の見本を作成する</h2>
                        <h4 className='fw-bold mt-4'>自筆証書遺言の見本を作る</h4>
                        <h6 className='mt-3'>サブコンテンツとして、 自筆証書遺言の見本が作成できます。 お名前などの情報を入力頂き、 自筆証書遺言の見本を発行され、 それを元に遺言書を作成でき、メールにて即時に受け取れます。 ※こちらのサブコンテンツは会員登録不要です。</h6>
                        <div className='d-flex align-items-center ms-4 gap-3 mt-3'>
                            <h6 className='fw-bold mb-0' onClick={() => gotoURL("/mypage/smpwill")}>利用する</h6>
                            <img src='/assets/img/right-arrow-white.png' alt='' className='arrow-btn cursor-pointer' onClick={() => gotoURL("/mypage/smpwill")} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container price-container'>
                <h2 className='fw-bold'>動画や手紙の閲覧について</h2>
                <h6 className='fw-bold mt-3'>動画やメッセージの閲覧方法は、以下の2つの方法にて閲覧・開示します。</h6>
                <div className='d-flex price-card-content'>
                    <div className='border p-4 price-card'>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold mt-4'>Free</p>
                            <h1 className='opacity-3'>01</h1>
                        </div>
                        <h2></h2><br />
                        <h2 className='fw-bold mt-2'>PDFの発行</h2>
                        <h4 className='fw-bold mt-4'>「亡くなった時」 「生誕時」のメッセージどちらも動画または手紙の登録時にログインID・PASSの記載されたPDFを発行</h4>
                        <h6 className='mt-3'>そちらをメールなどで、 ご家族やご遺族に分かるように保管・ 取り置いて、サイトよりマイページで閲覧可能です。</h6>
                        <h2 className='bg-primary w-fit-content text-white pt-2 pb-2 px-4 mt-4 cursor-pointer' onClick={() => gotoURL('/register')}>無料</h2>
                    </div>
                    <div className='border p-4 price-card'>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold mt-4'>Charge</p>
                            <h1 className='opacity-3'>02</h1>
                        </div>
                        <h2></h2><br />
                        <h2 className='fw-bold mt-2'>ご家族やご遺族からの閲覧申請</h2>
                        <h4 className='fw-bold mt-4'>動画や手紙があるが、 ログイン情報が不明などの場合ご家族やご遺族からの閲覧申請が可能</h4>
                        <h6 className='mt-3'>まず、 動画や手紙が存在するか、 確認の申請 (無料) を行い存在した場合には、 閲覧の申請手続きができます。ご家族やご遺族書類の提出を頂き、 書類確認の等のための事務手数料 (550円税込)を頂戴いたします。</h6>
                        <div className='d-flex align-items-center ms-3 gap-3 mt-3'>
                            <h6 className='fw-bold mb-0'>動画 手紙の存在確認の申請をする</h6>
                            <img src='/assets/img/right-arrow-white.png' alt='' className='arrow-btn cursor-pointer' onClick={() => gotoURL('/reqview')} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container booking-header-container'>
                    <h1 className='fw-bold'>まずは、想いを残そう!</h1>
                <h2 className='fw-bold'>OMOW<span className='opacity-3'>I</span>LL</h2>
                <p>「想いを「今」WEB上に残しておく</p>
                <button className='btn btn-primary' onClick={gotoRegister}><i className='fa fa-user-plus'></i>&nbsp;&nbsp;&nbsp;ご利用登録</button>
            </div>
            <div className='bg-secondary pt-4 position-relative pb-5'>
                <div className='container'>
                    <h2 className='fw-bold info-title'>お知らせ</h2>
                    <p>information</p>
                    <div className='d-flex info-content gap-5'>
                        <p className='fw-bold info-notification'>当サイトからのお知らせ</p>
                        <div>
                            <div className='info-card d-flex justify-content-between info-chd-content gap-4'>
                                <div className='d-flex info-chd-content gap-4'>
                                    <div>
                                        <div className='d-flex'>
                                            <p className='mt-3'>2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                            <h2 className='info-date'>11.21</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='mb-0 fw-bold'>リカレント教育動画コンテンツに関するニーズアンケートにご協力ください 【12/17 (日) まで】</p>
                                        <p>#当サイトからのお知らせ</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src='/assets/img/right-arrow-white.png' alt='' className='arrow-btn cursor-pointer' />
                                </div>
                            </div>
                            <div className='info-card d-flex justify-content-between info-chd-content gap-4'>
                                <div className='d-flex gap-4 info-chd-content'>
                                    <div>
                                        <div className='d-flex'>
                                            <p className='mt-3'>2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                            <h2 className='info-date'>11.14</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='mb-0 fw-bold'>2023年度 「まちなかキャンパス長岡」 開講講座をお知らせします</p>
                                        <p>#イベント情報</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src='/assets/img/right-arrow-white.png' alt='' className='arrow-btn cursor-pointer' />
                                </div>
                            </div>
                            <div className='info-card d-flex justify-content-between gap-4 info-chd-content'>
                                <div className='d-flex gap-4 info-chd-content'>
                                    <div>
                                        <div className='d-flex'>
                                            <p className='mt-3'>2022&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                            <h2 className='info-date'>04.01</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='mb-0 fw-bold'>まちなか大学 「空に憧れて、翼に憧れて」が開講されます</p>
                                        <p>#イベント情報</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src='/assets/img/right-arrow-white.png' alt='' className='arrow-btn cursor-pointer' />
                                </div>
                            </div>
                            <div className='info-card d-flex justify-content-between gap-4 info-chd-content'>
                                <div className='d-flex gap-4 info-chd-content'>
                                    <div>
                                        <div className='d-flex'>
                                            <p className='mt-3'>2022&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                            <h2 className='info-date'>04.01</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='mb-0 fw-bold'>2022年度 「長岡モノづくりアカデミー」が開催されます</p>
                                        <p>#イベント情報</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src='/assets/img/right-arrow-white.png' alt='' className='arrow-btn cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;