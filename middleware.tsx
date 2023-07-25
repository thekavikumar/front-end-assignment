export { default } from "next-auth/middleware";

// Path: pages\api\dashboard.tsx
// Block this page from being accessed without authentication
export const config = { matcher: ["/dashboard"] };
