import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import "../SideNavbarAccordion/Accordion.css";

const Accordion = ({ title, content}) => {
  const [isActive, setIsActive] = useState(false);

  function toggle() {

    // if (isActive === i){
    //     setIsActive(null)
    // }
    setIsActive(!isActive);
  }

  return (
    <div>
      <div onClick={()=> toggle()}>
        <p className="accordion-title">
          {title} {isActive ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </p>
      </div>
      {(isActive &&
        <ul className='docs-side-navbar-list-container'>
          {content.map((each) => (
            <li className="docs-side-navbar-list">
              <Link href="/" className="docs-side-navbar-list-anchor">
                {each}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
