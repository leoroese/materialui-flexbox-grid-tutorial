import { Box, Container } from "@material-ui/core";

function FlexBox() {
  return (
    <Container
      maxWidth="lg"
      style={{ borderStyle: "dashed", borderColor: "red", height: "800px" }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="flex-end"
        style={{ borderStyle: "solid", height: "100px" }}
      >
        <Box order={1} p={1} m={1}>
          hello{" "}
        </Box>
        <Box order={4} p={1} m={1}>
          up
        </Box>
        <Box order={2} p={1} m={1}>
          world
        </Box>
        <Box order={3} p={1} m={1} alignSelf="flex-start">
          shut
        </Box>
      </Box>
    </Container>
  );
}

export default FlexBox;
