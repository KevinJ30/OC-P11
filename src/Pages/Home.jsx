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
import Carrousel from '../Components/Carroussel/Carrousel';

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

            <Carrousel>
                <img src="https://t1.llb.be/g7DGwaGwXkzfeM33BYU4QAspGRc=/0x0:2560x1280/1920x960/5fc51a7ed8ad585a45ac65cf.jpg" alt="image-1" />
                <img src="https://france3-regions.francetvinfo.fr/image/W8E4BCpjzMjMvXWVcknZH7EeRsY/600x400/regions/2021/03/04/6040e44895d66_5efb544dd6646_olivier_henrion-4906630-5217654.jpg" alt="image-2" />
                <img src="http://lorempixel.com/640/480/" alt="image-3" />
            </Carrousel>

            <Footer />
        </div>
    );
}    