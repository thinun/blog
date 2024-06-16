import Image from "next/image";
import './contact.css'

const contact = () => {
    return (
        <div className="contact-container flex flex-row items-center justify-between">
            <div className="contact-left flex flex-col items-center justify-center w-1/2">
                <Image src={'/contact.png'} alt={'contact image'} width={400} height={400} className={'block'}/>
            </div>
            <div className="contact-right flex flex-col items-center justify-center w-1/2">
                <form className={'flex flex-col items-center justify-between gap-3 w-3/4'}>
                    <input type={'text'}
                           className={'form-input'}
                           placeholder={'Name and Surname'}
                           required/>
                    <input type={'email'}
                           className={'form-input'}
                           placeholder={'Your Email Address'}/>
                    <input type={'tel'}
                           className={'form-input'}
                           placeholder={'Your Mobile Number (Optional)'}/>
                    <textarea className={'form-input'}
                              rows={10}
                              placeholder={'Message'}/>
                    <button type={'submit'} className={'form-btn'}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default contact;
