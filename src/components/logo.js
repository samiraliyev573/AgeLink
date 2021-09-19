/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link path="/" sx={{ 
      width: 80,
      height: 50,
      variant: 'links.logo', 
      display: 'flex', 
      cursor: 'pointer', 
      mr: 15,}} {...rest}
      >
        <Image src={src} alt="Age Link landing page logo" />
      </Link>
  );
}
