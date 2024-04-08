import { cn } from '../lib/utils';

interface LinkProps {
	children: React.ReactNode;
	href: string;
	className?: string;
}

const linkStype = 'block px-4 py-2';

const Link = ({ children, href, className }: LinkProps) => {
	return (
		<>
			<a className={cn(linkStype, className)} href={href || '#'}>
				{children}
			</a>
		</>
	);
};

export default Link;
