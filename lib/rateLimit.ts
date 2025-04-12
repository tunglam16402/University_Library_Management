import redis from "@/database/redis";
import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above

// Create a new ratelimiter, that allows 10 requests per 10 seconds
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(10, "10s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export default ratelimit;
