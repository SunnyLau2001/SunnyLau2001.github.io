import { Icons } from "./Icons";

export const Navbar = () => {
	return (
		<nav className="flex justify-end">
			<ul className="flex">
				<li>
					<a href="https://github.com/SunnyLau2001" className="flex items-center">
						<Icons.Github />
						<span className="ml-1">Github</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};
