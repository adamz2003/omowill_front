import { useState } from 'react';
import './about.css';

function About() {

    const [activeTab, setActiveTab] = useState(true);

    return (
        <div className="about-container">
            <div className='about-lcontainer'>
                <h4 onClick={() => setActiveTab(true)}>PDFの発行</h4>
                <h4 className='mt-5' onClick={() => setActiveTab(false)}>ご家族やご遺族からの閲覧申請</h4>
            </div>
            <div className='about-rcontainer'>
                {
                    activeTab ?
                        <div>
                            <h2 className='fw-bold'>動画や手紙の閲覧について(PDFの発行)</h2>
                            <h6 className='mt-5'>「亡くなった時」 「生誕時」のメッセージどちらも動画または手紙の登録時にログインID・PASSの記載されたPDFを発行</h6>
                        </div>
                        :
                        <div>
                            null
                        </div>
                }
            </div>
        </div>
    )
}

export default About;