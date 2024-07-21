import Image from "next/image";

export default async function Product({ params }) {
  const response = await fetch("http://localhost:3000/api/" + params.id);
  const data = await response.json();

  return (
    <div>
      <p>{data.modelo}</p>
      <Image width={300} height={300} src={data.image} alt={data.modelo} />
      <p>{data.categoria}</p>
      <p>{data.fabricante} - {data.ano}</p>
      <p>{data.preco}</p>
    </div>
  );
}
