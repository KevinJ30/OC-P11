import React from 'react';
import Logo from '../Components/Logo/Logo'
import Dropdown from '../Components/Dropdown/Dropdown'
import Footer from '../Components/Footer/Footer';

export default function Home() {
    const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed inventore commodi deserunt magnam illum neque aliquid, beatae minus voluptatum eaque est rerum consectetur minima qui amet veritatis esse impedit soluta nisi culpa exercitationem aperiam? Est expedita, ex aliquam reiciendis quae debitis enim ducimus explicabo repellendus eos tenetur minima ratione harum!";
    return(
        <div>
            <Logo />

            <Dropdown title="Description">
                <p>Test de l'application</p>
                <p>Mon super contenu</p>
            </Dropdown>

            <Dropdown title="Une autre box pour mon site">
                <ul>
                    <li>Climatisation</li>
                    <li>Wi-Fi</li>
                    <li>Cuisine</li>
                    <li>Fer à repasser</li>
                    <li>Sèche cheveux</li>
                    <li>Cintres</li>
                </ul>
            </Dropdown>

            <Footer />
        </div>
    );
}    