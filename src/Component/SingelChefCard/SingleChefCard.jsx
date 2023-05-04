import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaThumbsUp,FaClock,FaFreebsd } from "react-icons/fa";
import { Link} from "react-router-dom";


const SingleChefCard = ({ singleChef }) => {
  console.log(singleChef);
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    num_recipes,
    rating,
    likes,
    id,
  } = singleChef;
  return (
    <div className="my-4">
        <Card style={{ width: '18rem' , height:'23rem' }}>
    <Card.Img variant="top" className="img-fluid h-100 " src={chef_picture}/>
    <Card.Body >
      <Card.Title>{chef_name}</Card.Title>
    <div className="d-flex justify-content-between">
    <Card.Text>
      <span><FaClock></FaClock></span> {years_of_experience}
      </Card.Text>
      <Card.Text>
       <span><FaThumbsUp></FaThumbsUp></span> {likes}
      </Card.Text>
      <Card.Text>
      <span><FaFreebsd></FaFreebsd></span> {num_recipes}
      </Card.Text>
    </div>
      <Link to={`/chefs/${id}`}><Button  variant="primary">View Details</Button></Link>
    </Card.Body>
  </Card>
    </div>
  )
  
};

export default SingleChefCard;
