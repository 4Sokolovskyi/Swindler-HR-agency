

import { GrFormPrevious } from "react-icons/gr";
import "./backbtn.scss"
import { Link } from "react-router-dom";

const Backbtn = () => {
   return (
      <div className='backbtn'>
         <div className="backbtn__wrapper">
            <Link to="/" className="backbtn__button">
               <GrFormPrevious />
               <span>Back</span>
            </Link>
         </div>
      </div>
   )
}

export default Backbtn