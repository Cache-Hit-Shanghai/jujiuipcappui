import { Tag, Box, Text } from 'grommet';
import { CloudUpload, StatusGoodSmall, ShareRounded } from 'grommet-icons';
import { Share } from '@styled-icons/boxicons-regular/Share';


function JuJiuTag({ icon, label, background }) {
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

export function JuJiuTagSharing() {
  return (
    <JuJiuTag
      background='graph-0'
      icon={<ShareRounded size='small' />}
      label='分享中'
    />
  );
}

export function JuJiuTagFromShared() {
  return (
    <JuJiuTag
      background='graph-3'
      icon={<Share size='12' />}
      label='来自分享'
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