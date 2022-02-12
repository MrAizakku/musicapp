import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [

    state('void',style({opacity: 0})), //define the style for when going to void.

    transition('void => *', [
      style({ backgroundColor: 'gray' }), //applies css styles immediately
      animate(1000, style({ backgroundColor: 'white',opacity: 1 })) //overtime style - style to default isn't needed. if not style, animate undoes the change.
    ]),

    transition('* => void', [
      animate(1000)//animate(1000, style({ opacity: 0 }))  removed style because defined above.
    ])
]);

/* another form
trigger('NAME_OF_ANIMATION', [
    state('void', style({})),    //define state default expectations

    transition(':enter, :leave', [
        animate(2000) //miliseconds - do the transition when enters, and revert when leave
    ])
])
*/