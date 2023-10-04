
import logo from '../assets/EQ.svg'
const Navbar =
	() => {
		// const [
		// 	darkMode,
		// 	setDarkMode,
		// ] =
		// 	useState(
		// 		true,
		// 	);

		return (
			<>
				<nav
					className={`flex justify-between p-4  px-8 sticky z-20 top-0
						bg-gray-950  text-white w-full md:w-full
					 `}>
					<a href="/">
						<div className='flex items-center'>
							<div className='flex items-center'>
								<img
									src={
										logo
									}
									alt='Meta Logo'
									className='sm:w-8 sm:h-8  md:w-8 md:h-8 md:mr-2 h-8 w-8 '
								/>
								<span className='text-lg font-bold  hidden md:block'>
									MetaVault
								</span>
							</div>
						</div>
					</a>
					<div className='flex items-center space-x-4'>
						{/* <button
							className={`rounded-full p-2 ${
								darkMode
									? 'bg-gray-200 text-white'
									: ' text-gray-800'
							} transition-all duration-300 ease-in-out focus:outline-none`}
							onClick={() =>
								setDarkMode(
									!darkMode,
								)
							}>
							<div className='w-12 h-6 rounded-full bg-gray-400 relative'>
								<div
									className={`w-8 h-8 rounded-full absolute top-0 transition-transform duration-300 ease-in-out ${
										darkMode
											? 'left-0 bg-gray-500'
											: 'right-0 bg-blue-600'
									}text-yellow-400`}></div>
								<div className='flex '>
									<FiSun
										className={`${
											!darkMode
												? 'bg-gray-400 text-yellow-500'
												: 'bg-white text-yellow-500'
										} text-2xl rounded-full mr-1 border-1 p-1 border-blue-800 `}
									/>
									<FiMoon
										className={`${
											!darkMode
												? 'text-blue-600 bg-black'
												: 'text-white'
										} text-2xl rounded-full`}
									/>
								</div>
							</div>
						</button> */}
						<a href="https://app.metavault.pro">
							<button className='bg-gradient-to-r from-purple-800 to-pink-600 text-white py-1 px-7 md:px-4 rounded-2xl hover:bg-blue-700 flex font-semibold'>
								Create{' '}
								<span className='hidden md:block ml-1'>
									Vault
								</span>
							</button>
						</a>
					</div>
				</nav>
			</>
		);
	};

export default Navbar;
