import React from 'react';
import Past from './Past';
import Upcoming from './Upcoming';

const Events = () => {

    return (
        <div>
          { Upcoming.length > 0 ? 
            <section>
                <h2 className='text-center display-4 font-weight-light my-3 py-3'>Upcoming Events</h2>
    <div className="container mb-3">

      <div className="row row-cols-1 row-cols-md-3">
      {Upcoming.map((item) => {
					return (
        <div className="col mb-4">
          <div className="card">
            <img src={item.ImgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.Title}</h5>
              <p className="card-text">{item.Description}</p>
              { item.Register.length > 0 ? <a href={item.Register} className="btn btn-primary mx-2">Register</a> : null }
              { item.Join.length > 0 ? <a href={item.Join} className="btn btn-primary mx-2">Join</a> : null }
              
            </div>
          </div>
        </div>
                    )
				})}
        
      </div>
    </div>
  </section> : null }

  <section>
    <h2 className='my-3 py-3 display-4 font-weight-light text-center'>Activites so far</h2>
    <div className="container mb-3">

    <div className="row row-cols-1 row-cols-md-3">
      {Past.map((item) => {
					return (
        <div className="col mb-4">
          <div className="card">
            <img src={item.ImgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.Title}</h5>
              <p className="card-text">{item.Description}</p>
            </div>
          </div>
        </div>
                    );
				})}
        
      </div>
    </div>
  </section>
  </div>

  )};

export default Events;