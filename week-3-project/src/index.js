import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ContactForm, FruitForm, MathForm} from "./forms";
import {ContactForm as ContactFormHooks, FruitForm as FruitFormHooks, MathForm as MathFormHooks} from "./forms_with_hooks";
import {InteractivePokedex, Pokedex} from "./api";
import {InteractivePokedex as InteractivePokedexHooks, Pokedex as PokedexHooks} from "./api_with_hooks";

const App = () => {
    return (
        <section className="app">

            <h1>React - Week 3</h1>

            <section className="app_goal">
                <h2>Forms</h2>

                <h3>Contact Form</h3>
                <ContactForm/>

                <h3>Math Form</h3>
                <MathForm/>

                <h3>Fruit Form</h3>
                <FruitForm/>
            </section>

            <section className="app_goal">
                <h2>Forms</h2>
                <h3>With hooks</h3>

                <h3>Contact Form</h3>
                <ContactFormHooks/>

                <h3>Math Form</h3>
                <MathFormHooks/>

                <h3>Fruit Form</h3>
                <FruitFormHooks/>
            </section>

            <section className="app_goal">
                <Pokedex/>

                <InteractivePokedex/>
            </section>

            <section className="app_goal">
                <PokedexHooks/>

                <InteractivePokedexHooks/>
            </section>

        </section>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
