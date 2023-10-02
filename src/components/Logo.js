// // import Head from 'next/head'
// import { Suspense } from "react"
// import { Canvas, useLoader } from "@react-three/fiber"
// import { Extend,Environment, OrbitControls } from "@react-three/drei"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
// import { ArrowRightIcon } from "@heroicons/react/24/outline";
// // import { Html } from "@react-three/drei"
// // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// // import Layout from '../components/layout'
// import { motion } from 'framer-motion'
// import { Html, useProgress } from '@react-three/drei'




// function Loader() {
//     const { progress } = useProgress()

//     const styles = {
//         background: 'linear-gradient(to right, #8a2387, #e94057, #f27121)',
//         fontSize: '3rem',
//         fontWeight: 'bold',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//         height: '100%',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         whiteSpace: 'nowrap',
//     };

//     return (
//         <><div>
//             <title>Kissan Global Network</title>
//             <meta name="description" content="Welcome to Kissan Token Empowering Farmers. Globally Discover a revolutionary blockchain platform that connects farmers and consumers directly.
//              Buy, sell, and trade agricultural products securely and transparently Join the agricultural revolution today"/>
//             <meta charset="UTF-8" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <meta name="keywords" content="Kissan Token, cryptocurrency, blockchain, decentralised finance, digital currency, cryptoassets, ksn token" />
//             <meta name="author" content="Kissan Token" />
//             <meta name="robots" content="index, follow" />

//             <a rel="preconnect" href="https://fonts.googleapis.com" />
//             <a rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//             <a href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;500;700&display=swap" rel="stylesheet" />
//         </div><Html center style={styles} className='font-sans'>
//                 {progress} % loaded
//             </Html></>
//     );
// }

// const Model = () => {
//     const gltf = useLoader(GLTFLoader, "/model/earth/scene.gltf");
//     console.log(gltf);

//     gltf.scene.scale.set(0.0275, 0.0275, 0.0275);

//     const sizes = {
//         width: window.innerWidth,
//         height: window.innerHeight,
//     };


//     return (
//         <>
//             <primitive object={gltf.scene} scale={0.05} />
//         </>
//     );
// };




// export default function Logo() {
//     return (
//         <div>

//             <div className=" cursor-grab bg-gradient-to-r from-cyan-500 to-blue-500 ... bg-animate-blob h-screen">
//                 <Canvas shadows dpr={[1, 2]} camera={{ position: [1, 1, 4], fov: 10 }}>
//                     <ambientLight intensity={0.3} />
//                     <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
//                     <Suspense fallback={<Loader />}>
//                         <Model />


//                         {/* <Environment preset="sunset" /> */}
//                     </Suspense>
//                     <OrbitControls autoRotate />
//                 </Canvas>
//             </div>
//             <div className=' '>

//                 {/* <div className="font-bold   mx-10  text-center text-black">


//         <h1 className='bg-gradient-to-r from-green-500 from-10% via-emerald-500 via-30% to-blue-500 to-90% ... bg-opacity-10 font-extrabold rounded-full tracking-wide sm:mx-20 sm:px-40 px-20 py-2 text-lg sm:text-3xl -mt-5 text-black '>KISSAN<span className='text-white'>NETWOK</span></h1>
//         <h2 className='text-xl font-bold'>Flagbearer in Agro Decentralization</h2>
//         <Link href='/home' className='text-sm sm:text-lg font-extrabold'>Enter Now 🡺</Link>

//        </div> */}

//                 <motion.div
//                     whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.2 }}
//                     className='absolute bottom-0 text-[14px] left-0 mb-8 ml-6 font-bold hover:text-white text-black text-left'><a href="/home">KSN Platform </a> <ArrowRightIcon className="h-4 w-4 inline-block text-black" /><p className='-mt-1' /><span className='font-semibold  text-black text-xs'>For Our Digital Future</span></motion.div>
//                 <div className='absolute bottom-0 text-[11px] hidden center-0 pb-2 text-center mb-8 mr-6 text-black'>kissantoken.io</div>
//                 <div className='absolute bottom-0 text-[14px] right-0 mb-8 mr-6 font-bold text-black text-right'>Kissan Global Network <p className='-mt-1' /><span className='font-semibold text-[10px] text-black text-xs'>Copyright 2023. All Rights Reserved.</span></div>
//             </div>

//         </div>

//     )
// }