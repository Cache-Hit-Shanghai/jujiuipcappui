'use client';

import { Text, Box, Nav, Button, Grid, Heading, TextInput } from 'grommet';
import { User, UserAdd } from 'grommet-icons';
import { useState } from 'react';
import { IconBack, JuJiuMain, ButtonLink } from '../../../../../../components/Components';
import { JuJiuLayer } from '../../../../../../components/JuJiuLayer';


export default function Page() {
	const [openAdd, setOpenAdd] = useState(false);
	const [openName, setOpenName] = useState(false);
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>人脸管理(6) - 办3</Text>
      </Nav>
      <JuJiuMain>
        <Grid columns={['auto', 'auto', 'auto', 'auto']} gap={{ row: 'small' }}>
          <Box direction='row' justify='center'>
            <Box round='full' background='background-contrast' align='center'>
              <Button icon={<UserAdd size='large' />} onClick={() => setOpenAdd(true)} />
            </Box>
          </Box>
          <Box direction='row' justify='center'>
            <Box round='full' background='background-contrast' align='center'>
              <Button icon={<User size='large' />} onClick={() => setOpenName(true)} />
            </Box>
          </Box>
          <Box direction='row' justify='center'>
            <Box round='full' background='background-contrast' align='center'>
              <Button icon={<User size='large' />} onClick={() => setOpenName(true)} />
            </Box>
          </Box>
          <Box direction='row' justify='center'>
            <Box round='full' background='background-contrast' align='center'>
              <Button icon={<User size='large' />} onClick={() => setOpenName(true)} />
            </Box>
          </Box>
          <Box direction='row' justify='center'>
            <Box round='full' background='background-contrast' align='center'>
              <Button icon={<User size='large' />} onClick={() => setOpenName(true)} />
            </Box>
          </Box>
          <Box direction='row' justify='center'>
            <Box round='full' background='background-contrast' align='center'>
              <Button icon={<User size='large' />} onClick={() => setOpenName(true)} />
            </Box>
          </Box>
          <Box direction='row' justify='center'>
            <Box round='full' background='background-contrast' align='center'>
              <Button icon={<User size='large' />} onClick={() => setOpenName(true)} />
            </Box>
          </Box>
        </Grid>
        {openName && (
					<JuJiuLayer
						onClickOutside={() => setOpenName(false)}
					>
						<Heading
							level={3}
							alignSelf='center'
							margin='none'
						>
							编辑
						</Heading>
						<Box direction='row' justify='center'>
              <Box round='full' background='background-contrast' align='center'>
                <Button icon={<User size='large' />} />
              </Box>
            </Box>
            <TextInput value='小光' />
						<Button label='保存' primary />
						<Button label='删除人脸' color='status-critical'  />
					</JuJiuLayer>
				)}
        {openAdd && (
					<JuJiuLayer
						onClickOutside={() => setOpenAdd(false)}
					>
						<Heading
							level={3}
							alignSelf='center'
							margin='none'
						>
							选择录入方式
						</Heading>
            <ButtonLink style={{ textAlign: 'center' }} label='拍照录入人脸' href='/device/settings/ai/face/management/takephoto' />
						<Button label='从手机相册选择人脸照片' />
					</JuJiuLayer>
				)}
      </JuJiuMain>
    </Box>
  );
}