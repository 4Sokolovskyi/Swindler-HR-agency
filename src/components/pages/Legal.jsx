


import Docpage from "./docpage/Docpage"

const items = {
   title: "Legal Services",
   text: "Legal services are the bedrock of a fair society, ensuring rights are protected, justice is served, and disputes are resolved. Every case, whether small or monumental, hinges on the expertise and dedication of legal professionals. From advocating for the voiceless to upholding the rule of law, legal services empower individuals and businesses to navigate complexities with confidence. Behind every successful case lies a team committed to meticulous research, strategic planning, and unwavering advocacy. In a world where challenges arise daily, legal services stand as a beacon of hope, offering guidance, protection, and the promise of a brighter tomorrow.",
   arr: [
      {
         title: "PESEL",
         text: "An identification number",
         price: 150,
         time: "1 day",
      },
      {
         title: "EPUAP",
         text: "Electronic signature",
         price: 200,
         time: "1 day",
      },
      {
         title: "LEGAL ADDRESS",
         text: "Legal company registration address",
         price: 500,
         time: "1 day",
      },
      {
         title: "BANK ACCOUNT",
         text: "Company account",
         price: 200,
         time: "1 day",
      },
      {
         title: "CHANGES TO KRS",
         text: "Making changes to an existing company",
         price: 1350,
         time: "45 days",
      },
      {
         title: "CHANGES TO CEIDG",
         text: "Changing IP data",
         price: 200,
         time: "7 days",
      },
      {
         title: "CRBR",
         text: "Submission of information about the company's beneficiaries",
         price: 200,
         time: "30 min",
      },
      {
         title: "EORI",
         text: "Customs number",
         price: 500,
         time: "3 days",
      },
      {
         title: "INFORMACJA STAROSTY",
         text: "Labor market test",
         price: 200,
         time: "14 days",
      },
      {
         title: "ZAP - 3",
         text: "Registration of employee data with the tax office",
         price: 50,
         time: "1 day",
      },
      {
         title: "CFR – 1",
         text: "Tax resident certificate",
         price: 150,
         time: "2 days",
      },
      {
         title: "BHP",
         text: "Familiarization with safety precautions in the workplace",
         price: 250,
         time: "1 day",
      },
   ]
}

const Legal = () => {
   return (
      <Docpage items={items}/>
   )
}

export default Legal