import React from 'react';

import {CertificateSection, Title, Content, ImageBox, Image} from "./style.js";

import HTML from './Certificates/1_HTML_certificate.jpg';
import CSS from './Certificates/2_CSS_certificate.jpg';
import JS from './Certificates/3_JavaScript_certificate.jpg';
import JQuery from './Certificates/4_jQuery_certificate.jpg';
import React_Image from './Certificates/5_react_certificate.jpg';
import PHP from './Certificates/6_PHP_certificate.jpg';
import SQL from './Certificates/7_SQL_certificate.jpg';
import Fullstack from './Certificates/8_udemy- fullstack web developer.jpg';

const Certificate = () => {
  return (
    <div>

      <CertificateSection id="certificate" >
        <div className="container">

          <Title> certificates </Title>


          <Content>
            <ImageBox> <Image src={HTML} alt="" /> </ImageBox>
            <ImageBox> <Image src={CSS} alt="" /> </ImageBox>
            <ImageBox> <Image src={JS} alt=""/> </ImageBox>
            <ImageBox> <Image src={JQuery} alt="" /> </ImageBox>
            <ImageBox> <Image src={React_Image} alt="" /> </ImageBox>
            <ImageBox> <Image src={PHP} alt="" /> </ImageBox>
            <ImageBox> <Image src={SQL} alt="" /> </ImageBox>
            <ImageBox> <Image src={Fullstack} alt="" /> </ImageBox>
          </Content>

        </div>
      </CertificateSection>

    </div>
  )
}

export default Certificate
