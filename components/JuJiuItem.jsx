import { Box, Text, CardBody } from 'grommet';
import { FormNext } from 'grommet-icons';
import { JuJiuCard } from './Components';


export function JuJiuItem({ label, onClick, children }) {
  return (
    <JuJiuCard>
      <CardBody onClick={onClick} focusIndicator={false}>
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
    <JuJiuItem label={label} onClick={onClick}>
      <FormNext color='control' />
    </JuJiuItem>
  );
}
