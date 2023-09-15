'use client';

import { Text, Box, Nav, CheckBox, RangeInput, Heading } from 'grommet';
import { useState } from 'react';
import { IconBack, JuJiuMain } from '@/jujiuuicomponents/core/core_ui';
import { JuJiuItem, JuJiuItemButton } from '@/jujiuuicomponents/core/core_item';
import { JuJiuLayer } from '@/jujiuuicomponents/core/core_ui';


export default function Page() {
	const [volumn, setVolumn] = useState(50);
	const [openVolumn, setOpenVolumn] = useState(false);

  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
        <Text>声音设置 - 办3</Text>
      </Nav>
      <JuJiuMain>
        <JuJiuItem label='设备语音提示'>
					<CheckBox toggle />
				</JuJiuItem>
				<JuJiuItemButton label='设备音量' value={volumn} onClick={() => setOpenVolumn(!openVolumn)} />
        {openVolumn && (
					<JuJiuLayer
						onClickOutside={() => setOpenVolumn(false)}
					>
						<Heading
							level={3}
							alignSelf='center'
							margin='none'
						>
							{`设备音量(${volumn})`}
						</Heading>
						<Box pad='large'>
              <RangeInput value={volumn} onChange={e => setVolumn(e.target.value)} />
            </Box>
					</JuJiuLayer>
				)}
      </JuJiuMain>
    </Box>
  );
}