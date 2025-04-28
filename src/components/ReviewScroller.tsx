import React, { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    name: 'Alice',
    text: 'Absolutely amazing service! My business grew 2x in 3 months.',
    img: 'https://randomuser.me/api/portraits/women/1.jpg',
    stars: 5
  },
  {
    name: 'Bob',
    text: 'The AI-powered campaigns are a game changer. Highly recommended.',
    img: 'https://randomuser.me/api/portraits/men/2.jpg',
    stars: 5
  },
  {
    name: 'Charlie',
    text: 'Professional, transparent, and always on time. Love working with them.',
    img: 'https://randomuser.me/api/portraits/men/3.jpg',
    stars: 4
  },
  {
    name: 'Diana',
    text: 'Our ROI skyrocketed after switching to their digital marketing.',
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
    stars: 5
  },
  {
    name: 'Ethan',
    text: 'The best marketing team I have ever worked with.',
    img: 'https://randomuser.me/api/portraits/men/5.jpg',
    stars: 5
  },
  {
    name: 'Fiona',
    text: 'Creative, data-driven, and super responsive. 10/10!',
    img: 'https://randomuser.me/api/portraits/women/6.jpg',
    stars: 5
  },
  {
    name: 'George',
    text: 'They really care about your growth. Results speak for themselves.',
    img: 'https://randomuser.me/api/portraits/men/7.jpg',
    stars: 4
  },
  {
    name: 'Hannah',
    text: 'I was skeptical at first, but the results blew me away!',
    img: 'https://randomuser.me/api/portraits/women/8.jpg',
    stars: 5
  },
  {
    name: 'Ivan',
    text: 'Their strategies are always ahead of the curve.',
    img: 'https://randomuser.me/api/portraits/men/9.jpg',
    stars: 4
  },
  {
    name: 'Julia',
    text: 'Excellent communication and fantastic results.',
    img: 'https://randomuser.me/api/portraits/women/10.jpg',
    stars: 5
  },
  {
    name: 'Kevin',
    text: 'They made digital marketing easy for us.',
    img: 'https://randomuser.me/api/portraits/men/11.jpg',
    stars: 4
  },
  {
    name: 'Laura',
    text: 'Our leads have never been better. Thank you!',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    stars: 5
  },
  {
    name: 'Mike',
    text: 'Superb analytics and reporting. Very transparent.',
    img: 'https://randomuser.me/api/portraits/men/13.jpg',
    stars: 5
  },
  {
    name: 'Nina',
    text: 'They treat your business like their own.',
    img: 'https://randomuser.me/api/portraits/women/14.jpg',
    stars: 4
  },
  {
    name: 'Oscar',
    text: 'Fast, reliable, and always creative.',
    img: 'https://randomuser.me/api/portraits/men/15.jpg',
    stars: 5
  },
  {
    name: 'Priya',
    text: 'We saw a 50% increase in engagement.',
    img: 'https://randomuser.me/api/portraits/women/16.jpg',
    stars: 5
  },
  {
    name: 'Quentin',
    text: 'The team is always available for support.',
    img: 'https://randomuser.me/api/portraits/men/17.jpg',
    stars: 4
  },
  {
    name: 'Rita',
    text: 'They helped us reach new markets.',
    img: 'https://randomuser.me/api/portraits/women/18.jpg',
    stars: 5
  },
  {
    name: 'Sam',
    text: 'Our brand visibility has improved dramatically.',
    img: 'https://randomuser.me/api/portraits/men/19.jpg',
    stars: 5
  },
  {
    name: 'Tina',
    text: 'They deliver what they promise, every time.',
    img: 'https://randomuser.me/api/portraits/women/20.jpg',
    stars: 4
  },
  {
    name: 'Uma',
    text: 'The best investment we made this year.',
    img: 'https://randomuser.me/api/portraits/women/21.jpg',
    stars: 5
  },
  {
    name: 'Victor',
    text: 'They understand our needs perfectly.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    stars: 5
  },
  {
    name: 'Wendy',
    text: 'We love the creativity and passion they bring.',
    img: 'https://randomuser.me/api/portraits/women/23.jpg',
    stars: 4
  },
  {
    name: 'Xander',
    text: 'Our sales funnel is now fully optimized.',
    img: 'https://randomuser.me/api/portraits/men/24.jpg',
    stars: 5
  },
  {
    name: 'Yara',
    text: 'They are true partners in our growth.',
    img: 'https://randomuser.me/api/portraits/women/25.jpg',
    stars: 5
  },
  {
    name: 'Zane',
    text: 'We recommend them to everyone we know.',
    img: 'https://randomuser.me/api/portraits/men/26.jpg',
    stars: 4
  },
  {
    name: 'Ava',
    text: 'Their insights are always spot on.',
    img: 'https://randomuser.me/api/portraits/women/27.jpg',
    stars: 5
  },
  {
    name: 'Ben',
    text: 'We have seen consistent growth month over month.',
    img: 'https://randomuser.me/api/portraits/men/28.jpg',
    stars: 5
  },
];

const StarRating = ({ stars }: { stars: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', margin: '0.2rem 0 0.7rem 0' }}>
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width={18}
        height={18}
        viewBox="0 0 20 20"
        fill={i < stars ? '#FFD700' : '#E0E0E0'}
        style={{ marginRight: 2 }}
      >
        <polygon points="10,1 12.6,7.2 19.2,7.6 14,12.2 15.6,18.7 10,15.2 4.4,18.7 6,12.2 0.8,7.6 7.4,7.2" />
      </svg>
    ))}
  </div>
);

const ReviewScroller: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - (isMobile ? 0.5 : 1));
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, [isMobile]);

  // Each review card width (including margin)
  const cardWidth = isMobile ? 280 : 320;
  // Total width of all reviews
  const totalWidth = reviews.length * cardWidth;

  // When the offset reaches -cardWidth, reset to 0 and rotate reviews
  useEffect(() => {
    if (Math.abs(offset) >= cardWidth) {
      setOffset(0);
      reviews.push(reviews.shift()!); // Move first review to end
    }
  }, [offset, cardWidth]);

  return (
    <div
      style={{
        width: '100%',
        background: '#181818',
        padding: isMobile ? '1.5rem 0' : '2.5rem 0',
        overflow: 'hidden',
        position: 'relative',
        minHeight: isMobile ? '180px' : '220px',
        borderTop: '2px solid #222',
        borderBottom: '2px solid #222',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          transform: `translateX(${offset}px)`,
          transition: 'transform 0.1s linear',
          width: totalWidth,
        }}
      >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            style={{
              minWidth: cardWidth - (isMobile ? 24 : 32),
              maxWidth: cardWidth - (isMobile ? 24 : 32),
              margin: isMobile ? '0 12px' : '0 16px',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              padding: isMobile ? '1rem 0.8rem' : '1.5rem 1.2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: isMobile ? 8 : 12 }}>
              <img 
                src={review.img} 
                alt={review.name} 
                style={{ 
                  width: isMobile ? 36 : 44, 
                  height: isMobile ? 36 : 44, 
                  borderRadius: '50%', 
                  objectFit: 'cover', 
                  marginRight: isMobile ? 8 : 12, 
                  border: '2px solid #eee' 
                }} 
              />
              <div style={{ 
                fontWeight: 600, 
                fontSize: isMobile ? '0.95rem' : '1.1rem', 
                color: '#222' 
              }}>
                {review.name}
              </div>
            </div>
            <StarRating stars={review.stars} />
            <div style={{ 
              color: '#444', 
              fontSize: isMobile ? '0.9rem' : '1.05rem', 
              lineHeight: 1.5 
            }}>
              {review.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewScroller; 