export function isIosDevice() {
  const iOSDevice =
    typeof window !== 'undefined' &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform);
  return !!iOSDevice;
}
