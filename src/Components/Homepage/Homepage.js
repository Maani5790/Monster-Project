import React from 'react'
import NavbarUpper2 from './Contents/Nav3'
import PostForms from './Contents/PostContent'
import RightNav from './Contents/RightNavbar'
import './Homepage.css'
import NewSide from './NewSide'

function page() {
  return (
    <div >


      <NavbarUpper2 />
      <div className='body'>
        <NewSide />



        <PostForms />
        <RightNav />






      </div>
    </div>
  )
}

export default page