// Pseudo test cases (manual/Postman)

// 1. Try Mongo Injection:
// ?q[$ne]= → should FAIL

// 2. XSS test:
// <script>alert(1)</script> → should NOT execute

// 3. Rate limit:
// 6 login attempts → blocked

// 4. Unauthorized admin access:
// GET /admin → 403

// 5. Negative price:
// POST product with -100 → should FAIL