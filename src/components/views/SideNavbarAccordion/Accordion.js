import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import "../SideNavbarAccordion/Accordion.css";

const Accordion = ({ title, content,i}) => {
  const [isActive, setIsActive] = useState(null);
  const toggle=(i)=>{
 
    if(isActive===i){
      return setIsActive(null)
    }
   setIsActive(i)

  }

  return (
    <div>
      
      <div onClick={()=> toggle()}>
        <p className="accordion-title">
          {title} {isActive===i ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </p>
      </div>
        <ul  className={isActive === i ? "accordion-content-open" : "accordion-content-close"}>
        {content.map((each) => (
            <li className= "docs-side-navbar-list" >
              <Link href={each.link} className="docs-side-navbar-list-anchor">
                {each.description}
              </Link>
            </li>
          ))}
        </ul>
        
    </div>
    
  );
};

export default Accordion;
