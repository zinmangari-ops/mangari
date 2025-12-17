export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { name, mobile, password, email } = req.body;

  if (!name || !mobile || !password || !email) {
    return res.status(400).json({ error: "Missing fields" });
  }

  res.status(200).json({
    message: "Registration successful",
    user: {
      name,
      mobile,
      email
    }
  });
}
