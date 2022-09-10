import React from 'react'
import {Multiselect} from "multiselect-react-dropdown" ; 
import {useState , useEffect} from "react"  
import "../App.css"
import axios from "axios" ; 

export const MultiSelectInput = () => {

    const data = [
        {Country : "India" , id : 1}, 
        {Country : "Australia" , id : 2},
        {Country : "Srilanka" , id : 3},
        {Country : "Nepal" , id : 4},
        {Country : "China" , id : 5},
        {Country : "uk" , id : 6} , 
        {Country : "USA" , id : 7},
        {Country : "London" , id : 8},
        {Country : "Isrial" , id : 9},
        {Country : "Turky" , id : 10},
        {Country : "Thailand" , id : 11},
        {Country : "Bangkok" , id : 12},
        {Country : "Malasia" , id : 13},
        {Country : "iondonasia" , id : 14},
        {Country : "Russai" , id : 15},
        {Country : "Britan" , id : 16},
    ]
    
  const [options] = useState(data) ; 

  const [country , setCountry] = useState([]) ; 

   console.log(country) ; 

  useEffect(()=>{
       getData()
  } , []) ; 
      
const getData = async () =>{ 
    let dataCountry = await axios.get("http://localhost:3000/country").then((res)=>{
                   return res.data
        }) 
       //   console.log(dataCountry)
      setCountry(dataCountry) ; 
}


  return (
   <div  style = {{width : "90%" , justifyContent : "center" , display : "flex" }}>
  <div className = "App">
       <h3>VOIZ CHECK BOX ASSINGMENT</h3>
         <Multiselect options = {country} displayValue = "country" showCheckbox/>
         </div>
      </div>
  
  )
}

export default MultiSelectInput
