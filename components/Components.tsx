import { Text, Box, Card, CardBody, CardFooter, Menu, Image } from 'grommet';
import { Webcam, Radial, Configure } from 'grommet-icons';
import { useRouter } from 'next/navigation';

export function IconLInk({icon, label, url}) {
  const router = useRouter();
  return (
    <Card pad='small' gap='small' onClick={() => router.push(url)}>
      <CardBody align='center'>
        {icon}
      </CardBody>
      <CardFooter align='center'>
        <Text size='xsmall'>{label}</Text>
      </CardFooter>
    </Card>
  );
}

export function AppFooter() {
  return (
    <Box direction='row' background='active' justify='evenly'>
      <IconLInk icon={<Webcam />} label='设备' url='/' />
      <IconLInk icon={<Radial />} label='我的' url='/my' />
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