// Actor reusable Component

import React from 'react';

const imageStyles = {
    maxWidth: '30%',
    float: 'left',
    margin: '10px'
}

const listBox = {
    display: 'inline-block',
    width: '60%'
}

function ActorCom({title,poster,text,modal,rate,customeModalId,modalImg,ArrayItems}) {
    return <div className="col-sm-6 col-md-4">
                <div  className="card mb-4 shadow-sm">
                    <img className="img-fluid" src={poster} />
                    <div className="card-body">
                        <h4>{title}</h4>
                        <p><small className="card-text">{text}</small></p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button data-toggle="modal" data-target={modal} type="button" className="btn btn-sm btn-outline-secondary">Find out more</button>
                            </div>
                        </div>
                        <h4 style={{ lineHeight: '0.5' }} className="text-muted float-right"><strong style={{ fontSize: '40px' }}>{rate}</strong><br /><span style={{ fontSize: '10px' }}>popularity</span></h4>
                    </div>
                </div>
                     <div className="modal fade" id={`modal${customeModalId}`} tabIndex="-1" role="dialog" aria-labelledby="1" aria-hidden="true">
                     <div className="modal-dialog modal-dialog-centered" role="document">
                         <div className="modal-content" >
                             <div className="modal-header">
                                 <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>
                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                     <span aria-hidden="true">&times;</span>
                                 </button>
                             </div>
                             <div className="modal-body">
                             <div style={imageStyles} >
                                 <img  className="img-fluid" src={modalImg} /><br/>
                                 <h4 style={{ lineHeight: '0.5',marginTop: '20px' }} className="text-muted"><strong style={{ fontSize: '40px'}}>{rate}</strong><br /><span style={{ fontSize: '10px' }}>popularity</span></h4>
                                 </div>
                                  <div style={listBox}>
                                      <h5 className="Heading">Known For </h5>
                                      
                                
                                         {ArrayItems.map((movie,key)=>{
                                             return <ul  key={key}>
                                                     <li><strong>{movie.original_title}</strong><br/>
                                                      <small>{movie.overview}</small>
                                                     </li>
                                                     
                                                    </ul>
                                         })}
                                    
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

export default ActorCom