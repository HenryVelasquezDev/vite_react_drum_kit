import { sonidos } from '../data/sonidos';

 export const getSonidosbyType = ( p_tipo ) => {

    const tiposValidos = ['instrumento'];

    if ( !tiposValidos.includes( p_tipo ) ){
        throw new Error(`Tipo sonidos "${ p_tipo }" no es correcto`);
    }

    return sonidos.filter( sonido => sonido.tipo === p_tipo );

 }