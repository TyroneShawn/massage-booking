import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleFindMasseuseClick = () => {
    navigate('/masseuses');
  };

  const handleMassageTypeClick = (massageType) => {
    navigate(`/booking?massageType=${massageType}`);
  };

  return (
    <div>
      <section className="relative text-center">
        <div className="relative">
          <img src="/img/relaxing-background-image-3.png" alt="relaxing background" className="w-full h-80 object-cover opacity-50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">{t('Blissful Hands Massage Studio')}</h1>
            <h2 className="text-2xl font-semibold mb-4">{t('Find rejuvenation With Our Top Rated Certified Massage Therapists')}</h2>
            <button
              onClick={handleFindMasseuseClick}
              className="bg-primary text-primary-foreground dark:bg-secondary dark:text-secondary-foreground px-6 py-3 rounded hover:bg-white"
            >
              {t('Find A Masseuse')}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        {[
          { title: 'Swedish Massage', img: '/img/swedmass.jpg', desc: 'Swedish massage is a gentle type of full-body massage that’s ideal for people who: are new to massage, have a lot of tension, are sensitive to touch. It can help release muscle knots and it’s also a good choice for when you want to fully relax during a massage.' },
          { title: 'Aromatherapy Massage', img: '/img/Aromatherapy.jpg', desc: 'Aromatherapy massage is a full-body massage that combines massage therapy with essential oils. Aromatherapy is thought to have many benefits, including: reducing stress and anxiety, reducing muscle tension, and easing pain.' },
          { title: 'Deep Tissue Massage', img: '/img/deep.jpg', desc: 'Deep tissue massage is a massage technique that’s mainly used to treat musculoskeletal issues, such as strains and sports injuries. It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues.' },
          { title: 'Hot Stone Massage', img: '/img/hotstone.png', desc: 'Hot stone massage is used to help you relax and ease tense muscles and damaged soft tissues throughout your body. During a hot stone massage, smooth, flat, heated stones are placed on specific parts of your body.' },
          { title: 'Shiatsu Massage', img: '/img/Shiatsu.jpg', desc: 'Shiatsu massage is a form of Japanese bodywork that uses kneading, pressing, soothing, tapping, and stretching techniques and is performed without oils through light, comfortable clothing.' },
          { title: 'Thai Massage', img: '/img/thaimass.jpg', desc: 'Thai massage is more energizing and rigorous than more classic forms of massage. Thai massage is also called Thai yoga massage because the therapist uses their hands, knees, legs, and feet to move you into a series of yoga-like stretches.' },
          { title: 'Prenatal Massage', img: '/img/prenatal.jpeg', desc: 'Prenatal massage is a therapeutic bodywork that focuses on the special needs of the mother-to-be as her body goes through the dramatic changes of pregnancy. It helps to reduce stress, decrease swelling, relieve aches and pains, and reduce anxiety and depression.' },
          { title: 'Reflexology', img: '/img/reflexology.jpg', desc: 'Reflexology involves applying different amounts of pressure to the feet, hands, and ears. It’s based on a theory that these body parts are connected to certain organs and body systems.' },
          { title: 'Sports Massage', img: '/img/sportsmass.jpg', desc: 'Sports massage is designed to help athletes before, during, and after training or sporting events. It can be used to promote flexibility and help prevent injuries, as well as to treat injuries such as sprains, strains, and tendonitis.' },
          { title: 'Trigger Point Massage', img: '/img/trigger.jpg', desc: 'Trigger point massage is best suited for people who have injuries, chronic pain, or a specific issue or condition. Sometimes areas of tightness in the muscle tissues, known as trigger points, can cause pain in other parts of the body.' },
        ].map((massage, index) => (
          <div key={index} className="bg-card p-4 rounded-lg shadow">
            <img src={massage.img} alt={massage.title} className="rounded-t-lg w-full h-auto" style={{ width: '400px', height: '250px' }} />
            <h3
              className="text-xl font-semibold mt-4 cursor-pointer hover:text-gray-500"
              onClick={() => handleMassageTypeClick(massage.title)}
            >
              {t(massage.title)}
            </h3>
            <p className="text-muted-foreground dark:text-primary-foreground">
              {t(massage.desc)}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
