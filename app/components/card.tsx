import Link from "next/link";

export interface CardProps {
  id: number;
  name: string;
  caloriesPerServing: number;
  image: string;
  mealType: string[];
}

function Card({
  id,
  name,
  caloriesPerServing,
  image,
  mealType,
}: CardProps) {
  return (
    <div className="w-[400px] h-[600px] rounded-2xl bg-orange-400 flex flex-col items-center gap-5">
      <img className="w-[400px] rounded-2xl h-[300px]  object-cover" src={image} alt={name} />
      <div className="flex flex-col gap-3 pt-3">
      <h2>
        <Link className="text-white font-bold text-3xl hover:text-black" href={`reciepts/${id}`}>{name}</Link>
      </h2>

      <p><strong className="font-medium text-amber-50 ">Meal Types:</strong></p>
      <ul>
        {mealType.map((elm, idx) => (
          <li className="font-medium text-amber-50" key={idx}>{elm}</li>
        ))}
      </ul>

      <p className="font-medium text-amber-50"><strong className=" text-amber-50">Calories per Serving:</strong> {caloriesPerServing}</p>
    </div>
      </div>
  );
}

export { Card };
