import React, {Component} from 'react';

class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleView: false,
            nameInput: ''
        }
    }

    toggleEdit = () => {
        this.setState({toggleView: !this.state.toggleView});
    }

    handleInput(val){
        this.setState({nameInput: val});
    }

    updateName = () => {
        //put request
        this.props.renameFn(this.props.id, {name: this.state.nameInput || this.props.name})
        this.toggleEdit();
    }

    render(){
        return(
            <div>
                {this.state.toggleView
                ? (<div>
                    <input value={this.state.nameInput} onChange={(e) => this.handleInput(e.target.value)} />
                    <button onClick={this.updateName}>Update</button>
                   </div>)
                : <h3 onDoubleClick={this.toggleEdit}>{this.props.name}</h3>}
                <img src={this.props.img} alt={this.props.name} />
                <button onClick={() => this.props.releaseFn(this.props.id)}>Release</button>
            </div>
        )
    }
}

export default Pokemon;