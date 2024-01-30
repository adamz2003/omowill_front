import { useState } from 'react';
import './ability.css';

function Ability() {

    const [activeTab, setActiveTab] = useState(true);
    const [activeType, setActiveType] = useState(true);

    const activeSample = (selTab) => {
        switch (selTab) {
            case 0:
                setActiveTab(true);
                setActiveType(true);
                break;

            case 1:
                setActiveTab(true);
                setActiveType(false);
                break;

            case 2:
                setActiveTab(false);
                setActiveType(true);
                break;

            case 3:
                setActiveTab(false);
                setActiveType(false);
                break;

            default:
                break;
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='ability-child-container'>
                    <div className='ability-left-child' style={{ position: 'relative' }}>
                        <img src='/assets/img/01.png' style={{ position: 'absolute', top: '0px', left: '0px', zIndex: '-1' }} />
                        <div></div>
                        <div>
                            <h2 className='fw-bold ps-4'>自分が亡くなった時 </h2>
                            <h4 className='ps-4 mt-5' style={{ lineHeight: '40px' }}>新しい形の遺言を大切な人に残しませんか？ 文字だけでは伝えきれない思いも一緒に残しておくことができます。</h4>
                        </div>
                    </div>
                    <div className='ability-right-child'>
                        <h2 className='fw-bold opacity-3'>「亡くなった時」</h2>
                        <button className='btn btn-primary'>
                            動画とPDF見本を見る&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src='/assets/img/right-arrow-white.png' alt='' className='arrow-btn' />
                        </button>
                    </div>
                </div>
                <div className='ability-child-container ability-birth-child'>
                    <div className='ability-right-child ' style={{ position: 'relative', textAlign: 'start' }}>
                        <h2 className='fw-bold opacity-3'>「生誕時」</h2>
                        <button className='btn btn-primary' style={{ marginRight: 'auto', marginLeft: '0px' }}>
                            動画とPDF見本を見る&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src='/assets/img/right-arrow-white.png' alt='' className='arrow-btn' />
                        </button>
                    </div>
                    <div className='ability-left-child' style={{ position: 'relative' }}>
                        <img src='/assets/img/02.png' style={{ position: 'absolute', top: '0px', right: '0px', zIndex: '-1' }} />
                        <div></div>
                        <div>
                            <h2 className='fw-bold ps-4 text-end'>大切な我が子が産まれた時</h2>
                            <h4 className='ps-4 mt-5' style={{ lineHeight: '40px' }}>溢れる喜びを形として残してみませんか？子供が成長しても、暖かな愛の記憶を永遠にそのまま残しておくことができます。</h4>
                        </div>
                    </div>
                </div>
                <div className='ability-child-container'>
                    <div className='ability-left-child' style={{ position: 'relative' }}>
                        <img src='/assets/img/03.png' style={{ position: 'absolute', top: '0px', left: '0px', zIndex: '-1' }} />
                        <div></div>
                        <div>
                            <h2 className='fw-bold ps-4'>最期の時に備えて </h2>
                            <h4 className='ps-4 mt-5' style={{ lineHeight: '40px' }}>いざという時のために、思いの丈を大切な家族に残しておきませんか？</h4>
                        </div>
                    </div>
                    <div className='ability-right-child'>
                        <h2 className='fw-bold opacity-3'>遺言書の見本を作成する</h2>
                        <button className='btn btn-primary addBtn' style={{ borderRadius: '20px', marginRight: 'auto', marginBottom: '40px' }}><i className='fa fa-user-plus'></i>&nbsp;&nbsp;&nbsp;ご利用登録</button>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h2 className='fw-bold'>動画とPDF見本</h2>
                <h4 className='mt-3 px-3'>ここで「亡くなった時」,「生誕時」動画とPDFメッセージの見本を確認することができます。</h4>
                <div className='w-100'>
                    <div className='w-100 d-flex mt-5'>
                        <div className='w-50 border pt-4 pb-4 fw-bold cursor-pointer'>「亡くなった時」</div>
                        <div className='w-50 border pt-4 pb-4 fw-bold cursor-pointer'>「生誕時」</div>
                    </div>
                    <div className='w-100 d-flex'>
                        <div className='w-50 border pt-4 pb-4 fw-bold cursor-pointer bg-secondary' onClick={() => activeSample(0)}>動画見本</div>
                        <div className='w-50 border pt-4 pb-4 fw-bold cursor-pointer' onClick={() => activeSample(1)}>PDF見本</div>
                        <div className='w-50 border pt-4 pb-4 fw-bold cursor-pointer' onClick={() => activeSample(2)}>動画見本</div>
                        <div className='w-50 border pt-4 pb-4 fw-bold cursor-pointer' onClick={() => activeSample(3)}>PDF見本</div>
                    </div>
                </div>
                <div className='container mt-3 mb-5'>
                    {
                        activeTab ?
                            <div className='border border-1 d-flex pt-3 pb-3'>
                                <div className="sample-image">
                                    <img src='/assets/img/back.png' className='w-100' />
                                </div>
                                <div className='d-flex justify-content-center align-items-center sample-desc'>
                                    <div className="text-start w-75">
                                        <h4 className='fw-bold'>「亡くなった時」動画メッセージ</h4>
                                        <h6 className='mt-3'>「亡くなった時」に備えて残せるメッセージのサンプルです。動画投稿サービスであるYouTubeを活用して、動画で大切な人にメッセージを残します。</h6>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='border border-1 d-flex pt-3 pb-3'>
                                <div className="sample-image">
                                    <img src='/assets/img/back.png' className='w-100' />
                                </div>
                                <div className='d-flex justify-content-center align-items-center sample-desc'>
                                    <div className="text-start w-75">
                                        <h4 className='fw-bold'>「亡くなった時」動画メッセージ</h4>
                                        <h6 className='mt-3'>「亡くなった時」に備えて残せるメッセージのサンプルです。動画投稿サービスであるYouTubeを活用して、動画で大切な人にメッセージを残します。</h6>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Ability;