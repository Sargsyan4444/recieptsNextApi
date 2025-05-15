"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductItemProps {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  caloriesPerServing: number;
  tags: string[];
  mealType: string[];
}

function SinglePage() {
  const { id } = useParams();
  const [reciept, setReciept] = useState<ProductItemProps | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((res) => setReciept(res))
      .catch((err) => console.log(err));
  }, [id]);

  if (!reciept) {
    return <p className="text-center p-8 text-gray-500">Loading...</p>;
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{reciept.name}</h1>
      <img src={reciept.image} alt={reciept.name} className="w-full rounded-lg mb-6" />

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {reciept.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside space-y-1">
        {reciept.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <p className="mt-6">🍽️ <strong>Meal Type:</strong> {reciept.mealType.join(", ")}</p>
      <p>🔥 <strong>Calories:</strong> {reciept.caloriesPerServing}</p>
      <p>🏷️ <strong>Tags:</strong> {reciept.tags.join(", ")}</p>
    </div>
  );
}

export default SinglePage;
