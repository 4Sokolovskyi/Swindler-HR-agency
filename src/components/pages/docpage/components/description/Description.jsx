

import { FaAngleDoubleDown } from "react-icons/fa";
import "./description.scss"

const Description = ({title, text}) => {
   return (
      <div className='description'>
         <div className="description__wrapper">
            <h1 className="description__title">{title}</h1>
            <div className="description__content">
               <div className="description__img-side">
                  <img src="men.png" alt="worker"/>
               </div>
               <div className="description__info-side">
                  <p>{text}</p>
                  <a href="#"><span>See more</span><FaAngleDoubleDown/></a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Description