import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Temporary Cloudinary authentication test
// try {
//   const result = await cloudinary.api.ping();
//   console.log("Cloudinary ping successful:", result);
// } catch (error) {
//   console.error("Cloudinary ping failed:", {
//     message: error.message,
//     http_code: error.http_code,
//   });
// }

export default cloudinary;