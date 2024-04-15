import heroImage from '@/assets/hero.jpg'

export const MOCKED_HERO = {
  content: {
    heading: 'Lorem ipsum',
    subheading: (
      <>
        Interdum et malesuada fames ac{' '}
        <strong className="font-semibold">ante ipsum</strong> primis in
        faucibus.
      </>
    ),
    copy: 'Vivamus turpis sem, vehicula at pellentesque sed, varius nec lectus. Sed ultrices feugiat ullamcorper. Pellentesque id tellus finibus, ultrices purus sit amet, ultricies purus. Proin rhoncus mauris at egestas pretium. Fusce eget libero felis. Quisque eu hendrerit nisl, sed lacinia sem.',
  },
  image: {
    src: heroImage,
    alt: 'alt text',
  },
  ctas: [
    {
      id: 'cta-1',
      text: 'Aliquam rutrum est',
      href: '#',
      isExternal: false,
    },
    {
      id: 'cta-2',
      text: 'Aliquam rutrum est',
      href: '#',
      isExternal: true,
    },
  ],
}
