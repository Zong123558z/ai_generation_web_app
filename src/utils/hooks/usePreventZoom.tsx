import { useEffect } from "react";

export const usePreventZoom = () => {
  useEffect(() => {
    const preventPinchZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }

    const preventGesture = (e: Event) => {
      e.preventDefault()
    }

    document.addEventListener("touchmove", preventPinchZoom, { passive: false })
    document.addEventListener("gesturestart", preventGesture, { passive: false })

    return () => {
      document.removeEventListener("touchmove", preventPinchZoom)
      document.removeEventListener("gesturestart", preventGesture)
    }
  }, [])

  useEffect(() => {
    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';

    document.head.appendChild(metaViewport);

    // return () => {
    //   document.head.removeChild(metaViewport);
    // };
  }, []);
};