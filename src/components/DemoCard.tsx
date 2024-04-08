interface DemoCardProps {
	title: string;
	chips: Array<string>;
	description: string;
	imageSrc: string;
	link?: string;
}

const DemoCard = (props: DemoCardProps) => {
	const LinkWrapper = ({ children }: { children: React.ReactNode }) => {
		if (props.link) return <a href={props.link}>{children}</a>;
		return <>{children}</>;
	};

	return (
		<LinkWrapper>
			<div className="flex sm:flex-col w-auto p-4 gap-4 border rounded-md ">
				<img
					src={props.imageSrc}
					alt="project screenshot"
					className="min-w-[36%] h-[120px] sm:h-[180px] object-cover object-[50%0%] rounded-sm"
				/>
				<div className="flex flex-col items-start dark:text-white">
					<h3 className="">{props.title}</h3>
					<div className="chips flex gap-1">
						{props.chips.map((chip, index) => (
							<span key={index} className="chip text-xs text-zinc-700 border px-2 rounded-full dark:text-zinc-300">
								{chip}
							</span>
						))}
					</div>
					<p className="text-sm text-left mt-2">
						<span>{props.description}</span>
					</p>
					<p></p>
				</div>
			</div>
		</LinkWrapper>
	);
};

export default DemoCard;
