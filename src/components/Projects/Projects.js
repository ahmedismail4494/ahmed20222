import React from 'react';
import {ProjectSection, Title2, IconBox, Icon, Content, Card, ImageBox, Image, Buttons, Holder,
        Anchor } from "./style.js";


import ZadImage from './WebSite/ZAD.png';
import Elzero from './WebSite/Elzero.png';
import CRUD_JS from './WebSite/CRUD_JS.png';
import KASPER from './WebSite/KASPER.png';
import LEON from './WebSite/LEON.png';
import AhmedIsmail from './WebSite/AhmedIsmail.png';


const Projects = () => {
  return (
    <div>

      <ProjectSection>
        <div className='container'>
          <Title2> Projects </Title2>

          <IconBox>
            <a href='https://github.com/ahmedismail4494'> 
              <Icon className="fa-brands fa-github"></Icon> 
            </a> 
          </IconBox>

          <Content>

            <Card>
              <ImageBox>
                <Image src={ZadImage} alt='' />
              </ImageBox>
              <Buttons>
                <Holder>
                  <Anchor href='https://github.com/ahmedismail4494/ZAD'>Source</Anchor>
                  <Anchor href='https://ahmedismail4494.github.io/ZAD/'>Live</Anchor>
                </Holder>
              </Buttons>
            </Card>
    

            <Card>
              <ImageBox>
                <Image src={Elzero} alt='' />
              </ImageBox>
              <Buttons>
                <Holder>
                  <Anchor href='https://github.com/ahmedismail4494/ELZERO'>Source</Anchor>
                  <Anchor href='https://ahmedismail4494.github.io/ELZERO/'>Live</Anchor>
                </Holder>
              </Buttons>
            </Card>
            

            <Card>
              <ImageBox>
                <Image src={KASPER} alt='' />
              </ImageBox>
              <Buttons>
                <Holder>
                  <Anchor href='https://github.com/ahmedismail4494/KASPER_HTML_CSS'>Source</Anchor>
                  <Anchor href='https://ahmedismail4494.github.io/KASPER_HTML_CSS/'>Live</Anchor>
                </Holder>
              </Buttons>
            </Card>

            <Card>
              <ImageBox>
                <Image src={AhmedIsmail} alt='' />
              </ImageBox>
              <Buttons>
                <Holder>
                  <Anchor href='https://github.com/ahmedismail4494/AhmedIsmail'>Source</Anchor>
                  <Anchor href='https://ahmedismail4494.github.io/AhmedIsmail/'>Live</Anchor>
                </Holder>
              </Buttons>
            </Card>

            <Card>
              <ImageBox>
                <Image src={LEON} alt='' />
              </ImageBox>
              <Buttons>
                <Holder>
                  <Anchor href='https://github.com/ahmedismail4494/LEON_HTML_CSS'>Source</Anchor>
                  <Anchor href='https://ahmedismail4494.github.io/LEON_HTML_CSS/'>Live</Anchor>
                </Holder>
              </Buttons>
            </Card>

            <Card>
              <ImageBox>
                <Image src={CRUD_JS} alt='' />
              </ImageBox>
              <Buttons>
                <Holder>
                  <Anchor href='https://github.com/ahmedismail4494/CRUD_JS'>Source</Anchor>
                  <Anchor href='https://ahmedismail4494.github.io/CRUD_JS/'>Live</Anchor>
                </Holder>
              </Buttons>
            </Card>


          </Content>

        </div>
      </ProjectSection>

    </div>
  )
}

export default Projects
