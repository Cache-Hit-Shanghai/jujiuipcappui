import { Button, Box, Text, CardBody } from 'grommet';
import { FormNext, StatusGoodSmall, ShareRounded } from 'grommet-icons';
import { Share } from '@styled-icons/boxicons-regular/Share';
import { JuJiuCard } from './Components';


function JuJiuItem({ label, children }) {
  return (
    <JuJiuCard>
      <CardBody>
        <Box
          direction='row'
          align='center'
          justify='between'
        >
          <Text>{label}</Text>
          {children}
        </Box>
      </CardBody>
    </JuJiuCard>
  );
}

export function JuJiuItemText({ label, value, icon }) {
  return (
    <JuJiuItem label={label}>
      <Box direction='row'>
        {icon}
        <Text size='small' color='text-xweak'>{value}</Text>
      </Box>
    </JuJiuItem>
  );
}

export function JuJiuItemTextArray({ label, value }) {
  return (
    <JuJiuItem label={label}>
      <Box align='end'>
        { value.map(e => <Text size='small' color='text-xweak'>{e}</Text>) }
      </Box>
    </JuJiuItem>
  );
}

export function JuJiuItemButton({ label, onClick }) {
  return (
    <JuJiuItem label={label}>
      <Button pad='none' onClick={onClick} icon={<FormNext color='control' />} />
    </JuJiuItem>
  );
}

export function JuJiuItemBox({ label, value }) {
  return (
    <JuJiuItem label={label}>
      <Box direction='row'>
        { value }
      </Box>
    </JuJiuItem>
  );
}