export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { orderId, status } = req.body;

  if (!orderId || !status) {
    return res.status(400).json({ error: "Missing orderId or status" });
  }

  // Fake update logic (later connect to database)
  res.status(200).json({
    message: "Order updated successfully",
    updatedOrder: {
      orderId,
      status
    }
  });
}
