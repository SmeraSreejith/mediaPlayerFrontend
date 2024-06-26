import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebook,faInstagram,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='row w-100 mt-5 p-3'>
      <div className='col-md-4 p-4 ms-md-5'>
        <h4 className='text-secondary'> <FontAwesomeIcon icon={faVideo} className='me-3'/> Media Player</h4>
        <p style={{textAlign:'justify'}} className='mt-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veniam eos nemo officia commodi corrupti aut tenetur minima, soluta eligendi expedita atque facere reprehenderit, deleniti dolorem suscipit ex laboriosam. Maiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aut ducimus. Enim quam dolore odit quae architecto quod velit illum suscipit magni laboriosam vitae voluptate, vero cumque, alias fuga consectetur.</p>
      </div>
      <div className='col-md-2 p-4 justify-content-center d-md-flex'>
        <div>
            <h4 className='text-white'>Links</h4>
            <p className='mt-4'><Link to={'/'}>Landing Page</Link></p>
            <p><Link to={'/home'}>Home Page</Link></p>
            <p><Link to={'/watchhistory'}>Watch History</Link></p>
        </div>
      </div>
      <div className='col-md-2 p-4'>
        <h4 className='text-white'>Guides</h4>
        <p className='mt-4 text-white'>React</p>
        <p className='text-white'>React Bootstrap</p>
        <p className='text-white'> Bootswatch</p>
      </div>
      <div className='col-md-3 p-4'>
        <h4 className='text-white'>Contact Us</h4>
        <div className='d-flex mt-4'>
            <input type="text" className='form-control ' placeholder='Email Id' />
            <button className='btn btn-secondary border rounded text-white ms-3'>Subscribe</button>
        </div>
        <div className='d-flex mt-4 justify-content-between'>
        <FontAwesomeIcon className='text-white' icon={faInstagram} size='2xl' />
        <FontAwesomeIcon className='text-white' icon={faFacebook} size='2xl'  />
        <FontAwesomeIcon className='text-white' icon={faTwitter} size='2xl' />
        <FontAwesomeIcon className='text-white' icon={faLinkedin} size='2xl'  />

        </div>
      </div>
      <div className='col-md-1'></div>
    </div>
  )
}

export default Footer