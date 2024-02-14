import { config } from "dotenv";

config({ path: "../.env" });
import stripe from "stripe";

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const stripeInstance = stripe(process.env.VITE_STRIPE_SECRET_KEY);

    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return { statusCode: 200, body: JSON.stringify({ paymentIntent }) };
  } catch (error) {
    console.log({ error });
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
