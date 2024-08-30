import { useEffect } from 'react';

export type SwipeDirection = 'left' | 'right' | 'up' | 'down'
export type SwipePosition = 'centerToEdge' | 'edgeToCenter' | 'edgeToEdge'

export const useSwipe = (onSwipedLeft: () => void, onSwipedRight: () => void): void => {
  useEffect(() => {
    let touchStartX: number | null = null;
    let touchEndX: number | null = null;

    const handleTouchStart = (e: TouchEvent):void => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchMove = (e: TouchEvent):void => {
      touchEndX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = () => {
      if (touchStartX !== null && touchEndX !== null) {
        const deltaX = touchEndX - touchStartX;
        if (Math.abs(deltaX) > 50) {
          if (deltaX > 0) {
            onSwipedRight();
          } else {
            onSwipedLeft();
          }
        }
      }
      touchStartX = null;
      touchEndX = null;
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipedLeft, onSwipedRight]);
};

export default useSwipe;

interface SwipeConfig {
  onSwipe: (direction: SwipeDirection, position: SwipePosition) => void;
}

export const useSwipeV2 = ({ onSwipe }: SwipeConfig): void => {
  useEffect(() => {
    let touchStartX: number | null = null;
    let touchEndX: number | null = null;
    let touchStartY: number | null = null;
    let touchEndY: number | null = null;

    const edgeThreshold = 100; // Threshold to determine edge swipes

    const handleTouchStart = (e: TouchEvent): void => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchMove = (e: TouchEvent): void => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (): void => {
      if (touchStartX !== null && touchEndX !== null && touchStartY !== null && touchEndY !== null) {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);

        const isHorizontalSwipe = absDeltaX > absDeltaY && absDeltaX > 50;
        const isVerticalSwipe = absDeltaY > absDeltaX && absDeltaY > 50;

        const startFromEdgeX = touchStartX < edgeThreshold || touchStartX > window.innerWidth - edgeThreshold;
        const startFromEdgeY = touchStartY < edgeThreshold || touchStartY > window.innerHeight - edgeThreshold;
        const endAtEdgeX = touchEndX < edgeThreshold || touchEndX > window.innerWidth - edgeThreshold;
        const endAtEdgeY = touchEndY < edgeThreshold || touchEndY > window.innerHeight - edgeThreshold;

        let position: 'centerToEdge' | 'edgeToCenter' | 'edgeToEdge' = 'centerToEdge';

        if (startFromEdgeX || startFromEdgeY) {
          position = endAtEdgeX || endAtEdgeY ? 'edgeToEdge' : 'edgeToCenter';
        } else if (endAtEdgeX || endAtEdgeY) {
          position = 'centerToEdge';
        }

        if (isHorizontalSwipe) {
          if (deltaX > 0) {
            onSwipe('right', position);
          } else {
            onSwipe('left', position);
          }
        }

        if (isVerticalSwipe) {
          if (deltaY > 0) {
            onSwipe('down', position);
          } else {
            onSwipe('up', position);
          }
        }
      }

      touchStartX = null;
      touchEndX = null;
      touchStartY = null;
      touchEndY = null;
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipe]);
};

export const useSwipeV3 = ({ onSwipe }: SwipeConfig): void => {
  useEffect(() => {
    let touchStartX: number | null = null;
    let touchEndX: number | null = null;
    let touchStartY: number | null = null;
    let touchEndY: number | null = null;

    const edgeThresholdPercentage = 0.2; // 20% from the edge
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const edgeThresholdWidth = screenWidth * edgeThresholdPercentage;
    const edgeThresholdHeight = screenHeight * edgeThresholdPercentage;

    const handleTouchStart = (e: TouchEvent): void => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchMove = (e: TouchEvent): void => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (): void => {
      if (touchStartX !== null && touchEndX !== null && touchStartY !== null && touchEndY !== null) {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);

        const isHorizontalSwipe = absDeltaX > absDeltaY && absDeltaX > 50;
        const isVerticalSwipe = absDeltaY > absDeltaX && absDeltaY > 50;

        if (isHorizontalSwipe) {
          const startEdge = touchStartX < edgeThresholdWidth ? 'edge' :
            touchStartX > screenWidth - edgeThresholdWidth ? 'edge' : 'center';
          const endEdge = touchEndX < edgeThresholdWidth ? 'edge' :
            touchEndX > screenWidth - edgeThresholdWidth ? 'edge' : 'center';

          if (deltaX > 0) {
            onSwipe('right', startEdge === 'edge' && endEdge === 'center' ? 'edgeToCenter' :
              startEdge === 'center' && endEdge === 'edge' ? 'centerToEdge' : 'edgeToEdge');
          } else {
            onSwipe('left', startEdge === 'edge' && endEdge === 'center' ? 'edgeToCenter' :
              startEdge === 'center' && endEdge === 'edge' ? 'centerToEdge' : 'edgeToEdge');
          }
        } else if (isVerticalSwipe) {
          const startEdge = touchStartY < edgeThresholdHeight ? 'edge' :
            touchStartY > screenHeight - edgeThresholdHeight ? 'edge' : 'center';
          const endEdge = touchEndY < edgeThresholdHeight ? 'edge' :
            touchEndY > screenHeight - edgeThresholdHeight ? 'edge' : 'center';

          if (deltaY > 0) {
            onSwipe('down', startEdge === 'edge' && endEdge === 'center' ? 'edgeToCenter' :
              startEdge === 'center' && endEdge === 'edge' ? 'centerToEdge' : 'edgeToEdge');
          } else {
            onSwipe('up', startEdge === 'edge' && endEdge === 'center' ? 'edgeToCenter' :
              startEdge === 'center' && endEdge === 'edge' ? 'centerToEdge' : 'edgeToEdge');
          }
        }
      }

      touchStartX = null;
      touchEndX = null;
      touchStartY = null;
      touchEndY = null;
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipe]);
};


// export default useSwipe;
