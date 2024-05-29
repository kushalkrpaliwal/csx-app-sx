// middleware.ts
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const cache = caches.default;
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      console.log('Cache hit:', request.url);
      return cachedResponse;
    }

    console.log('Cache miss:', request.url);
    const response = await fetch(request);

    if (response.status === 200) {
      const responseClone = response.clone();
      await cache.put(request, responseClone);
      console.log('Response cached:', request.url);
    }

    return response;
  } catch (error) {
    console.error('Error in middleware:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
