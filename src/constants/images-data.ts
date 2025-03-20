import type { ImageMetadata } from 'astro';
import works from '../constants/works.json';

import dnk1 from '../assets/dnk/00dnk.png';
import dnk2 from '../assets/dnk/01dnk.png';
import dnk3 from '../assets/dnk/02dnk.png';
import dnk4 from '../assets/dnk/03dnk.png';

import dunav1 from '../assets/dunav/0dunav.png';
import dunav2 from '../assets/dunav/1dunav.png';
import dunav3 from '../assets/dunav/2dunav.png';
import dunav4 from '../assets/dunav/3dunav.png';
import dunav5 from '../assets/dunav/4dunav.png';
import dunav6 from '../assets/dunav/5dunav.png';

import vojvodina0 from '../assets/cook-book/0kuvar.jpg';
import vojvodina1 from '../assets/cook-book/1kuvar.jpg';
import vojvodina2 from '../assets/cook-book/2kuvar.jpg';
import vojvodina3 from '../assets/cook-book/3kuvar.jpg';
import vojvodina4 from '../assets/cook-book/4kuvar.jpg';

import sokKoridor1 from '../assets/shok/sok.gif';
import sokKoridor2 from '../assets/shok/01sokkoridor.png';

import nqode1 from '../assets/nqode/00nqode.png';
import nqode2 from '../assets/nqode/01nqode.png';
import nqode3 from '../assets/nqode/02nqode.png';
import nqode4 from '../assets/nqode/03nqode.png';
import nqode5 from '../assets/nqode/04nqode.png';

import puzzle1 from '../assets/puzzle/00puzzle.png';
import puzzle2 from '../assets/puzzle/01puzzle.png';

import fourWaters1 from '../assets/4vode/004vode.png';
import fourWaters2 from '../assets/4vode/014vode.png';
import fourWaters3 from '../assets/4vode/024vode.png';
import fourWaters4 from '../assets/4vode/034vode.png';

export const IMAGES_BY_SLUG: { [key: string]: ImageMetadata[] } = {
  dnk: [dnk1, dnk2, dnk3, dnk4],
  'na-istom-zadatku': [dunav1, dunav2, dunav3, dunav4, dunav5, dunav6],
  'vojvodina-cook-book': [
    vojvodina0,
    vojvodina1,
    vojvodina2,
    vojvodina3,
    vojvodina4,
  ],
  'sok-koridor': [sokKoridor1, sokKoridor2],
  nqode: [nqode1, nqode2, nqode3, nqode4, nqode5],
  puzzle: [puzzle1, puzzle2],
  fourWaters: [fourWaters1, fourWaters2, fourWaters3, fourWaters4],
};

export const worksWithImages = works.map((work) => ({
  ...work,
  images: IMAGES_BY_SLUG[work.slug],
}));
