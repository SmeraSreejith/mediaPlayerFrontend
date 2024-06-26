
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landingpage() {
  {/* <div className='text-center text-danger'><FontAwesomeIcon icon={faHouse}/>Landingpage</div> */}
  return (
   <>
    <div className='row mt-5 w-100 justify-content-center align-items-center '>
        <div className="col-md-1"></div>
        <div className="col-md-5 p-5">
          <h3 className='text-white'>Welcome to <span className='text-secondary'>Media Player</span></h3>
          <p className='text-white' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore asperiores aliquam impedit voluptate quia vero perferendis aut eum iure laudantium, delectus, iste doloribus mollitia eos nulla molestias qui fuga ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, error amet officia placeat ullam id hic ad maiores inventore nulla quae ea vero, dignissimos quia et necessitatibus? Dolorum, rerum! Possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nisi, quos fugiat suscipit modi eaque perferendis voluptate sapiente, vero cum autem dolorum, quisquam facere optio repellat a enim temporibus nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum doloribus fuga enim nulla, natus praesentium esse tempore, sint fugit laboriosam vero animi earum. Voluptate recusandae earum minus non nam.</p>
          <button className='btn btn-secondary mt-5'style={{color:'white',width:'150px',height:'60px',fontSize:'22px'}} ><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 d-flex justify-content-center align-items-center p-md-5">
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75' />
        </div>
      </div>
    
    <div className="row mt-5 w-100">
      <h3 className='mt-5 text-center text-white mb-5'>Features</h3>
      <div className='col-md-1 me-mb-5 ms-5'></div>
      <div className='col-md-3 px-5 px-md-4 mt-4'>
      <Card style={{ width: '100%'}} className='p-3 bg-dark'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/18/a0/a3/18a0a33c874e26a55fe2456347567ae9.gif" className='w-100' height={'300px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-md-3 px-5 px-md-4 mt-4'>
      <Card style={{ width: '100%'}} className='p-3 bg-dark'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/62/23/ab/6223ab1053dd9ac6f0166fe6954442b8.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-md-3 px-5 px-md-4 mt-4'>
      <Card style={{ width: '100%'}} className='p-3 bg-dark'>
      <Card.Img variant="top" src="https://media1.tenor.com/images/018d7b37b92de9de39a83b671b2e3564/tenor.gif?itemid=11755946" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='col-md-1'></div>
    </div>

    <div className="row w-100 mt-5 ms-1 ms-md-0 p-4 p-md-0">
      <div className="col-md-1"></div>
      <div className="col-md-9 border border-1 p-5 rounded m-md-5">
        <div className="row w-100">
          <div className="col-md-6">
            <h3 className='text-secondary mt-3'>Simple fast and PowerFul</h3>
            <p className='mt-4 text-white'> <span className='fs-4'>Play Everything :</span> Amet consectetur adipisicing elit. Similique, culpa quo temporibus voluptatibus rem ducimus sapiente minima, qui fuga blanditiis cum ratione velit ut aperiam quisquam tempore quaerat delectus recusandae.</p>
            <p className='mt-4 text-white'> <span className='fs-4'>Play Everything :</span> Amet consectetur adipisicing elit. Similique, culpa quo temporibus voluptatibus rem ducimus sapiente minima, qui fuga blanditiis cum ratione velit ut aperiam quisquam tempore quaerat delectus recusandae.</p>
            <p className='mt-4 text-white'> <span className='fs-4'>Play Everything :</span> Amet consectetur adipisicing elit. Similique, culpa quo temporibus voluptatibus rem ducimus sapiente minima, qui fuga blanditiis cum ratione velit ut aperiam quisquam tempore quaerat delectus recusandae.</p>
          </div>
          <div className="col-md-6">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nYEoxne_20Y" title="Neela Nilave - Video Song | RDX | Kapil Kapilan | Sam CS | Shane Nigam,Antony Varghese,Neeraj Madhav" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
   </>
  )
}

export default Landingpage