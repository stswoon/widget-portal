import { Box, Container, Skeleton, Stack } from "@mui/material";

// TODO loading in SSG not works
export default function Loading() {
  return (
    <Container className="taPortalPageLoading" maxWidth="xl">
      <Stack justifyContent="center" direction="row" flexWrap="wrap">
        {Array.from(new Array(12)).map((_, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

// export default function Loading() {
//   // Or a custom loading skeleton component
//   return <p>Loading...</p>
// }