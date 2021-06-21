import React from 'react';
import './thumb.scss';


class Thumb extends React.Component {
    constructor(props) {
        super(props);

        if(props.url_img === undefined) {
            const err = Error('The component doesn\'t contain url_img property');
            throw err;
        }

        this.state = {
            visible: false,
            observer: null
        }

        this.ref = React.createRef();
        this.handleVisibility = this.handleVisibility.bind(this);
    }

    componentDidMount() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }

        const observer = new IntersectionObserver(this.handleVisibility, options)

        if(this.ref.current) {
            observer.observe(this.ref.current);
        }
    }

    handleVisibility(entries) {
        const [entry] = entries;

        if(entry.isIntersecting) {
            this.setState({
                visible: true
            });
        }
    }

    render() {
        return <div ref={this.ref} className="thumb filter">
            {
                this.props.title &&
                <h3 className="thumb__title">{this.props.title}</h3>
            }

            {
                this.state.visible && <img className="thumb__img" src={this.props.url_img} alt="bg_thumb" />
            }
       </div>;
    }
}
 
export default Thumb;