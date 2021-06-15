import React from 'react';
import Section from '../Components/Section/Section';
import Thumb from '../Components/Thumb/Thumb';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return <div className="home">
            <Section src="/medias/image_section.jpg" text="Chez vous, partout et ailleurs" />

            <section className="home__gallery mt-">
                <Thumb title="My good location" url_img="http://lorempixel.com/600/400/" />
                <Thumb title="location very fast" url_img="http://lorempixel.com/600/400/" />
                <Thumb title="small Durty" url_img="http://lorempixel.com/600/400/" />
                <Thumb title="Big location" url_img="http://lorempixel.com/600/400/" />
                <Thumb title="My first good location" url_img="http://lorempixel.com/600/400/" />
                <Thumb title="Very Good" url_img="http://lorempixel.com/600/400/" />
            </section>
        </div>;
    }
}
 
export default Home;