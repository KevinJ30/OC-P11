import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../Components/Section/Section';
import Thumb from '../Components/Thumb/Thumb';

class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            dataIsLoaded: false,
            data: []
        }
    }

    // Chargement des données depuis un fichier JSON
    componentDidMount() {
        fetch('/logements.json')
            .then(response => response.json())
            .then((data) => {
                
                this.setState({
                    dataIsLoaded: true,
                    data: data
                });

            });
    }
    
    render() { 
        return <div className="home">
            <Section src="/medias/image_section.webp" text="Chez vous, partout et ailleurs" />

            <section className="home__gallery">
                {
                    !this.state.dataIsLoaded && 
                    <span className="home__loading_data">Chargement en cours...</span>
                }

                {
                    this.state.dataIsLoaded && 
                    this.state.data.map(property => 
                        <React.Fragment key={property.id}>
                            <Link to={"/property/" + property.id} className="home__thumb"><Thumb title={property.title} url_img={property.cover} aria-label={"Afficher un bien"} /></Link>
                        </React.Fragment>
                    )
                }
            </section>
        </div>;
    }
}
 
export default Home;