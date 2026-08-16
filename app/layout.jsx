import './globals.css';

export const metadata = {
  title: 'PayTrace — Payment Tracking',
  description: 'Live payment tracking and receipt management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
