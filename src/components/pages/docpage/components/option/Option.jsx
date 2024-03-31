

import "./option.scss"
import { BsFillSendArrowUpFill } from "react-icons/bs";

const Option = ({ title, price, setTextGmailJs }) => {
   const handeleClick = () => {
      setTextGmailJs(title)
      window.scrollTo(0, document.body.scrollHeight);
   }
   return (
      <div className='option'>
         <div className="option__wrapper">
            <div className="option__content">
               <div className="option__left">
                  <h2 className="option__title">{title}</h2>
                  <p className="option__text">You will receive all instructions together with the receipt stamp for document collection.</p>
               </div>
               <div className="option__right">
                  <div className="option__time">3 days</div>
                  <div className="option__price">{price}Zł</div>
                  <button onClick={()=>handeleClick()} className="option__btn"><span>Contact us</span><BsFillSendArrowUpFill/></button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Option