import {HORAIRE_MIN, HORAIRE_MAX, HAUTEUR_MIN, QTE_MIN, QTE_MAX} from '../Config'

import validateEvents, { limitEvents, isOneOf } from "./validate-events-lib";


describe( 'isOneOf', () => {
    it('trouve l’élément dans la liste', () => {
        const i = 'a';
        const arr  = [ 'a', 'b', 'c']
        const res = isOneOf(i, arr);
        // console.log('isOneOf', res);
        expect(res).toBeTruthy();
    })

    it('ne trouve pas l’élément dans la liste', () => {
        const i = 'd';
        const arr  = [ 'a', 'b', 'c']
        const res = isOneOf(i, arr);
        // console.log('isOneOf', res);
        expect(res).toBeUndefined();
    })
})

describe( 'limitEvents', () => {
    it('pas d’events', () => {
        const ev =[];
        const res = limitEvents(ev);
        expect(res.reject).toBeTruthy();
    })

    it('trop d’events', () => {
        const ev = Array(2000).fill({start: 8, end: 10})
        const res = limitEvents(ev);
        expect(res.reject).toBeTruthy();
    })

    it('assez d’events', () => {
        const ev = {start: 8, end: 10};
        const res = limitEvents(ev);
        expect(res.reject).toBeFalsy();
    })
})


describe( 'Validate events', () => {
    it('trop tot', () => {
        const event = [ {start: HORAIRE_MIN - 5, end: 10} ]
        const res = validateEvents(event);
        expect(res[0].start).toEqual(HORAIRE_MIN);
    })
    
    it('trop tard', () => {
        const event = [ {start: 5, end: HORAIRE_MAX + 10} ]
        const res = validateEvents(event);
        expect(res[0].end).toEqual(HORAIRE_MAX);
    })
    
    it('très tard', () => {
        const event = [ {start: HORAIRE_MAX + 5, end: HORAIRE_MAX + 10} ]
        const res = validateEvents(event);
        expect(res[0].select).toBe('rejected');
    })
        
    it('très tot', () => {
        const event = [ {start: HORAIRE_MIN -20, end: HORAIRE_MIN - 10} ]
        const res = validateEvents(event);
        expect(res[0].select).toBe('rejected');
    })
    
    it('toute la journée', () => {
        const event = [ {start: HORAIRE_MIN - 5, end: HORAIRE_MAX + 10} ]
        const res = validateEvents(event);
        expect(res[0].start).toEqual(HORAIRE_MIN);
        expect(res[0].end).toEqual(HORAIRE_MAX);
    })
    
    it('event très court', () => {
        const event = [ {start: HORAIRE_MIN + 5, end: HORAIRE_MIN + 10} ]
        const res = validateEvents(event);
        expect(res[0].end).toEqual(HORAIRE_MIN + 5 +  HAUTEUR_MIN );
    })

})

