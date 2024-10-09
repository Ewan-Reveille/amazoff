import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-gray-50 w-full py-12 px-8 lg:px-32 grid sm:grid-cols-3 lg:grid-cols-5 gap-12 justify-items-start">
      
      <div className="footerSection">
        <h3 className="text-xl mb-4 text-gray-300">Nous connaitre</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#" title="Lire notre blog" aria-label="Blog" className="hover:underline">Blog</Link>
          </li>
          <li>
            <Link href="#" title="Lire nos articles" aria-label="Articles" className="hover:underline">Articles</Link>
          </li>
          <li>
            <Link href="#" title="Consulter notre dossier de presse" aria-label="Dossier de presse" className="hover:underline">
              Dossier de presse
            </Link>
          </li>
          <li>
            <Link href="#" title="En savoir plus sur nous" aria-label="À propos" className="hover:underline">À propos</Link>
          </li>
        </ul>
      </div>

      <div className="footerSection">
        <h3 className="text-xl mb-4 text-gray-300">Marketing</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#" title="Voir nos offres d'affiliation" aria-label="Nos offres d'affiliation" className="hover:underline">
              Nos offres d&apos;affiliation
            </Link>
          </li>
          <li>
            <Link href="#" title="Suivez-nous sur les réseaux sociaux" aria-label="Nos réseaux sociaux" className="hover:underline">
              Nos réseaux sociaux
            </Link>
          </li>
          <li>
            <Link href="#" title="Voir nos événements" aria-label="Nos évènements" className="hover:underline">Nos évènements</Link>
          </li>
        </ul>
      </div>

      <div className="footerSection">
        <h3 className="text-xl mb-4 text-gray-300">Nous rejoindre</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#" title="Rejoignez notre équipe" aria-label="Carrières" className="hover:underline">Carrières</Link>
          </li>
          <li>
            <Link href="#" title="Rencontrez nos partenaires" aria-label="Nos partenaires" className="hover:underline">Nos partenaires</Link>
          </li>
          <li>
            <Link href="#" title="Rencontrez nos investisseurs" aria-label="Nos investisseurs" className="hover:underline">Nos investisseurs</Link>
          </li>
        </ul>
      </div>

      <div className="footerSection">
        <h3 className="text-xl mb-4 text-gray-300">Légal</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#" title="Accéder à vos données" aria-label="Accéder à mes données" className="hover:underline">
              Accéder à mes données
            </Link>
          </li>
          <li>
            <Link href="#" title="Consulter les conditions générales de vente" aria-label="Conditions générales de vente" className="hover:underline">
              Conditions générales de vente
            </Link>
          </li>
          <li>
            <Link href="#" title="Lire les mentions légales" aria-label="Mentions légales" className="hover:underline">Mentions légales</Link>
          </li>
          <li>
            <Link href="#" title="Préférences de cookies" aria-label="Cookies" className="hover:underline">Cookies</Link>
          </li>
        </ul>
      </div>

      <div className="footerSection">
        <h3 className="text-xl mb-4 text-gray-300">Centre d&apos;aide</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#" title="Gérer votre compte" aria-label="Votre compte" className="hover:underline">Votre compte</Link>
          </li>
          <li>
            <Link href="#" title="Gérer vos paiements" aria-label="Vos paiements" className="hover:underline">Vos paiements</Link>
          </li>
          <li>
            <Link href="#" title="Contacter le service après-vente" aria-label="Contacter notre service après-vente" className="hover:underline">
              Contacter notre service après-vente
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
