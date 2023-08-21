'use client';

import { Box, Button, Layer, Spinner, Text } from 'grommet';
import { StatusGood, Alert, FormClose } from 'grommet-icons';
import { useState } from 'react';
import { ButtonBackToMain } from '@/jujiuuicomponents/Components';


export default function Page() {
  const [busy, setBusy] = useState(false);
  const [notification, setNotification] = useState(false);
  const [fail, setFail] = useState(false);
  return (
    <>
      <Box fill gap='large' justify='center'>
        <Box direction='row' justify='center'>
          <Button label='繁忙' onClick={() => setBusy(true)} />
        </Box>
        <Box direction='row' justify='center'>
          <Button label='成功通知' onClick={() => setNotification(true)} />
        </Box>
        <Box direction='row' justify='center'>
          <Button label='失败通知' onClick={() => setFail(true)} />
        </Box>
        <Box direction='row' justify='center'>
          <ButtonBackToMain />
        </Box>
      </Box>
      {busy && (
        <Layer
          background='transparent'          
          position='center'
          responsive={false}
          onEsc={() => setBusy(false)}
          onClickOutside={() => setBusy(false)}
        >
          <Box pad='large' round='medium' background='active'>
            <Spinner size='large' />
          </Box>
        </Layer>
      )}
      {notification && (
        <Layer
          position='center'
          margin={{ vertical: 'medium' }}
          responsive={false}
          plain
        >
          <Box
            align='center'
            direction='row'
            gap='small'
            justify='between'
            round='medium'
            pad={{ vertical: 'xsmall', horizontal: 'small' }}
            background={{ color: 'status-ok', opacity: 'strong' }}
          >
            <Box align='center' direction='row' gap='xsmall'>
              <StatusGood />
              <Text>
                设置成功。
              </Text>
            </Box>
            <Button icon={<FormClose />} onClick={() => setNotification(false)} plain />
          </Box>
        </Layer>
      )}
      {fail && (
        <Layer
          position='center'
          margin={{ vertical: 'medium' }}
          responsive={false}
          plain
        >
          <Box
            align='center'
            direction='row'
            gap='small'
            justify='between'
            round='medium'
            pad={{ vertical: 'xsmall', horizontal: 'small' }}
            background={{ color: 'status-error', opacity: 'strong' }}
          >
            <Box align='center' direction='row' gap='xsmall'>
              <Alert />
              <Text>
                设置失败。
              </Text>
            </Box>
            <Button icon={<FormClose />} onClick={() => setFail(false)} plain />
          </Box>
        </Layer>
      )}
    </>
  );
}