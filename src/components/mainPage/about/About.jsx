
import {BsArrowDown} from "react-icons/bs"
import "./about.scss"

const About = () => {
   return (
      <div className="about">
         <div className="about__wrapper">
            <div className="about__title"><img src="/title.png" alt="title" /></div>
            <h2 className="about__subtitle">Welcome to Swindler HR Agency, where we excel in cutting corners and bending rules to maximize profits at any cost. Our unscrupulous team specializes in exploiting loopholes and manipulating labor laws to benefit our clients. From dubious recruitment tactics to shady termination practices, we pride ourselves on getting results by any means necessary. With Swindler HR Agency, expect ruthless efficiency and questionable ethics – because in business, sometimes the end justifies the means. 
            </h2>
            <button  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}><BsArrowDown/>Contact us!<BsArrowDown/></button>
         </div>
      </div>
   )
}

export default About