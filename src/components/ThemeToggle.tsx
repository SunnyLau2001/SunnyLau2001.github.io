import { useEffect, useState } from 'react';
import { Icons } from './Icons';

const ThemeToggle = () => {
	const [theme, setTheme] = useState<'dark' | 'light'>('light');

	useEffect(() => {
		const localPref = localStorage.theme;
		if (localPref === 'dark' || localPref === 'light') {
			setTheme(localPref);
		} else {
			// Initialize theme
			localStorage.theme = 'light';
		}
	}, []);

	const handleTheme = () => {
		switch (theme) {
			case 'dark':
				localStorage.theme = 'light';
				setTheme('light');
				break;
			case 'light':
				localStorage.theme = 'dark';
				setTheme('dark');
				break;
		}
		document.documentElement.classList.toggle('dark');
	};
	return (
		<button
			onClick={handleTheme}
			className="w-12 h-12 border rounded-full hover:bg-zinc-100 active:bg-zinc-300 dark:hover:bg-zinc-600 dark:active:bg-zinc-400 transition-all duration-300"
		>
			{theme === 'dark' ? <Icons.DarkTheme className="mx-auto dark:fill-white dark:stroke-white" /> : <Icons.LightTheme className="mx-auto" />}
		</button>
	);
};

export default ThemeToggle;
