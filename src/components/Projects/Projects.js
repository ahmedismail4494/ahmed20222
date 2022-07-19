import React from 'react';
import {ProjectSection, Title2, IconBox, Icon, Content, Card, ImageBox, Image, Buttons, Holder,
        Anchor } from "./style.js";


import Store from './WebSite/store.png';
import Basem from './WebSite/basem.png';
import ZadImage from './WebSite/ZAD.png';
import Elzero from './WebSite/Elzero.png';
import KASPER from './WebSite/KASPER.png';
import LEON from './WebSite/LEON.png';



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
                <Image src={Basem} alt='' />
              </ImageBox>
              <Buttons>
                <Holder>
                  <Anchor href='https://github.com/ahmedismail4494/Basem'>Source</Anchor>
                  <Anchor href='https://basem.vercel.app/'>Live</Anchor>
                </Holder>
              </Buttons>
            </Card>

            <Card>
              <ImageBox>
                <Image src={Store} alt='' />
              </ImageBox>
              <Buttons>
                <Holder>
                  <Anchor href='https://github.com/ahmedismail4494/store'>Source</Anchor>
                  <Anchor href='https://ahmedismail4494.github.io/store/'>Live</Anchor>
                </Holder>
              </Buttons>
            </Card>

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
                <Image src={LEON} alt='' />
              </ImageBox>
              <Buttons>
                <Holder>
                  <Anchor href='https://github.com/ahmedismail4494/LEON_HTML_CSS'>Source</Anchor>
                  <Anchor href='https://ahmedismail4494.github.io/LEON_HTML_CSS/'>Live</Anchor>
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
