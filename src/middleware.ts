// middleware.ts
import { NextRequest } from 'next/server';

// Middleware function to handle caching
export async function middleware(request: NextRequest) {
  const cache = caches.default;
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await fetch(request);

  if (response.status === 200) {
    const responseClone = response.clone();
    await cache.put(request, responseClone);
  }

  return response;
}
