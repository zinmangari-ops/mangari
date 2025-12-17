export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { name, mobile, password } = req.body;

  if (!name || !mobile || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // Fake login logic (later we connect to database)
  if (password !== "1234") {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.status(200).json({
    message: "Login successful",
    user: {
      name,
      mobile
    }
  });
}
