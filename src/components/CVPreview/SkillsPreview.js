import React from "react";

const SkillsPreview = ({ skillsArray }) => {
   return (
     <div>
        <div className="cvHeader">Skills</div>
       {skillsArray.map((skills) => {
         return (
           <div className="skill" key={skills.id}> {skills.text}
           </div>
         );
       })}
     </div>
   );
};

export default SkillsPreview;
