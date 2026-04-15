import React from 'react'
import { useParams } from "react-router-dom"

function ProductDetail() {
    const { id } = useParams();
        return (
            <div>
                Product whith id :(id)
            </div>
        )
    }

export default ProductDetail