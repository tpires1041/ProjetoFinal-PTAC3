import Image from "next/image";

export default async function Product({params}){
    const response = await fetch("/aeronaves/" + params.id);
    const data = await response.json();

    return(
        <div>
            <p>{data.modelo}</p>
            <Image width={300} height={300} src={data.image} />
            <p>{data.categoria}</p>
            <p>Fabricante: {data.fabricante}, Ano: {data.ano}</p>
            <p>{data.preco}</p>
        </div>
    );
}