import {Observable, Observer} from 'rxjs'
/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() =>{


    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
  
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  
  
    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    for( let nombre of nombres ) {
      console.log( capitalizar(nombre) )
    }

})();


// Resultado

const observer: Observer<any> = {
    next: value => console.log('Next', value),
    error: err => console.warn('Error', err),
    complete: () => console.log('Completado') 
};

const characters$ = new Observable( subs => {

    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa']; 
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    
    subs.next(
        nombres.map(item => {
            console.log(capitalizar(item))
        })
    )

});

const subs1 = characters$.subscribe()