import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

function CardProduct({product, refresh}){

    function deleteProduct(){
        swal({
            title: "Are you sure?",
            text: "Once deleted, data (" + product.product_name + ") will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(async (willDelete) => {
            if (willDelete) {
                swal("data (" + product.product_name + ") has been deleted!",
                {icon: "success",});

                await axios.delete("http://localhost/reactapi/deleteProduct.php?product_id=" 
                + product.product_id)

                return refresh()
            } else {
                swal("data (" + product.product_name + ") is safe!");
            }
        });
        
    }

    return(
        <tr>
            <td scope="row">{product.product_id}</td>
            <td scope="row">{product.product_name}</td>
            <td scope="row">{product.product_price}</td>
            <td>
                <Link className="btn btn-dark" to={'/editProduct/' + 
                product.product_id}>Edit</Link>
            </td>
            <td>
                <button type="button" class="btn btn-danger" onClick={deleteProduct}>
                    Delete
                </button>
            </td>

            
        </tr>
    )
}

export default CardProduct