import React, { useEffect, useState } from 'react';

import { GithubIcon } from './Github';
import { HackerrankIcon } from './Hackerrank';
import { LinkedInIcon } from './LinkedIn';
import { StackOverflowIcon } from './StackOverflow';
import { TwitterIcon } from './TwitterIcon';
import { WhatsAppIcon } from './Whatsapp';

interface SocialIconProps {
  code: 'github' |
  'linkedin' |
  'stackoverflow' |
  'twitter' |
  'whatsapp' |
  'hackerrank';
  size: number;
  themeName: 'dark' | 'light',
  bgColor?: string;
  style?: any;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  code,
  themeName,
  bgColor,
  style,
  size = 48,
}) => {
  const [activeSvg, setActiveSvg] = useState<any>(null);

  useEffect(() => {
    if (code === 'github') setActiveSvg(<GithubIcon size={size} />);// setActiveSvg(themeName === 'dark' ? imgGithubLight : imgGithub)
    if (code === 'linkedin') setActiveSvg(<LinkedInIcon size={size} />);// setActiveSvg(imgLinkedIn)
    if (code === 'stackoverflow') setActiveSvg(<StackOverflowIcon size={size} />);// setActiveSvg(themeName === 'dark' ? imgStackOverflowLight : imgStackOverflow)
    if (code === 'twitter') setActiveSvg(<TwitterIcon size={size} />);
    if (code === 'whatsapp') setActiveSvg(<WhatsAppIcon size={size} />);
    if (code === 'hackerrank') setActiveSvg(<HackerrankIcon size={size} />);

  }, [code, size]);

  return <div style={{
    backgroundColor: bgColor || 'transparent',
    borderRadius: '50%',
    height: `calc(${size}px)`,
    overflow: 'hidden',
    padding: '0.1rem',
    transition: 'all 0.3s ease-in-out',
    width: `calc(${size}px)`,
    ...style
  }}>{activeSvg}</div>;
  // <img alt={code} src={activeSvg} width={size} height={size} />
};

export default SocialIcon;
