import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// type Product = {
//     id: number,
//     name: string,
//     price: number
// }

// const products: Array<Product> = [
//     {
//         id: 1,
//         name: 'Milk',
//         price: 2.5
//     },
//     {
//         id: 2,
//         name: 'Bread',
//         price: 3.5
//     }
// ]

export async function GET(
    request: NextRequest
) {
    const products = await prisma.product.findMany();
    return NextResponse.json(products)
}


export async function POST(
    request: NextRequest
) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    // if invalid then return 400
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    // create product

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })

    return NextResponse.json(newProduct, { status: 201 });
}