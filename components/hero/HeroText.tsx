'use client'
import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './HeroText.module.css';
import Link from "next/link"
export default function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          {' '}
          <Text component="span" className={classes.highlight} inherit>
            Welcome To <span style={{color:"green"}}>Etecknowledgy</span>
          </Text>{' '}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            
          </Text>
        </Container>

        <div className={classes.controls}>
          
          <Button className={classes.control} size="lg">
            <a style={{textDecoration:"none", color:"white"}}href="/Learn"> Preview </a>
          </Button>
        </div>
      </div>
    </Container>
  );
}