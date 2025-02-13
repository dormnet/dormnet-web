import React from 'react';
import './card.css'





const listings = [
  {
    title: "Cozy Single Room in Matara City Center",
    description: "Private single room, shared bathroom, communal kitchen, close to public transport.",
    image: require("../assets/image1.jpg"),
  },
  {
    title: "Spacious Shared Room for Female Students near Rahula College",
    description: "Shared room for two, attached bathroom, study area, 5-min walk to Rahula College.",
    image: require("../assets/image2.jpg"),
  },
  {
    title: "Modern Dormitory for Male Professionals in Polhena",
    description: "Bunk beds, AC, Wi-Fi, weekly housekeeping, near Polhena Beach.",
    image: require("../assets/image3.jpg"),
  },
  {
    title: "Private Annex for Rent in Matara Suburbs",
    description: "One-bedroom annex, private kitchen and bathroom, separate entrance, quiet area.",
    image: require("../assets/image4.jpg"),
  },
  {
    title: "Female-Only Boarding House near Matara General Hospital",
    description: "Shared rooms, common lounge, laundry facilities, 5-min walk to hospital.",
    image: require("../assets/image5.jpg"),
  },
  {
    title: "Affordable Shared Accommodation for University Students",
    description: "Shared room, communal kitchen, near University of Ruhuna, secure bike parking.",
    image: require("../assets/image6.jpeg"),
  },
  {
    title: "Seaside Dormitory for Rent in Madiha",
    description: "Shared dormitory, communal kitchen, near Madiha Beach.",
    image: require("../assets/image7.jpg"),
  },
  {
    title: "Single Room in Shared House near Matara Bus Stand",
    description: "Private single room, shared bathroom, common living area, 2-min walk to bus stand.",
    image: require("../assets/image8.jpeg"),
  },
  {
    title: "Newly Built Boarding House for Male Students",
    description: "Shared rooms, study area, high-speed internet, near Matara Technical College.",
    image: require("../assets/image9.jpg"),
  }
];

const Card = () => {
  return (
    <div className='card-container'>

        <div className='card-head'>
          <h1>Explore</h1>
          <p>Find the best Boarding place for you</p>
        </div>

        <div className='cards'>
            <div className="container mt-4">
                <div className="row">
                  {listings.map((listing, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-5 col-12 mb-4" key={index}>
                      <div className="card" style={{  height:"26rem"}}>
                        <img src={listing.image} className="card-img-top" alt={listing.title} style={{height:"200px",objectFit:"cover"}}/>
                        <div className="card-body">
                          <h6 className="card-title">{listing.title}</h6>
                          <p className="card-text">{listing.description}</p>
                          <a href="#" className="btn btn-primary">View Details</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        
        <div className='card-nav-btn'>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      </a>
                  </li>
                </ul>
            </nav>
        </div>

    </div>
  );
};

export default Card;
