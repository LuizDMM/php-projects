import Icon from '@mdi/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { mdiInstagram, mdiLinkedin, mdiTwitter } from '@mdi/js'

export default function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <div className="container py-3">
        <div className="row">
          <div className="col">
            <strong>hotcoffe</strong> {new Date().getFullYear()} copyright all
            rights reserved
          </div>
          <div className="col text-end">
            <Link to="/" className="me-3 text-body">
              <Icon path={mdiInstagram} size={1} />
            </Link>

            <Link to="/" className="me-3 text-body">
              <Icon path={mdiTwitter} size={1} />
            </Link>

            <Link to="/" className="text-body">
              <Icon path={mdiLinkedin} size={1} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
