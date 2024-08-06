"use client"
import { IconHeart } from '@tabler/icons-react';
import Link from "next/link"

import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './Coursecard.module.css';

const mockdata = {
  image:
    'https://blog.ipleaders.in/wp-content/uploads/2020/11/digitalmarketing-820x420.png',
  title: 'Digital Marketing',
  country: 'India',
  description:
    'Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services.',
};

export default function CourseCard() {
  const { image, title, description, country} = mockdata;

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={250} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="xxl" fw={500}>
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {country}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>
      <Group mt="xs">
        <Button radius="md"  style={{ flex: 1 , textDecoration:"none", }}>
        <Link href="/Learn/DigitalMarketing" style={{ flex: 1 , textDecoration:"none", color:"white"}}>
          Show Course
        </Link>
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}