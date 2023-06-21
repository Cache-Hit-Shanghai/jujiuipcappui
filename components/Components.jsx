import { Text, Box, Card, CardBody, CardFooter, Menu, Image, Button, List, Drop } from 'grommet';
import { Webcam, Radial, Configure, FormPrevious, FormNext, CaretUpFill, CaretDownFill, CaretLeftFill, CaretRightFill } from 'grommet-icons';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export function PanControl() {
  const targetRef = useRef();
  const [, setShowDrop] = useState(false);
  useEffect(() => setShowDrop(true) , []);
  return (
    <Box flex={{ grow: 1, shrink: 1 }} align='center' justify='center'>
      <Box background='active' round='full' width='small' height='small' ref={targetRef}></Box>
      {
        targetRef.current && (
          <>
            <Drop align={{ top: 'top' }} target={targetRef.current} stretch={false} plain>
              <CaretUpFill />
            </Drop>
            <Drop align={{ bottom: 'bottom' }} target={targetRef.current} stretch={false} plain>
              <CaretDownFill />
            </Drop>
            <Drop align={{ left: 'left' }} target={targetRef.current} stretch={false} plain>
              <CaretLeftFill />
            </Drop>
            <Drop align={{ right: 'right' }} target={targetRef.current} stretch={false} plain>
              <CaretRightFill />
            </Drop>
          </>
        )
      }
    </Box>
  );
}

export function InfoGroup({ data }) {
  return (
    <Card background='active' margin={{ horizontal: 'small' }} flex={false}>
      <CardBody>
        <List data={data} border={false} primaryKey='key' secondaryKey='value' />
      </CardBody>
    </Card>
  );
}

export function LinkGroup({ data }) {
  const router = useRouter();
  return (
    <Card background='active' margin={{ horizontal: 'small' }} flex={false}>
      <CardBody>
        <List data={data} border={false}>
          {
            (datum) => (
              <Button icon={<FormNext />} label={datum.label} reverse plain justify='between'
              onClick={() => router.push(datum.url)} />
            )
          }
        </List>
      </CardBody>
    </Card>
  );
}

export function IconBack() {
  const router = useRouter();
  return (
    <Button icon={<FormPrevious />} onClick={() => router.back()} />
  );
}

export function IconLInk({icon, label, url}) {
  const router = useRouter();
  return (
    <Card pad='small' onClick={() => router.push(url)}>
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
    <Box direction='row' background='active' justify='evenly' flex={false}>
      <IconLInk icon={<Webcam />} label='设备' url='/' />
      <IconLInk icon={<Radial />} label='我的' url='/my' />
    </Box>
  );
}

export function IpcCard({ label, imgurl }) {
  const router = useRouter();
  return (
    <Card>
      <CardBody onClick={() => router.push('/device/streaming')}>
        <Image src={imgurl} />
      </CardBody>
      <CardFooter margin='small' align='center' justify='between'>
        <Text>{label}</Text>
        <Menu dropProps={{ align: { top: 'bottom', right: 'right' } }} icon={<Configure />} items={[
          { label: '设备分享' },
          { label: '设置', onClick: () => router.push('/device/settings') },
        ]} />
      </CardFooter>
    </Card>
  );
}