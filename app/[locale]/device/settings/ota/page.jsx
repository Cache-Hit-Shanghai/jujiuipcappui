"use client";

import { Text, Box, Nav, CheckBox } from "grommet";
import { IconBack, JuJiuMain } from "@/jujiu-ui-components/core/core-ui";
import { JuJiuItem } from "@/jujiu-ui-components/core/core-item";

export default function Page() {
  return (
    <Box fill>
      <Nav direction="row" align="center">
        <IconBack />
        <Text>固件升级设置 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem label="自动升级固件">
          <CheckBox toggle />
        </JuJiuItem>
      </JuJiuMain>
    </Box>
  );
}
