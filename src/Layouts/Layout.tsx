import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { SlSocialVkontakte } from 'react-icons/sl'
import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialFacebook } from 'react-icons/sl'
import { SlSocialTwitter } from 'react-icons/sl'
import { GrSearch } from 'react-icons/gr'

type Props = {
    children: ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className='container m-auto p-2'>
        <header className='w-full flex justify-between items-center'>
            <div className="logo w-fit">
                <Image src="/images/logo.svg" width={129} height={31} alt='logo' className='mb-2' />
                <div className="links flex justify-between">
                    <SlSocialVkontakte className=' text-[#686868] hover:text-white' />
                    <SlSocialInstagram className=' text-[#686868] hover:text-white' />
                    <SlSocialFacebook className=' text-[#686868] hover:text-white' />
                    <SlSocialTwitter className=' text-[#686868] hover:text-white' />
                </div>
            </div> 
            <nav className='flex gap-5 text-white font-medium ' >
                <Link href="/" >Афиша</Link>
                <Link href="/" >Медиа</Link>
                <Link href="/" >Фильмы</Link>
                <Link href="/" >Актёры</Link>
                <Link href="/" >Новости</Link>
                <Link href="/" >Подборки</Link>
                <Link href="/" >Категории</Link>
            </nav>
            <div className="right flex gap-2">
                <div className="search w-[55px] h-[55px] flex items-center justify-center bg-white rounded-lg"><GrSearch color='#3657CB' size={20}/></div>
                <button className=" py-3 px-11 flex items-center justify-center bg-[#3657CB] rounded-lg text-white font-semibold text-lg" style={{boxShadow: "0px 0px 15px rgba(72, 113, 255, 0.8)"}}>Войти</button>
            </div>
        </header>

        <footer className='flex flex-col items-center gap-5'>
            <div className="links flex gap-5">
                <SlSocialVkontakte className=' text-[#686868] hover:text-white' />
                <SlSocialInstagram className=' text-[#686868] hover:text-white' />
                <SlSocialFacebook className=' text-[#686868] hover:text-white' />
                <SlSocialTwitter className=' text-[#686868] hover:text-white' />
            </div>
            <nav className='flex gap-5 text-white font-medium ' >
                <Link href="/" >Афиша</Link>
                <Link href="/" >Медиа</Link>
                <Link href="/" >Фильмы</Link>
                <Link href="/" >Актёры</Link>
                <Link href="/" >Новости</Link>
                <Link href="/" >Подборки</Link>
                <Link href="/" >Категории</Link>
            </nav>
            <h1 className='text-[#E3E6F072]'>2020 © Kinoarea.  Все права защищены</h1>
            <h1 className='text-[#E3E6F072] underline cursor-pointer'>Политика конфиденциальности</h1>
        </footer>
    </div>
  )
}

export default Layout