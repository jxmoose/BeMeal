import React, { Component } from 'react'

class Counter extends Component {

    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
     };

     styles = {
        fontSize: 50,
        fontWeight: "bold",
        margin: 50
     };

     /*renderTags() {
        if (this.state.tags.length == 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
     };*/
     
     handleIncrement = () => {
        this.stat.count++;
        this.setState()
     };

    render() { 
        return (
            <div>
                <span style={ this.styles }>{ this.formatCount() }</span>
                <button onClick={this.handleIncrement()}>Increment</button>
                {this.renderTags()}
            </div>
        );
    };
    
    formatCount() {
        const { count } = this.state;
        return count == 0 ? "Zero" : count;
    };
}
 
export default Counter;