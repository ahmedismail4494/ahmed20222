import styled from 'styled-components';

/*  Start Contact  */
export const ContactSection = styled.div`
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

export const Content = styled.div`
  display: flex;
  justify-content: space-around;


  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (max-width: 991px) {
    flex-direction: column;
  }
`

export const Data = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 100%;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`

export const Title3 = styled.h3`
  text-align: left;
  width: fit-content;
  padding: 10px 0;
  margin: 20px 0;
  font-size: 30px;
  color: #d31336;
  border-bottom: 4px solid #fff;
  @media (max-width: 767px) {
    font-size: 25px;
  }
`

export const Info = styled.ul`
  list-style: none;
  color: #fff;
`

export const InfoLi = styled.li`
  display: block;
  text-align: left;
  font-size: 18px;
  padding: 10px 0;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const InfoIcon = styled.i`
  color: #d31336;
`

export const IconBox = styled.ul`
  list-style: none;
  padding: 50px 0;
`

export const IconBoxLi = styled.li`
  display: block;
  font-size: 20px;
  margin: 10px 20px;
  float: left;
`

export const Anchor = styled.a`
  color: #d31336;
  transition: all 0.3s ease-in-out;
  &:hover{
    color: #fff;
  }
`

export const Form = styled.form`
  min-width: 340px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* Small */
  @media (max-width: 767px) { max-width: 85%; margin: 0 auto }
  /* Medium */
  @media (max-width: 991px) { font-size: 40px; }
`

export const Label = styled.label`
  text-align: left;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`

export const Input = styled.input`
  max-width: 100%;
  padding: 10px 5px;
  margin-bottom: 20px;
  border-radius: 10px;
`

export const InputSubmit = styled(Input)`
  width: 200px;
  margin: 0 auto;
  background-color: #d31336;
  color: #fff;
  border: none;
`

export const Textarea = styled.textarea`
  max-width: 100%;
  padding: 10px 5px;
  margin-bottom: 40px;
  border-radius: 10px;
`



/*  End Contact  */
