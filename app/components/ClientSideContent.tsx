'use client';

import { useState, useEffect, ReactNode } from 'react';

interface ClientSideContentProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ClientSideContent({ children, fallback = null }: ClientSideContentProps) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return <>{fallback}</>;
  }
  
  return <>{children}</>;
}

export default ClientSideContent; 