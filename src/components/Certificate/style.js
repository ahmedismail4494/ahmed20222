
import styled from 'styled-components';



/**  Start certificate  **/
export const CertificateSection = styled.div`
  height: auto;
  width: 100%;
  background-color: #252131;
  padding-top: 50px;
  padding-bottom: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
`

export const Title = styled.h2`
  width: fit-content;
  margin: auto;
  margin-bottom: 10px;
  color: #fff;
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 5px solid #d31336;
  /* Small */
  @media (max-width: 767px) { font-size: 35px;  }
  /* Medium */
  @media (max-width: 991px) { font-size: 40px; }
`


export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  gap: 40px;
`

export const ImageBox = styled.div`
  max-width: 100%;
  overflow: hidden;
  margin: 0 5px;
  text-align: center;
  border-radius: 5px;
  padding: 0;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: translateY(-10px);
    box-shadow: 0 2px 15px rgba(255, 255, 255, 0.4);
  }
`
  
export const Image = styled.img`
  position: relative;
  max-width: 100%;
  height: 270px;
  padding: 10px;
  background-color: #d31336;
  border-radius: 5px;
`
  
  /**   End certificate   **/
  
  