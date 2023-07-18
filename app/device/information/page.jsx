'use client';

import { Text, Box, Layer, Nav, CardBody, Heading } from 'grommet';
import { FormNext, Wifi, ChatOption, Run, Pan } from 'grommet-icons';
import { useState } from 'react';
import { IconBack, JuJiuMain, JuJiuCard } from '../../../components/Components';

export default function Page() {
  const [openUsn, setOpenUsn] = useState(false);

  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>设备信息 - 办3</Text>
      </Nav>
      <JuJiuMain>
			<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>设备型号</Text>
							<Text size='small'>云探1</Text>
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>序列号</Text>
							<Text size='small'>GF12345678</Text>
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
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
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>设备固件版本</Text>
							<Text size='small'>V1.0.3</Text>
						</Box>
					</CardBody>
				</JuJiuCard>
				<JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>设备当前WiFi</Text>
							<Box direction='row' align='center' gap='small'>
								<Wifi />
								<Text size='small'>DX-OFFICE</Text>
							</Box>
						</Box>
					</CardBody>
				</JuJiuCard>
        <JuJiuCard onClick={() => setOpenUsn(!openUsn)}>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>设备统一SN</Text>
							<Box direction='row' align='center'>
								<FormNext color='control' />
							</Box>
						</Box>
					</CardBody>
				</JuJiuCard>
        <JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>IP地址</Text>
							<Box align='end'>
								<Text size='small'>192.168.100.127</Text>
								<Text size='small'>fe80::64a6:2309:8880:7903</Text>
							</Box>
						</Box>
					</CardBody>
				</JuJiuCard>
        <JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>MAC地址</Text>
							<Box align='end'>
								<Text size='small'>6c:f1:7e:9f:83:a2</Text>
							</Box>
						</Box>
					</CardBody>
				</JuJiuCard>
        <JuJiuCard>
					<CardBody>
						<Box
							direction='row'
							align='center'
							justify='between'
						>
							<Text>已开机</Text>
							<Box align='end'>
								<Text size='small'>158:12:05</Text>
							</Box>
						</Box>
					</CardBody>
				</JuJiuCard>
      </JuJiuMain>
      {openUsn && (
        <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenUsn(false)} responsive={false}>
          <Box fill border pad='medium' gap='medium'>
            <Heading alignSelf='center' margin='none' level={3}>设备统一SN</Heading>
            <Box border pad='small'>
              <Text wordBreak='break-all'>jujiucloud.f7934b38-82ac-4059-9382-c70b38b15cdd.1689058115620.EKQF230ZsIk-fwmFkWyQ0</Text>
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
}