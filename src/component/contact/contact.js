import './contact.css';

function Contact() {
    return (
        <div className='d-flex justify-content-between'>
            <div className='contact-container'>
                <div className='w-100'>
                    <h2 className='fw-bold'>お問合せ</h2>
                    <p>内容を入力後、送信ボタンを押してください。</p>
                    <input type="text" className='form-control w-100 mt-3' id='contact-subject' placeholder='タイトルを入力してください。' />
                    <input type='text' className='form-control w-100 mt-3' id='contact-email' placeholder='emailを入力してください。' />
                    <textarea className='form-control w-100 mt-3' rows='5' id='contact-msg' placeholder='内容をここに入力してください。' />
                    <button className='btn btn-primary w-50 mt-4'>送&nbsp;&nbsp;&nbsp;信</button>
                </div>
            </div>
            <div className='contact-img'>
                <img src='/assets/img/home.png' alt='' className='w-100' />
            </div>
        </div>
    )
}

export default Contact;