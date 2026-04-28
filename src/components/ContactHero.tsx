"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import ArrowLink from "./ArrowLink";

interface ContactData {
	email: string;
	phoneNumber: string;
}

interface ContactProps {
	contactData: ContactData;
}

function ContactHero({ contactData }: ContactProps) {
	const { email, phoneNumber } = contactData;

	const contactMethods = [
		{
			icon: (
				<svg
					className="w-16 h-16"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
			),
			title: "Call us at " + phoneNumber,
			subtitle: "We're here to assist you!",
			linkText: "Call us",
			href: "tel:" + phoneNumber,
		},
		{
			icon: (
				<svg
					className="w-16 h-16"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
			title: "Send us an email",
			subtitle: "We'd love to hear from you!",
			linkText: "Email us",
			href: "mailto:" + email,
		},
	];

	return (
		<section className="relative w-full h-[55rem] py-20 px-4 sm:px-8 flex justify-center items-center overflow-hidden">
			{/* Background Video */}
			<motion.div
				className="absolute inset-0 -z-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5, ease: "easeOut" }}
			>
				<video
					autoPlay
					muted
					loop
					playsInline
					className="w-full h-full object-cover"
				>
					<source src="/video_wave_gladiatos.mp4" type="video/mp4" />
				</video>
			</motion.div>

			{/* Dark overlay for better text readability */}
			<div className="absolute inset-0 bg-background/30 -z-10" />

			<div className="max-w-6xl mx-auto relative z-10">
				{/* Title */}
				<motion.h2
					className="text-[clamp(1.8rem,8vw,4rem)] lg:text-7xl font-orbitron text-primary font-bold text-center mb-6 md:mb-16"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 1 }}
				>
					Need More Help?
				</motion.h2>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{contactMethods.map((method, index) => (
						<motion.div
							key={index}
							className="rounded-sm p-4 md:p-6 bg-white/80 dark:bg-black/80 shadow-lg border border-white/20 dark:border-white/10 transition-all duration-300"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 1.3 }}
						>
							<div className="flex items-start gap-6">
								{/* Icon */}
								<div className="text-foreground flex-shrink-0">
									{method.icon}
								</div>

								{/* Content */}
								<div className="flex-1">
									<h3 className="text-md md:text-2xl font-semibold text-foreground mb-2">
										{method.title}
									</h3>
									<p className="text-sm md:text-base mb-4">{method.subtitle}</p>
									<Link href={method.href} className="inline-block">
										<ArrowLink text={method.linkText} />
									</Link>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ContactHero;
