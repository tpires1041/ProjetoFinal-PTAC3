import { NextResponse } from "next/server";

export const listaDeLivros = [
    {
        id: 1,
        modelo: "172R SKYHAWK",
        fabricante: "CESSNA",
        ano: 1997,
        categoria: "Monomotores a Pistão",
        preco: "R$ 1.180.000"
    },
    {
        id: 2,
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: "Consulte o vendedor"
    },
    {
        id: 3,
        modelo: "PA-34-220T SENECA V",
        fabricante: "PIPER",
        ano: 2013,
        categoria: "Bimotores a Pistão",
        preco: "R$ 6.708.000"
    },
    {
        id: 4,
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: ""
    },
    {
        id: 5,
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: ""
    },
    {
        id: 6,
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: ""
    },
    {
        id: 7,
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: ""
    },
    {
        id: 7,
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: ""
    },
    {
        id: 8,
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: ""
    },
    {
        id: 9,
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: ""
    },
    {
        id: 10,
        modelo: "BONANZA A36",
        fabricante: "BEECHCRAFT",
        ano: 1984,
        categoria: "Monomotores a Pistão",
        preco: ""
    }
];

export async function GET(){
    return NextResponse.json(listaDeLivros)
}