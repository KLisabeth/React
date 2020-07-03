import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './props'

// Check the tests in ../public/index.html to see what to fix.
const data = {
    title: 'My App',
    addDescription: true,
    articles: [
        {
            title: '10 Amazing Things you did not know about React',
            text: 'Vestibulum quis dictum est, eget volutpat dui. In facilisis sed tortor imperdiet fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ac nisl purus. Pellentesque facilisis massa sed pretium placerat. Nulla vitae tortor non ante aliquam consequat. Aenean posuere metus lorem, eu egestas ante aliquet eget. Pellentesque accumsan mi id lectus malesuada scelerisque. Vestibulum condimentum aliquam lacinia. Suspendisse efficitur euismod ullamcorper. Etiam a nibh pharetra erat consectetur aliquet sed ac mauris.',
        },
        {
            title: 'Discover the Best Javascript Framework',
            text: 'Nunc augue augue, pretium vitae viverra ut, pharetra eget tortor. Quisque condimentum et erat id semper. Proin at tincidunt tortor. Donec in ipsum lorem. Aenean massa felis, tristique a sem a, tincidunt vehicula libero. Nulla sed lorem fermentum, suscipit nisi eu, consectetur felis. Praesent non convallis sapien.',
        },
        {
            title: 'This simple trick will teach you everything about React',
            text: 'Fusce rhoncus, justo a molestie tempus, mi ex rhoncus libero, vitae efficitur lorem dolor id mi. Praesent et semper nibh. Aliquam ornare ipsum non scelerisque tempor. Cras nec lectus in lacus cursus aliquet ac eget felis. Vestibulum sed accumsan eros. Aliquam lobortis consequat augue ut hendrerit. Suspendisse potenti. Ut facilisis magna urna, sit amet laoreet lacus aliquam a. Integer tellus lectus, dignissim id porta volutpat, sollicitudin eget dui.',
        },
    ],

    calculateReadingLength: (text) => {
        const wordsPerMinute = 200;
        const words = text.split(' ').length;
        return Math.ceil(words / wordsPerMinute);
    }

};
ReactDOM.render(<App {...data} />,
 document.getElementById('root'));
