import { NextResponse } from "next/server";
import {Stripe} from 'stripe'


export async function POST(request){
    const {priceId} = await request.json()

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
        success_url: 'https://web-hluwfnavl-01alogs-projects.vercel.app/success',
        cancel_url: 'https://web-hluwfnavl-01alogs-projects.vercel.app/pricing'
    })

    console.log(session)
    return NextResponse.json({
        url: session.url
    })
}