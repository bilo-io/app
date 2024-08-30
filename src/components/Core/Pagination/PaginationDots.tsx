import React from 'react';
import './PaginationDots.scss';

interface PaginationDotsProps {
    totalPages: number;
    activeIndex: number;
    onClick: (index: number) => void;
    activeColor?: string;
    backgroundColor?: string;
    limit?: number;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
  totalPages,
  activeIndex,
  onClick,
  activeColor = '#0067FF',
  backgroundColor = '#00000033',
  limit = 10,
}) => {
  const getDots = () => {
    const dots = [];
    for (let i = 0; i < totalPages; i++) {
      dots.push(
        <div
          key={i}
          className={'dot'}
          style={{
            backgroundColor: i === activeIndex ? activeColor : backgroundColor
          }}
          onClick={() => onClick(i)}
        />
      );
    }
    return dots;
  };

  return (
    <div className="pagination-dots">
      {getDots().map((dot, index) => (
        <div key={index} className="dot-container">
          {index <= limit ? dot : index === limit + 1 ? '...' : null}
        </div>
      ))}
    </div>
  );
};

export default PaginationDots;
