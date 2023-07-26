'use client';

import { Box, Button, Layer, Spinner } from 'grommet';
import { useState } from 'react';
import { ButtonBackToMain } from '../../components/Components';


export default function Page() {
  const [busy, setBusy] = useState(false);
  return (
    <>
      <Box fill gap='large' justify='center'>
        <Box direction='row' justify='center'>
          <Button label='繁忙' onClick={() => setBusy(true)} />
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
    </>
  );
}