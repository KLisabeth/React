import React from 'react';

function App(props) {
    return (
        <section id="app">
            <h1 id='app h1' data-testid="title">{props.title}</h1>
            {((props.addDescription === true) || (props.title === "My App")) ? <p data-testid="description">This is a description of my app</p> : null}
            {props.articles ? props.articles.map((article, index) => <NewsArticle article ={article.title} key={index}/>) : null}
            {props.articles && props.calculateReadingLength ? (
                <p data-testid="reading-length">
                    Reading all article will take you {props.calculateReadingLength && ((props.calculateReadingLength(props.articles.reduce((accumulator, article) => accumulator + article.text , ''))) > 1 ? (props.calculateReadingLength(props.articles.reduce((accumulator, article) => accumulator + article.text , ''))) + ' minutes': (props.calculateReadingLength(props.articles.reduce((accumulator, article) => accumulator + article.text , ''))) + ' minute')}
                </p>
            ): null}
        </section>
    );
}

function NewsArticle(props) {
    return (
        <article data-testid="news-article">
            <h1>{props.article}</h1>
        </article>
    );
}

export { App };