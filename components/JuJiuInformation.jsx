import { Box, Text } from 'grommet';
import { CircleInformation } from 'grommet-icons';

export function JuJiuInformation({ label, size }) {
  return (
    <Box direction='row' gap='small' align='center' flex={false} margin={{ horizontal: 'small' }}>
      <CircleInformation size={size} color='accent-4' />
      <Text size='small' color='accent-4' textAlign='justify'>{label}</Text>
    </Box>
  );
}