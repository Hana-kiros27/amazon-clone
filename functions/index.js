const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const stripe = require("stripe")(process.env.STRIPE_KEY); 
// Use process.env for backend

dotenv.config();
console.log("Stripe API Key:", process.env.STRIPE_KEY); // Debugging line

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'success'
    });
});

// Payment creation route
app.post('/payment/create', async (req, res) => {
    const  total  = req.query.total; // Expect total in the request body

    if (total > 0) {
        try {
            // Create a payment intent
            const paymentIntent = await stripe.paymentIntents.create({
                amount: total, // Amount should be in cents
                currency: 'usd',
            });

            res.status(201).json({
                clientSecret: paymentIntent.client_secret,
            });
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    } else {
        res.status(403).json({
            message: "Total must be greater than 0",
        });
    }
});

// Export the app as a Firebase function
exports.api = onRequest(app);