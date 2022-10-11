import React from 'react'
import { CommunitySiderData } from '../../Constants/CommunityData/CommunitySiderData/CommunitySiderData'
import Accordion from '../../SideNavbarAccordion/Accordion'

export const CommunitySider = () => {
  return (
    <div className='docs-side-navbar-container'>
      {
        CommunitySiderData.map(({title,content,i}) =>
        <Accordion title = {title} content = {content} i = {i}/>
      )}
    </div>
  )
}
