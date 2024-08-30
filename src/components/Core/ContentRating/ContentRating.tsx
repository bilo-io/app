import React, { useState } from 'react';
import './ContentRating.scss';

interface ContentRatingProps {
    age: number;
    hasNudity?: boolean;
    hasSex?: boolean;
    hasViolence?: boolean;
    hasLanguage?: boolean;
    isRRated?: boolean;
    // Add more content types as needed
    hasDrugUse?: boolean;
    hasAlcoholUse?: boolean;
    hasGambling?: boolean;
    hasScaryElements?: boolean;
    hasOnlineInteractions?: boolean;
    // disabled: boolean;
    onChange?: (state: ContentRatingProps) => void;
}

export const ContentRating: React.FC<ContentRatingProps> = ({
  age,
  hasNudity,
  hasSex,
  hasViolence,
  hasLanguage,
  isRRated,
  // Add more content types as needed
  hasDrugUse,
  hasAlcoholUse,
  hasGambling,
  hasScaryElements,
  hasOnlineInteractions,
  // disabled,
  onChange,
}) => {
  const [ratingState, setRatingState] = useState<ContentRatingProps>({
    age,

    hasAlcoholUse,

    // Add more content types as needed
    hasDrugUse,

    hasGambling,

    hasLanguage,

    hasNudity,

    hasOnlineInteractions,
    hasScaryElements,
    hasSex,
    hasViolence,
    isRRated,
    // disabled
  });

  const ratings: {
        key: keyof ContentRatingProps;
        label: string;
    }[] = [
      { key: 'isRRated', label: 'R' },
      { key: 'hasNudity', label: 'N' },
      { key: 'hasSex', label: 'S' },
      { key: 'hasViolence', label: 'V' },
      { key: 'hasLanguage', label: 'L' },
      // Add more content types as needed
      { key: 'hasDrugUse', label: 'D' },
      { key: 'hasAlcoholUse', label: 'A' },
      { key: 'hasGambling', label: 'G' },
      { key: 'hasScaryElements', label: 'E' },
      { key: 'hasOnlineInteractions', label: 'O' },
    ];

  const toggleContent = (contentType: keyof ContentRatingProps) => {
    // if (!disabled) {
    setRatingState((prevState) => ({
      ...prevState,
      [contentType]: !prevState[contentType],
    }));

    // Callback to return the resulting state
    onChange && onChange(ratingState);
    // }
  };

  return (
    <div className={`content-rating ${false ? 'disabled' : ''}`}>
      {/* <div className="rating-header">Content Rating</div> */}
      <div className="rating-info">
        {ratings.map((rating) => (
          <div
            key={rating.key}
            className={`content-type cursor-pointer ${ratingState[rating.key] ? 'active' : ''} ${rating.key === 'isRRated' ? 'r-rated' : ''
            }`}
            onClick={() => toggleContent(rating.key)}
            style={{ opacity: ratingState[rating.key] === false ? 0.4 : 1 }}
          >
            {rating.label}
          </div>
        ))}
        <div className="age-rating">{age}+</div>
        {/* Add more content types as needed */}
      </div>
    </div>
  );
};

export default ContentRating;
