import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-gray-50 w-full py-12 px-8 lg:px-32 grid sm:grid-cols-3 lg:grid-cols-5 gap-12 justify-items-start">
      
      <div className="footerSection">
        <h3 className="text-xl mb-4 text-gray-300">Nous connaitre</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Articles</a></li>
          <li><a href="#" className="hover:underline">Dossier de presse</a></li>
          <li><a href="#" className="hover:underline">À propos</a></li>
        </ul>
      </div>

      <div className="footerSection">
        <h3 className="text-xl mb-4 text-gray-300">Marketing</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Nos offres d'affiliation</a></li>
          <li><a href="#" className="hover:underline">Nos réseaux sociaux</a></li>
          <li><a href="#" className="hover:underline">Nos évènements</a></li>
        </ul>
      </div>

      <div className="footerSection">
        <h3 className="text-xl mb-4 text-gray-300">Nous rejoindre</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Carrières</a></li>
          <li><a href="#" className="hover:underline">Nos partenaires</a></li>
          <li><a href="#" className="hover:underline">Nos investisseurs</a></li>
        </ul>
      </div>

      <div className="footerSection">
        <h3 className="text-xl mb-4 text-gray-300">Légal</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Accéder à mes données</a></li>
          <li><a href="#" className="hover:underline">Conditions générales de vente</a></li>
          <li><a href="#" className="hover:underline">Mentions légales</a></li>
          <li><a href="#" className="hover:underline">Cookies</a></li>
        </ul>
      </div>

      <div className="footerSection">
        <h3 className="text-xl mb-4 text-gray-300">Centre d'aide</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">Votre compte</a></li>
          <li><a href="#" className="hover:underline">Vos paiements</a></li>
          <li><a href="#" className="hover:underline">Contacter notre service après-vente</a></li>
        </ul>
      </div>
    </footer>
  );
}
