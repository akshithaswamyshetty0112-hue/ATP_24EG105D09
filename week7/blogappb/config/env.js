import { config } from "dotenv";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const backendRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

config({ path: resolve(backendRoot, ".env"), quiet: true });

export const getJwtSecret = () => process.env.SECRET_KEY || process.env.JWT_SECRET;

export const validateRequiredEnv = () => {
  const missingVars = [];

  if (!process.env.DB_URL) missingVars.push("DB_URL");
  if (!getJwtSecret()) missingVars.push("SECRET_KEY");

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variable(s): ${missingVars.join(", ")}`);
  }
};
