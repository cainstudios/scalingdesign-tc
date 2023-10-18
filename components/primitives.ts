import { tv } from "tailwind-variants";

export const title = tv({
	base: "tracking-tight inline font-semibold",
	variants: {
		color: {
			violet: "from-[#FF1CF7] to-[#b249f8]",
			yellow: "from-[#FF705B] to-[#FFB457]",
			blue: "from-[#5EA2EF] to-[#0072F5]",
			cyan: "from-[#00b7fa] to-[#01cfea]",
			green: "from-[#6FEE8D] to-[#17c964]",
			pink: "from-[#FF72E1] to-[#F54C7A]",
			foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
			shuddle100: "from-[#82A8FD] to-[##638DEA]",
			shuddle200: "from-[#638DEA] to-[#587FD8]",
			shuddle300: "from-[#587FD8] to-[#4D72C5]",
			shuddle400: "from-[#4D72C5] to-[#4265B2]",
			shuddle500: "from-[#4265B2] to-[#2D4A8D]",
			shuddle600: "from-[#2D4A8D] to-[#1A3168]",
			shuddle700: "from-[#1A3168] to-[#112655]",
			shuddle800: "from-[##011542] to-[#081B42]",
			shuddle900: "from-[#010D28] to-[#00081A]",
			shuddle1000: "from-[#00081A] to-[#000000]",
		},
		size: {
			sm: "text-3xl lg:text-4xl",
			md: "text-[2.3rem] lg:text-5xl leading-9",
			lg: "text-4xl lg:text-6xl",
		},
		fullWidth: {
			true: "w-full block",
		},
	},
	defaultVariants: {
		size: "md",
	},
	compoundVariants: [
		{
			color: [
				"violet",
				"yellow",
				"blue",
				"cyan",
				"green",
				"pink",
				"foreground",
				"shuddle100",
			],
			class: "bg-clip-text text-transparent bg-gradient-to-b",
		},
	],
});

export const subtitle = tv({
	base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
	variants: {
		fullWidth: {
			true: "!w-full",
		},
	},
	defaultVariants: {
		fullWidth: true
	}
});
