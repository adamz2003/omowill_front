import { useNavigate } from 'react-router';
import './footer.css';

function Footer() {
    const navigate = useNavigate()
    const gotoUrl = (url) => {
        navigate(url)
    }
    return (
        <div className='footer-container'>
            <div className='d-flex gap-4 footer-content'>
                <div>
                    <h2>OMOW<span className='opacity-3'>I</span>LL</h2>
                    <h6 className='fw-bold'>「想いを 「今」 WEB上に残しておく</h6>
                </div>
                <div className='d-flex justify-content-between flex-column'>
                    <div></div>
                    <div>
                        <h6 onClick={() => gotoUrl("/")}>▸ HOME</h6>
                        <h6 onClick={() => gotoUrl("")}>▸ よくある質問</h6>
                    </div>
                </div>
                <div className='d-flex justify-content-between flex-column'>
                    <div></div>
                    <div>
                    <h6 onClick={() => gotoUrl("")}>▸ ご利用規約</h6>
                    <h6 onClick={() => gotoUrl("")}>▸ プライバシーポリシー</h6>
                    </div>
                </div>
                <div className='d-flex justify-content-between flex-column'>
                    <div></div>
                    <h6 onClick={() => gotoUrl("")}>▸ お問合せ</h6>
                </div>
            </div>
            <div className='d-flex justify-content-between flex-column'>
                <div></div>
                <h6>©OMOWILL All Rights Reserved</h6>
            </div>
        </div>
    )
}

export default Footer;