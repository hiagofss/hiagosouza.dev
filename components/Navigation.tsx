import Link from 'next/link';

import navLinks from '../data/navLinks';
import ThemeSwitch from './ThemeSwitch';
import siteMetadata from '../data/siteMetadata';

const Navigation = () => {
	return (
		<div className='sticky top-0 z-20 py-2 bg-white md:py-6 dark:bg-black'>
			<div className='container px-4 mx-auto lg:max-w-4xl flex items-center justify-between'>
				<Link href='/'>
					<a className='font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white'>
						{siteMetadata.title}
					</a>
				</Link>

				<div className='flex items-center'>
					{navLinks.map((link) => (
						<Link href={link.href} key={link.title}>
							<a className='px-3 font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white'>
								{link.title}
							</a>
						</Link>
					))}

					<ThemeSwitch />
				</div>
			</div>
		</div>
	);
};

export default Navigation;
