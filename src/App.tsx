/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PushNotificationBar } from './components/PushNotificationBar';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { HowItWorks } from './components/HowItWorks';
import { Promotions } from './components/Promotions';
import { DrinkMenu } from './components/DrinkMenu';
import { DoorRules } from './components/DoorRules';
import { ReservationForm } from './components/ReservationForm';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [selectedPromo, setSelectedPromo] = useState<string>("Dos Cabos Pa' Guayar (Viernes) - 2 Selladas a S/ 100");
  const [privacyModalOpen, setPrivacyModalOpen] = useState<boolean>(false);

  const scrollToReservation = () => {
    const el = document.getElementById('reserva');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Give time for smooth scroll to finish, then focus on name input
      setTimeout(() => {
        const input = document.getElementById('nombre');
        if (input) {
          input.focus();
        }
      }, 400);
    }
  };

  const handleSelectPromo = (promoName: string) => {
    setSelectedPromo(promoName);
    scrollToReservation();
  };

  const handleSelectDrink = (drinkName: string) => {
    setSelectedPromo(`Bebida: ${drinkName} (Sellada original)`);
    scrollToReservation();
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 selection:bg-amber-500 selection:text-neutral-950">
      
      {/* Top Banner for Local Weekend Event Notifications */}
      <PushNotificationBar />

      {/* Semantic Header */}
      <Navbar onOpenReservation={scrollToReservation} />

      {/* Main Landmark */}
      <main className="flex-1">
        {/* Hero Section with unique H1 and fast trust metrics */}
        <Hero onOpenReservation={scrollToReservation} />

        {/* Value Propositions: written as customer gains */}
        <ValueProps onOpenReservation={scrollToReservation} />

        {/* 3-Step Simple Flow */}
        <HowItWorks onOpenReservation={scrollToReservation} />

        {/* 6 Official Promotions Before 10 P.M. */}
        <Promotions onSelectPromo={handleSelectPromo} />

        {/* Complete Drink Menu with 26 Verified Original Beverages */}
        <DrinkMenu onSelectDrink={handleSelectDrink} />

        {/* Transparent Door Rules */}
        <DoorRules />

        {/* The Conversion Form & Post-Submission Digital Pass */}
        <ReservationForm
          initialPromo={selectedPromo}
          onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        />

        {/* Location, Google Map & Verified Contact Details */}
        <LocationAndContact />
      </main>

      {/* Semantic Footer */}
      <Footer
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onOpenReservation={scrollToReservation}
      />

      {/* Sticky Mobile CTA (< 15% mobile viewport height) */}
      <StickyMobileCTA onOpenReservation={scrollToReservation} />

      {/* Accessible Privacy Notice Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

    </div>
  );
}
