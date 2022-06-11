import styled from 'styled-components';

/****   Start Normal About_Me    ****/


export const ProjectSection = styled.div`
  height: auto;
  background-color: #252131;
  padding-top: 50px;
  padding-bottom: 100px;
`


export const Title2 = styled.h2`
  width: fit-content;
  color: #fff;
  margin: 0 auto;
  font-size: 50px;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 5px solid #d31336;
  /* Small */
  @media (max-width: 767px) { font-size: 35px;  }
  /* Medium */
  @media (max-width: 991px) { font-size: 40px; }
`

export const IconBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`

export const Icon = styled.i`
  width: fit-content;
  color: #fff;
  margin: 0 auto;
  font-size: 50px;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 5px;
  transition: all 0.3s ease-in-out;
  &:hover{
    color: #d31336;
    font-size: 60px;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
`

export const Card = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  border-radius: 10px;
  border: 5px solid #d31336;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: translateY(-10px);
    box-shadow: 0 2px 15px rgba(255, 255, 255, 0.4);
  }
`


export const ImageBox = styled.div`
  position: relative;
  max-width: 100%;
  height: 400px;
  text-align: center;
  overflow: hidden;
`

export const Image = styled.img`
  max-width: 100%;
`

export const Buttons = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`

export const Holder = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  gap: 40px;
  /* Small */
  @media (max-width: 767px) { gap: 0px;  }
`

export const Anchor = styled.a`
  width: 100px;
  padding: 10px;
  color: #fff;
  background-color: #d31336;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
  text-decoration: none;
  border-radius: 10px;
  border: 2px solid #d31336;
  transition: all 0.3s ease-in-out;
  &:hover{
    color: #d31336;
    background-color: #fff;
    border: 2px solid #d31336;
  }
  @media (max-width: 767px)   {
    margin: 0 40px;
  }
`
