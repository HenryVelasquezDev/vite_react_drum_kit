import React from 'react'

export const AudioComp = ({ sonido }) => {

    const { key, titulo } = sonido;

    return (
        <audio data-key={key} src={`./assets/sounds/${titulo}.wav`}></audio>
    )
}
