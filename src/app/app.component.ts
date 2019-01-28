import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Tableau de bord de mon Blog';
  posts = [
    {
      title: 'Mon premier post',
      content: 'Quo cognito Constantius ultra mortalem modum exarsit ac nequo casu idem Gallus de futuris incertus agitare quaedam conducentia saluti suae per itinera conaretur, remoti sunt omnes de industria ' +
        'milites agentes in civitatibus perviis.',
      loveIts : 2,
      created_at : Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Ideo urbs venerabilis post superbas efferatarum gentium cervices oppressas latasque leges fundamenta libertatis et retinacula ' +
        'sempiterna velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda patrimonii iura permisit.',
      loveIts : -3,
      created_at : Date()
    },
    {
      title: 'Encore un post',
      content: 'Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, ' +
        'qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam ' +
        'inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat.',
      loveIts : 0,
      created_at : Date()
    }
    ];
}
