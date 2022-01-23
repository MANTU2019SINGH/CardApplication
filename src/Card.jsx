import React from 'react';
import Data from './Data';



function Card(){
  return(
    <>
      <div className="container">

          <div className="row align-items-start">
                <div className="col">
                      <div className="card" style={{width: "18rem"}}>
                            <img src={Data[0].ImageLink} className="card-img-top" alt="random_image" />
                            <div className="card-body">
                              <h5 className="card-title">{Data[0].Name}</h5>
                              <p className="card-text">{Data[0].Address}</p>
                              <span>{Data[0].Mobile}</span>
                            </div>    
                      </div>
                </div>
                <div className="col">
                      <div className="card" style={{width: "18rem"}}>
                            <img src={Data[1].ImageLink} className="card-img-top" alt="random_image" />
                            <div className="card-body">
                              <h5 className="card-title">{Data[1].Name}</h5>
                              <p className="card-text">{Data[1].Address}</p>
                              <span>{Data[1].Mobile}</span>
                            </div>    
                      </div>
                </div>
                <div className="col">
                      <div className="card" style={{width: "18rem"}}>
                            <img src={Data[2].ImageLink} className="card-img-top" alt="random_image" />
                            <div className="card-body">
                              <h5 className="card-title">{Data[2].Name}</h5>
                              <p className="card-text">{Data[2].Address}</p>
                              <span>{Data[2].Mobile}</span>
                            </div>    
                      </div>
                </div>
          </div>
          
          <div className="row align-items-center">
                  <div className="col">
                      <div className="card" style={{width: "18rem"}}>
                            <img src={Data[3].ImageLink} className="card-img-top" alt="random_image" />
                            <div className="card-body">
                              <h5 className="card-title">{Data[3].Name}</h5>
                              <p className="card-text">{Data[3].Address}</p>
                              <span>{Data[3].Mobile}</span>
                            </div>    
                      </div>
                  </div>
                <div className="col">
                      <div className="card" style={{width: "18rem"}}>
                            <img src={Data[4].ImageLink} className="card-img-top" alt="random_image" />
                            <div className="card-body">
                              <h5 className="card-title">{Data[4].Name}</h5>
                              <p className="card-text">{Data[4].Address}</p>
                              <span>{Data[4].Mobile}</span>
                            </div>    
                      </div>
                </div>
                <div className="col">
                      <div className="card" style={{width: "18rem"}}>
                            <img src={Data[5].ImageLink} className="card-img-top" alt="random_image" />
                            <div className="card-body">
                              <h5 className="card-title">{Data[5].Name}</h5>
                              <p className="card-text">{Data[5].Address}</p>
                              <span>{Data[5].Mobile}</span>
                            </div>    
                      </div>
                </div>
          </div>

          <div className="row align-items-end">
                    <div className="col">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={Data[6].ImageLink} className="card-img-top" alt="random_image" />
                                <div className="card-body">
                                  <h5 className="card-title">{Data[6].Name}</h5>
                                  <p className="card-text">{Data[6].Address}</p>
                                  <span>{Data[6].Mobile}</span>
                                </div>    
                          </div>
                      </div>
                    <div className="col">
                          <div className="card" style={{width: "18rem"}}>
                                <img src={Data[7].ImageLink} className="card-img-top" alt="random_image" />
                                <div className="card-body">
                                  <h5 className="card-title">{Data[7].Name}</h5>
                                  <p className="card-text">{Data[7].Address}</p>
                                  <span>{Data[7].Mobile}</span>
                                </div>    
                          </div>
                    </div>
                    <div className="col">
                          <div className="card" style={{width: "18rem"}}>
                                <img src={Data[8].ImageLink} className="card-img-top" alt="random_image" />
                                <div className="card-body">
                                  <h5 className="card-title">{Data[8].Name}</h5>
                                  <p className="card-text">{Data[8].Address}</p>
                                  <span>{Data[8].Mobile}</span>
                           </div>    
                    </div>
              </div>
          </div>


    </div>
   </>
    
  )
}

export default Card;
