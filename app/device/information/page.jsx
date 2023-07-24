'use client';

import { Text, Box, Layer, Nav, Heading, Button } from 'grommet';
import { Wifi, ChatOption, Run, Pan, Copy } from 'grommet-icons';
import { useState } from 'react';
import { IconBack, JuJiuMain } from '../../../components/Components';
import { JuJiuItemText, JuJiuItemTextArray, JuJiuItemButton, JuJiuItem } from '../../../components/JuJiuItem';

export default function Page() {
  const [openUsn, setOpenUsn] = useState(false);

  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>设备信息 - 办3</Text>
      </Nav>
      <JuJiuMain>
				<JuJiuItemText label='设备型号' value='云探1' />
				<JuJiuItemText label='序列号' value='GF12345678' />
				<JuJiuItemButton label='设备统一SN' onClick={() => setOpenUsn(!openUsn)} />
				<JuJiuItem label='设备特性'>
					<Box direction='row' gap='small' align='center'>
						<Box align='center'>
							<Wifi color='text-xweak' />
							<Text color='text-xweak' size='small'>WiFi</Text>
						</Box>
						<Box align='center'>
							<ChatOption color='text-xweak' />
							<Text color='text-xweak' size='small'>双向语音</Text>
						</Box>
						<Box align='center'>
							<Run color='text-xweak' />
							<Text color='text-xweak' size='small'>移动侦测</Text>
						</Box>
						<Box align='center'>
							<Pan color='text-xweak' />
							<Text color='text-xweak' size='small'>云台</Text>
						</Box>
					</Box>
				</JuJiuItem>
				<JuJiuItemText label='设备固件版本' value='V1.0.3' />
				<JuJiuItemText label='设备当前WiFi' value='DX-OFFICE' icon={<Wifi color='text-xweak' />} />
				<JuJiuItemTextArray label='IP地址' value={['192.168.100.127', 'fe80::64a6:2309:8880:7903']} />
				<JuJiuItemText label='MAC地址' value='6c:f1:7e:9f:83:a2' />
				<JuJiuItemText label='已开机' value='158:12:05' />
      </JuJiuMain>
      {openUsn && (
        <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenUsn(false)} responsive={false}>
          <Box fill border pad='medium' gap='medium'>
            <Box direction='row' justify='between'>
							<Heading alignSelf='center' margin='none' level={2}>设备统一SN</Heading>
							<Button icon={<Copy />} />
						</Box>
            <Box border pad='small'>
              <Text size='small' wordBreak='break-all' textAlign='justify' color='text-xweak'>jujiucloud.f7934b38-82ac-4059-9382-c70b38b15cdd.1689058115620.EKQF230ZsIk-fwmFkWyQ0</Text>
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
}