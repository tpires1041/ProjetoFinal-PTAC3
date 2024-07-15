import Image from "next/image";
import styles from "../styles/main.module.css";
import { listaDeAeronaves } from "@/app/api/route";

export default function Main() {
  return (
    <main className={styles.main}>
      {listaDeAeronaves.map((aeronave) => (
        <div className={styles.card} key={aeronave.id}>
          <p>{aeronave.modelo}</p>
          <Image width={300} height={300} src={aeronave.image} />
          <p>{aeronave.categoria}</p>
          <p className={styles.description}>
            Fabricante: {aeronave.fabricante}, Ano: {aeronave.ano}
          </p>
          <p>{aeronave.preco}</p>
        </div>
      ))}
    </main>
  );
}