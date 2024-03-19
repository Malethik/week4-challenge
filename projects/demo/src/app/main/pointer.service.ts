import { Output } from '@angular/core';
import { Gentelman } from './pointer';

export const gentelmans = (): Gentelman[] => [
  {
    id: 1,
    name: 'Bertin Osborne',
    initial: 'B',
    status: 'Alive',
    profession: 'Youtuber',
    twitter: '@osbourne',
    picture: '../../assets/bertin.jpg',
    alternativeText: 'Osbourne pointing at you',
    selected: true,
  },
  {
    id: 2,
    name: 'The Farytale',
    initial: 'F',
    status: 'RIP',
    profession: 'Influencer',
    twitter: 'pending',
    picture: '../../assets/fary.jpg',
    alternativeText: 'The Fary pointing at you',
    selected: false,
  },
  {
    id: 3,
    name: 'Julius Churchs',
    initial: 'J',
    status: 'Alive',
    profession: 'Java developer',
    twitter: '@julius_churchs',
    picture: '../../assets/julio.jpg',
    alternativeText: 'Churchs pointing at you',
    selected: true,
  },
];
