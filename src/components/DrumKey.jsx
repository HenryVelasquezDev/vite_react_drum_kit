import React, { useEffect, useState } from 'react'

export const DrumKey = ({ sonido }) => {
    const { key, titulo, letra } = sonido;

    const [isPlaying, setIsPlaying] = useState(false);
    
    const hanldeKeyEvento = ( keyCode ) => {
        setIsPlaying(true);
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        if (!audio) return;
        audio.currentTime = 0
        audio.play();
    }

    const handleClick = (e) => {
        hanldeKeyEvento ( key )
    }


    useEffect(() => {
      window.addEventListener('keydown', function(e){
        const {keyCode} = e;
        if ( keyCode == key){
            hanldeKeyEvento(keyCode);
        }
      })
    }, [sonido]);

    const handleTransitionEnd = (event) => {
        setIsPlaying(false);
    };

    return (
        <div data-key={key}
            className={`key ${isPlaying ? 'playing' : ''}`}
            onClick={handleClick}
            onTransitionEnd={handleTransitionEnd}
        >
            <kbd>{letra}</kbd>
            <span className="sound">{titulo}</span>
        </div>
    )
}
