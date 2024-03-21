import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Mais maneiras de comprar: {' '}
            <span className="underline text-blue">
              Encontre uma Apple Store {' '}
            </span>
            ou {' '}
            <span className="underline text-blue">
              outro revendedor
            </span>{' '}
            perto de você.
          </p>
          <p className="font-semibold text-gray text-xs">
            Ou ligue 000800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Direitos autorais @ 2024 Apple Inc. Todos os direitos reservados.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
