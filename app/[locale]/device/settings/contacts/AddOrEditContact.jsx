'use client';

import { Text, Box, Select, DateInput, Button, Heading, TextInput } from 'grommet';
import { User, UserAdd } from 'grommet-icons';
import { useState } from 'react';
import { JuJiuLayer, ButtonLink } from '@/jujiuuicomponents/new/core_ui';
import { JuJiuItem, JuJiuItemButton } from '@/jujiuuicomponents/new/core_item';


export function AddOrEditContact({ isAdd }) {
  const [openAddFace, setOpenAddFace] = useState(false);
	const [openAddContact, setOpenAddContact] = useState(false);

  return (
    <>
      <Box align='center' gap='medium'>
        <Box background='background-contrast' align='center' justify='center' width='small' height='small'>
          <Button
            icon={isAdd ? <UserAdd size='large' /> : <User size='large' />}
            onClick={() => setOpenAddFace(true)}
          />
        </Box>
        <Text color='text-xweak'>
          {isAdd ? '上传照片后，小光就能认识TA，并跟TA打招呼了。' : '点击修改头像'}
        </Text>
      </Box>
      <JuJiuItem label='关系'>
        <Box width='small'>
          <Select
            options={['爸爸', '妈妈', '爷爷', '奶奶', '外公', '外婆', '哥哥', '姐姐', '弟弟', '妹妹', ]}
          />
        </Box>
      </JuJiuItem>
      <JuJiuItemButton
        label='自定义关系'
        onClick={() => setOpenAddContact(true)}
      />
      <JuJiuItem label='出生日期'>
        <Box width='small'>
          <DateInput
            format="yyyy/mm/dd"
            value={(new Date()).toISOString()}
            onChange={({ value }) => {}}
          />
        </Box>
      </JuJiuItem>
      {openAddContact && (
        <JuJiuLayer
          onClickOutside={() => setOpenAddContact(false)}
        >
          <Heading
            level={3}
            alignSelf='center'
            margin='none'
          >
            自定义关系
          </Heading>
          <TextInput value='堂哥' />
          <Button label='保存' primary />
        </JuJiuLayer>
      )}
      {openAddFace && (
        <JuJiuLayer
          onClickOutside={() => setOpenAddFace(false)}
        >
          <Heading
            level={3}
            alignSelf='center'
            margin='none'
          >
            选择录入方式
          </Heading>
          <ButtonLink label='拍照录入人脸' href='/device/settings/ai/face/management/takephoto' />
          <Button label='从手机相册选择人脸照片' />
        </JuJiuLayer>
      )}
    </>
  );
}