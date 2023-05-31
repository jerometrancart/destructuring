import {Component} from 'react'
class Singers extends Component {
    render() {
        console.log(this.props.name);

        const {name, age} = this.props;
        return(
            <div>
                <p>Chanteur: {name} {age} ans</p>
            </div>
        )

    }
    
}

export default Singers