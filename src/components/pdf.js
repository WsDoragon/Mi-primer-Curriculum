import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import Pdf from "react-to-pdf";

export default function App() {
  const ref = React.useRef();
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
      </Pdf>
      <Stack ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Stack>
    </div>
  );
}
