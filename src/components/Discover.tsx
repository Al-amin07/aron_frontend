import Image from "next/image"
import { syne } from "./Banner"
import { rubik } from "./fonts"
import img from '@/assets/dis.png'
import logoImg from '@/assets/Vector 6.png'
export default function Discover() {
    return (
        <section className={` bg-transparent  lg:ml-6 text-white`}>
            <div className="  border-2">
                <div className="grid relative grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`  ${rubik.className}  `}>
                        <h2 className={`  ${syne.className}  text-4xl md:text-5xl lg:text-6xl font-medium leading-tight`}>
                            Let&apos;s get know <br /> about me closer
                        </h2>
                        <p className="text-gray-400 mt-5 mb-12 text-lg max-w-xl">
                            Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio
                            showcases her wide range of work, spanning books, posters and web design.
                        </p>
                        <button className=" bg-primary text-white rounded-full px-8 py-3 text-sm font-medium">
                            Discover More About Me
                        </button>
                    </div>

                    <div className="relative">
                        <div className="relative  aspect-square max-w-[500px] mx-auto">
                            <Image
                                src={img}
                                height={350}
                                width={450}
                                alt="Designer portrait"

                                className="object-cover rounded-3xl"
                                priority
                            />
                            {/* Decorative elements */}
                            <div className="absolute -top-4 right-14 w-28 h-8 border border-orange-400 rounded-3xl" />
                            <div className="absolute bottom-12 -left-3 w-9 h-32 border border-orange-400 rounded-3xl" />
                        </div>
                    </div>
                    <Image src={logoImg} height={400} width={500} alt="logo" className="absolute -left-28 -top-32" />
                </div>
            </div>
        </section>
    )
}

