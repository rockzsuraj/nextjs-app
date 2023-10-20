import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";


export async function GET(
    request: NextRequest,
    { params: { id } }: { params: { id: string } }
) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(id) }
    })
    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user);

}

//put for replacing an object
//patch for updating one or more property
export async function PUT(
    request: NextRequest,
    { params: { id } }: { params: { id: string } }
) {
    // validate the request body
    const body = await request.json();
    const validation = schema.safeParse(body);

    // if invalid return 400
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }

    // fetch the user with given id
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    // if doesn't exist, return 404 error
    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // update the user in the data base 
    const updateUser = await prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name: body.name,
            email: body.email
        }
    })

    // Return the updated user
    return NextResponse.json(updateUser);

}

export async function DELETE(
    request: NextRequest,
    { params: { id } }: { params: { id: string } }
) {
    // Fetch user from db
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    });

    // If not found, return 404
    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Delete the user
    await prisma.user.delete({
        where: {
            id: parseInt(id)
        }
    })
    // Return 200
    return NextResponse.json({});
}