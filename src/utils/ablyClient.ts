import * as Ably from "ably";

const ablyApiKey = process.env.NEXT_PUBLIC_ABLY_API_KEY;

if (!ablyApiKey) {
    throw new Error("Ably API key is not set in env (NEXT_PUBLIC_ABLY_API_KEY)");
}

export const ablyClient = new Ably.Realtime({
    key: ablyApiKey,
});
