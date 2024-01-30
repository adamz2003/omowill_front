import { useState } from 'react';
import serverURL from '../../util/url';
import './register.css';
import $ from 'jquery';
import isValidEmail from '../../util/checkEmail';
import PdfGenerator from '../../util/jspdf';
import { toast } from 'react-toastify';

function Register() {

    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const regAction = () => {
        if ($('#name').val() === '') {
            toast.error('名前を入力してください。');
        } else if ($('#birth').val() === '') {
            toast.error('誕生日を入力してください。');
        } else if ($('#address').val() === '') {
            toast.error('住所を入力してください。');
        } else if ($('#email').val() === '') {
            toast.error('メールアドレスを入力してください。');
        } else if (!isValidEmail($('#email').val())) {
            toast.error('メールの形式が正しくありません。');
        } else if ($('#pwd').val() === '') {
            toast.error('パスワードを入力してください。');
        } else if ($('#confirmPwd').val() === '') {
            toast.error('確認パスワードを入力してください。');
        } else if ($('#pwd').val() !== $('#confirmPwd').val()) {
            toast.error('パスワードが正しくありません。');
        } else if (!$('#regCheckBox').prop('checked')) {
            toast.error('サービス規約に同意する必要があります。')
        } else {
            var regInfo = {
                name: $('#name').val(),
                birth: $('#birth').val(),
                address: $('#address').val(),
                email: $('#email').val(),
                password: $('#pwd').val(),
                telephone: $('#telephone').val()
            }

            fetch(serverURL + '/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(regInfo)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data === 'email already exists') {
                        toast.error('メールアドレスが既に存在します。');
                    } else {
                        toast.success('ご利用登録が成果的に行われました。');
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
                        <div className="card login-card">
                            <div className="card-body">
                                <h2 className='text-center fw-bold mb-0' style={{ fontSize: '35px' }}>ご利用登録</h2>
                                <input type='text' className='form-control w-100' id='name' placeholder='氏名' />
                                <input type='date' className='form-control w-100' id='birth' />
                                <input type='text' className='form-control w-100' id='address' placeholder='住所' />
                                <input type='text' className='form-control w-100' id='email' placeholder='メールアドレス' />
                                <input type="password" className='form-control w-100' id='pwd' placeholder='パスワード' />
                                <input type="password" className='form-control w-100' id='confirmPwd' placeholder='パスワード' />
                                <input type="text" className='form-control w-100' id='telephone' placeholder='電話(任意)' />
                                <div className="form-check">
                                    <input className="form-check-input border border-1" type="checkbox" id="regCheckBox" name="option1" value="something" />
                                    <label className="form-check-label">
                                        無断転載・無断使用をしない事に同意する
                                    </label>
                                </div>
                                <div className='w-100 text-center'>
                                    <button type="button" className="btn btn-primary fw-bold login-btn" onClick={() => regAction()}>ログイン</button>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div></div>
                                    <a href='/login'>
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

            {
                successMsg !== '' ?
                    <div className='successMsg'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src='/assets/img/success.png' alt='' />
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <p className='mb-0'>{successMsg}</p>
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default Register;