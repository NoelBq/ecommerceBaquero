import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

export default function About() {
    return (
        <section className='about-section'>
            <div className="intro">
                <h1 className='about-heading'>Nosotros</h1>
                <p className='about-text'>Nuestra premisa es "Menos es Mas", 
                volvemos a lo básico y nos deshacemos de ornamentaciones y adornos innecesarios para dejar que la calidad de los tejidos, 
                los colores neutros y los cortes sencillos sean los protagonistas. </p>
                <p className='about-text'> Minimal Clothing se inspira en una mujer cosmopolita que busca funcionalidad y practicidad sin renunciar a la sofisticación.</p>

                
                <Link to={'/'} className="about-btn" href="#">Shop</Link>
            </div>
        </section>
    )
}
