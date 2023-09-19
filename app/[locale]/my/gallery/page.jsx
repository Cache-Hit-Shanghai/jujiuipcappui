"use client";

import {
  Text,
  Box,
  Nav,
  Grid,
  Card,
  CardHeader,
  CardBody,
  Stack,
} from "grommet";
import { CirclePlay } from "grommet-icons";
import Link from "@/state/translate";
import { IconBack, JuJiuMain } from "@/jujiu-ui-components/core/core-ui";

function LinkBoxImage() {
  return (
    <Link href="/my/gallery/detail" passHref legacyBehavior>
      <Box
        as="a"
        fill
        background="url(https://tse2-mm.cn.bing.net/th/id/OIP-C.ke-oC-HNGvr6A7xWstYjsgHaFS?pid=ImgDet&rs=1)"
        round="xsmall"
      />
    </Link>
  );
}

function LinkBoxVideo() {
  return (
    <Stack fill anchor="center" interactiveChild="first">
      <Link href="/my/gallery/detail?type=video" passHref legacyBehavior>
        <Box
          as="a"
          fill
          background="url(https://tse1-mm.cn.bing.net/th/id/OIP-C.gKVRei8owN-eGgw20kPjwwHaE7?pid=ImgDet&rs=1)"
          round="xsmall"
        />
      </Link>
      <Box>
        <CirclePlay />
      </Box>
    </Stack>
  );
}

export default function Page() {
  return (
    <Box fill>
      <Nav direction="row" align="center">
        <IconBack />
        <Text>相册（剩余容量100GB）</Text>
      </Nav>
      <JuJiuMain>
        <Box flex={false} gap="large">
          <Card>
            <CardHeader background="background-front" pad="small">
              <Text>2023/7/4</Text>
            </CardHeader>
            <CardBody background="background-contrast" pad="small">
              <Grid
                fill
                columns="xsmall"
                gap="small"
                align="center"
                justify="center"
                style={{ gridAutoFlow: "row dense", gridAutoRows: "70px" }}
              >
                {Array.from({ length: 1 }, (_, index) => index).map((item) => (
                  <LinkBoxVideo key={item} />
                ))}
              </Grid>
            </CardBody>
          </Card>
          <Card>
            <CardHeader background="background-front" pad="small">
              <Text>2023/7/3</Text>
            </CardHeader>
            <CardBody background="background-contrast" pad="small">
              <Grid
                fill
                columns="xsmall"
                gap="small"
                align="center"
                justify="center"
                style={{ gridAutoFlow: "row dense", gridAutoRows: "70px" }}
              >
                {Array.from({ length: 8 }, (_, index) => index).map((item) => (
                  <LinkBoxImage key={item} />
                ))}
              </Grid>
            </CardBody>
          </Card>
          <Card>
            <CardHeader background="background-front" pad="small">
              <Text>2023/7/1</Text>
            </CardHeader>
            <CardBody background="background-contrast" pad="small">
              <Grid
                fill
                columns="xsmall"
                gap="small"
                align="center"
                justify="center"
                style={{ gridAutoFlow: "row dense", gridAutoRows: "70px" }}
              >
                {Array.from({ length: 4 }, (_, index) => index).map((item) => (
                  <LinkBoxImage key={item} />
                ))}
              </Grid>
            </CardBody>
          </Card>
        </Box>
      </JuJiuMain>
    </Box>
  );
}
