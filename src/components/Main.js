"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/main.module.css";
import { listaDeAeronaves } from "@/app/api/route";

export default function Main() {
  const [listProduct, setListProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("http://localhost:3000/api", {
          cache: "no-cache",
        });

        const data = await response.json();

        setListProduct(data);
        setListComplete(data);
      }
      catch {
        setIsError(true);
      }
    }
    getProduct();
  }, []);

  if (listComplete[0] == null) {
    return (
      <main className={styles.main}>
        <p>Carregando...</p>
      </main>
    )
  }

  return (
    <>
      <main className={styles.main}>
        {listProduct.map((products) => (
          <div className={styles.card} key={products.id}>
            <p>{products.modelo.slice(0, 6)}...</p>

            <Image width={300} height={300} src={products.image} alt={products.modelo} />

            <p>{products.categoria}</p>

            <p className={styles.description}>
              {products.fabricante} - {products.ano} </p>

            <p>{products.preco}</p>

            <Link href={"/product/" + products.id}>
              <button>Ver Mais</button>
            </Link>

          </div>
        ))}
      </main>
    </>
  );
}