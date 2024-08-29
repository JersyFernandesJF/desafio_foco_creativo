import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.NEXT_PUBLIC_API_URL);

export const authenticatePocketBase = async () => {
  try {
    await pb.admins.authWithPassword(
      `${process.env.AUTH_POCKETDB_USER_NAME}`,
      `${process.env.AUTH_POCKETDB_PASSWORD}`
    );
    console.log("Authenticated with PocketBase");
  } catch (error) {
    console.error("Failed to authenticate with PocketBase:", error);
  }
};
export default pb;
