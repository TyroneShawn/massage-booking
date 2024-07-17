import React from 'react';

function FAQPage() {
  return (
    <div className="min-h-screen bg-muted text-foreground p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">What is Blissful Hands?</h2>
            <p>Blissful Hands is a massage therapy studio offering various types of massages provided by certified massage therapists.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">How can I book a massage?</h2>
            <p>You can book a massage by visiting our booking page, selecting a masseuse, and filling out the booking form.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">What types of massages do you offer?</h2>
            <p>We offer a variety of massages including Swedish Massage, Aromatherapy, Deep Tissue Massage, Hot Stone Massage, Shiatsu Massage, Thai Massage, Prenatal Massage, Reflexology, Sports Massage, and Trigger Point Massage.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">How can I contact Blissful Hands?</h2>
            <p>You can contact us via email at contact@blissfulhands.com or call us at (123) 456-7890.</p>
          </div>
        </div>

        <h1 className="text-4xl font-bold mt-16 mb-8">Questions Fréquemment Posées</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Qu'est-ce que Blissful Hands ?</h2>
            <p>Blissful Hands est un studio de thérapie par le massage offrant divers types de massages dispensés par des masseurs certifiés.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Comment puis-je réserver un massage ?</h2>
            <p>Vous pouvez réserver un massage en visitant notre page de réservation, en sélectionnant une masseuse et en remplissant le formulaire de réservation.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Quels types de massages offrez-vous ?</h2>
            <p>Nous proposons une variété de massages, y compris le massage suédois, l'aromathérapie, le massage des tissus profonds, le massage aux pierres chaudes, le massage shiatsu, le massage thaï, le massage prénatal, la réflexologie, le massage sportif et le massage des points de déclenchement.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Comment puis-je contacter Blissful Hands ?</h2>
            <p>Vous pouvez nous contacter par email à contact@blissfulhands.com ou nous appeler au (123) 456-7890.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
