import { Global, css } from '@emotion/react';

export const GlobalFonts = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    `}
  />
);
