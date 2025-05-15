"use client"

import { useEffect, useState } from "react"
import { Card, CardProps } from "../components/card";

function RecieptsPage() {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(res=>setData(res.recipes));
    })

    return (
      <div>
        <h1 className="text-center text-orange-400 text-6xl font-bold p-4 ">Reciepts Page</h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
            {data.map((elm:CardProps)=><Card key={elm.id} name={elm.name} caloriesPerServing={elm.caloriesPerServing} image={elm.image} mealType={elm.mealType} id={elm.id}/>)}
        </div>
      </div>
    )
}
export default RecieptsPage