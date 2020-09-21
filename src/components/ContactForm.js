import React, {useState,useEffect} from 'react';

const ContactForm = () => {

        const initialFieldValues = {
            fName: '',
            lName: '',
            mobile: '',
            email: '',
            address: ''
        }

    
        var [values, setValues] = useState(initialFieldValues)

        const handleInputChange = e => {
            var { name, value } = e.target;
            setValues({
                ...values,
                [name]: value
            })
        }
    
        const handleFormSubmit = e => {
            e.preventDefault()
            if((values.fName && values.lName && values.mobile && values.email && values.address ) !== ''){
                if(values.mobile.length === 10){
                    /*
                    const posts = 
                        {id: values.email, FName: values.fName,LName: values.lName, mobile: values.mobile, address: values.address}
                     ;
                     
                     if(localStorage.getItem('data')==null){
                        //localStorage.setItem("data", JSON.stringify(posts));
                        var oldData = [];
                        oldData.push(posts);
                        localStorage.setItem("data", JSON.stringify(oldData));
                     }else{
                        //var newData = JSON.stringify(posts);
                        //var oldData = JSON.parse(localStorage.getItem('data'));
                        var oldData = [];
                        //oldData.push(JSON.parse(localStorage.getItem('data')));
                        const oldpost = Object.assign({},JSON.parse(localStorage.getItem('data')));
                        oldData.push(oldpost);
                        oldData.push(posts);
                        localStorage.removeItem('data');
                        localStorage.setItem("data", JSON.stringify(oldData));
                     } */
                     var inputObj = {id: values.email, FName: values.fName,LName: values.lName, mobile: values.mobile, address: values.address};
                    if(localStorage.getItem("users") === null){
                        let newObj = [];
                        newObj.push(inputObj);
                        localStorage.setItem("users",JSON.stringify(newObj));
                    } else {
                        let existingObj = JSON.parse(localStorage.getItem("users"));
                        localStorage.removeItem("users");
                        existingObj.push(inputObj);
                        localStorage.setItem("users",JSON.stringify(existingObj)); 
                    }
                }else{
                    alert("Input correct phone number");
                }
            }else{
                alert("Fill All Details");
            }
        }
        
    return(
        <>
            <div>
                Input Data
            </div>
            <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user-alt"></i>
                        </div>
                    </div>

                    <input className="form-control" name="fName" placeholder="First Name"
                        value={values.fName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <input className="form-control" name="lName" placeholder="Last Name"
                        value={values.lName}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>

                    <input type="number" className="form-control" name="mobile" placeholder="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" type="email" name="email" placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group">
               <input className="form-control" name="address" placeholder="Address"
                    value={values.address}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type="submit" value="Save" className="btn btn-primary btn-block" />
            </div>
        </form>
        </>

    );
}

export default ContactForm;