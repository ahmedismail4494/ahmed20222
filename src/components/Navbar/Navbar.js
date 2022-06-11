import React from 'react';
import { Link } from 'react-router-dom';
import {NavbarSection, Content, ContentUl, ContentLi, ContentSpan} from "./style.js";

const Navbar = () => {
  return (
    <div>
          
      <NavbarSection>
        <Content>
          <ContentUl>
            <ContentLi ><ContentSpan><Link to='/' className='link' ><i className="fa-solid fa-house"></i></Link></ContentSpan></ContentLi>
            <ContentLi ><ContentSpan><Link to='/about' className='link' ><i className="fa-solid fa-user"></i></Link></ContentSpan></ContentLi>
            <ContentLi ><ContentSpan><Link to='/projects' className='link' ><i className="fa-solid fa-code"></i></Link></ContentSpan></ContentLi>
            <ContentLi ><ContentSpan><Link to='/certificate' className='link' ><i className="fa-solid fa-certificate"></i></Link></ContentSpan></ContentLi>
            <ContentLi ><ContentSpan><Link to='/contact' className='link' ><i className="fa-solid fa-phone"></i></Link></ContentSpan></ContentLi>
          </ContentUl>
        </Content>
      </NavbarSection>

    </div>
  )
}

export default Navbar
