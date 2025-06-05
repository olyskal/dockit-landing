interface Window {
  gtag: (
    command: 'event' | 'config' | 'consent' | 'get' | 'set',
    targetId: string,
    params?: {
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
}
