import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Menubar from './Menubar'
import { useLocation } from 'react-router-dom'

const Main = () => {

  const location = useLocation()

  const [rest,setRest] = useState([])
  const [search,setSearch] = useState("")


               const getRestaurants = async() =>{
                try{
                    await fetch("https://api.spoonacular.com/food/restaurants/search?apiKey=6bd49cd96d0c4f7d98c3b48b3d428676")
                    .then(res => res.json())
                    .then(json => setRest(json.restaurants))
                }catch(err){
                console.error(err)
                }
                }

                useEffect(()=>{
                  getRestaurants()
                },[])

                console.log(rest)

  return (
    <div >
      <Navbar city={location.state?.city} setSearch={setSearch}/>
      <Menubar/>
      <Home rest={rest} city={location.state?.city} search={search}/>
    </div>
  )
}

export default Main
