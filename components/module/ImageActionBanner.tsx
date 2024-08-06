import { Card, Overlay, Button, Text } from "@mantine/core";
import classes from "./ImageActionBanner.module.css";
import Link from "next/link";

export default function ImageActionBanner({
  title,
  description,
  buttonText,
  onButtonClick,
}) {
  return (
    <Card radius="md" style={{margin:"3rem"}} className={classes.card}>
      <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

      <div style={{ width: "50%" }} className={classes.content}>
        <Text size="lg" fw={700} className={classes.title}>
          {title}
        </Text>

        <Text size="sm" className={classes.description}>
          {description}
        </Text>
        <Button className={classes.action}
            variant="white"
            color="dark"
            size="xs">
          <Link
            variant
            style={{textDecoration:"none",color:"black"}}
            href={onButtonClick}
          >
            {buttonText}
          </Link>
        </Button>
      </div>
    </Card>
  );
}
