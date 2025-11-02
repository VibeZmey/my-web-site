import React from 'react';
import Background from './components/Background/Background';
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import styles from './App.module.css';
import Marquee from "react-fast-marquee";
import Skills from "./components/Skills/Skills";

function App() {
    const imgPaths = [
        {name: "c++", src: "/cplus-icon.png"},
        {name: "c#", src: "/csharp-icon.png"},
        {name: "qt", src: "/qt-icon.png"},
        {name: "css", src: "/css-icon.png"},
        {name: "html", src: "/html-icon.png"},
        {name: "js", src: "/js-icon.png"},
        {name: "react", src: "/react-icon.png"},
        {name: "node", src: "/node-icon.png"},
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
            <Background />
        </div>
    );
}

export default App;
