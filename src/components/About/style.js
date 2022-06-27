import styled from 'styled-components';

/****   Start Normal About_Me    ****/

export const AboutSection = styled.div`
  height: 600px;
  padding-top: 50px;
  padding-bottom: 100px;
  background: url('images/big63.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* Medium */
  @media (max-width: 991px) {
    height: 700px;
  }
`
export const Title = styled.h2`
  margin: auto;
  width: fit-content;
  text-align: center;
  display: block;
  color: #fff;
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 4px solid #d31336;
  /* Small */
  @media (max-width: 767px) { font-size: 35px;  }
  /* Medium */
  @media (max-width: 991px) { font-size: 40px; }
`
export const TitleSpan = styled.span`
  margin: auto;
  text-align: center;
  color: #d31336;
`

export const Personal = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 40px;
  

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  }
  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  }
`

export const Part = styled.div`
  height: auto;
  width: 100%;
  color: #252131;
  font-size: 23px;
  padding: 20px;
  background-color: rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: left;
  margin-bottom: 15px;


  @media (max-width: 767px) {
    font-size: 15px;
    width: 90%;
  }
`
export const Title3 = styled.h3`
  font-weight: bold;
  padding: 20px 0px ;
  color: #fff;
`

export const PartP = styled.p`
  width: fit-content;
  display: block;
  color: #fff;
  padding: 5px 0;
`

export const PartSpan = styled.span`
  color: #d31336;
  font-weight: bold;
`


  /****   End About_Me   ****/
