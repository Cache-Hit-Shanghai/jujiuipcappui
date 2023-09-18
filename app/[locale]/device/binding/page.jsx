"use client";

import { Text, Box, Nav } from "grommet";
import {
  ButtonLink,
  IconBack,
  JuJiuMain,
} from "@/jujiu-ui-components/core/core-ui";
import { WiFiBinding } from "@/jujiu-ui-components/application/device/binding";

export default function Page() {
  return (
    <Box fill>
      <Nav direction="row" align="center">
        <IconBack />
        <Text>添加设备</Text>
      </Nav>
      <JuJiuMain align="center">
        <WiFiBinding />
      </JuJiuMain>
      <Box direction="row" margin="small" justify="end" flex={false}>
        <ButtonLink href="/device/binding/next" label="下一步" />
      </Box>
    </Box>
  );
}
