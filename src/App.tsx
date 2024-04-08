import './App.css';
import Link from './components/Link';
import { Icons } from './components/Icons';
import ThemeToggle from './components/ThemeToggle';
import DemoCard from './components/DemoCard';

import { projectDetails } from './constants/projects';

function App() {
	return (
		<main className="min-h-dvh dark:bg-zinc-700 transition-all duration-500">
			<div className="utils fixed top-8 left-8">
				<ThemeToggle />
			</div>
			<div className="min-h-dvh w-full max-w-[800px] flex flex-col justify-center mx-auto p-8 gap-4">
				<div className="sm:text-center">
					<h1 className="text-4xl dark:text-white">Hello! Here is Sunny!</h1>
					<p className="dark:text-white mt-2">Welcome to my profile page, you can know more about me through</p>
				</div>
				<section className="social-media-link w-full sm:w-[400px] grid content-center mx-auto py-4">
					<Link
						className="flex justify-center border rounded-md hover:bg-zinc-100 active:bg-zinc-300 dark:hover:bg-zinc-600 dark:active:bg-zinc-400 transition duration-300"
						href="https://github.com/SunnyLau2001"
					>
						<Icons.Github className="dark:fill-white" />
						<span className="ml-2 dark:text-white">Github</span>
					</Link>
				</section>
				<p className="dark:text-white sm:text-center">Or some demo I created</p>
				<section className="demo-cards w-full max-w-[800px] grid sm:grid-cols-2 gap-4 mx-auto">
					{projectDetails.map((project, index) => (
						<DemoCard
							key={index}
							title={project.title}
							chips={project.chips}
							description={project.description}
							imageSrc={project.imageSrc}
							link={project.link}
						/>
					))}
				</section>
			</div>
		</main>
	);
}

export default App;
