'use client';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.error(error); // Optional: Log the error for debugging

  return (
    <html>
      <body>
        <h2>Global Error</h2>
        <p>{error.message}</p>
      </body>
    </html>
  );
}
