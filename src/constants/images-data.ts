import type { ImageMetadata } from 'astro';
import works from '../constants/works.json';

import dnk1 from '../assets/0dnk.png';
import dnk2 from '../assets/1dnk.png';
import dnk3 from '../assets/3dnk.png';
import dunav1 from '../assets/0dunav.png';
import dunav2 from '../assets/1dunav.png';
import dunav3 from '../assets/2dunav.png';
import dunav4 from '../assets/3dunav.png';
import dunav5 from '../assets/4dunav.png';
import dunav6 from '../assets/5dunav.png';
import vojvodina0 from '../assets/0kuvar.jpg';
import vojvodina1 from '../assets/1kuvar.jpg';
import vojvodina2 from '../assets/2kuvar.jpg';
import vojvodina3 from '../assets/3kuvar.jpg';
import vojvodina4 from '../assets/4kuvar.jpg';
import sokKoridor from '../assets/sok.gif';

export const IMAGES_BY_SLUG: { [key: string]: ImageMetadata[] } = {
  dnk: [dnk1, dnk2, dnk3],
  'na-istom-zadatku': [dunav1, dunav2, dunav3, dunav4, dunav5, dunav6],
  'vojvodina-cook-book': [
    vojvodina0,
    vojvodina1,
    vojvodina2,
    vojvodina3,
    vojvodina4,
  ],
  'sok-koridor': [sokKoridor],
};

export const worksWithImages = works.map((work) => ({
  ...work,
  images: IMAGES_BY_SLUG[work.slug],
}));
