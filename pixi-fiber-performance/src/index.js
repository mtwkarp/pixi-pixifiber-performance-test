import { createRoot } from "react-dom/client";
import { Sprite, Stage, usePixiTicker, Container } from "react-pixi-fiber/index.js";
import { useCallback, useState } from "react";
import bunny from "./static/bunny.png";
import * as PIXI from 'pixi.js'

function Bunny (props) {
    return <Sprite texture={PIXI.Texture.from(bunny)} {...props} />;
}

function RotatingBunny(props) {
    const [rotation, setRotation] = useState(0);
    const animate = useCallback((delta) => {
        setRotation((rotation) => rotation + 0.1 * delta);
    }, []);
    usePixiTicker(animate);

    const arr = []

    for (let i = 0; i < 25; i++) {
        arr.push(<Bunny {...props}
                        x={(i % 5) * 40}
                        y={Math.floor(i / 5) * 40}
                        scale={{x: 0.01, y: 0.01}}
        />)
    }

    return (<Container rotation={rotation} >
        {arr}
    </Container>);
}

const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)
const root = createRoot(container);

const height = 600
const width = 800

root.render(
    <Stage options={{ backgroundColor: 0x10bb99, height, width}} x={width/2} y={height/2}>
        <RotatingBunny />
    </Stage>,
);