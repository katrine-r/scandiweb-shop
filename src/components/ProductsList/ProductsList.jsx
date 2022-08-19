import React from "react"
import classes from "./ProductsList.module.scss"
import ProductsListItem from "./ProductsListItem/ProductsListItem"

const ProductsList = ({ data }) => {
    return (
        <div className={classes.ProductsList}>
            { data.category.products.map(({ index, id, name, gallery, prices }) => (
                <ProductsListItem 
                    key={index + id}
                    id={id}
                    name={name}
                    gallery={gallery}
                    prices={prices}
                />
            ))
            }
        </div>
    )
}

export default ProductsList