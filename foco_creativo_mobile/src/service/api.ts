import PocketBase from "pocketbase";

const pb = new PocketBase(
  process.env.POCKET_BASE_URL || "http://127.0.0.1:8090"
);

export const authenticatePocketBase = async () => {
  try {
    await pb.admins.authWithPassword(
      process.env.POCKET_BASE_USERNAME || "your-username",
      process.env.POCKET_BASE_PASSWORD || "your-password"
    );
    console.log("Authenticated with PocketBase");
  } catch (error) {
    console.error("Failed to authenticate with PocketBase:", error);
  }
};

// Exporting PocketBase instance for use throughout your app
export default pb;
