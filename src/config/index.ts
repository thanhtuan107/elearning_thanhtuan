import Development from './dev';
import Production from './prod';

const env = import.meta.env.NODE_ENV; // 'development' or 'production'

const config = env === 'development' ? Development : Production;
// let config = {};
// if (env === 'development') {
//   config = {
//     apiUrl: 'https://elearning0706.cybersoft.edu.vn/api/',
//   };
// } else {
//   config = {
//     apiUrl: 'https://elearning0706.cybersoft.edu.vn/api/',
//   };
// }

export default config;
