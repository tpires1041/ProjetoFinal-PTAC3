"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/main.module.css";
import Link from "next/link";



export default function Main() {

  const [listProduct, setListProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);



    const getProduct = async () => {
        const response = await fetch("/api/route.js", {
          cache: "no-cache",
        });

        const data = await response.json();

        setListProduct(data);
        setListComplete(data);
      }

    getProduct();
  }, []);


  return (
    <>

      <main className={styles.main}>
        {listProduct.map((products) => (
          <div className={styles.card} key={products.id}>
            <p>{products.modelo.slice(0, 6)}...</p>

            <Image width={300} height={300} src={products.image} alt={products.modelo} />

            <p>{products.categoria}</p>

            <p className={styles.description}>
              {products.fabricante} - {products.ano}
            </p>

            <p>{products.preco}</p>

            <Link href={"/product/" + product.id}>
              <button>Ver Mais</button>
            </Link>

          </div>
        ))}
      </main>
    </>
  );