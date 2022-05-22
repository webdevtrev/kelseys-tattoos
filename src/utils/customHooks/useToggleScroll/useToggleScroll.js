import { useEffect } from 'react';
import { isIosDevice } from '../../isIosDevice/isIosDevice';

export function useToggleScroll(disable) {
  useEffect(() => {
    const html = document?.querySelector('html');
    const body = document?.body;
    const scrollPosition = html.scrollTop;
    if (disable) {
      if (isIosDevice) {
        html.style.position = 'fixed';
        html.style.width = '100%';
        body.style.width = '100%';
      } else {
        html.style.position = 'relative';
        html.style.overflow = 'hidden';
        body.style.overflow = 'hidden';
      }
      body.style.marginTop = `-${scrollPosition}px`;
    }
    return () => {
      body.style.removeProperty('margin-top');
      html.style.position = 'static';
      html.style.overflow = 'auto';
      body.style.overflow = 'auto';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disable]);
}
