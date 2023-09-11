'use client';

import { Text, Box, Nav, Grid } from 'grommet';
import { User, UserAdd } from 'grommet-icons';
import { IconBack, JuJiuMain, ButtonLink } from '@/jujiuuicomponents/new/core_ui';
import { JuJiuTagAccountNotBinding } from '@/jujiuuicomponents/JuJiuTags';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>通讯录 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <Grid columns={['auto', 'auto', 'auto', 'auto']} gap={{ row: 'small' }}>
          <Box direction='row' justify='center'>
            <Box align='center'>
              <Box round='full' background='background-contrast' align='center'>
                <ButtonLink icon={<UserAdd size='large' />} href='/device/settings/contacts/add' />
              </Box>
              <Text>添加家人</Text>
            </Box>
          </Box>
          <Box direction='row' justify='center'>
            <Box align='center'>
              <Box round='full' background='background-contrast' align='center'>
                <ButtonLink icon={<User size='large' />} href='/device/settings/contacts/edit' />
              </Box>
              <Text>爸爸</Text>
            </Box>
          </Box>
          <Box direction='row' justify='center'>
            <Box align='center'>
              <Box round='full' background='background-contrast' align='center'>
                <ButtonLink icon={<User size='large' />} href='/device/settings/contacts/edit' />
              </Box>
              <Text>妈妈</Text>
            </Box>
          </Box>
          <Box direction='row' justify='center'>
            <Box align='center'>
              <Box round='full' background='background-contrast' align='center'>
                <ButtonLink icon={<User size='large' />} href='/device/settings/contacts/edit' />
              </Box>
              <Text>哥哥</Text>
            </Box>
          </Box>
          <Box direction='row' justify='center'>
            <Box align='center'>
              <Box round='full' background='background-contrast' align='center'>
                <ButtonLink icon={<User size='large' />} href='/device/settings/contacts/edit' />
              </Box>
              <Text>姐姐</Text>
            </Box>
          </Box>
          <Box direction='row' justify='center'>
            <Box align='center'>
              <Box round='full' background='background-contrast' align='center'>
                <ButtonLink icon={<User size='large' />} href='/device/settings/contacts/edit?noAccount=true' badge={<JuJiuTagAccountNotBinding />} />
              </Box>
              <Text>弟弟</Text>
            </Box>
          </Box>
          <Box direction='row' justify='center'>
            <Box align='center'>
              <Box round='full' background='background-contrast' align='center'>
                <ButtonLink icon={<User size='large' />} href='/device/settings/contacts/edit?noAccount=true' badge={<JuJiuTagAccountNotBinding />} />
              </Box>
              <Text>妹妹</Text>
            </Box>
          </Box>
        </Grid>
      </JuJiuMain>
    </Box>
  );
}