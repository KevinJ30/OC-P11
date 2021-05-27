import React from 'react';

class Dropdown extends React.Component {

    constructor(props) {
        super();

        this.children = props.children ? props.children : null;

        if(props.title) {
            this.title = props.title;
        }
        else {
            console.error("Il manque la propriété \"title\" sur le composant dropdown");
        }

        this.state = { visible: false }
        this.ref = React.createRef();

        this.onButtonVisible = this.onButtonVisible.bind(this);
    }

    componentDidUpdate(){
        this.changeIcon();
    }

    changeIcon() {
        const span_element = this.ref.current.children[0].children[1].children[0];
        if(this.state.visible) {
            span_element.classList.add('icon_arrow-down')
            span_element.classList.remove('icon_arrow-up')
        }
        else{
            span_element.classList.add('icon_arrow-up')
            span_element.classList.remove('icon_arrow-down')
        }
    }

    onButtonVisible(event) {
        event.preventDefault();
        this.setState({visible: !this.state.visible})

        const content_element = this.ref.current.children[1];
        content_element.classList.toggle('visible');
        this.changeIcon();
    }

    render() {
       if(this.title) {
            return <div ref={this.ref} className="dropdown">
                    <div className="dropdown__header">
                        <p className="dropdown__header-title">{this.title}</p>
                        <button onClick={this.onButtonVisible}><span className="icon icon_arrow-up"></span></button>
                    </div>

                    <div className="dropdown__content">
                        { this.children }
                    </div>
            </div>;
       }

       return null;
    }

}

export default Dropdown;