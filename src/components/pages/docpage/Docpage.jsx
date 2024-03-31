
import { useState } from "react"
import "./docpage.scss"
import Backbtn from "./components/backbtn/Backbtn"
import Description from "./components/description/Description"
import Option from "./components/option/Option"
import Contacts from "../../mainPage/contacts/Contacts"

const Docpage = ({items}) => {
   const [textGmailJs, setTextGmailJs] = useState("")
   return (
      <div className='docpage'>
         <Backbtn />
         <Description title={items.title} text={items.text} />
         <div className="docpage__list">
            {
               items.arr.map(i => <Option title={i.title} price={i.price} setTextGmailJs={setTextGmailJs}/>)
            }
         </div>
         <Contacts value={textGmailJs}/>
      </div>
   )
}

export default Docpage