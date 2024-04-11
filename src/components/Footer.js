import logo from '../assets/EQ.png';
import { FaTelegramPlane } from 'react-icons/fa'
const Footer =
    () => {
        return (
            <div className=' pt-10 bg-black text-white'>
                <div className='py-20'>
                    <h1 className='text-4xl md:text-5xl font-semibold text-center md:w-[60%] w-[80%] mx-auto text-gray-300'>
                        Have
                        Questions
                        or
                        Partnership
                        Opportunities
                        ?
                        <br />
                    </h1>
                    <p className='text-2xl md:text-2xl text-gray-300 md:w-[60%] w-[80%] mx-auto text-center mt-5'>
                        Read
                        Pitch
                        Deck
                        or
                        Connect
                        with
                        support.
                    </p>
                </div>
                <div className='flex justify-center items-center md:w-[30%] mx-auto pb-20 -mt-7 mb-5 md:mt-0 md:mb-0'>
  <a href="https://docsend.com/view/xje9b7fr642cxrwv">
    <button className='px-4 py-2 rounded-md bg-gradient-to-r from-purple-800 to-pink-600'>
      Pitch Deck
    </button>
  </a>
  <button className='px-4 py-2 rounded-md bg-gray-400 ml-2'>
    Get Support
  </button>
</div>



                <footer className='bg-blue-950 text-gray-50 body-font pt-5 md:pt-0 hidden md:block '>
                    <div className='container md:px-5 md:py-2 mx-auto flex items-center sm:flex-row flex-col'>
                        <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-50'>
                            <img
                                src={
                                    logo
                                }
                                alt=''
                            />
                            <span className='ml-3 text-xl'>
                                MetaVault
                            </span>
                        </a>
                        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
                            ©
                            2020
                            MetaVault
                        </p>
                        <a a href="/privacy" className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:py-2 sm:mt-0 mt-4'>
                            Privacy Policy
                        </a>
                        <span className='inline-flex sm:ml-auto sm:mt-3 mt-4 justify-center sm:justify-start pb-6 gap-4'>
                            {/* <a className='text-gray-500'>
                                <svg
                                    fill='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    className='w-5 h-5'
                                    viewBox='0 0 24 24'>
                                    <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                                </svg>
                            </a> */}
                            <a href='https://twitter.com/metavaultglobal' target='_blank' className='ml-3 text-gray-500'>
                                <svg
                                    fill='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    className='w-5 h-5'
                                    viewBox='0 0 24 24'>
                                    <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                                </svg>
                            </a>
                            <a className='ml-3 text-gray-500'>
                                <svg
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    className='w-5 h-5'
                                    viewBox='0 0 24 24'>
                                    <rect
                                        width='20'
                                        height='20'
                                        x='2'
                                        y='2'
                                        rx='5'
                                        ry='5'></rect>
                                    <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                                </svg>
                            </a>

                            <a href='https://t.me/metavaultpro' className='ml-3 text-gray-500'>
                                <FaTelegramPlane className='h-6 w-6' />
                            </a>


                        </span>
                    </div>
                </footer>
            </div>
        );
    };

export default Footer;
