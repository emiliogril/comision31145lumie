import './ItemListContainer.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncmock'
import { useAsync } from '../../hooks/useAsync'
// import { getProducts } from '../../services/firebase/firestore'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useAsync(
        setLoading,
        () => getProducts(categoryId),
        setProducts,
        () => console.log('hubo un error en item list container')
        [categoryId]
    )
    
    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(products.length === 0) {
        return <h1>No hay productos</h1>
    }

    return(
        <div className='ItemListContainer'>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer