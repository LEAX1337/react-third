import React from "react"
import styles from "../styles"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"

const Hero = () => (
	<section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
		<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
			<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
				<img src={discount} alt="Discount" className="w-[32px] h-[32px]" />
				<p className={`${styles.paragraph} ml-2`}>
					<span className="text-white">20%</span> Discount For &nbsp;
					<span className="text-white">1 Month</span> Account
				</p>
			</div>

			<div className="flex flex-row justify-between items-center w-full">
				<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
					The Next <br className="sm:block hidden" /> <span className="text-gradient">Generation</span>
				</h1>

				<div className="ss:flex hidden mr-0 md:mr-4">
					<GetStarted />
				</div>
			</div>

			<h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Payment Method</h1>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint tenetur eaque voluptatem qui ad explicabo reiciendis saepe itaque.
			</p>
		</div>

		<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
			<img src={robot} alt="Robot" className="w-full h-full relative z-[5]" />

			<div className="absolute z-[0] w-2/5 h-[35%] top-0 pink__gradient" />
			<div className="absolute z-[1] w-4/5 h-4/5 rounded-full bottom-40 white__gradient" />
			<div className="absolute z-[0] w-1/2 h-1/2 right-20 botton-20 blue__gradient" />
		</div>

		<div className={`ss:hidden ${styles.flexCenter}`}>
			<GetStarted />
		</div>
	</section>
)

export default Hero
