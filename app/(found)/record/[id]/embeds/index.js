import { lazy } from 'react';

export const PosionWormsEmbed = lazy(() => import('./poison-worms-embed'));
// export const PoisonWormsEmbed = lazy(() => new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(import('./poison-worms-embed'));
//     }, 5000);

// }));

export const InPerpetuityEmbed = lazy(() => import('./in-perpetuity-embed')); 