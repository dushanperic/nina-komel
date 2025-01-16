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
import vojvodina1 from '../assets/vojvodina-cbook-1.png';
import vojvodina2 from '../assets/vojvodina-cbook-2.png';
import vojvodina3 from '../assets/vojvodina-cbook-3.png';
import vojvodina4 from '../assets/vojvodina-cbook-4.png';
import vojvodina5 from '../assets/vojvodina-cbook-5.png';

export const IMAGES_BY_SLUG: { [key: string]: ImageMetadata[] } = {
  dnk: [dnk1, dnk2, dnk3],
  'na-istom-zadatku': [dunav1, dunav2, dunav3, dunav4, dunav5, dunav6],
  'vojvodina-cook-book': [
    vojvodina1,
    vojvodina2,
    vojvodina3,
    vojvodina4,
    vojvodina5,
  ],
};

export const worksWithImages = works.map((work) => ({
  ...work,
  images: IMAGES_BY_SLUG[work.slug],
}));
