'use client';

import { Text, Box, Button, Nav, Layer, Heading, TextInput } from 'grommet';
import { useState } from 'react';
import { IconBack, ButtonGroup, JuJiuMain } from '../../../components/Components';


export default function Page() {
  const [ openGroupAdd, setOpenGroupAdd ] = useState(false);
  const [ openGroupEdit, setOpenGroupEdit ] = useState(false);

  const editgoups = [
    { label: '默认分组', disabled: true, onClick: () => setOpenGroupEdit(true) },
    { label: '办公室', onClick: () => setOpenGroupEdit(true) },
  ];
  const addgroups = [
    { label: '添加分组', onClick: () => setOpenGroupAdd(true) },
  ];

  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>设备分组</Text>
      </Nav>
      <JuJiuMain>
        <Box flex={false} gap='small'>
          <ButtonGroup data={editgoups} />
          <ButtonGroup data={addgroups} />
        </Box>
        {openGroupAdd && (
          <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenGroupAdd(false)} responsive={false}>
            <Box fill border pad='medium' gap='medium'>
              <Heading level={3} alignSelf='center' margin='none'>添加分组</Heading>
              <TextInput />
              <Button label='保存' primary onClick={() => setOpenGroupAdd(false)} />
              
            </Box>
          </Layer>
        )}
        {openGroupEdit && (
          <Layer position='bottom' full='horizontal' onClickOutside={() => setOpenGroupEdit(false)} responsive={false}>
            <Box fill border pad='medium' gap='medium'>
              <Heading level={3} alignSelf='center' margin='none'>分组设置</Heading>
              <Box gap='small'>
                <Text>分组名：</Text>
                <Box direction='row' gap='small' align='center'>
                  <Box flex={{ grow: 1, shrink: 1 }}>
                    <TextInput />
                  </Box>
                  <Box flex={false}>
                    <Button label='重命名' />
                  </Box>
                </Box>
              </Box>
              <Button color='status-critical' label='删除分组' />
            </Box>
          </Layer>
        )}
      </JuJiuMain>
    </Box>
  );
}