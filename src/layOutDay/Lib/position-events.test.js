import { positionEvents, checkEventsRang, hasCollision } from "./position-events-lib";


describe( 'collisions', () => {
    const ev =[ {start: 5, end: 10}, {start: 7, end: 12}];
    it('has collision', () => {
        const res = hasCollision(ev[0], ev[1]);
        //  console.log('hasCollision', res);
        expect(res).toBeTruthy();
    })

    it('has no collision', () => {
        const event = {start: 1, end: 5};
        const res = hasCollision(event, ev[1]);
        //  console.log('hasCollision', res);
        expect(res).toBeFalsy();
    })

    it('is inside', () => {
        const event = {start: 8, end: 10};
        const res = hasCollision(ev[1], event);
        //  console.log('hasCollision', res);
        expect(res).toBeTruthy();
    })
})



describe( 'check Events Rang', () => {
    it('une collision', () => {
        const events = [
            {start: 5, end: 10},
            {start: 7, end: 12},
            {start: 15, end: 20}
        ]
        const rangs = [[0,1], [,,0]]
        const res = checkEventsRang(events);
        // console.log('groupEvents', res);
        expect(res).toEqual(rangs);
    })

    it('deux collisions à la suite, deux identiques', () => {
        const events = [
            {start: 5, end: 10},
            {start: 7, end: 12},
            {start: 7, end: 12},
            {start: 15, end: 20}
        ]
        const rangs = [[0,1,2], [,,,0]]
        const res = checkEventsRang(events);
        // console.log('groupEvents', res);
        expect(res).toEqual(rangs);
    })

    it('trois collisions à la suite, le dernier au rang 3', () => {
        const events = [
            {start: 5, end: 10}, // 0
            {start: 7, end: 12}, // 1
            {start: 7, end: 12}, // 2
            {start: 15, end: 30}, // 0
            {start: 18, end: 22}, // 1
            {start: 25, end: 26}, // 1
            {start: 40, end: 50}, // 0
        ]
        const rangs = [[0,1,2], [,,,0,1,1], [,,,,,,0] ]
        const res = checkEventsRang(events);
        // console.log('groupEvents', res.map( r=> r.length), res);
        expect(res).toEqual(rangs);
    })
    

    it('pas d’events !', () => {
        const events = []
        const res = checkEventsRang(events);
        expect(res).toBeFalsy();
    })



})