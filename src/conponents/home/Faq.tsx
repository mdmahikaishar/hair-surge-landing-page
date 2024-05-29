import { FAQS } from "@/constances";

export default function Faq() {
    return (
      <section className="">
        <div className="px-8 py-6 holder bg-orange-300 text-black rounded-xl">
          <div className="w-3/5 flex flex-col gap-4">
            {FAQS.map(item => (
              <div className="flex items-start gap-2" key={item}>
                <div className="flex-none w-6 h-6 bg-red-500"></div>
                <p className="">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }