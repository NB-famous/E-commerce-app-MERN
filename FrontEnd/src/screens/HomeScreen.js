import React, {useState, useEffect} from "react"
import Product from '../components/Product'
import Axios from 'axios'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
//import data from '../data'




const HomeScreen = (props) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

    const fetchData = async () => {

      try {
        setLoading(true)
        const { data } = await Axios.get('/api/products')
        setLoading(false)
        setProducts(data)
      }
      catch(err) {
        setError(err.message);
        setLoading(false);
      }
      
    }

    fetchData();


  }, [])

  return (

    <div>

      {
        loading ? <LoadingBox /> : 

        error ? <MessageBox variant="danger"> {error} </MessageBox> :

        (
          <div className="row center">
            {
              products.map(product => (
                <Product key={product._id} product={product} />
              ))
            }
          </div> 
        )
      }
  </div>
  )
}

export default HomeScreen