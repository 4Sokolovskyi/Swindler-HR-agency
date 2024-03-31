


import Docpage from "./docpage/Docpage"

const items = {
   title: "Accounting",
   text: "Accounting is the language of business, translating financial data into actionable insights that drive informed decisions. Behind every successful enterprise lies a diligent accountant, meticulously balancing books, analyzing trends, and uncovering opportunities for growth. With precision and expertise, accountants ensure financial transparency, compliance, and fiscal responsibility. Their work is not just about numbers; it’s about building trust, fostering stability, and laying the foundation for prosperity. In a dynamic world of commerce, accounting provides the clarity and direction necessary to navigate challenges and seize opportunities. It’s more than a profession; it’s a vital force driving the engine of global economy towards success.",
   arr: [
      {
         title: "ORDER AGREEMENT",
         price: 50,
      },
      {
         title: "CONTRACT OF EMPLOYMENT",
         price: 50,
      },
      {
         title: "CONTRACT WORK",
         price: 50,
      },
      {
         title: "COMMAND OFFICE",
         price: 100,
      },
      {
         title: "PIT - 11",
         price: 50,
      },
      {
         title: "PIT – 37 (NOT CLIENTS)",
         price: 100,
      },
      {
         title: "OTHER PITS AT CUSTOMER REQUEST",
         price: 100,
      },
      {
         title: "CORRESPONDENCE WITH ZUS",
         price: 100,
      },
      {
         title: "CORRECTION OF DECLARATION OF GUILT /CUSTOMER REQUEST",
         price: 100,
      },
      {
         title: "CALCULATION OF ZUS SOLE OWNER SP. Z O.O",
         price: 50,
      },
      {
         title: "REGISTRATION SP. Z O.O. In ZUS",
         price: 50,
      },
      {
         title: "REGISTRATION OF AN INDIVIDUAL. In ZUS",
         price: 50,
      },
      {
         title: "OBTAINING A CERTIFICATE OF ABSENCE DEBT PAYMENT OF CONTRIBUTIONS ZUS",
         price: 100,
      },
      {
         title: "CREATION OF PERSONAL RECORDS FOR EMPLOYEES",
         price: 100,
      },
      {
         title: "MONTHLY PAYMENT OF EMPLOYEES",
         price: 50,
      },
      {
         title: "CALCULATION OF THE NATIONAL DELEGATION",
         price: 70,
      },
      {
         title: "CALCULATION OF FOREIGN DELEGATION",
         price: 100,
      },
   ],
}

const Accounting = () => {
   return (
      <Docpage items={items}/>
   )
}

export default Accounting