import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Blissful Hands": "Blissful Hands",
      "Masseuses": "Masseuses",
      "Home": "Home",
      "Book": "Book",
      "Our Masseuses": "Our Masseuses",
      "All 15 of the worlds best Massage Therapists": "All 15 of the world's best Massage Therapists",
      "Search masseuses...": "Search masseuses...",
      "Book Masseuse": "Book Masseuse",
      "Search and Select Masseuse. Book Appointment Email will be sent to you.": "Search and Select Masseuse. Book Appointment Email will be sent to you.",
      "First name": "First name",
      "Last name": "Last name",
      "Email address": "Email address",
      "Select Date": "Select Date",
      "Select Time": "Select Time",
      "Your message": "Your message",
      "Submit": "Submit",
      "We have Processed your Booking": "We have Processed your Booking",
      "Blissful Hands Massage Studio": "Blissful Hands Massage Studio",
      "Find rejuvenation With Our Top Rated Certified Massage Therapists": "Find rejuvenation With Our Top Rated Certified Massage Therapists",
      "Find A Masseuse": "Find A Masseuse",
      "Swedish Massage": "Swedish Massage",
      "Swedish massage is a gentle type of full-body massage that’s ideal for people who: are new to massage, have a lot of tension, are sensitive to touch. It can help release muscle knots and it’s also a good choice for when you want to fully relax during a massage.": "Swedish massage is a gentle type of full-body massage that’s ideal for people who: are new to massage, have a lot of tension, are sensitive to touch. It can help release muscle knots and it’s also a good choice for when you want to fully relax during a massage.",
      "Aromatherapy Massage": "Aromatherapy Massage",
      "Aromatherapy massage is a full-body massage that combines massage therapy with essential oils. Aromatherapy is thought to have many benefits, including: reducing stress and anxiety, reducing muscle tension, and easing pain.": "Aromatherapy massage is a full-body massage that combines massage therapy with essential oils. Aromatherapy is thought to have many benefits, including: reducing stress and anxiety, reducing muscle tension, and easing pain.",
      "Deep Tissue Massage": "Deep Tissue Massage",
      "Deep tissue massage is a massage technique that’s mainly used to treat musculoskeletal issues, such as strains and sports injuries. It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues.": "Deep tissue massage is a massage technique that’s mainly used to treat musculoskeletal issues, such as strains and sports injuries. It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues.",
      "Hot Stone Massage": "Hot Stone Massage",
      "Hot stone massage is used to help you relax and ease tense muscles and damaged soft tissues throughout your body. During a hot stone massage, smooth, flat, heated stones are placed on specific parts of your body.": "Hot stone massage is used to help you relax and ease tense muscles and damaged soft tissues throughout your body. During a hot stone massage, smooth, flat, heated stones are placed on specific parts of your body.",
      "Shiatsu Massage": "Shiatsu Massage",
      "Shiatsu massage is a form of Japanese bodywork that uses kneading, pressing, soothing, tapping, and stretching techniques and is performed without oils through light, comfortable clothing.": "Shiatsu massage is a form of Japanese bodywork that uses kneading, pressing, soothing, tapping, and stretching techniques and is performed without oils through light, comfortable clothing.",
      "Thai Massage": "Thai Massage",
      "Thai massage is more energizing and rigorous than more classic forms of massage. Thai massage is also called Thai yoga massage because the therapist uses their hands, knees, legs, and feet to move you into a series of yoga-like stretches.": "Thai massage is more energizing and rigorous than more classic forms of massage. Thai massage is also called Thai yoga massage because the therapist uses their hands, knees, legs, and feet to move you into a series of yoga-like stretches.",
      "Prenatal Massage": "Prenatal Massage",
      "Prenatal massage is a therapeutic bodywork that focuses on the special needs of the mother-to-be as her body goes through the dramatic changes of pregnancy. It helps to reduce stress, decrease swelling, relieve aches and pains, and reduce anxiety and depression.": "Prenatal massage is a therapeutic bodywork that focuses on the special needs of the mother-to-be as her body goes through the dramatic changes of pregnancy. It helps to reduce stress, decrease swelling, relieve aches and pains, and reduce anxiety and depression.",
      "Reflexology": "Reflexology",
      "Reflexology involves applying different amounts of pressure to the feet, hands, and ears. It’s based on a theory that these body parts are connected to certain organs and body systems.": "Reflexology involves applying different amounts of pressure to the feet, hands, and ears. It’s based on a theory that these body parts are connected to certain organs and body systems.",
      "Sports Massage": "Sports Massage",
      "Sports massage is designed to help athletes before, during, and after training or sporting events. It can be used to promote flexibility and help prevent injuries, as well as to treat injuries such as sprains, strains, and tendonitis.": "Sports massage is designed to help athletes before, during, and after training or sporting events. It can be used to promote flexibility and help prevent injuries, as well as to treat injuries such as sprains, strains, and tendonitis.",
      "Trigger Point Massage": "Trigger Point Massage",
      "Trigger point massage is best suited for people who have injuries, chronic pain, or a specific issue or condition. Sometimes areas of tightness in the muscle tissues, known as trigger points, can cause pain in other parts of the body.": "Trigger point massage is best suited for people who have injuries, chronic pain, or a specific issue or condition. Sometimes areas of tightness in the muscle tissues, known as trigger points, can cause pain in other parts of the body.",
      "Book Now": "Book Now",
    }
  },
  fr: {
    translation: {
      "Blissful Hands": "Mains Bliss",
      "Masseuses": "Masseuses",
      "Home": "Accueil",
      "Book": "Réserver",
      "Our Masseuses": "Nos Massothérapeutes",
      "All 15 of the worlds best Massage Therapists": "Les 15 meilleurs massothérapeutes du monde",
      "Search masseuses...": "Rechercher des massothérapeutes...",
      "Book Masseuse": "Réserver une Massothérapeutes",
      "Search and Select Masseuse. Book Appointment Email will be sent to you.": "Recherchez et sélectionnez une masseuse. Un email de confirmation vous sera envoyé.",
      "First name": "Prénom",
      "Last name": "Nom de famille",
      "Email address": "Adresse e-mail",
      "Select Date": "Sélectionner la date",
      "Select Time": "Sélectionner l'heure",
      "Your message": "Votre message",
      "Submit": "Soumettre",
      "We have Processed your Booking": "Nous avons traité votre réservation",
      "Blissful Hands Massage Studio": "Studio de massage Mains Bliss",
      "Find rejuvenation With Our Top Rated Certified Massage Therapists": "Retrouvez la jeunesse avec nos masseurs certifiés les mieux notés",
      "Find A Masseuse": "Trouver une Masseuse",
      "Swedish Massage": "Massage Suédois",
      "Swedish massage is a gentle type of full-body massage that’s ideal for people who: are new to massage, have a lot of tension, are sensitive to touch. It can help release muscle knots and it’s also a good choice for when you want to fully relax during a massage.": "Le massage suédois est un type de massage doux du corps entier qui est idéal pour les personnes qui : sont nouvelles dans le massage, ont beaucoup de tension, sont sensibles au toucher. Il peut aider à libérer les nœuds musculaires et c'est également un bon choix lorsque vous souhaitez vous détendre complètement pendant un massage.",
      "Aromatherapy Massage": "Massage Aromathérapie",
      "Aromatherapy massage is a full-body massage that combines massage therapy with essential oils. Aromatherapy is thought to have many benefits, including: reducing stress and anxiety, reducing muscle tension, and easing pain.": "Le massage aromathérapie est un massage du corps entier qui combine la thérapie par le massage avec des huiles essentielles. On pense que l'aromathérapie présente de nombreux avantages, notamment : réduire le stress et l'anxiété, réduire la tension musculaire et soulager la douleur.",
      "Deep Tissue Massage": "Massage des Tissus Profonds",
      "Deep tissue massage is a massage technique that’s mainly used to treat musculoskeletal issues, such as strains and sports injuries. It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues.": "Le massage des tissus profonds est une technique de massage principalement utilisée pour traiter les problèmes musculo-squelettiques, tels que les entorses et les blessures sportives. Il consiste à appliquer une pression soutenue en utilisant des mouvements lents et profonds pour cibler les couches internes de vos muscles et de vos tissus conjonctifs.",
      "Hot Stone Massage": "Massage aux Pierres Chaudes",
      "Hot stone massage is used to help you relax and ease tense muscles and damaged soft tissues throughout your body. During a hot stone massage, smooth, flat, heated stones are placed on specific parts of your body.": "Le massage aux pierres chaudes est utilisé pour vous aider à vous détendre et à soulager les muscles tendus et les tissus mous endommagés dans tout votre corps. Pendant un massage aux pierres chaudes, des pierres lisses, plates et chauffées sont placées sur des parties spécifiques de votre corps.",
      "Shiatsu Massage": "Massage Shiatsu",
      "Shiatsu massage is a form of Japanese bodywork that uses kneading, pressing, soothing, tapping, and stretching techniques and is performed without oils through light, comfortable clothing.": "Le massage shiatsu est une forme de massage japonais qui utilise des techniques de pétrissage, de pression, de détente, de tapotement et d'étirement et se pratique sans huiles à travers des vêtements légers et confortables.",
      "Thai Massage": "Massage Thaï",
      "Thai massage is more energizing and rigorous than more classic forms of massage. Thai massage is also called Thai yoga massage because the therapist uses their hands, knees, legs, and feet to move you into a series of yoga-like stretches.": "Le massage thaï est plus énergisant et rigoureux que les formes de massage plus classiques. Le massage thaï est également appelé massage yoga thaï car le thérapeute utilise ses mains, ses genoux, ses jambes et ses pieds pour vous déplacer dans une série d'étirements similaires au yoga.",
      "Prenatal Massage": "Massage Prénatal",
      "Prenatal massage is a therapeutic bodywork that focuses on the special needs of the mother-to-be as her body goes through the dramatic changes of pregnancy. It helps to reduce stress, decrease swelling, relieve aches and pains, and reduce anxiety and depression.": "Le massage prénatal est un travail corporel thérapeutique qui se concentre sur les besoins particuliers de la future mère alors que son corps subit les changements dramatiques de la grossesse. Il aide à réduire le stress, à diminuer le gonflement, à soulager les douleurs et à réduire l'anxiété et la dépression.",
      "Reflexology": "Réflexologie",
      "Reflexology involves applying different amounts of pressure to the feet, hands, and ears. It’s based on a theory that these body parts are connected to certain organs and body systems.": "La réflexologie consiste à appliquer différentes pressions sur les pieds, les mains et les oreilles. Elle est basée sur une théorie selon laquelle ces parties du corps sont connectées à certains organes et systèmes corporels.",
      "Sports Massage": "Massage Sportif",
      "Sports massage is designed to help athletes before, during, and after training or sporting events. It can be used to promote flexibility and help prevent injuries, as well as to treat injuries such as sprains, strains, and tendonitis.": "Le massage sportif est conçu pour aider les athlètes avant, pendant et après l'entraînement ou les événements sportifs. Il peut être utilisé pour favoriser la flexibilité et aider à prévenir les blessures, ainsi que pour traiter les blessures telles que les entorses, les foulures et les tendinites.",
      "Trigger Point Massage": "Massage des Points Gâchettes",
      "Trigger point massage is best suited for people who have injuries, chronic pain, or a specific issue or condition. Sometimes areas of tightness in the muscle tissues, known as trigger points, can cause pain in other parts of the body.": "Le massage des points gâchettes est mieux adapté aux personnes ayant des blessures, des douleurs chroniques ou un problème ou une condition spécifique. Parfois, des zones de tension dans les tissus musculaires, appelées points gâchettes, peuvent causer de la douleur dans d'autres parties du corps.",
      "Book Now": "Réserver Maintenant",
     
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
