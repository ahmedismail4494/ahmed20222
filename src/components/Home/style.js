import styled from 'styled-components';


/*  Start Home Rules  */
export const HomeSection = styled.div`
  height: auto;
  padding-top: 50px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252131;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  text-align: center;
`

export const Title2 = styled.h2`
  position: relative;
  font-size: 50px;
  color: #d31336;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 10px;

  /* Small */
  @media (max-width: 767px) { font-size: 35px;  }
  /* Medium */
  @media (max-width: 991px) { font-size: 40px;  }
`

export const Title3 = styled.h3`
  position: relative;
  font-size: 50px;
  padding: 10px 0;
  top: 0px;
  color: #d31336;

  /* Small */
  @media (max-width: 767px) {
    font-size: 35px;
  }
  /* Medium */
  @media (max-width: 991px) {   }
`

export const ImageBox = styled.div`
  height: 300px;
  width: 300px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  bottom: 0px;
`

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`

export const Info = styled.p`
  width: 60%;
  font-size: 20px;
  color: #fff;
  padding-top: 20px;
  text-align: justify;
  text-transform: capitalize;

  /* Small */
  @media (max-width: 767px) {
    width: 100%;
  }
  /* Medium */
  @media (max-width: 991px) {
    width: 80%;
  }
`

  /*  End Home Rules  */

  
