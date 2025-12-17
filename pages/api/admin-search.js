export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  // Fake admin search result (later connect to database)
  res.status(200).json({
    message: "Result found",
    result: {
      name: "Mangaringeg",
      mobile: "09123456789",
      lastOrder: {
        product: "Black Coat",
        quantity: 2,
        status: "Shipped"
      }
    }
  });
}