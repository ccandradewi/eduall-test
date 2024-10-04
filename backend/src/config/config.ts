import "dotenv/config";
import { CorsOptions } from "cors";

export const PORT = process.env.PORT || 6000;

export const corsOptions: CorsOptions = {
  origin: true, //url localhost frontend
};
