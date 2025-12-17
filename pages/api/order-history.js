export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { mobile } = req.body;

  if (!mobile) {
    return res.status(400).json({ error: "Missing mobile number" });
  }

  // Fake order history (later connect to database)
  res.status(200).json({
    message: "Order history found",
    history: [
      {
        product: "Black Coat",
        quantity: 2,
        status: "Delivered",
        date: "2024-12-01"
      },
      {
        product: "White Hoodie",
        quantity: 1,
        status: "Shipped",
        date: "2024-12-15"
      }
    ]
  });
}
