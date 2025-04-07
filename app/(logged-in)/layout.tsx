import MainHeader from '@/components/main-header/main-header';
import '../globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  );
}
