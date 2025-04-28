import cloudinary from "../lib/cloudinary.lib.js";
import Product from "../model/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.log("Error in getAllProducts controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getFeaturedProducts = async (req, res) => {
  try {
    let featuredProducts = await Product.find({ featured: true });

    if (!featuredProducts) {
      return res.status(404).json({ message: "No featured products found" });
    }

    res.json(featuredProducts);
  } catch (error) {
    console.log("Error in getFeaturedProducts controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
    const {category} = req.params;

    try {
        const products = await Product.find({category});

        res.json(products)
    } catch (error) {
        console.log("Error in getProductsByCategory controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getRecommendedProducts = async (req, res) => {
	try {
		const products = await Product.aggregate([
			{
				$sample: { size: 4 },
			},
			{
				$project: {
					_id: 1,
					name: 1,
					description: 1,
					image: 1,
					price: 1,
				},
			},
		]);

		res.json(products);
	} catch (error) {
		console.log("Error in getRecommendedProducts controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;

    let cloudinaryResponse = null;

    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, {
        folder: "products",
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      image: cloudinaryResponse?.secure_url
        ? cloudinaryResponse?.secure_url
        : "",
      category,
    });

    res.status(201).json(product);
  } catch (error) {
    console.log("Error in createProduct controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const toggleFeaturedProducts = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if(product){
            product.isFeatured = !product.isFeatured;
            const updatedProduct = await product.save();
            
            res.json(updatedProduct)
        }
        else{
            res.status(404).json({ message: "Product not found" })
        }
    } catch (error) {
        console.log("Error in toggleFeaturedProducts controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const deleteProducts = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if(!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        if(product.image){
            const publicId = product.image.split("/").pop().split(".")[0]

            try {
                await cloudinary.uploader.destroy(`products/${publicId}`)
                console.log("Image deleted")
            } catch (error) {
                console.log("Error in deleting image", error.message)
            }
        }

        await Product.findByIdAndDelete(req.params.id)

        res.json({ message: "Product deleted successfully" })
    } catch (error) {
        console.log("Error in deleteProduct controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
