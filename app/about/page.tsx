'use client'; // Required for Framer Motion

import { motion } from 'framer-motion';
import Image from 'next/image';


export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="p-10 text-xl text-white bg-black min-h-screen"
    >
      <div className='bg-[#0C0C0C] p-3 rounded-2xl flex border-2 border-[#161716]'>
      <Image src="/1705230254191.jpeg" width={100}
      height={100} className='rounded-3xl'
      alt="Picture of the author" />
      <div className='p-3'>

      <h1 className='text-4xl'>About myself</h1>
      <p>I bring creativity and attention to detail to every project. Let's connect and discuss how I can contribute to your design needs.</p>
      </div>
      
      </div>
    </motion.div>
  );
}
