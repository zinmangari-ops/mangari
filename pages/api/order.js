export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { name, mobile, product, quantity } = req.body;

  if (!name || !mobile || !product || !quantity) {
    return res.status(400).json({ error: "Missing fields" });
  }

  res.status(200).json({
    message: "Order received",
    order: {
      name,
      mobile,
      product,
      quantity
    }
  });
}
