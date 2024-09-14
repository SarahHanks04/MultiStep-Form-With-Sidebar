import React from 'react'
import ThankYou from "../../assets/ThankYou.svg"

const Success = () => {
  return (
    <div className="success-container mx-auto">
      <div className="text-center  pt-[4rem]">
        <img src={ThankYou} alt="" width={60} className="mx-auto" />
        <h1 className="text-2xl font-medium text-blue-950 my-4">Thank You!</h1>
      </div>
      <p className="text-gray-400">Thank you for confirming your subscription! We hope you have <br /> fun using our platform. If you ever need support, please feel <br /></p>
      <p className="text-gray-400 pl-10">free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Success;
