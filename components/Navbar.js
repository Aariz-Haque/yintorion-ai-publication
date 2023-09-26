import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image src="/logo.svg" alt="Bootstrap" width={50} height={50}/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/books">Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Upcoming</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Patreon</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">About</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
  )
}

export default Navbar