import Image from 'next/image';
import profilePicture from '../public/profile.jpeg';

const About = () => {
	return (
		<div className='container px-4 mx-auto'>
			<div className='lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left'>
				<div className='lg:px-4 lg:mt-12 '>
					<h1 className='text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white'>
						Hey there,
					</h1>
					<div className='mt-6 text-gray-800 dark:text-white'>
						<p className='mb-4'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
							natus voluptatem necessitatibus rem voluptas ut porro dolorem
							earum reprehenderit enim sed incidunt repudiandae excepturi!
							Accusamus corporis aliquid totam quod ab.
						</p>
					</div>
				</div>
				<div className='flex-shrink-0 lg:mt-12 lg:px-4 mb-10'>
					<Image
						src={profilePicture}
						alt='Profile picture'
						priority={true}
						className='rounded-full'
						width={250}
						height={250}
						placeholder='blur'
					/>
				</div>
			</div>
		</div>
	);
};
export default About;
