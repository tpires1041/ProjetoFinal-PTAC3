import { NextResponse } from "next/server";

export const listaDeAeronaves = [
    {
        id: 1,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6572/cessna-172r-skyhawk-1997-monomotores-a-pistao-venda-flightmarket-1924.JPEG",
        modelo: "172R SKYHAWK",
        fabricante: "CESSNA",
        ano: 1997,
        categoria: "Monomotores a Pistão",
        preco: "R$ 1.180.000"
    },
    {
        id: 2,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6795/beechcraft-bonanza-a36-1984-flightmarket-id-6795-34110.webp",
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: "Consulte o vendedor"
    },
    {
        id: 3,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6829/piper-pa-34-220t-seneca-v-2013-flightmarket-id-6829-40120.webp",
        modelo: "PA-34-220T SENECA V",
        fabricante: "PIPER",
        ano: 2013,
        categoria: "Bimotores a Pistão",
        preco: "R$ 6.708.000"
    },
    {
        id: 4,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6795/beechcraft-bonanza-a36-1984-flightmarket-id-6795-34110.webp",
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: "Consulte o vendedor"
    },
    {
        id: 5,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6795/beechcraft-bonanza-a36-1984-flightmarket-id-6795-34110.webp",
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: "Consulte o vendedor"
    },
    {
        id: 6,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6795/beechcraft-bonanza-a36-1984-flightmarket-id-6795-34110.webp",
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: "Consulte o vendedor"
    },
    {
        id: 7,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6795/beechcraft-bonanza-a36-1984-flightmarket-id-6795-34110.webp",
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: "Consulte o vendedor"
    },
    {
        id: 7,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6795/beechcraft-bonanza-a36-1984-flightmarket-id-6795-34110.webp",
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: "Consulte o vendedor"
    },
    {
        id: 8,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6795/beechcraft-bonanza-a36-1984-flightmarket-id-6795-34110.webp",
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: "Consulte o vendedor"
    },
    {
        id: 9,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6795/beechcraft-bonanza-a36-1984-flightmarket-id-6795-34110.webp",
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: "Consulte o vendedor"
    },
    {
        id: 10,
        image: "https://img.flightmarket.com.br/813x507/filters:format(webp)/filters:quality(70)/uploads/aeronaves/6795/beechcraft-bonanza-a36-1984-flightmarket-id-6795-34110.webp",
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: "Consulte o vendedor"
    }
];

export async function GET() {
    return NextResponse.json(listaDeAeronaves);
  }