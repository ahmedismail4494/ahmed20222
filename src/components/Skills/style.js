import styled from 'styled-components';

/* Skills Section */

export const SkillsSection = styled.div`
  height: auto;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: #252131;
`

export const TitleH2 = styled.h2`
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

export const SkillsUl = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 40px;
`

export const Skill = styled.li`
  position: relative;
  max-width: 100%;
  height: 80px;
  line-height: 80px;
  display: inline-block;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  background-color: #d31336;
  border-radius: 10px;
  /* Small */
  @media (max-width: 767px) { font-size: 27px;  }
`
