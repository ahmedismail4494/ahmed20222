import React from 'react';
import Skills from "../Skills/Skills";

import {AboutSection, Title, TitleSpan, Personal, Part, Title3, PartP, PartSpan } from "./style.js";

const About = () => {
  return (
    <div>
        <AboutSection>
          <div class="container">

            <Title> ABOUT <TitleSpan>ME</TitleSpan> </Title>

            <Personal>
                <Part>
                    <Title3> Personal Information About Me :- </Title3>
                    <PartP> <PartSpan> NAME : </PartSpan> Ahmed Ismail Mohamed </PartP>
                    <PartP> <PartSpan> Education : </PartSpan> Mechatronics Engineering </PartP>
                    <PartP> <PartSpan> Date of Birth : </PartSpan> 4 / 4 / 1994</PartP>
                    <PartP> <PartSpan> Work : </PartSpan> FrontEnd Developer</PartP>
                    <PartP> <PartSpan> Nationality : </PartSpan> Egyption</PartP>
                    <PartP> <PartSpan> First Language : </PartSpan> Arabic / Mother Tongue</PartP>
                    <PartP> <PartSpan> Secound Language : </PartSpan> English</PartP>
                </Part>
        
                <div class="part_2 ">
        
                </div>
            </Personal>  

          </div>

          <Skills />
        </AboutSection>

    </div>
  )
}

export default About
