import React from 'react'
import Hero from '../static/hero.svg'

export default function Home() {
  return (
    <>
      <section id="hero" className="container">
        <div className="row">
          <div className="col">
            <h2>Make better coffee</h2>
            <h3>why learn how to blog?</h3>
          </div>
          <div className="col">
            <img src={Hero} alt="Hero Art - One man with the hand up, one man in the laptop and another with a notebook" />
          </div>
        </div>
      </section>
      <section id="featured-post"></section>
      <section id="posts"></section>
    </>
  )
}
