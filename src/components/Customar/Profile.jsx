import React from 'react'

const Profile = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-auto'>
                    <img src="https://placehold.co/200" className="rounded float-start" alt="..." />

                </div>
                <div className='col'>

                    <form>
                        <div className='row justify-content-between'>
                            <div className="col-6 " >
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                                    <input type="text" name="address" className="form-control" id="exampleInputPassword1" />
                                </div>
                                    
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">State</label>
                                    <input type="text" name="state" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Country</label>
                                    <input type="text" name="country" className="form-control" id="exampleInputPassword1" />
                                </div>
                            </div>
                            <div className="col-6 " >
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                    <input type="email" name="email"className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">PhoneNumber</label>
                                    <input type="number" name='phone' className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Pincode</label>
                                    <input type="number" name="pincode" className="form-control" id="exampleInputPassword1" />
                                </div>
                                
                            </div>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
   
    )
}

export default Profile