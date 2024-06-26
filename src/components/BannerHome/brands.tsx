import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

export default function Brands() {
  return (
    <Marquee pauseOnHover autoFill>
        <div className='flex justify-center items-center gap-8 mt-2 lg:mt-3 2xl:mt-4 px-4 lg:px-8 lg:gap-16'>
        <Image
          src="/images/ai.png"
          alt="Logo"
          width={80}
          height={80}
          className='w-10 h-10 2xl:w-20 2xl:h-20'
        />
        <Image
          src="/images/amzn_fresh.png"
          alt="Logo"
          width={80}
          height={80}
          className='w-10 h-10 2xl:w-20 2xl:h-20'
        />
        <Image
          src="/images/mama_br.png"
          alt="Logo"
          width={80}
          height={80}
          className='w-10 h-10 2xl:w-20 2xl:h-20'
        />
        <Image
          src="/images/amazon.png"
          alt="Logo"
          width={80}
          height={80}
          className='w-10 h-10 2xl:w-20 2xl:h-20'
        />
        <Image
          src="/images/ps.png"
          alt="Logo"
          width={80}
          height={80}
          className='w-10 h-10 2xl:w-20 2xl:h-20'
        />
        <Image
          src="/images/solimo.png"
          alt="Logo"
          width={80}
          height={80}
          className='w-10 h-10 2xl:w-20 2xl:h-20'
        />
        <Image
          src="/images/wag.png"
          alt="Logo"
          width={80}
          height={80}
          className='w-10 h-10 2xl:w-20 2xl:h-20'
        />
    </div>
    </Marquee>
  )
}
