
import {SkillsSection, TitleH2, SkillsUl, Skill } from "./style.js";

const Skills = () => {
  return (
    <div>
        <SkillsSection>
          <TitleH2 style={{color:'#fff'}}> Skills </TitleH2>
          
          <div class="container">  
              <SkillsUl>
                  <Skill class="skill"> HTML </Skill>
                  <Skill class="skill"> CSS </Skill>
                  <Skill class="skill"> Javascript </Skill>
                  <Skill class="skill"> TypeScript </Skill>
                  <Skill class="skill"> Jquery </Skill>
                  <Skill class="skill"> Json </Skill>
                  <Skill class="skill"> Bootstrap </Skill>
                  <Skill class="skill"> SASS </Skill>
                  <Skill class="skill"> React.js </Skill>
                  <Skill class="skill"> Redux </Skill>
                  <Skill class="skill"> NEXT.js</Skill>
                  <Skill class="skill"> styled-components </Skill>
                  <Skill class="skill"> Git/Github </Skill>
              </SkillsUl>
          </div>
        </SkillsSection>
    </div>
  )
}

export default Skills
