import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export const Contactlist = () => {

    const [record, setRecord] = useState([])
    // const [color, setColor] = useState("Red")
    // const [course, setCourse] = useState("Python")
    useEffect(() => {

        // console.log("use Effcet");
        axios.get("http://localhost:3001/contact")
            .then((res) => {
                // console.log(res);
                console.log(res.data);
                setRecord(res.data)
            })
    }, [])


    // const colorChnage = () => {
    //     setColor("Blue")
    // }

    // const chnagecOurse = () => {
    //     setCourse("javasCript")
    // }

    const deleteData =(id)=>{
        axios.delete("http://localhost:3001/contact" +id)
        .then((response)=>{
            
        })

    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <br />
                    <Link to="/contact-us" className='btn btn-success'>Add Contact</Link>
                    <br />
                    <div className="my_title">
                        Contact List
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>LAST Name</th>
                                <th>Email Id</th>
                                <th>Mobile Number</th>
                                <th>Message</th>
                                <th>Acctions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                record.map((item, index) =>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.f_name}</td>
                                        <td>{item.l_name}</td>
                                        <td>{item.email_id}</td>
                                        <td>{item.mobile_number}</td>
                                        <td>{item.message}</td>
                                        <td>
                                            <input type="submit" value="Edit" className='btn btn-primary' />&nbsp;
                                            <input type="submit" value="Delete" className='btn btn-danger' />
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>

    )
}
