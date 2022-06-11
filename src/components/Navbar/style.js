import styled from 'styled-components';

/*  Start Navbar Rules  */
export const NavbarSection = styled.div`
  width: 350px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222327;
`

export const Content = styled.div`
    position: fixed;
    bottom: 20px;
    width: 350px;
    height: 60px;
    background-color: #d31336;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    z-index: 999;
`

export const ContentUl = styled.ul`
  display: flex;
  width: 350px;
`

export const ContentLi = styled.li`
  list-style: none;
  position: relative;
  width: 70px;
  height: 60px;
  z-index: 2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentSpan = styled.span`
    text-decoration: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    transition: all 0.3s ease-in-out;
    color: #fff;
    font-size: 25px;

    &:hover{
      background-color: #252131;
      border-radius: 10px;
    }
    &:active{
      background-color: #252131;
      border-radius: 10px;
    }
`
  /*  End Navbar Rules  */
