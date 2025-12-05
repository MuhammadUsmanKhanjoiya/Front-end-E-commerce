import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from '../Components/Newsletter'

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8  border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
           <img className="w-full md:max-w-[450px]" src={assets.about_img} alt=""/>
           <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptate eius illum inventore fugiat fuga, rem eveniet reiciendis cumque. Quod, voluptatibus illo. Praesentium amet animi incidunt maiores doloribus illo eius.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi possimus eos ad labore optio vero quam quod, eum consequatur accusamus quis voluptas modi! Iste doloremque aut blanditiis itaque iure tempora!</p>
              <b>Our Mission</b>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eveniet natus excepturi alias, sequi, nihil commodi nam nesciunt error a, consequuntur illo eum eaque reiciendis labore cumque numquam voluptatum deserunt.</p>
           </div>
      </div>
      <div className="text-4xl py-4 ">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatem nisi cupiditate nobis quisquam quibusdam ea eaque nemo ullam ab!</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatem nisi cupiditate nobis quisquam quibusdam ea eaque nemo ullam ab!</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatem nisi cupiditate nobis quisquam quibusdam ea eaque nemo ullam ab!</p>
        </div>
      </div>
        <NewsletterBox/>      
    </div>
  );
}

export default About;
