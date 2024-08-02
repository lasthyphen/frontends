import type { IdenticonType } from 'types/views/address';

export const IDENTICONS: Array<{ label: string; id: IdenticonType; sampleBg: string }> = [
  {
    label: 'GitHub',
    id: 'github',
    sampleBg: 'url("/static/identicon_logos/github.png") center / contain no-repeat',
  },
  {
    label: 'Decypher jazzicon',
    id: 'jazzicon',
    sampleBg: 'url("/static/identicon_logos/jazzicon.png") center / contain no-repeat',
  },
  {
    label: 'Dijets EVM blockies',
    id: 'blockie',
    sampleBg: 'url("/static/identicon_logos/blockies.png") center / contain no-repeat',
  },
  {
    label: 'Gradient avatar',
    id: 'gradient_avatar',
    sampleBg: 'url("/static/identicon_logos/gradient_avatar.png") center / contain no-repeat',
  },
];
