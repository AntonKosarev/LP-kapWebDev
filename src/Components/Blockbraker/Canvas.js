import { useEffect, useRef } from 'react';
import Engine from './Engine';

function Canvas() {
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            const canvas = ref.current;
            const context = ref.current.getContext("2d");
            console.log("canvas: ", canvas);
            console.log("context: ", context);
            let Game = new Engine({canvas: canvas, context: context});
            Game.init();
        }
    }, []);

    return <canvas ref={ref} id='canvas_kap' width='800' height='500'></canvas>
}

export default Canvas;