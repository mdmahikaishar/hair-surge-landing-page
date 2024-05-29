import { Contact, ExtraUs, Faq, Footer, Formula, HairTips, Hero, Ingridences, Offer, OrderNow, Testimonial, WhyUs } from "@/conponents/home";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-red-800 text-white">
      <div className="">
        <Hero />
        <WhyUs />
      </div>
      <Ingridences />
      <ExtraUs />
      <HairTips />
      <div className="holder">
        <p className="text-sm text-center mx-auto">দুর্দান্ত বৃদ্ধির জন্য Hair Surge Shampoo -এর নিয়মিত ব্যবহার আপনার চুলকে শক্তিশালী এবং স্বাস্থ্যকর করে তুলবে!</p>
      </div>
      <Testimonial />
      <Faq />
      <Offer />
      <Formula />
      <Contact />
      <OrderNow />
      <Footer />
    </div>
  );
}