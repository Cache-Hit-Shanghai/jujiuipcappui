'use client';

import { Text, Box, Layer, Nav, CardBody, Heading, TextInput } from 'grommet';
import { FormNext, Wifi, Qr } from 'grommet-icons';
import { useState } from 'react';
import { IconBack, JuJiuMain, JuJiuCard } from '../../../components/Components';

export default function Page() {
  const [openUsn, setOpenUsn] = useState(false);
  const [openIp, setOpenIp] = useState(false);

  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>高级 - 办3</Text>
      </Nav>
      <JuJiuMain>
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