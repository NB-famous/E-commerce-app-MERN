import React, {useEffect} from "react"
import Product from '../components/Product'
//import Axios from 'axios'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { useDispatch, useSelector } from "react-redux"
import { listProducts } from "../actions/productActions"
//import data from '../data'




const HomeScreen = (props) => {

  // Getting rid of the hooks because state is managed by react-reducers
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {

  //   const fetchData = async () => {

  //     try {
  //       setLoading(true)
  //       const { data } = await Axios.get('/api/products')
  //       setLoading(false)
  //       setProducts(data)
  //     }
  //     catch(err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
      
  //   }
    
  //   fetchData();

  // }, [])

  //////////////////////// React-redux method///////////////////

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList);
  const { loading, error, products} = productList;

  useEffect(() => {

    dispatch(listProducts())

  }, [dispatch])

  /////////////////////////////////


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