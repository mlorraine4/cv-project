import React from "react";

const SkillsPreview = ({ skillsArray }) => {
   return (
     <div className="skillsComponent">
        <div className="skillsHeader">SKILLS</div>
       {skillsArray.map((skills) => {
         return (
           <li className="skill" key={skills.id}> {skills.text}
           </li>
         );
       })}
     </div>
   );
};

export default SkillsPreview;
