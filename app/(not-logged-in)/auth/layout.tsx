import { ReactNode } from 'react';

export default function AuthLayout({ children, auth }: { children: ReactNode; auth: ReactNode }) {
  return (
    <>
      {auth}
      {children}
    </>
  );
}
