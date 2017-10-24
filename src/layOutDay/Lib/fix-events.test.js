import {HORAIRE_MIN, HORAIRE_MAX, HAUTEUR_MIN, QTE_MIN, QTE_MAX} from '../Config'

import { isProp, fixEvent, selectEvent, setStartEnd } from "./validate-events-lib";


describe( 'fixEvent', () => {

    it('fixEvent est bureau', () => {
        const event =   {start: 30, end: 150};
        const res = fixEvent(event);
        expect(res[0]).toBe('bureau');
    })

    it('fixEvent est jour', () => {
        const event =   {start: -30, end: 850};
        const res = fixEvent(event);
        expect(res[0]).toBe('jour');
    })
    it('fixEvent est tot', () => {
        const event =   {start: -30, end: 150};
        const res = fixEvent(event);
        expect(res[0]).toBe('tot');
    })
    it('fixEvent est tard', () => {
        const event =   {start: 30, end: 850};
        const res = fixEvent(event);
        expect(res[0]).toBe('tard');
    })
    it('fixEvent est très tôt', () => {
        const event =   {start: -30, end: -20};
        const res = fixEvent(event);
        expect(res[0]).toBe('très tot');
    })
    it('fixEvent est très tard', () => {
        const event =   {start: 930, end: 1020};
        const res = fixEvent(event);
        expect(res[0]).toBe('très tard');
    })
    it('fixEvent est court', () => {
        const event =   {start: 100, end: 105};
        const res = fixEvent(event);
        // console.log('fixEvent', res);
        expect(res[1]).toBe('court');
    })

})


describe( 'selectEvent', () => {
    let status = '';
    let res;
    it('selectEvent est rejeté', () => {
        status = 'très tot';
        res = selectEvent(status);
        expect(res.select).toBe('rejected');
        
        status ='très tard';
        res = selectEvent(status);
        expect(res.select).toBe('rejected');
    })
    it('selectEvent est accepté', () => {
        status = 'tot';
        res = selectEvent(status);
        expect(res.select).toBe('accepted');
        
        status ='tard';
        res = selectEvent(status);
        expect(res.select).toBe('accepted');
    })
})


describe( 'isProp(term, obj)', () => {
    const obj =   {nuit: 0, jour: 1, defaut: 2};
    
    it('isProp est true', () => {
        const term = 'nuit';
        const res = isProp(term, obj);
        expect(res).toEqual(0);
    })

    it('isProp est true', () => {
        const term = 'jour';
        const res = isProp(term, obj);
        expect(res).toEqual(1);
    })


    it('isProp est defaut', () => {
        const term = 'toto';
        const res = isProp(term, obj);
        expect(res).toEqual(2);
    })
})
    

describe( 'setStartEnd', () => {

    it('setStartEnd est bureau', () => {
        const status = 'bureau';
        const event =   {start: 30, end: 150};
        const res = setStartEnd(status, event);
        expect(res).toEqual(event);
    })

    it('setStartEnd est jour', () => {
        const status = ['jour'];
        const event =   {start: -30, end: 835};
        const res = setStartEnd(status, event);
        expect(res.end).toBe(HORAIRE_MAX);
        expect(res.start).toBe(HORAIRE_MIN);
    })
    it('setStartEnd est court', () => {
        const status = ['bureau', 'court'];
        const event =   {start: 30, end: 35};
        const res = setStartEnd(status, event);
        expect(res.end).toBe(event.start + HAUTEUR_MIN);
    })

    it('setStartEnd est court (tard)', () => {
        const status = ['tard', 'court'];
        const event =   {start: 30, end: 35};
        const res = setStartEnd(status, event);
        expect(res.end).toBe(event.start + HAUTEUR_MIN);
    })

    it('setStartEnd est tard', () => {
        const status = 'tard';
        const event =   {start: 750, end: 850};
        const res = setStartEnd(status, event);
        expect(res.end).toBe(HORAIRE_MAX);
    })

    it('setStartEnd est tot', () => {
        const status = 'tot';
        const event =   {start: -30, end: 100};
        const res = setStartEnd(status, event);
        expect(res.start).toBe(HORAIRE_MIN);
    })

})