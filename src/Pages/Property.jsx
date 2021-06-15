import React from 'react';

import Carrousel from '../Components/Carroussel/Carrousel';
import CarrouselImage from '../Components/Carroussel/CarrouselImage';
import Tag from '../Components/Tag/Tag';
import Dropdown from '../Components/Dropdown/Dropdown';
import List from '../Components/List/List';

class Property extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataIsLoaded: false,
            data: {}
        }
    }

    componentDidMount() {
        fetch('/logements.json')
            .then(response => response.json())
            .then((data) => {
                const property = data.filter(property => property.id === this.props.match.params.id)
                this.setState({
                    dataIsLoaded: true,
                    data: property[0]
                });
            })
    }

    render() { 
        if(this.state.dataIsLoaded) {
            let list_equipements = [];

            this.state.data.equipments.forEach(item => {
                list_equipements.push({text: item});
            })

            return (
                <React.Fragment>
                    <div className="property__carrousel">
                        <Carrousel>
                            {this.state.data.pictures.map((picture, i) => <CarrouselImage src={picture} alt={i} /> )}
                        </Carrousel>
                    </div>
    
                    <div className="property__header">
                        <h1 className="property_title">{this.state.data.title}</h1>
                        <p className="property__location">{this.state.data.location}</p>
                    </div>
    
                    <div className="property__tags">
                        {this.state.data.tags.map(tag => <Tag name={tag} />)}
                    </div>
    
                    <div className="property__informations">
                        <Dropdown title="Description">
                           <p>{this.state.data.description}</p> 
                        </Dropdown>
                        <Dropdown title="Équipements">
                            <List elements={list_equipements} />
                        </Dropdown>
                    </div>
                </React.Fragment>
            );
        }

        return null;
    }
}
 
export default Property;