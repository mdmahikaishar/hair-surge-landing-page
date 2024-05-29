import { WHY_US_CARDS } from "@/constances"
import Image from "next/image"

export default function WhyUs() {
    return (
      <section className="">
        <div className="holder">
          {/* Top */}
          <div className="pt-6 pb-2 relative bg-orange-500 rounded-tl-xl rounded-tr-xl">
            <div className=""></div>
  
            <h3 className="mb-4 font-semibold text-center">স্বাস্থ্যকর ও ঘন চুলকে হ্যাঁ বলুন</h3>
            <div className="px-24 flex items-start justify-evenly gap-4">
              {WHY_US_CARDS.map(item => (
                <WhyUsCard {...item} key={item.text} />
              ))}
            </div>
          </div>
  
          {/* Bottom */}
          <div className="pt-6 pb-2 relative bg-orange-200 text-orange-500 rounded-bl-xl rounded-br-xl">
            <h3 className="mb-4 font-semibold text-center">কীভাবে দ্রুত আপনার চুলের পূর্বের সৌন্দর্য পুনরুদ্ধার করবেন?</h3>
            <div className="flex items-start justify-evenly">
              <WhyUsCard src="/step1.png" text="4 সপ্তাহের একটি সম্পূর্ণ কোর্স" key={0} />
              <div className="self-center text-6xl font-bold">...</div>
              <WhyUsCard src="/step2.png" text="আপনি সহজেই এই শ্যাম্পুটি পুরো এক মাস ব্যবহার করতে পারেন" key={1} />
              <div className="self-center text-6xl font-bold">...</div>
              <WhyUsCard src="/step3.png" text="ঘন, স্বচ্ছন্দগতির চুলের প্রভাব" key={2} />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function WhyUsCard(props: { src: string, text: string }) {
    return (
      <div className="w-36 px-4 py-2 flex flex-col items-center justify-center gap-2">
        <div className="w-20 h-20 grid">
          <Image className="w-full h-full object-container" src={props.src} width={100} height={100} alt={props.text} />
        </div>
        <p className="max-w-[20ch] text-sm text-center">{props.text}</p>
      </div>
    )
  }