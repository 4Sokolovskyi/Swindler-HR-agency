
import "./info.scss"
import SectionRight from "./sections/SectionRight"
import SectionLeft from "./sections/SectionLeft"

const infoData = {
   legal: {
      title:"Legal Services",
      text:"Expert legal services tailored to your needs. Our dedicated team provides comprehensive support in navigating complex legal matters with precision and integrity. Trust us to safeguard your rights and interests effectively, ensuring peace of mind in any legal situation.",
      img:"/legal.jpg",
      linkPage:"/legal",
   },
   accounting: {
      title:"Accounting",
      text:"Streamline your finances with our comprehensive accounting services. From bookkeeping to tax preparation, our skilled team ensures accuracy and compliance. With tailored solutions and meticulous attention to detail, we help you optimize your financial performance and achieve your goals.",
      img:"/accounting.jpg",
      linkPage:"/accounting",
   },
   licenses: {
      title:"Licenses",
      text:"Navigate licensing complexities seamlessly with our expert guidance. From application to renewal, our team ensures compliance and efficiency, saving you time and hassle. Trust us to secure the necessary licenses and permits to keep your operations running smoothly.",
      img:"/licenses.jpg",
      linkPage:"/licenses",
   },
}

const Info = () => {
   return (
      <div className="info">
         <div className="info__wrapper">
            <h2 className="info__title">We specialize in everything you need.<br/> What we do?</h2>
            <SectionRight 
            title={infoData.legal.title} 
            text={infoData.legal.text}
            img={infoData.legal.img}
            linkPage={infoData.legal.linkPage}
            />
            <SectionLeft 
            title={infoData.accounting.title} 
            text={infoData.accounting.text}
            img={infoData.accounting.img}
            linkPage={infoData.accounting.linkPage}
            />
            <SectionRight 
            title={infoData.licenses.title} 
            text={infoData.licenses.text}
            img={infoData.licenses.img}
            linkPage={infoData.licenses.linkPage}
            />
         </div>
      </div>
   )
}

export default Info