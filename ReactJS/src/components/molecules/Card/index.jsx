import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
} from "./styles";

/**
 * Generic reusable Card component.
 * Props:
 * - title: string
 * - subtitle: string
 * - actions: ReactNode (buttons, etc.)
 * - center: boolean (centers card horizontally)
 * - maxWidth: CSS size (default 37.5em)
 * - padding: CSS (default responsive padding)
 * - backgroundColor: token key or CSS color (default #564865)
 * - elevation: boolean (adds shadow)
 */
export function GenericCard({
  title,
  subtitle,
  actions,
  children,
  center = true,
  maxWidth,
  padding,
  backgroundColor,
  elevation = true,
  ...rest
}) {
  return (
    <Card
      center={center}
      maxWidth={maxWidth}
      padding={padding}
      backgroundColor={backgroundColor}
      elevation={elevation}
      {...rest}
    >
      {(title || subtitle) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
      {actions && <CardFooter>{actions}</CardFooter>}
    </Card>
  );
}

export default GenericCard;
