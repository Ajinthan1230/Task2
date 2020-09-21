import React, {useState,useEffect} from 'react';
import ContactForm from './ContactForm';


const Contacts = () => {

    const List = e => {
        if(localStorage.getItem('users') !== null){
            var retrievedData = localStorage.getItem("users");
            var details = JSON.parse(retrievedData);
            /*
            {details.map((user,key) => {
                    <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.FName}</td>
                        <td>{user.LName}</td>
                        <td>{user.mobile}</td>
                        <td>{user.address}</td>
                    </tr>
            })}
            */
        }else{
            alert("No data available");
        }
    }

    return(
        <div style={{marginLeft:100 }}>
            <div>
                <center>
                    <h1> React Data Store </h1>
                </center>            
            </div>
            <div className="row">
                <div>
                    <ContactForm/>
                </div>
            </div>
            <div className="row">
                        <p>List Of Contacts</p>
                        <button onClick={List}>List now</button>
                <table>
                    
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Mobile Number</td>
                        <td>Email ID</td>
                        <td>Address</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                    <tbody>
                        {List.details.map((user,key) => {
                            return(
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.FName}</td>
                                    <td>{user.LName}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.address}</td>
                                </tr>
                            )
                        
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Contacts;