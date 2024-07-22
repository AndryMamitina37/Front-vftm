"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import "./footer.css";

function Footer() {
  const pathname = usePathname();
  const getLinkClass = (path) => {
    return pathname === path
      ? "text-green-700 hover:text-green-800"
      : "hover:text-green-700";
  };
  return (
    <footer>
      <div className="content border-t border-blue-gray-50">
        <div className="left box">
          <div className="upper">
            <div className="topic">A propos de nous</div>
            <p>
              CodingLab is a channel where you can learn HTML, CSS, and also
              JavaScript along with creative CSS Animations and Effects.
            </p>
          </div>
          <div className="lower">
            <div className="topic">Contact</div>
            <div className="phone" style={{ display: "flex" }}>
              <PhoneIcon aria-hidden="true" className="h-5 w-5" color="gray" />
              +261342015246
            </div>
            <div className="email" style={{ display: "flex" }}>
              <EnvelopeIcon
                aria-hidden="true"
                color="gray"
                className="h-5 w-5"
              />
              asvftm@gmail.com
            </div>
          </div>
        </div>
        <div className="middle box">
          <div className="topic">Pages</div>
          <ul>
            <li className={getLinkClass("/")}>
              <Link href={{ pathname: "/" }}>Accueil</Link>
            </li>
            <li className={getLinkClass("/actu")}>
              <Link href={{ pathname: "/actu" }}>Nos Actualit&eacute;s </Link>
            </li>
            <li className={getLinkClass("/activite")}>
              <Link href={{ pathname: "/activite" }}>Association</Link>
            </li>
            <li className={getLinkClass("/projet")}>
              <Link href={{ pathname: "/projet" }}>Nos projets</Link>
            </li>
            <li>
              <Link href={{ pathname: "/#" }}>Faire un don</Link>
            </li>
          </ul>
        </div>
        <div className="right box">
          <div className="topic">Contactez nous</div>
          <form action="#">
            <input type="text" placeholder="Votre adresse email" />

            <textarea placeholder="Message" />
            <input type="submit" name="" value="Envoyer" />
          </form>
        </div>
        <div className="bottom">
          <p>
            Copyright &#169; 2024<a href="#">ENI&apos;s Student</a> All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
