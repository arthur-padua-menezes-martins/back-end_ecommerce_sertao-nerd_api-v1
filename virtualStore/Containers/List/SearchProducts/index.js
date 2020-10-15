/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React, { useState } from 'react'

/*components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import SearchProductsDesktop from './desktop.js'
import Pagination from '../../../Containers/Pagination/index.js'

/*helpers************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import ProductsObject from '../../../helpers/objects/products.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function SearchProducts({ offset, limit, productsByLine }) {

    /*hooks************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    var
        [Products, setProducts] = useState(
            [...ProductsObject.releases(), ...ProductsObject.releases()]
        )

    return (
        <>
            <SearchProductsDesktop
                Products={Products}
                offset={offset}
                limit={limit}
                productsByLine={productsByLine}
            />
            <Pagination
                pages={Math.ceil((31 / limit))}
            />
        </>
    )
}
export default SearchProducts