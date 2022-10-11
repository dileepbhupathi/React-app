import '../../Docs-Component/DocsSideNavbar/DocsSideNavbar.css'

import Accordion  from '../../SideNavbarAccordion/Accordion'
import { TutorialSiderData} from "../../Constants/TutorialData/TutorialSideNavbarData/TutorialSideNavbarData"

export const TutorialSideNavbar = () => {

  return(
    <div className='docs-side-navbar-container'>
      {
        TutorialSiderData.map(({title,content,i}) =>
        <Accordion title = {title} content = {content} i = {i} />
      )}
    </div>
  )
}