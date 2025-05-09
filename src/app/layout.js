import './globals.css';

export const metadata = {
  title: 'Project 2X',
  description: 'Web app for dorm zones',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
