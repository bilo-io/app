// #region Modules
import React, {
  useEffect,
  useState
} from 'react';
// #endregion

type CardStackProps = {
    children: any,
    items: any[],
    renderItem: Function,
    width: string,
    height: string,
    margin: string,
    stackHeight: string,
    isAsync: boolean,
    isSeparate: boolean,
    isOpenDefault?: boolean,
    duration: any,
    color?: string,
    backgroundColor?: string,
    style?: any

}
export const CardStack = ({
  children,
  items,
  renderItem,
  width,
  height,
  margin,
  stackHeight,
  isAsync,
  isSeparate,
  isOpenDefault,
  duration,
  color,
  backgroundColor,
  style,
}: CardStackProps) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
  }, []);

  const toggleStack = () => {
    if (isAsync && !isOpen) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsOpen(!isOpen);
      }, (items || []).length * 400);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const cardHeight = `calc(${height} - 1rem)`;
  const openStyle = {
    height: cardHeight,
    margin,
    opacity: 1,
    transition: `all ${duration?.open}`,
    width,
  };

  const closedStyle = {
    height: cardHeight,
    margin: 0,
    opacity: 0,
    overflow: 'hidden',
    transition: `all ${duration?.close}`,
    width: 0,
  };

  const content = <>
    <div
      className="card-stack flex flex-col relative cursor-pointer"
      style={{
        height,
        margin,
        width,
        ...style,
      }}>
      {
        isOpen
          ? null
          : <>
            <div className='stack-2'
              style={{
                backgroundColor,
                borderRadius: '0.5rem',
                color,
                height: `calc(2*${stackHeight})`,
                marginTop: 0,
                zIndex: 0,
              }} />
            <div className='stack-1'
              style={{
                backgroundColor,
                borderRadius: '0.5rem',
                color,
                height: `calc(2*${stackHeight})`,
                marginTop: stackHeight,
                zIndex: 1,
              }} />
          </>
      }
      <div className={`${isOpen ? 'card card-3' : 'parent'}`}
        style={{
          backgroundColor,
          border: isOpen ? '2px solid #00adee' : '2px solid transparent',
          borderRadius: '0.5rem',
          color,
          height: `calc(${height} - 1rem)`,
          marginTop: isOpen ? 0 : `calc(2*${stackHeight})`,
          position: 'relative',
          width,
          zIndex: 2,
        }}
        onClick={toggleStack}
      >
        {children}
        {isLoading && <div
          className='loader-background'
          style={{
            height: `calc(${cardHeight} + 4px)`,
            width: `calc(${width} + 4px)`,
          }}>
          <div className="loader white" />
        </div>}
      </div>
    </div>
    {
      (items || []).map((item, i) => (
        <div
          key={i}
          className='card-stack-child'
          style={isOpen && !isLoading ? openStyle : closedStyle}

        >
          {renderItem(item, i)}
        </div>))
    }
  </>;

  return (
    isSeparate
      ? <div className="flex-row flex-wrap">{content}</div>
      : content
  );
};

export default CardStack;
