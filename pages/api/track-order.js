export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { mobile } = req.body;

  if (!mobile) {
    return res.status(400).json({ error: "Missing mobile number" });
  }

  // Fake order tracking (later connect to database)
  res.status(200).json({
    message: "Order found",
    order: {
      product: "Black Coat",
      quantity: 2,
      status: "Shipped"
    }
  });
}
