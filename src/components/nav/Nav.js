'use client'
import Link from 'next/link';
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const Nav = ({showNav, setShowNav}) => {

    
  return (
    <div className={`fixed top-0 md:hidden ${showNav? 'right-0': '-right-[100%]'} transition-all ease-in-out duration-500 z-40`}>
        <div onClick={(e)=>  {setShowNav(false); e.stopPropagation(); }} className=' md:hidden h-screen w-screen flex justify-end'>
            <div onClick={(e)=> e.stopPropagation()} className=' relative bg-neutral-50 w-3/5 px-10 py-20'>
                <div onClick={()=> setShowNav(false)} className=' p-2 text-blue-800 absolute top-5 right-5'>
                    <AiOutlineClose size={30} />
                </div>
                <ul className='mobile-nav'>
                    <li>
                        <Link href={'/'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/about'}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href={'/team'}>
                            Team
                        </Link>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav