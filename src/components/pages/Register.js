import React from 'react'

function Register() {
    return (
        <>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingName" placeholder="Audu Okagu" />
                <label for="floatingName">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="tel" className="form-control" id="floatingPhone" placeholder="eg. name@example.com" />
                <label for="floatingPhone">Phone <span className="text-danger">*</span></label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                <label for="floatingEmail">Email address (optional)</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>     

            <div className="d-grid gap-2">
                <button className="btn btn-primary btn-lg" type="button">Proceed</button>
            </div>       
        </>
    )
}

export default Register
