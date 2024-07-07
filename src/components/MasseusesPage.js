import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const masseuses = [
  { name: 'Stacy', description: 'Specializes in Swedish massage with over 10 years of experience.', image: 'https://placehold.co/600x400?text=Stacy' },
  { name: 'Katya', description: 'Expert in deep tissue massage, known for her healing hands.', image: 'https://placehold.co/600x400?text=Katya' },
  { name: 'John', description: 'Certified in sports massage, helping athletes recover faster.', image: 'https://placehold.co/600x400?text=John' },
  { name: 'Lisa', description: 'Aromatherapy massage specialist with a gentle touch.', image: 'https://placehold.co/600x400?text=Lisa' },
  { name: 'Michael', description: 'Renowned for his shiatsu massage techniques.', image: 'https://placehold.co/600x400?text=Michael' },
  { name: 'Sarah', description: 'Passionate about reflexology and its benefits.', image: 'https://placehold.co/600x400?text=Sarah' },
  { name: 'Emily', description: 'Integrates hot stone therapy for a relaxing experience.', image: 'https://placehold.co/600x400?text=Emily' },
  { name: 'Daniel', description: 'Skilled in prenatal massage, catering to expecting mothers.', image: 'https://placehold.co/600x400?text=Daniel' },
  { name: 'Sophia', description: 'Specializes in Thai massage, known for her calming sessions.', image: 'https://placehold.co/600x400?text=Sophia' },
  { name: 'David', description: 'Offers therapeutic massage for chronic pain relief.', image: 'https://placehold.co/600x400?text=David' },
  { name: 'Anna', description: 'Expert in lymphatic drainage massage.', image: 'https://placehold.co/600x400?text=Anna' },
  { name: 'James', description: 'Combines acupuncture with massage therapy.', image: 'https://placehold.co/600x400?text=James' },
  { name: 'Olivia', description: 'Focuses on relaxation and stress relief through massage.', image: 'https://placehold.co/600x400?text=Olivia' },
  { name: 'Robert', description: 'Known for his effective trigger point therapy.', image: 'https://placehold.co/600x400?text=Robert' },
  { name: 'Mia', description: 'Utilizes cupping therapy along with traditional massage.', image: 'https://placehold.co/600x400?text=Mia' },
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
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {selectedMasseuses.map((masseuse, index) => (
          <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg">
            <img src={masseuse.image} alt={masseuse.name} className="w-full h-48 object-cover" />
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
