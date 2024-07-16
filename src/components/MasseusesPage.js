import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const masseuses = [
  { name: 'Stacy', description: 'Specializes in Swedish massage with over 10 years of experience.', image: '/img/Stacy.jpeg' },
  { name: 'Katya', description: 'Expert in deep tissue massage, known for her healing hands.', image: '/img/Katya.png' },
  { name: 'John', description: 'Certified in sports massage, helping athletes recover faster.', image: '/img/John.jpeg' },
  { name: 'Lisa', description: 'Aromatherapy massage specialist with a gentle touch.', image: '/img/Lisa.jpeg' },
  { name: 'Michael', description: 'Renowned for his shiatsu massage techniques.', image: '/img/Michael.jpeg' },
  { name: 'Sarah', description: 'Passionate about reflexology and its benefits.', image: '/img/Sarah.jpeg' },
  { name: 'Emily', description: 'Integrates hot stone therapy for a relaxing experience.', image: '/img/Emily.jpeg' },
  { name: 'Daniel', description: 'Skilled in prenatal massage, catering to expecting mothers.', image: '/img/Daniel.jpeg' },
  { name: 'Sophia', description: 'Specializes in Thai massage, known for her calming sessions.', image: '/img/Sophia.png' },
  { name: 'David', description: 'Offers therapeutic massage for chronic pain relief.', image: '/img/David.jpeg' },
  { name: 'Anna', description: 'Expert in lymphatic drainage massage.', image: '/img/Anna.jpeg' },
  { name: 'James', description: 'Combines acupuncture with massage therapy.', image: '/img/James.jpeg' },
  { name: 'Olivia', description: 'Focuses on relaxation and stress relief through massage.', image: '/img/Olivia.png' },
  { name: 'Robert', description: 'Known for his effective trigger point therapy.', image: '/img/Robert.jpeg' },
  { name: 'Mia', description: 'Utilizes cupping therapy along with traditional massage.', image: '/img/Mia.png' },
];

function MasseusesPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMasseuses, setSelectedMasseuses] = useState(masseuses);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterMasseuses(event.target.value);
  };

  const filterMasseuses = (term) => {
    const filtered = masseuses.filter((masseuse) =>
      masseuse.name.toLowerCase().includes(term.toLowerCase())
    );
    setSelectedMasseuses(filtered);
  };

  const handleBookNow = (masseuseName) => {
    navigate(`/booking?masseuse=${masseuseName}`);
  };

  return (
    <div className="container mx-auto py-12">
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold">{t('Our Masseuses')}</h2>
        <p className="text-muted-foreground mt-2">{t('All 15 of the worlds best Massage Therapists')}</p>
        <input
          type="text"
          placeholder={t('Search masseuses...')}
          value={searchTerm}
          onChange={handleSearchChange}
          className="mt-4 p-2 border rounded-lg w-full md:w-1/2"
        />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {selectedMasseuses.map((masseuse, index) => (
          <div key={index} className="bg-card rounded-lg overflow-hidden">
            <div className="image-container">
            <img src={masseuse.image} alt={masseuse.name} className="rounded-t-lg" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{t(masseuse.name)}</h3>
              <p className="text-muted-foreground">{t(masseuse.description)}</p>
              <button
                className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded"
                onClick={() => handleBookNow(masseuse.name)}
              >
                {t('Book Now')}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default MasseusesPage;
