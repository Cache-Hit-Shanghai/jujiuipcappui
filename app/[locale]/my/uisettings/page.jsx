"use client";

import { Text, Box, Nav } from "grommet";
import { IconBack, JuJiuMain } from "@/jujiu-ui-components/core/core-ui";
import { ChangeUI } from "@/jujiu-ui-components/application/settings/ui";

export default function Page() {
  return (
    <Box fill>
      <Nav direction="row" align="center">
        <IconBack />
        <Text>界面设置</Text>
      </Nav>
      <JuJiuMain gap="medium">
        <ChangeUI />
      </JuJiuMain>
    </Box>
  );
}
