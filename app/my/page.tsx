'use client';

import { Grommet, Text, Box, Nav, Menu, Button, Accordion, AccordionPanel, Card, CardBody, CardFooter, Image, Footer, Main } from 'grommet';
import { AddCircle, Chat, Configure, Device, User } from 'grommet-icons';
import { AppFooter } from '../../components/Components';

export default function Page() {
  return (<Grommet full>
    <Box fill>
      <Box flex={{ grow: 1, shrink: 1 }} overflow='auto'>my page</Box>
      <AppFooter />
    </Box>
  </Grommet>);
}
