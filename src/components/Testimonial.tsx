import { Quote } from "lucide-react"
import { syne } from "./fonts"
import img from '@/assets/Vector 8.png'
import Image from "next/image"
export default function Testimonial() {
    return (
        <section className={`bg-transparent text-white py-20 px-0  lg:px-4`}>
            <div className="container  mx-auto max-w-6xl relative">
                {/* Decorative quote marks */}
                <div className="absolute top-0 right-0 text-orange-400">

                    <Quote className="h-12 w-12 md:w-16  md:h-16 -mt-2 md:-mt-4" />
                </div>

                <div className="max-w-3xl  relative">
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-medium mb-12 ${syne.className}`}>Testimonial</h2>

                    <blockquote className="space-y-8">
                        <p className="text-[#949494] text-sm md:text-lg leading-relaxed">
                            Aaronn was fantastic to work with from the finish. We were looking for a simple, standout logo and he
                            delivered. I tried designing the logo myself thinking I wouldn&apos;t need to pay the money for a professional
                            graphic designer but I was wrong. Working with Aaronn was worth every penny and was surprisingly
                            affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can&apos;t
                            thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a
                            Design!&quot;
                        </p>
                        <footer className="text-lg font-medium">
                            <cite className="not-italic">-Martin lee</cite>
                        </footer>
                    </blockquote>

                    <Image src={img} className="absolute -left-80 bottom-16" alt="logo" />

                </div>
            </div>
        </section>
    )
}

