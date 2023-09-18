"use client";

import { Text, Box, Nav, CheckBox, List, Tag } from "grommet";
import {
  IconBack,
  JuJiuMain,
  JuJiuCard,
} from "@/jujiu-ui-components/core/core-ui";
import { JuJiuItem } from "@/jujiu-ui-components/core/core-item";

const packages = [
  { title: "7天月套餐", start: "2023/08/10", end: "2023/09/10", current: true },
  { title: "30天月套餐", start: "2023/09/10", end: "2023/10/10" },
  { title: "30天半年套餐", start: "2023/10/10", end: "2024/04/10" },
];

export default function Page() {
  return (
    <Box fill>
      <Nav direction="row" align="center">
        <IconBack />
        <Text>云存储设置</Text>
      </Nav>
      <JuJiuMain gap="medium">
        <JuJiuItem
          label={
            <Box>
              <Text>云存储服务</Text>
              <Text size="small" color="text-xweak">
                云存储服务暂停后，录像将停止上传，服务有效期不会延长。
              </Text>
            </Box>
          }
        >
          <CheckBox toggle />
        </JuJiuItem>
        <JuJiuCard>
          <List data={packages} margin={{ vertical: "small" }}>
            {(datum) => (
              <Box direction="row" gap="small" align="center" justify="between">
                <Box direction="row" align="center" gap="small">
                  <Text>{datum.title}</Text>
                  {datum.current && (
                    <Tag
                      size="xsmall"
                      background="status-ok"
                      border={false}
                      value="当前套餐"
                    />
                  )}
                </Box>
                <Box>
                  <Text size="small" color="text-xweak">
                    {datum.start}
                  </Text>
                  <Text size="small" color="text-xweak">
                    {datum.end}
                  </Text>
                </Box>
              </Box>
            )}
          </List>
        </JuJiuCard>
      </JuJiuMain>
    </Box>
  );
}
