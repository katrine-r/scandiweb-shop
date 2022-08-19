import React from "react";
import classes from "./ProductsListItem.module.scss"

const ProductsListItem = ({ id, name, gallery, prices }) => {
    
    return (
        <div className={classes.ProductsListItem}>
            <div className={classes.ImageItemWrapper} key={id} >
                <img className={classes.Image} alt="location-reference" src={gallery} />
            </div>
            <div>
                <h3 className={classes.NameProductItem}>{name}</h3>
                { prices.map((i, index) => {
                    return (
                        <>
                            { i.currency.label === "USD"
                            ? <div className={classes.Price} key={index}>
                                <span>{i.currency.symbol}</span>
                                {' '}
                                <span>{i.amount}</span>
                            </div>
                            : null
                            }
                        </>
                    )
                }) }
            </div>
        </div>
    )
}

export default ProductsListItem