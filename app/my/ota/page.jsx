'use client';

import { Text, Box, Nav, List, Button } from 'grommet';
import { Webcam } from 'grommet-icons';
import { IconBack, JuJiuMain } from '../../../components/Components';


const data = [
  { device: '客厅', size: '150MB', from: '1.0.0', to: '1.1.0' },
  { device: '办3', size: '100MB', from: '0.1.0', to: '1.1.0' },
  { device: '办5', size: '50MB', from: '1.0.0', to: '2.1.0' },
];

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>固件升级</Text>
      </Nav>
      <JuJiuMain>
        <List data={data}>
          { (datum) => (
            <Box direction='row' gap='small' align='center' justify='between'>
              <Box direction='row' gap='small' align='center'>
                <Webcam size='large' />
                <Box>
                  <Text>{datum.device}</Text>
                  <Text size='small' color='text-weak'>{datum.size}</Text>
                  <Text size='small' color='text-weak'>{datum.from} ~ {datum.to}</Text>
                </Box>
              </Box>
              <Box>
                <Button primary label='现在升级' />
              </Box>
            </Box>
          ) }
        </List>
      </JuJiuMain>
    </Box>
  );
}