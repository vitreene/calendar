import { checkEventsRang } from "./position-events-lib2";



describe( 'check Events Rang', () => {
    
    const events = [
        {start: 5, end: 10},
        {start: 7, end: 12},
        {start: 15, end: 20}
    ]
    
    it('checkEventsRang', () => {
        const res = checkEventsRang(events);
        console.log('groupEvents', res);

         expect(res).toBeTruthy();
    })


})