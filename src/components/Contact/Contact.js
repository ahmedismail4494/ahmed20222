import React from 'react';
import emailjs from 'emailjs-com';
import {ContactSection, Title2, Content, Data, Title3, Info, InfoLi, InfoIcon, IconBox, IconBoxLi,
        Anchor, Form, Label, Input, InputSubmit, Textarea } from "./style.js";

const Contact = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_5h1bnbi','template_jaot7jk',e.target,'JgrfqYZZ2sr4cl-qM')
    .then(res => {console.log(res); }).catch(err => console.log(err));
  }
  return (
    <div>
      <ContactSection>
        <div className='container'>
          <Title2> Contact Us </Title2>

          <Content>

            <Data>
              <Title3> contact with me </Title3>


              <Info>
                <InfoLi> <InfoIcon className="fas fa-angle-right"></InfoIcon> Phone: &nbsp; +201013657878 </InfoLi>
                <InfoLi> <InfoIcon className="fas fa-angle-right"></InfoIcon> Phone: &nbsp; +201153414349 </InfoLi>
                <InfoLi> <InfoIcon className="fas fa-angle-right"></InfoIcon> Email: &nbsp; ahmed_ismail4494@yahoo.com </InfoLi>
                <InfoLi> <InfoIcon className="fas fa-angle-right"></InfoIcon> Gmail: &nbsp; ahmedismail4494G2@gmail.com </InfoLi>
              </Info>

              <IconBox>
                <IconBoxLi>
                  <Anchor href="https://www.facebook.com/profile.php?id=100006123582732&ref=br_rs" >
                    <i className="fab fa-facebook-f fa-2x"></i>
                  </Anchor>
                </IconBoxLi>

                <IconBoxLi>
                  <Anchor href="https://twitter.com/Ahmed59122856?s=07&fbclid=IwAR1acrRQEuMaAKYN_eKNlvluXYiU0K-KIPfbCynTp4IeyJMEvfEMp0fKIdA" >
                    <i className="fab fa-twitter fa-2x"></i>
                  </Anchor>
                </IconBoxLi>

                <IconBoxLi>
                  <Anchor href='https://eg.linkedin.com/in/ahmed-ismail-2bb0b1207?trk=profile-badge' >
                    <i className="fab fa-linkedin-in fa-2x"></i>
                  </Anchor>
                </IconBoxLi>

                <IconBoxLi>
                  <Anchor href="https://github.com/ahmedismail4494" >
                    <i className="fab fa-brands fa-github fa-2x"></i>
                  </Anchor>
                </IconBoxLi>
              </IconBox>
            </Data>

            <div>
              <Form onSubmit={sendEmail}>
                <Label>Name</Label>
                <Input type='text' name='name' />

                <Label>Email</Label>
                <Input type='email' name='email' />

                <Label>Message</Label>
                <Textarea name="message" rows='6' />

                <InputSubmit type='submit' value='send' />
              </Form>
            </div>
          </Content>

        </div>
      </ContactSection>
    </div>
  )
}

export default Contact
