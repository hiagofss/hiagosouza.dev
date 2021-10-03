import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';

export default function Home() {
	return (
		<div className='space-y-14 lg:space-y-24'>
			<Header title='About - Hiago Souza' />
			<main className='max-w-4xl mx-auto mt-16 antialiased'>
				<About />
			</main>
		</div>
	);
}
