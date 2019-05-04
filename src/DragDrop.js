import React from 'react';

class ClassDiagram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    choice() {
        if(this.state.value == null) 
        {
            this.setState({value : 'hi'});
        }
        else if(this.state.value != null)
        {
            this.setState({value : null});}
        }
    

    render() {
        return (
            <button
                className = "ClassDiagram"
                onClick={() => {this.choice(0)}}
            >
                {this.state.value}
            </button>
        );
    }
}

export default ClassDiagram;
