


import Docpage from "./docpage/Docpage"

const items = {
   title: "Licenses",
   text: "Licenses are the keys to unlocking endless possibilities and realizing one’s full potential. They signify expertise, dedication, and a commitment to excellence in a particular field. Whether it’s a driver’s license opening the door to exploration, a professional license validating years of hard work, or a business license marking the beginning of an entrepreneurial journey, each license represents a milestone achieved. Beyond mere credentials, licenses empower individuals to make meaningful contributions to society, ensuring safety, quality, and integrity in every endeavor. They serve as badges of honor, testament to perseverance, and reminders that with determination, any aspiration can be transformed into reality.",
   arr: [
      {
         title: "TAXI LICENSE",
         price: 2500,
      },
      {
         title: "TRANSPORT LICENSE (FOR CARGOES OVER 3.5 TONS)",
         price: 2000,
      },
      {
         title: "LICENSE FOR LOGISTICS ACTIVITIES",
         price: 1000,
      },
      {
         title: "EMPLOYMENT AGENCY LICENSE",
         price: 500,
      },
      {
         title: "COPYRIGHT REGISTRATION WITH THE PATENT BUREAU",
         price: 1500,
      },
      {
         title: "LICENSE FOR EDUCATIONAL INSTITUTIONS",
         price: 300,
      },
   ]
}

const Licenses = () => {
   return (
      <Docpage items={items} />
   )
}

export default Licenses