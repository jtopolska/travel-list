// ключ АРІ на pexel
// 563492ad6f91700001000001a26335d0c8c04ee685199d18aa01767b

// endpoint: 
// https://api.pexels.com/v1/

import { Component } from "react";
import add from './add.png';
import bin from './bin2.png';
import Done from "./Done";
// import undone from './undone-sm-64.png';
// import done from './done-sm-64.png';
import Undone from "./Undone";


export class TravelPlan extends Component {
    constructor() {
        super();

        this.state ={
            inputValue: '',
            travelArray: [],
            checked: true
        }
    }

    inputChanging(event) {
        this.setState({ inputValue: event })
    }

    addItem() {
        if (this.state.inputValue === '') {
            alert('Please enter an item')
        }
        else {
            let itemArray = this.state.travelArray;
            itemArray.push(this.state.inputValue);
            this.setState({ travelArray: itemArray, inputValue: '' })
        }
    }

    checkedItem(event) {
        let li = event.target;
        li.classList.toggle('checked');
        this.setState({ checked: !this.state.checked })
    }

    deleteItem(i) {
        let li = this.state.travelArray;
        li.splice(i, 1);
    }

    onEnterBtn(e) {
        e.preventDefault();
    }

    render() {
        return (
            <section className="smaller-cont">
                <form onSubmit={this.onEnterBtn}>
                    <div className="input-container">
                        <input type="text" onChange={(e) => this.inputChanging(e.target.value)} value={this.state.inputValue} placeholder="Enter an item.."/>
                        <img className="add-btn" onClick={() => this.addItem() } src={ add } alt="Add button"/>
                    </div>
                    <ul>
                        {this.state.travelArray.map((item, index) => (
                            <li onClick={ (e) => this.checkedItem(e) } key={ index } className="check-circle">
                                <span>{ this.state.checked ? <Undone /> : <Done /> }</span>
                                { item }
                                <img className="del-btn del" onClick={ () => this.deleteItem(index) } src={ bin } alt="Delete icon"/>
                            </li>
                        ))}
                    </ul>
                </form>
            </section>
        )
    }
}

