import React, { useEffect } from 'react'
import { AudioComp } from './components/AudioComp';
import { DrumKey } from './components/DrumKey';
import { getSonidosbyType } from './selectors/getSonidos';


export const DrumApp = () => {

    const sonidos = getSonidosbyType( 'instrumento' );   

    return (
        <div >
            <div className="keys" >
                {
                    sonidos.map( sonido => <DrumKey key={ sonido.key } sonido={ sonido } /> )
                }
            </div>

            {
                sonidos.map( sonido => <AudioComp key={ sonido.key } sonido={ sonido } /> )
            }
        </div>
    )
}
