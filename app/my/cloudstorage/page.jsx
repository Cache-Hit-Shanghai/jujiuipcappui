'use client';

import { Text, Box, Heading, Nav, Card, CardHeader, CardBody, CardFooter, Avatar, Tag } from 'grommet';
import { Webcam } from 'grommet-icons';
import { ButtonLink, IconBack, JuJiuMain } from '@/jujiuuicomponents/new/core_ui';


export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' align='center'>
        <IconBack />
      </Nav>
      <JuJiuMain gap='medium'>
        <Box>
          <Heading level={2} margin='none'>云存储</Heading>
          <Text size='small' color='text-xweak'>不会丢失的录像文件存储。</Text>
        </Box>
        <Card flex={false}>
          <CardHeader pad='small' background='background-front'>
            <Text size='large' weight='bold'>安全、可靠的云存储</Text>
          </CardHeader>
          <CardBody pad='small' background='background-contrast' align='center'>
            <Text textAlign='justify'>云存储可以将您的重要数据保存在云端。它可以避免数据的丢失、泄露以及人为破坏。您可以在世界上任何一个角落访问云存储上的文件。它具有金融级安全，能尽可能的保护您的隐私。即使设备被破坏而导致无法使用，已保存在云存储中的文件仍然安然无恙。</Text>
          </CardBody>
        </Card>
        <Card pad='medium' gap='medium' background='background-contrast' flex={false}>
          <CardBody>
            <Box direction='row' justify='between' align='center'>
              <Box align='center' gap='small'>
                <Avatar background='background-front'><Webcam /></Avatar>
                <Text>办3</Text>
              </Box>
              <Box gap='medium'>
                <Box gap='small' direction='row'>
                  <Tag size='small' background='graph-4' value='7天循环存储' />
                  <Tag size='small' background='graph-4' value='24小时录像' />
                </Box>
                <Box align='end'>
                  <Text color='status-ok'>正常使用中</Text>
                  <Text size='small' color='text-xweak'>将于2023.8.24日到期</Text>
                </Box>
              </Box>
            </Box>
          </CardBody>
          <CardFooter justify='center'>
            <ButtonLink primary href='/my/cloudstorage/settings' label='设置' />
            <ButtonLink primary href='/my/cloudstorage/pay' label='续订' />
          </CardFooter>
        </Card>
      </JuJiuMain>
    </Box>
  );
}