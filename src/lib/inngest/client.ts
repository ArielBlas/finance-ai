import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "finance-ai",
  name: "Finance AI",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000,
    maxAttempts: 2,
  }),
});
