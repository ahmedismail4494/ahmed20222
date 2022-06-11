import React from 'react';
import MyImageLogo from "./ANA_1.jpg";
import {HomeSection, Content, Title2, Title3, ImageBox, Image, Info } from "./style.js";



const Home = () => {
  return (
    <div>

      <HomeSection >
        <div className="container">

          <Content>
            <Title2>AHMED ISMAIL</Title2>
            <Title3> FRONT END DEVELOPER </Title3>
            <ImageBox>
              <Image src={MyImageLogo} alt="" />
            </ImageBox>
            <Info>
              I Create a Responsive Web Design From A to Z It's Responsive On All Screens By Using Many Of The Technology And Program Languages Like
              (HTNL, CSS, JS, React, Redux) and it's creative and modern shape.
                <br /> <br />
              I'm working on myself all the time to get the latest technology for
              creating the best designs and I am willing to be a full-stack web developer.
            </Info>
          </Content>

        </div>
      </HomeSection>

    </div>
  )
}

export default Home
