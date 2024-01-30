import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import $ from 'jquery';
import isValidEmail from '../../util/checkEmail';
import serverURL from '../../util/url';
import { toast } from 'react-toastify';

function Login() {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');

    const loginAction = () => {

        if ($('#email').val() === '') {
            toast.error('メールアドレスを入力してください。');
        } else if ($('#pwd').val() === '') {
            toast.error('パスワードを入力してください。');
        } else if (!isValidEmail($('#email').val())) {
            toast.error('メールの形式が正しくありません。');
        } else if (!$('#loginCheckBox').prop('checked')) {
            toast.error('サービス規約に同意する必要があります。');
        } else {
            var loginInfo = {
                email: $('#email').val(),
                password: $('#pwd').val(),
            }

            fetch(serverURL + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginInfo)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data === 'success') {
                        navigate('/mypage');
                    } else {
                        toast.error('メールアドレスまたはパスワードが正しくありません。');
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
                                <h2 className='text-center fw-bold mb-0'>ログイン</h2>
                                <input type='text' className='form-control w-100' id='email' placeholder='メールアドレス' />
                                <input type="password" className='form-control w-100' id='pwd' placeholder='パスワード' />
                                <div className="form-check">
                                    <input className="form-check-input border border-1" type="checkbox" id="loginCheckBox" name="option1" value="something" />
                                    <label className="form-check-label">
                                        無断転載・無断使用をしない事に同意する
                                    </label>
                                </div>
                                <div className='w-100 text-center'>
                                    <button type="button" className="btn btn-primary fw-bold" onClick={() => loginAction()}>ログイン</button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <a href='/forgot'>
                                        <p className='text-dark cursor-pointer'>パスワードをお忘れの方  </p>
                                    </a>
                                    <a href='/register'>
                                        <p className='font-primary text-dark'>ご利用登録</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;