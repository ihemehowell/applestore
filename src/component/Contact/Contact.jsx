import React from 'react'
import contactImg from '../../assets/contact-us.png'

const Contact = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Questions?</h1>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-5 flex justify-content-center">
                            <img src={contactImg} alt="Contact Us" height='250px' width='400px'/>
                        </div>
                        <div className="col-md-6">
                            <form action="" className="mb-3">
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Email Address</label>
                                    <input type="text" className="form-control" id='exampleForm' placeholder='example@email.com'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id='exampleForm' placeholder='John Smith'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Message</label>
                                    <textarea  className="form-control" id='exampleFormControlTextarea1' placeholder='John Smith'/>
                                </div>
                                <div className=" d-flex justify-content-center px-5 py-3">
                                    <button className="btn btn-outline-warning px-5 Submit w-5"> Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
