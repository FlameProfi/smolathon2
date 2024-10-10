import React from 'react';

interface StarRatingProps {
    stars: number; 
}

const FullStar = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="gold" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .587l3.668 7.568 8.332 1.205-6.033 5.868 1.424 8.277L12 17.958l-7.391 3.864 1.424-8.277-6.033-5.868 8.332-1.205L12 .587z" />
    </svg>
);

const HalfStar = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="half-star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor="gold" />
                <stop offset="50%" stopColor="lightgray" />
            </linearGradient>
        </defs>
        <path d="M12 .587l3.668 7.568 8.332 1.205-6.033 5.868 1.424 8.277L12 17.958l-7.391 3.864 1.424-8.277-6.033-5.868 8.332-1.205L12 .587z" fill="url(#half-star-gradient)" />
    </svg>
);

const EmptyStar = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="lightgray" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .587l3.668 7.568 8.332 1.205-6.033 5.868 1.424 8.277L12 17.958l-7.391 3.864 1.424-8.277-6.033-5.868 8.332-1.205L12 .587z" />
    </svg>
);

const Star: React.FC<{ filled: boolean; half?: boolean }> = ({ filled, half }) => {
    if (filled) {
        return <FullStar />;
    }
    if (half) {
        return <HalfStar />;
    }
    return <EmptyStar />;
};

const StarRating: React.FC<StarRatingProps> = ({ stars }) => {
    const fullStars = Math.floor(stars / 2); 
    const halfStars = stars % 2; 

    return (
        <div style={{ display: 'flex' }}>
            {Array(fullStars).fill(null).map((_, index) => (
                <Star key={`filled-${index}`} filled={true} />
            ))}
            {halfStars > 0 && <Star key="half" filled={false} half={true} />}
            {Array(5 - fullStars - halfStars).fill(null).map((_, index) => (
                <Star key={`empty-${index}`} filled={false} />
            ))}
        </div>
    );
};

export default StarRating;
