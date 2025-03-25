import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  //DB Connection
  await dbConnect();
  //Handle GET request
  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }

  // handle Post request
  if (request.method === "Post") {
    const productData = request.body;
    await Product.create(productData);
    response.status(201).json({ status: "successfully created" });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
