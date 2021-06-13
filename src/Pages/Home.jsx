import React from 'react';
import Logo from '../Components/Logo/Logo'
import Dropdown from '../Components/Dropdown/Dropdown'
import Footer from '../Components/Footer/Footer';
import List from '../Components/List/List';
import Section from '../Components/Section/Section';

import { IconsArrowDown, IconsArrowUp, IconStars } from '../icons/icons';
import Rates from "../Components/Rates/Rates";
import Tag from '../Components/Tag/Tag';
import TagList from '../Components/Tag/TagList';
import Thumb from '../Components/Thumb/Thumb';

export default function Home() {
    return(
        <div>
            <Logo />

            <Dropdown title="Description">
                <p>Test de l'application</p>
                <p>Mon super contenu</p>
            </Dropdown>

            <Dropdown title="Une autre box pour mon site">
                <List elements={[{text: 'Climatisation'}, {text: "Wi-Fi"}, {text: "Cuisine"}]}/>
            </Dropdown>

            <Section color="#000" text="Mon super text" padding="10px 10px"/>


            <IconStars />
            <IconsArrowDown />
            <IconsArrowUp />
            <Rates rating={2} />
            <Tag name="tag-name" />

            <TagList list={['PHP', 'Laravel', 'JavaScript']} />
            <Thumb title="Ma super thumb" url_img="http://lorempixel.com/640/480/" />
            <Footer />
        </div>
    );
}    