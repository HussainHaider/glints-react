import {createTheme} from '@mui/material/styles';
import {responsiveFontSizes} from '@mui/material/styles';

import {cinchdark} from './colors';
import {cinchmediumgreen} from './colors';
import {error} from './colors';
import {errordark} from './colors';
import {errorlight} from './colors';
import {info} from './colors';
import {infodark} from './colors';
import {infolight} from './colors';
import {success} from './colors';
import {successdark} from './colors';
import {successlight} from './colors';
import {warning} from './colors';
import {warningdark} from './colors';
import {warninglight} from './colors';
import {white} from './colors';

import {spacingl} from './spacing';
import {spacingm} from './spacing';
import {spacings} from './spacing';
import {spacingxl} from './spacing';
import {spacingxs} from './spacing';
import {spacingxxl} from './spacing';
import {spacingxxl2} from './spacing';
import {spacingxxl3} from './spacing';
import {spacingxxl4} from './spacing';
import {spacingxxl5} from './spacing';
import {spacingxxs} from './spacing';

export const theme = responsiveFontSizes(createTheme({
  palette: {
    'primary': {
      'main': cinchdark,
      'contrastText': white,
    },
    'secondary': {
      'main': cinchmediumgreen,
      'contrastText': white,
    },
    'error': {
      'light': errorlight,
      'main': error,
      'dark': errordark,
    },
    'warning': {
      'light': warninglight,
      'main': warning,
      'dark': warningdark,
    },
    'info': {
      'light': infolight,
      'main': info,
      'dark': infodark,
    },
    'success': {
      'light': successlight,
      'main': success,
      'dark': successdark,
    },
  },
  'spacing': [spacingxxs, spacingxs, spacings, spacingm, spacingl,
    spacingxl, spacingxxl, spacingxxl2, spacingxxl3, spacingxxl4,
    spacingxxl5],
},));