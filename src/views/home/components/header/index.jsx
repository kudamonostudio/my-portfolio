import React from 'react'
import MainMenu from '../../../../components/mainMenu'
import HeaderMainImage from './headerMainImage';

function Header() {
    
  return (
    <div className='flex h-full max-h-[910px] mt-10 fixed w-screen max-w-[80rem]'> {/* this would be sticky after menu appears */}
            <MainMenu />
            <HeaderMainImage />
    </div>
  )
}

export default Header