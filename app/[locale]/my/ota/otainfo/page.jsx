"use client";

import { Text, Box, Nav, Heading } from "grommet";
import { Update } from "grommet-icons";
import {
  ButtonLink,
  IconBack,
  JuJiuMain,
} from "@/jujiu-ui-components/core/core-ui";

export default function Page() {
  return (
    <Box fill>
      <Nav direction="row" align="center">
        <IconBack />
        <Text>固件升级信息 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <Box margin="large" align="center">
          <Update size="large" />
        </Box>
        <Box align="center">
          <Text>最新版本：15.2.3.4</Text>
          <Text>当前版本：15.2.3.0</Text>
        </Box>
        <Box>
          <Heading level={2}>更新日志：</Heading>
          <Text>1. 修复已知问题若干。</Text>
          <Text>2. 新增拉流时断线重连的功能。</Text>
        </Box>
        <Box direction="row" justify="center">
          <ButtonLink
            href="/my/ota/otainfo/updating"
            primary
            label="现在升级"
          />
        </Box>
      </JuJiuMain>
    </Box>
  );
}
