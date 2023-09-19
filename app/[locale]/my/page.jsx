"use client";

import { Text, Box, Nav, CardHeader, CardBody, Avatar } from "grommet";
import {
  Gallery,
  CloudUpload,
  ShareRounded,
  User,
  Upgrade,
} from "grommet-icons";
import { PersonFeedback } from "@styled-icons/fluentui-system-regular/PersonFeedback";
import { AppFooter } from "@/jujiu-ui-components/components";
import {
  ButtonLink,
  IconLink,
  LinkGroup,
  JuJiuMain,
  JuJiuCard,
} from "@/jujiu-ui-components/core/core-ui";

const links = [
  { label: "账号设置", url: "/my/account" },
  { label: "通知设置", url: "/my/notification" },
  { label: "界面设置", url: "/my/uisettings" },
  { label: "系统信息", url: "/my/sysinfo" },
  { label: "关于", url: "/my/about" },
];

export default function Page() {
  return (
    <Box fill>
      <Nav direction="row" margin="small" justify="between">
        <ButtonLink href="/my/login">
          <Box direction="row" gap="small" align="center">
            <Avatar background="background-contrast">
              <User />
            </Avatar>
            <Box>
              <Text>用户34881</Text>
              <Text size="xsmall" color="text-xweak">
                黄金会员
              </Text>
            </Box>
          </Box>
        </ButtonLink>
      </Nav>
      <JuJiuMain>
        <JuJiuCard>
          <CardBody>
            <Box direction="row" justify="evenly">
              <IconLink icon={<Gallery />} label="相册" url="/my/gallery" />
              <IconLink
                icon={<CloudUpload />}
                label="云存储"
                url="/my/cloudstorage"
              />
            </Box>
          </CardBody>
        </JuJiuCard>
        <JuJiuCard>
          <CardHeader>
            <Text>常用工具</Text>
          </CardHeader>
          <CardBody>
            <Box direction="row" justify="evenly">
              <IconLink icon={<Upgrade />} label="固件升级" url="/my/ota" />
              <IconLink
                icon={<ShareRounded />}
                label="我的分享"
                url="/my/sharing"
              />
              <IconLink
                icon={<PersonFeedback size="24" />}
                label="帮助与反馈"
                url="/my/feedback"
              />
            </Box>
          </CardBody>
        </JuJiuCard>
        <LinkGroup data={links} />
      </JuJiuMain>
      <AppFooter />
    </Box>
  );
}
