'use client';
import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    import ('bootstrap/dist/js/bootstrap.bundle.min.js'); // ← Required for dropdowns, modals, etc.

  }, []);

  return null;
}
