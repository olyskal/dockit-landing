interface Window {
  gtag: (
    command: 'event' | 'config' | 'consent' | 'get' | 'set',
    targetId: string,
    params?: {
      [key: string]: unknown;
    }
  ) => void;
  dataLayer: unknown[];
}
