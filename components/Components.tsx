import { Text, Box, Card, CardBody, CardFooter, Menu, Image } from 'grommet';
import { Device, User, Configure } from 'grommet-icons';
import { useRouter } from 'next/navigation';

export function AppFooter() {
  const router = useRouter();

  return (
    <Box direction='row' background='active' justify='evenly'>
      <Card pad='small' gap='small' onClick={() => router.push('/')}>
        <CardBody align='center'>
          <Device />
        </CardBody>
        <CardFooter align='center'>
          <Text size='xsmall'>设备</Text>
        </CardFooter>
      </Card>
      <Card pad='small' gap='small' onClick={() => router.push('/my')}>
        <CardBody align='center'>
          <User />
        </CardBody>
        <CardFooter align='center'>
          <Text size='xsmall'>我的</Text>
        </CardFooter>
      </Card>
    </Box>
  );
}

export function IpcCard({ label, imgurl }) {
  return (
    <Card>
      <CardBody>
        <Image src={imgurl} />
      </CardBody>
      <CardFooter margin='small' align='center' justify='between'>
        <Text>{label}</Text>
        <Menu dropProps={{ align: { top: 'bottom', right: 'right' } }} icon={<Configure />} items={[
          { label: '设备分享'},
          { label: '设置'},
        ]} />
      </CardFooter>
    </Card>
  );
}