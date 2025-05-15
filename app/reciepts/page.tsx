"use client"

import { useEffect, useState } from "react"
import { Card, CardProps } from "../components/card";

function RecieptsPage() {
    const [data, setData] = useState<CardProps[]>([])
    const [search,setSearch] = useState('')

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
          const url = search.trim()
            ? `https://dummyjson.com/recipes/search?q=${search}`
            : `https://dummyjson.com/recipes`;
      
          fetch(url)
            .then(res => res.json())
            .then(json => setData(json.recipes || []))
            .catch(error => console.error("Failed to fetch recipes:", error));
        }, 500); 
      
        return () => clearTimeout(delayDebounce);
      }, [search]);
      
  
    return (
      <div>
        <h1 className="text-center text-orange-400 text-6xl font-bold p-4 ">Reciepts Page</h1>
        <div className="text-center mb-6">
        <input
          type="search"
          placeholder="Search recipes..."
          className="border px-4 py-2 rounded shadow bg-orange-400 border-amber-50 placeholder:text-zinc-100"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
            {data.map((elm:CardProps)=><Card key={elm.id} name={elm.name} caloriesPerServing={elm.caloriesPerServing} image={elm.image} mealType={elm.mealType} id={elm.id}/>)}
        </div>
      </div>
    )
}
export default RecieptsPage