/* eslint-disable import/no-extraneous-dependencies */
import { renderHook } from '@testing-library/react-hooks';
import { useSwipeV2 } from '../use-swipe'; // Adjust the import path as necessary

describe('useSwipeV2', () => {
  let addEventListenerSpy;
  let removeEventListenerSpy: jest.SpyInstance<void, [type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined]>;
  let onSwipeMock: jest.Mock<any, any>;

  beforeEach(() => {
    addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    onSwipeMock = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const triggerTouchEvent = (type: string, screenX: number, screenY: number) => {
    const event = new TouchEvent(type, {
      changedTouches: [new Touch({ clientX: screenX, clientY: screenY, identifier: Date.now(), screenX, screenY, target: window })],
    });
    window.dispatchEvent(event);
  };

  test('should handle horizontal swipe right from edge to center', () => {
    const { unmount } = renderHook(() => useSwipeV2({ onSwipe: onSwipeMock }));

    triggerTouchEvent('touchstart', 10, 100); // Start near the left edge
    triggerTouchEvent('touchmove', window.innerWidth / 2, 100); // Move to center
    triggerTouchEvent('touchend', window.innerWidth / 2, 100); // End touch

    expect(onSwipeMock).toHaveBeenCalledWith('right', 'edgeToCenter');
    unmount();
  });

  // Add more test cases here for different swipe directions and start/end positions

  test('should clean up event listeners on unmount', () => {
    const { unmount } = renderHook(() => useSwipeV2({ onSwipe: onSwipeMock }));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledTimes(3); // For 'touchstart', 'touchmove', 'touchend'
    expect(removeEventListenerSpy).toHaveBeenCalledWith('touchstart', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('touchmove', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('touchend', expect.any(Function));
  });
});

