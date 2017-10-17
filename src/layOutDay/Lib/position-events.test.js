import { checkEventsPosition, hasCollision } from "./position-events";


describe( 'collisions', () => {
    
    it('has collision', () => {

        const ev = {start: 5, end: 10};
        const events = [
            {start: 7, end: 12},
            {start: 15, end: 20}
        ]

        const res = hasCollision(ev, events);
        console.log('RAZ undoLib', res);
        
        expect(res).toBeTruthy();
    })

    
})