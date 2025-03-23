'use client';

import { useState, useEffect } from 'react';

export function useClientOnly<T>(initialValue: T): [boolean, T] {
  const [isClient, setIsClient] = useState(false);
  const [value, setValue] = useState<T>(initialValue);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return [isClient, value];
}

export default useClientOnly; 