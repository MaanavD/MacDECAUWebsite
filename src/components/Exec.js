import React from 'react';
import Card from './Card';

function Exec() {
  const exec = [
      {
        image: "https://via.placeholder.com/150x125",
        name: "Shuke / Amanda",
        position: "Co-President",
        description: "1",
        email: "",
        facebook: ""
      },
      {
        image: "https://via.placeholder.com/150x125",
        name: "Shuke / Amanda",
        position: "Co-President",
        description: "2",
        email: "",
        facebook: ""
      }, {
        image: "https://via.placeholder.com/150x125",
        name: "Maanav Dalal",
        position: "Training",
        description: "BSM",
        email: "https://www.w3schools.com",
        facebook: "123"
      }, {
        image: "https://via.placeholder.com/150x125",
        name: "Alyshia Laidlaw",
        position: "Training",
        description: "4",
        email: "",
        facebook: ""
      }, {
        image: "https://via.placeholder.com/150x125",
        name: "Victor Yau",
        position: "Events",
        description: "5",
        email: "",
        facebook: ""
      }, {
        image: "https://via.placeholder.com/150x125",
        name: "Shiksha Varman",
        position: "Events",
        description: "6",
        email: "",
        facebook: ""
      }, {
        image: "https://via.placeholder.com/150x125",
        name: "Bilal Khan",
        position: "Corporate Relations",
        description: "7",
        email: "",
        facebook: ""
      }, {
        image: "https://via.placeholder.com/150x125",
        name: "Angel Cai",
        position: "Marketing",
        description: "8",
        email: "",
        facebook: ""
      }, {
        image: "https://via.placeholder.com/150x125",
        name: "Andre Rousseau",
        position: "Finance / Corporate Relations",
        description: "9",
        email: "",
        facebook: ""
      }, {
        image: "https://via.placeholder.com/150x125",
        name: "Matthew Milne",
        position: "Delegate Engagement",
        description: "10",
        email: "",
        facebook: ""
      }, {
        image: "https://via.placeholder.com/150x125",
        name: "Sukhraj Sandhu",
        position: "Logistics",
        description: "11",
        email: "",
        facebook: ""
      }, {
        image: "https://via.placeholder.com/150x125",
        name: "Jenna Giardi",
        position: "Communications",
        description: "12",
        email: "",
        facebook: ""
      }
    ]
  return (
    <div className="Exec">
      <h1 className='text-primary text-center exec-title'>Meet our Executive</h1>
      <div className="container exec-container">
        <div className="card-deck">
          {exec.map(person => {
              return (
                <Card image={person.image} name={person.name} position={person.position} description={person.description} email={person.email} facebook={person.facebook} />
              )
          })}
        </div>
      </div>
    </div>
  );
}

export default Exec;
