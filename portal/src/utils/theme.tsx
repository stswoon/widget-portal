"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-roboto)"
  }
});

export default theme;

// optionally, if you want to use Next.js Link component for all links
//
// import NextLink from 'next/link';
// import { forwardRef } from 'react';
//
// const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
//   return <NextLink ref={ref} {...props} />;
// });
//
// const theme = createTheme({
//   components: {
//     MuiLink: {
//       defaultProps: {
//         component: LinkBehaviour
//       }
//     },
//     MuiButtonBase: {
//       defaultProps: {
//         LinkComponent: LinkBehaviour
//       }
//     }
//   }
// });