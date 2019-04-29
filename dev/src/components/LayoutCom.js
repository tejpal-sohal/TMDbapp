// Reuseable Compoenet for Tiles

import React from 'react';

function LayoutCom({title,poster,text,modal,date,rate,customeModalId,modalImg,modalText}) {
    return <div className="col-sm-6 col-md-4">
                <div  className="card mb-4 shadow-sm">
                    <img className="img-fluid" src={poster} />
                    <div className="card-body">
                        <h4>{title}</h4>
                        <p><small className="card-text">{text}</small></p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button data-toggle="modal" data-target={modal} type="button" className="btn btn-sm btn-outline-secondary">More</button>
                            </div>
                            <small className="text-muted"><strong>Release Date</strong><br /> {date}</small>
                        </div><br />
                        <h4 style={{ lineHeight: '0.5' }} className="text-muted float-right"><strong style={{ fontSize: '40px' }}>{rate}</strong><br /><span style={{ fontSize: '10px' }}>vote average</span></h4>
                    </div>
                </div>
                     <div className="modal fade" id={`modal${customeModalId}`} tabIndex="-1" role="dialog" aria-labelledby="1" aria-hidden="true">
                     <div className="modal-dialog modal-dialog-centered" role="document">
                         <div className="modal-content">
                             <div className="modal-header">
                                 <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>

                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                     <span aria-hidden="true">&times;</span>
                                 </button>
                             </div>
                             <div className="modal-body">
                                 <img className="img-fluid" src={modalImg} />
                                  <div>
                                      <h5 className="Heading">Movie overview</h5>
                                      <p>
                                          {modalText}
                                      </p>
                                  </div>
                             </div>
                             <div className="modal-footer">
                                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                             </div>
                         </div>
                     </div>
                 </div>
           </div>

}

export default LayoutCom