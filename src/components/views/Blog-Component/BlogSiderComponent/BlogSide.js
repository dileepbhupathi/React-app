import React from 'react'
import { BlogSiderData } from '../../Constants/BlogsData/BlogsSiderData/BlogsSiderData'
import Accordion from '../../SideNavbarAccordion/Accordion'


export const BlogSide = () => {
  return (
    <div className='docs-side-navbar-container'>
      {
        BlogSiderData.map(({title,content,i}) =>
        <Accordion title = {title} content = {content} i = {i}/>
      )}
    </div>
  )
}
