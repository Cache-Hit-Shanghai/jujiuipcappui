"use client";

import { Text, Box, Nav, Meter, Heading, Avatar } from "grommet";
import { Webcam } from "grommet-icons";
import { ButtonBackToMain } from "@/jujiu-ui-components/components";
import {
  IconBack,
  JuJiuMain,
  JuJiuInformation,
} from "@/jujiu-ui-components/core/core-ui";

export default function Page() {
  return (
    <Box fill>
      <Nav direction="row" align="center">
        <IconBack />
        <Text>固件升级</Text>
      </Nav>
      <JuJiuMain>
        <Heading margin="none" level={2}>
          固件升级中……
        </Heading>
        <Box align="center">
          <Avatar background="background-front">
            <Webcam />
          </Avatar>
          <Text>办3</Text>
        </Box>
        <JuJiuInformation label="摄像机正在固件升级中。请保持摄像机的电源开启。摄像机突然断电有可能导致设备无法启动。" />
        <Meter round values={[{ value: 50 }]} />
        <Box align="center" gap="medium">
          <Text>
            固件升级成功！设备正在重启中，请耐心等待。设备重启后即可正常使用。
          </Text>
          <Box direction="row">
            <ButtonBackToMain />
          </Box>
        </Box>
      </JuJiuMain>
    </Box>
  );
}
