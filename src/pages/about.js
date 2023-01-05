import React from 'react'
import Layout from '../components/layout'
import Contact from '../components/Contact'

import * as aboutStyles from "../styles/about.module.css"

const about = () => {
  return (
      <Layout>
        <div className={aboutStyles.aboutPageContainer}>
          <div className={aboutStyles.aboutPageWrapper}>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis metus justo. Nam congue tellus sem, sed hendrerit nunc feugiat nec. Phasellus vitae velit bibendum, mattis mi a, ultricies nunc. Curabitur id eleifend purus. Fusce risus mauris, semper ac lacus sed, posuere pellentesque mi. Suspendisse pulvinar erat nunc, vitae vehicula orci scelerisque id. Quisque eu leo turpis. Donec vulputate pharetra sapien. Aliquam sed aliquet dolor. Nullam varius, orci quis gravida pulvinar, felis elit maximus ipsum, ac volutpat odio ante lobortis dui. Etiam at elementum velit, id consectetur sapien. Cras feugiat, augue non tempus commodo, nunc ligula tincidunt diam, vel imperdiet sapien magna eget nulla. Curabitur eleifend posuere pulvinar. Sed finibus rutrum sapien. Quisque feugiat leo id dui iaculis, vel scelerisque felis placerat. Pellentesque ultricies quis lacus vitae vehicula. In hendrerit suscipit enim at interdum. Sed consectetur fringilla fringilla. Quisque viverra enim condimentum pellentesque lacinia. Suspendisse in sem eu justo iaculis hendrerit eget ac eros. Cras vel orci dapibus, fermentum sapien at, posuere nunc. Quisque faucibus posuere ante a consectetur.</p>
            <h2>Proin nec mauris nec lectus auctor porta</h2>
            <p>In ultricies ex quis sem auctor rhoncus. Quisque sit amet sapien accumsan, viverra nunc et, dignissim tellus. Proin vitae sem sodales, sodales mi non, pretium massa. Donec interdum quam eget metus eleifend vulputate. Suspendisse cursus purus eget nisl tristique, quis tempus nisl tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ultrices turpis sollicitudin arcu condimentum finibus. Etiam sed tempus quam. Nunc erat augue, sagittis eleifend quam sit amet, porta sollicitudin tortor. Suspendisse sed nisl lobortis eros sodales euismod. Aliquam ultrices risus nec metus porttitor volutpat vitae ut nulla. Nam eget cursus ex, at placerat odio. Integer sit amet risus sit amet lacus pharetra malesuada.</p>
            <ul>
              <li>Etiam sed tempus quam</li>
              <li>Proin nec mauris nec lectus</li>
              <li>Pellentesque suscipit eu velit vel euismod</li>
              <li>Phasellus nec diam quis ligula vulputate laoreet</li>
              <li>Aliquam sed aliquet dolor</li>
            </ul>
            <h3>Sed consectetur fringilla fringilla</h3>
            <p>Etiam a eros rhoncus, auctor urna sed, aliquam sapien. Proin nec mauris nec lectus auctor porta. Aliquam erat volutpat. Curabitur in velit consequat, imperdiet ligula id, pharetra tortor. Donec magna ipsum, malesuada et mattis vitae, lacinia a neque. Pellentesque suscipit eu velit vel euismod. Fusce sit amet finibus erat. Proin tristique, tellus id viverra congue, augue erat tincidunt risus, non venenatis ex augue sed justo. Suspendisse blandit ut tortor quis suscipit. Morbi tincidunt est vel neque pharetra, sed commodo neque pellentesque. Morbi interdum lacus et enim luctus eleifend. Phasellus nec diam quis ligula vulputate laoreet. Sed dapibus ultrices sagittis. Fusce non maximus nibh. Curabitur eu sodales lacus. Fusce dignissim nibh ut rutrum malesuada.</p>
          </div>
        </div>
        <Contact />
      </Layout>
  )
}

export default about
