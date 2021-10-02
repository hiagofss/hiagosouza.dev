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
							I'm Hiago, software developer for over 4 years, always looking to
							innovate and learn new technologies to put them into practice in
							my daily life, always aiming to deliver with quality and
							excellence. I face problems and difficulties in a positive way so
							that I can acquire more and more knowledge and evolve in my
							career.
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
