import type CspDev from 'csp-dev';

export function googleFonts(): CspDev.DirectiveDescriptor {
  // we use Inter and Poppins in the app

  return {
    'connect-src': [
      'fonts.gstatic.com',
    ],
    'style-src': [
      'fonts.googleapis.com',
      'tokens.dijets.io',
    ],
    'font-src': [
      'fonts.gstatic.com',
      'fonts.googleapis.com',
      'tokens.dijets.io',
    ],
  };
}
