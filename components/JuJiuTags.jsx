import { Tag, Box, Text } from 'grommet';
import { CloudUpload, StatusGoodSmall } from 'grommet-icons';

export function JuJiuTag({ icon, label, background }) {
  return (
    <Tag
      border={false}
      fill={false}
      background={background}
      size='xsmall'
      value={
        <Box direction='row' gap='xsmall' align='center'>
          {icon}
          <Text size='xsmall'>{label}</Text>
        </Box>
      }
    />
  );
}

export function JuJiuTagCloudStorageExpired() {
  return (
    <JuJiuTag
      background='status-error'
      icon={<CloudUpload size='small' />}
      label='云存储过期'
    />
  );
}

export function JuJiuTagCloudStorageExpiring() {
  return (
    <JuJiuTag
      background='status-warning'
      icon={<CloudUpload size='small' />}
      label='云存储即将过期'
    />
  );
}

export function JuJiuTagDeviceOnline() {
  return (
    <JuJiuTag
      background='light-6'
      icon={<StatusGoodSmall color='graph-1' size='small' />}
      label='工作中'
    />
  );
}

export function JuJiuTagDeviceOffline() {
  return (
    <JuJiuTag
      background='light-6'
      icon={<StatusGoodSmall size='small' />}
      label='离线'
    />
  );
}