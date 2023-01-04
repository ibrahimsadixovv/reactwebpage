import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav>

<div className='NavigationBar'>
   

    <div className='Logo'>

        <p>   <Link to="/" class="link" href="#"> Start Bootstrap</Link></p>

    </div>
    <div className='icon'> <i class="fa-solid fa-bars"></i></div>

    <div className='Navigation'>

        <ul>
        <li >
<Link to="/" class="link" href="#">Home</Link>
</li>
<li>
<Link to="/About" class="link" href="#">About</Link>
</li>

<li >
  <a href='https://github.com/StartBootstrap/sb-clean-blog-angular'>
<i class="fa-brands fa-github"></i>
</a>
</li>

        </ul>

    </div>
</div>

</nav>
    </div>
  )
}

export default Navbar