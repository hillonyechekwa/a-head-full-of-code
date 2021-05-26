import React from 'react'
import '../../styles/compstyles/homeheader.scss'
import Avatar from '../vectors/Avatar'
import Arrow from '../vectors/Arrow'

const HomeHeader = () => {
    return (
        <header className="home-header">
            <div className="home-h-wrapper">
                <section id="logo-container">
                    <Avatar /> 
                    <button id="scroll-down"><Arrow /></button>
                </section>
                <section id="content-wrapper">
                    <p>
                        Lorem ipsum dolor sit amet consectetur a
                        dipisicing elit. Ullam illo expedita itaque error placeat blanditiis commodi, aut, possimus cupiditate culpa est q
                        uaerat consequuntur minima unde, inventore maiores adipisci. Quaerat, quidem.
                    </p>
                </section>
            </div>
        </header>
    )
}

export default HomeHeader
