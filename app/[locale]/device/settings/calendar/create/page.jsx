"use client";

import { Text, Box, Nav, Button } from "grommet";
import { IconBack, JuJiuMain } from "@/jujiu-ui-components/core/core-ui";
import { CalendarEditor } from "../createOrEdit";

export default function Page() {
  return (
    <Box fill>
      <Nav direction="row" align="center">
        <IconBack />
        <Text>添加日程 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <CalendarEditor />
        <Button primary label="确定" />
      </JuJiuMain>
    </Box>
  );
}
