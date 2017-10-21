import { checkEventsPosition, hasCollision } from "./position-events-lib";


describe( 'collisions', () => {
    
    const ev =[ {start: 7, end: 12}, {start: 5, end: 10}];
    
    it('has collision', () => {
        const res = hasCollision(ev[0], ev[1]);
         console.log('hasCollision', res);
        expect(res).toBeTruthy();
    })
    
    
    it('has collision', () => {
        const res = hasCollision(ev[1], ev[0]);
         console.log('hasCollision', res);
        expect(res).toBeTruthy();
    })
    

    it('has no collision', () => {
        const event = {start: 1, end: 5};
        const res = hasCollision(event, ev[0]);
         console.log('hasCollision', res);
        expect(res).toBeFalsy();
    })

})

describe( 'check Events Positions', () => {
    
    const events = [
        {start: 5, end: 10},
        {start: 7, end: 12},
        {start: 15, end: 20}
    ]
    
    it('has collisions', () => {
        const res = checkEventsPosition(events);
        console.log('hasCollision', res);
        const collision1 = res[0];
        const collision2 = res[1];
        const noCollision = res[2];
        
        expect(collision1.divide).toBeTruthy();
        expect(collision2.divide).toBeTruthy();
        expect(noCollision.divide).toBeFalsy();
    })

    
    it('has shifted', () => {

    })


})