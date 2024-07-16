import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleFindMasseuseClick = () => {
    navigate('/masseuses');
  };

  return (
    <div>
      <section className="relative text-center">
        <div className="relative bg-black dark:bg-primary text-white dark:text-primary-foreground py-20">
          <h1 className="text-4xl font-bold mb-4">{t('Blissful Hands Massage Studio')}</h1>
        </div>
        <div className="relative">
          <img src="/img/relaxing-background-image-3.png" alt="relaxing background" className="w-full h-60 object-cover opacity-50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold mb-4">{t('Find rejuvenation With Our Top Rated Certified Massage Therapists')}</h2>
            <button
              onClick={handleFindMasseuseClick}
              className="bg-primary text-primary-foreground dark:bg-secondary dark:text-secondary-foreground px-6 py-3 rounded"
            >
              {t('Find A Masseuse')}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="bg-card p-4 rounded-lg shadow">
          <img src="/img/swedmass.jpg" alt="Swedish Massage" className="rounded-t-lg w-full h-auto" style={{ width: '400px', height: '250px' }} />
          <h3 className="text-xl font-semibold mt-4">{t('Swedish Massage')}</h3>
          <p className="text-muted-foreground dark:text-primary-foreground">
            {t("Swedish massage is a gentle type of full-body massage that’s ideal for people who: are new to massage, have a lot of tension, are sensitive to touch. It can help release muscle knots and it’s also a good choice for when you want to fully relax during a massage.")}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <img src="/img/Aromatherapy.jpg" alt="Aromatherapy" className="rounded-t-lg w-full h-auto" style={{ width: '400px', height: '250px' }} />
          <h3 className="text-xl font-semibold mt-4">{t('Aromatherapy Massage')}</h3>
          <p className="text-muted-foreground dark:text-primary-foreground">
            {t('Aromatherapy massage is a full-body massage that combines massage therapy with essential oils. Aromatherapy is thought to have many benefits, including: reducing stress and anxiety, reducing muscle tension, and easing pain.')}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <img src="/img/deep.jpg" alt="Deep Tissue Massage" className="rounded-t-lg w-full h-auto" style={{ width: '400px', height: '250px' }} />
          <h3 className="text-xl font-semibold mt-4">{t('Deep Tissue Massage')}</h3>
          <p className="text-muted-foreground dark:text-primary-foreground">
            {t('Deep tissue massage is a massage technique that’s mainly used to treat musculoskeletal issues, such as strains and sports injuries. It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues.')}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <img src="/img/hotstone.png" alt="Hot Stone Massage" className="rounded-t-lg w-full h-auto" style={{ width: '400px', height: '250px' }} />
          <h3 className="text-xl font-semibold mt-4">{t('Hot Stone Massage')}</h3>
          <p className="text-muted-foreground dark:text-primary-foreground">
            {t('Hot stone massage is used to help you relax and ease tense muscles and damaged soft tissues throughout your body. During a hot stone massage, smooth, flat, heated stones are placed on specific parts of your body.')}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <img src="/img/Shiatsu.jpg" alt="Shiatsu Massage" className="rounded-t-lg w-full h-auto" style={{ width: '400px', height: '250px' }} />
          <h3 className="text-xl font-semibold mt-4">Shiatsu Massage</h3>
          <p className="text-muted-foreground dark:text-primary-foreground">
            {t('Shiatsu massage is a form of Japanese bodywork that uses kneading, pressing, soothing, tapping, and stretching techniques and is performed without oils through light, comfortable clothing.')}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <img src="/img/thaimass.jpg" alt="Thai Massage" className="rounded-t-lg w-full h-auto" style={{ width: '400px', height: '250px' }} />
          <h3 className="text-xl font-semibold mt-4">{t('Thai Massage')}</h3>
          <p className="text-muted-foreground dark:text-primary-foreground">
            {t('Thai massage is more energizing and rigorous than more classic forms of massage. Thai massage is also called Thai yoga massage because the therapist uses their hands, knees, legs, and feet to move you into a series of yoga-like stretches.')}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <img src="/img/prenatal.jpeg" alt="Prenatal Massage" className="rounded-t-lg w-full h-auto" style={{ width: '400px', height: '250px' }} />
          <h3 className="text-xl font-semibold mt-4">{t('Prenatal Massage')}</h3>
          <p className="text-muted-foreground dark:text-primary-foreground">
            {t('Prenatal massage is a therapeutic bodywork that focuses on the special needs of the mother-to-be as her body goes through the dramatic changes of pregnancy. It helps to reduce stress, decrease swelling, relieve aches and pains, and reduce anxiety and depression.')}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <img src="/img/reflexology.jpg" alt="Reflexology" className="rounded-t-lg w-full h-auto" style={{ width: '400px', height: '250px' }} />
          <h3 className="text-xl font-semibold mt-4">{t('Reflexology')}</h3>
          <p className="text-muted-foreground dark:text-primary-foreground">
            {t('Reflexology involves applying different amounts of pressure to the feet, hands, and ears. It’s based on a theory that these body parts are connected to certain organs and body systems.')}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <img src="/img/sportsmass.jpg" alt="Sports Massage" className="rounded-t-lg w-full h-auto" style={{ width: '400px', height: '250px' }} />
          <h3 className="text-xl font-semibold mt-4">{t('Sports Massage')}</h3>
          <p className="text-muted-foreground dark:text-primary-foreground">
            {t('Sports massage is designed to help athletes before, during, and after training or sporting events. It can be used to promote flexibility and help prevent injuries, as well as to treat injuries such as sprains, strains, and tendonitis.')}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow">
          <img src="/img/trigger.jpg" alt="Trigger Point Massage" className="rounded-t-lg w-full h-auto" style={{ width: '400px', height: '250px' }} />
          <h3 className="text-xl font-semibold mt-4">{t('Trigger Point Massage')}</h3>
          <p className="text-muted-foreground dark:text-primary-foreground">
            {t('Trigger point massage is best suited for people who have injuries, chronic pain, or a specific issue or condition. Sometimes areas of tightness in the muscle tissues, known as trigger points, can cause pain in other parts of the body.')}
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
