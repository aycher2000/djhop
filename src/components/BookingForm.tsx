'use client';

import { useState } from 'react';
import styles from './BookingForm.module.css';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    service: '',
    details: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xanewwbb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Booking request sent successfully!');
        setFormData({ service: '', details: '', email: '' });
      } else {
        alert('Error sending booking request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending booking request. Please try again.');
    }
  };

  return (
    <div className={styles.contactCard}>
      <h2 className={styles.contactTitle}>Book Me</h2>
      <form onSubmit={handleSubmit} className={styles.bookingForm}>
        <label htmlFor="service">Select Service</label>
        <select 
          name="service" 
          id="service" 
          required
          value={formData.service}
          onChange={handleChange}
        >
          <option value="" disabled>Select Service</option>
          <option value="DJ Gig">DJ Gig</option>
          <option value="Recording Session">Recording Session</option>
          <option value="Mix Down">Mix Down</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Album Artwork">Album Artwork</option>
          <option value="Web Development">Web Development</option>
        </select>

        <label htmlFor="details">Project Details</label>
        <textarea 
          name="details" 
          id="details" 
          placeholder="Describe your project..." 
          rows={4} 
          required
          value={formData.details}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="email">Your Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Your Email" 
          required
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">Request Booking</button>
      </form>
    </div>
  );
}