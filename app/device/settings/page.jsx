'use client';

import { Grommet, Text, Box, RadioButtonGroup, Nav, Card, Button, CardBody, Main, Layer, Heading, TextArea, CheckBox } from 'grommet';
import { Add, FormNext, Wifi, ChatOption, Run, Pan } from 'grommet-icons';
import { useState } from 'react';
import { IconBack } from '../../../components/Components';

export default function Page() {
  const [ openAvata, setOpenAvata ] = useState(false);
  const [ openName, setOpenName ] = useState(false);
  return (
    <Grommet full>
      <Box fill>
        <Nav direction='row' align='center'>
          <IconBack />
          <Text>设备设置</Text>
        </Nav>
        <Main flex={{ grow: 1, shrink: 1 }} overflow='auto' gap='small' margin={{ horizontal: 'small' }}>
          <Card pad='small' gap='small' background='active' flex={false} onClick={() => setOpenAvata(!openAvata)}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>设备名称</Text>
                <Box direction='row' align='center'>
                  <Text size='small'>办3</Text>
                  <FormNext />
                </Box>
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false} onClick={() => setOpenName(!openName)}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>分组</Text>
                <Box direction='row' align='center'>
                  <Text size='small'>办公室</Text>
                  <FormNext />
                </Box>
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>型号</Text>
                <Text size='small'>云探1</Text>
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>序列号</Text>
                <Text size='small'>GF12345678</Text>
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>设备特性</Text>
                <Box direction='row' gap='small' align='center'>
                  <Box align='center'>
                    <Wifi />
                    <Text size='small'>WiFi</Text>
                  </Box>
                  <Box align='center'>
                    <ChatOption />
                    <Text size='small'>双向语音</Text>
                  </Box>
                  <Box align='center'>
                    <Run />
                    <Text size='small'>移动侦测</Text>
                  </Box>
                  <Box align='center'>
                    <Pan />
                    <Text size='small'>云台</Text>
                  </Box>
                </Box>
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>设备版本</Text>
                <Text size='small'>V1.0.3</Text>
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>设备当前WiFi</Text>
                <Box direction='row' align='center' gap='small'>
                  <Wifi />
                  <Text size='small'>DX-OFFICE</Text>
                </Box>
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>用户指南</Text>
                <FormNext />
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>视频水印(OSD)</Text>
                <CheckBox toggle />
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>设备语音提示</Text>
                <CheckBox toggle />
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>设备状态灯</Text>
                <CheckBox toggle />
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>画面翻转</Text>
                <FormNext />
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>云台位置校准</Text>
                <FormNext />
              </Box>
            </CardBody>
          </Card>
          <Card pad='small' gap='small' background='active' flex={false}>
            <CardBody>
              <Box direction='row' align='center' justify='between'>
                <Text>重启设备</Text>
                <FormNext />
              </Box>
            </CardBody>
          </Card>
          <Button color='status-critical' label='删除设备' />
          {openAvata && (
            <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenAvata(false)} responsive={false}>
              <Box fill pad='medium'>
                <Heading level={3} alignSelf='center'>修改设备名称</Heading>
                <Box gap='small'>
                  <TextArea value='客3' />
                  <Box direction='row' justify='evenly'>
                    <Button label='取消' onClick={() => setOpenAvata(false)} />
                    <Button label='保存' primary onClick={() => setOpenAvata(false)} />
                  </Box>
                </Box>
              </Box>
            </Layer>
          )}
          {openName && (
            <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenName(false)} responsive={false}>
              <Box fill pad='medium'>
                <Heading level={3} alignSelf='center'>设备分组</Heading>
                <Box gap='small'>
                  <RadioButtonGroup
                    name='deficegroup'
                    options={['办公室', '默认分组']}
                    value='办公室'
                  />
                  <Box direction='row'>
                    <Button plain label='添加分组' icon={<Add />} />
                  </Box>
                  <Box direction='row' justify='evenly'>
                    <Button label='取消' onClick={() => setOpenName(false)} />
                    <Button label='保存' primary />
                  </Box>
                </Box>
              </Box>
            </Layer>
          )}
        </Main>
      </Box>
    </Grommet>
  );
}