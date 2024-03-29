const connection = require("../config/database");

const getProducts = async () => {
  try {
    const [rows, fields] = await connection.query("SELECT * FROM products");
    return rows;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Internal Server Error");
  }
};

const handleGetProducts = async (req, res) => {
  try {
    const products = await getProducts();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error handling products request:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = {
  handleGetProducts,
};
