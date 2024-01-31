import { useEffect, useState } from 'react';
import './forgot.css';
import { useNavigate } from 'react-router-dom';
import serverURL from '../../util/url';
import $ from 'jquery';
import { useAuth } from '../../context/AuthProvider';

function Forgot() {
    const {logout} = useAuth()
    useEffect(() => {
        logout()
    },[])
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');

    const forgotAction = () => {
        if ($('#email').val() === '') {
            setErrMsg('メールアドレスを入力してください。');
        } else {
            var forgotInfo = {
                email: $('#email').val(),
            }

            sessionStorage.setItem('forgotEmail', JSON.stringify($('#email').val()));

            fetch(serverURL + '/forgot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(forgotInfo)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data === 'email exist') {
                        setErrMsg('');
                        navigate('/reset');
                    } else {
                        setErrMsg('メールアドレスが存在しません。');
                    }
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    }

    return (
        <div className='login-container'>
            <div className="container">
                <div className="row login-box">
                    <div className="col-sm-12 col-md-12 col-lg-6 px-5 login-intro-box">
                        <div className='d-flex justify-content-between flex-column'>
                            <h2 className='fw-bold'>震災/津波/災害/戦争</h2>
                            <p className='fw-bold mb-0'>東日本大震災で、写真や手紙など</p>
                            <p className='fw-bold mb-0'>本来、 想いを残してきたツールは</p>
                            <p className='fw-bold mb-0'>津波で跡形もなく消えてなくなる</p>
                            <h1 className='fw-bold mt-4'>OMOW<span className='opacity-3'>I</span>LL</h1>
                            <p className='fw-bold mb-0'>想いを「今」WEB上に残しておく</p>
                        </div>
                        <p className='mt-4'>マイページ入会/ご利用登録はこちら...</p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 login-form-box">
                        <div className="card">
                            <div className="card-body">
                                <h2 className='text-center fw-bold mb-0' style={{ fontSize: '35px' }}>パスワード<br />メールアドレス</h2>
                                <input type='text' className='form-control w-100' id='email' placeholder='メールアドレス' />
                                <div className='w-100 text-center'>
                                    <button type="button" className="btn btn-primary fw-bold" onClick={() => forgotAction()}>ログイン</button>
                                </div>
                                <div className='text-center'>
                                    <a href='/register'>
                                        <p className='font-primary text-dark'>ログイン</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                errMsg !== '' ?
                    <div className='errMsg'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src='/assets/img/error.png' alt='' />
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <p className='mb-0'>{errMsg}</p>
                        </div>
                    </div>
                    :
                    null
            }

        </div>
    )
}

export default Forgot;