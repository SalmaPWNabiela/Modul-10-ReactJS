import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

function CardUser({user, refresh}){

    function deleteUser(){
        swal({
            title: "Are you sure?",
            text: "Once deleted, data (" + user.nama + ") will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(async (willDelete) => {
            if (willDelete) {
                swal("data (" + user.nama + ") has been deleted!",
                {icon: "success",});

                await axios.delete("http://localhost/reactapi/deleteUser.php?id=" + 
                user.id)

                return refresh()
            } else {
                swal("data (" + user.nama + ") is safe!");
            }
        });
        
    }

    return(
        <tr>
            <th scope="row">{user.id}</th>
            <th scope="row">{user.nama}</th>
            <th scope="row">{user.alamat}</th>
            <th>
                <Link className="btn btn-primary" to={'/editUser/' +
                user.id}>Edit</Link>
            </th>
            <th>
                <button type="button" className="btn btn-danger" onClick={deleteUser}>
                    Delete
                </button>
            </th>
            
        </tr>
    )
}

export default CardUser