import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReviewScroller from '../components/ReviewScroller';
import LightBulbAnimation from '../components/LightBulbAnimation';

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 90%;
  max-width: 1100px;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TeamCard = styled.div`
  background: #fff;
  color: #111;
  flex: 1;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  minWidth: 0;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TeamImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #f8f8f2;
`;

const ContactSection = styled.div`
  background: #f8f8f2;
  padding: 4rem 0;
  width: 100%;
`;

const MapContainer = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 2rem auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
`;

const Address = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #333;
  margin: 1rem 0;
  font-weight: 500;
`;

const DigitalMarketing: React.FC = () => {
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          width: '100vw',
          backgroundImage: 'url(/bg-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <LightBulbAnimation />
      </div>

      {/* Successful Digital Marketing Campaigns section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          background: '#111',
          color: '#111',
          minHeight: '80vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '3rem 0 2rem 0',
        }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: '#222',
            background: '#f8f8f2',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 500,
            padding: '0.5rem 2rem',
            borderRadius: '6px',
            marginBottom: '2.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            textAlign: 'center',
            width: '90%',
            maxWidth: '600px'
          }}
        >
          Successful Digital Marketing Campaigns
        </motion.h2>
        <CardsContainer>
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: '#fff',
              color: '#111',
              flex: 1,
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              minWidth: 0,
            }}
          >
            <div style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>1st</div>
            <div style={{ fontWeight: 500, marginBottom: '0.5rem', fontSize: '1.1rem' }}>In Bringing AI to the Table</div>
            <div style={{ fontSize: '0.98rem', color: '#444' }}>Using cutting edge AI technology to help you grow your business.</div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              background: '#fff',
              color: '#111',
              flex: 1,
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              minWidth: 0,
            }}
          >
            <div style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>12+</div>
            <div style={{ fontWeight: 500, marginBottom: '0.5rem', fontSize: '1.1rem' }}>Clients</div>
            <div style={{ fontSize: '0.98rem', color: '#444' }}>Diversifying coverage and uninterrupted service. New clients onboard each week.</div>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              background: '#fff',
              color: '#111',
              flex: 1,
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              minWidth: 0,
            }}
          >
            <div style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>95%</div>
            <div style={{ fontWeight: 500, marginBottom: '0.5rem', fontSize: '1.1rem' }}>Satisfaction Rate</div>
            <div style={{ fontSize: '0.98rem', color: '#444' }}>Same day statistics and reports. We are always transparent and honest.</div>
          </motion.div>
        </CardsContainer>
        {/* World map image placeholder */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          src="/world-map.png" 
          alt="World map" 
          style={{ 
            width: '90%', 
            maxWidth: '900px', 
            borderRadius: '10px', 
            border: '2px solid #fff', 
            boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
            margin: '0 auto'
          }} 
        />
      </motion.div>
      {/* Reviews Scroller Section */}
      <ReviewScroller />
      
      <ContactSection>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            color: '#222',
            marginBottom: '2rem'
          }}
        >
          Meet the Team
        </motion.h2>
        
        <TeamContainer>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TeamCard>
              <TeamImage src="/team/puneet.jpg" alt="Puneet Singh" />
              <h3 style={{ marginBottom: '0.5rem', color: '#222' }}>Puneet Singh</h3>
              <p style={{ color: '#666', fontWeight: 500 }}>CEO</p>
              <p style={{ color: '#666', fontWeight: 100 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </TeamCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TeamCard>
              <TeamImage src="/team/karan.jpg" alt="Karan Gupta" />
              <h3 style={{ marginBottom: '0.5rem', color: '#222' }}>Karan Gupta</h3>
              <p style={{ color: '#666', fontWeight: 500 }}>CFO</p>
              <p style={{ color: '#666', fontWeight: 100 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </TeamCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <TeamCard>
              <TeamImage src="/team/abhishek.jpg" alt="Abhishek Singh" />
              <h3 style={{ marginBottom: '0.5rem', color: '#222' }}>Abhishek Singh</h3>
              <p style={{ color: '#666', fontWeight: 500 }}>COO</p>
              <p style={{ color: '#666', fontWeight: 100 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </TeamCard>
          </motion.div>
        </TeamContainer>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.0446561173584!2d78.2125735!3d26.2602368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5c1ebcfffff%3A0x3f3e44668c6cea41!2sDeen%20Dayal%20Nagar%2C%20Gwalior%2C%20Madhya%20Pradesh%20474020!5e0!3m2!1sen!2sin!4v1710400877307!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Address>
            Office Address: DM 175, D Sector, Deen Dayal Nagar, Gwalior
          </Address>
        </motion.div>
      </ContactSection>
    </>
  );
};

export default DigitalMarketing;