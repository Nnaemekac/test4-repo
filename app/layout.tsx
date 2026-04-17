import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export const metadata = {
  title: 'Techbridge Website',
  description: '**Build a premium modern responsive landing page for a tech consulting company called &quot;TechBridge,&quot; targeting internatio',
  openGraph: {
    title: 'Techbridge Website',
    description: '**Build a premium modern responsive landing page for a tech consulting company called &quot;TechBridge,&quot; targeting internatio',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Techbridge Website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
