import React from 'react';
import Background from './components/Background/Background';
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import styles from './App.module.css';
import Marquee from "react-fast-marquee";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
    const imgPaths = [
        {name: "c++", src: `${process.env.PUBLIC_URL}/cplus-icon.png`},
        {name: "c#", src: `${process.env.PUBLIC_URL}/csharp-icon.png`},
        {name: "qt", src: `${process.env.PUBLIC_URL}/qt-icon.png`},
        {name: "css", src: `${process.env.PUBLIC_URL}/css-icon.png`},
        {name: "html", src: `${process.env.PUBLIC_URL}/html-icon.png`},
        {name: "js", src: `${process.env.PUBLIC_URL}/js-icon.png`},
        {name: "react", src: `${process.env.PUBLIC_URL}/react-icon.png`},
        {name: "node", src: `${process.env.PUBLIC_URL}/node-icon.png`},
    ]
    return (
        <div className={styles.app}>
            <NavBar />
            <About />
            <Skills />
            <div className={styles.container}>
                <Marquee
                    speed={70}
                    gradient={false}
                    className={styles.marquee}
                >
                    {imgPaths.map(imgPath => (
                        <img
                            key={imgPath.name}
                            className={styles.icon}
                            src={imgPath.src}
                            alt={imgPath.name}
                        />
                    ))}
                </Marquee>
            </div>
            <Projects />
            <Background />
        </div>
    );
}

export default App;
