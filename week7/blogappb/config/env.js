import { config } from "dotenv";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const backendRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

config({ path: resolve(backendRoot, ".env"), quiet: true });

export const getJwtSecret = () =>
  process.env.SECRET_KEY?.trim() || process.env.JWT_SECRET?.trim();

export const validateRequiredEnv = () => {
  const missingVars = [];

  if (!process.env.DB_URL?.trim()) missingVars.push("DB_URL");
  if (!getJwtSecret()) missingVars.push("SECRET_KEY or JWT_SECRET");

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variable(s): ${missingVars.join(", ")}`);
  }
};
