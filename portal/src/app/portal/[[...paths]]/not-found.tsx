import { Box, Button, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      p={2}
    >
      <Typography variant="h1" fontWeight="bold" color="primary">
        404
      </Typography>
      <Typography variant="h4" mb={2}>
        Страница не найдена
      </Typography>
      <Typography variant="body1" mb={4} maxWidth="400px">
        Возможно, вы ввели неправильный адрес или страница была перемещена.
      </Typography>
      <Button variant="contained" color="primary" href="/">
        На главную
      </Button>
    </Box>
  );
};

// export default function NotFound() {
//   return <div>404 - Page Not Found</div>
// }