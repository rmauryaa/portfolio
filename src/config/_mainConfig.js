import avatar from '../assets/images/my-avatar.png'
import { mailOutline, phonePortraitOutline, calendarOutline, locationOutline, logoGithub, logoLinkedin, logoInstagram } from 'ionicons/icons';

export const personalConfig = {
  avatar: avatar,
  name: `Rahul Màurya`,
  designation: `Frontend Engineer`,
};

export const contactConfig = [
  {
    title: 'Email',
    detail: `rahulmaurya1036@gmail.com`,
    logo: mailOutline,
  }, 
  {
    title: 'Phone',
    detail: `+91 7011101778`,
    logo: phonePortraitOutline,
  }, 
  {
    title: 'Birthday',
    detail: `August 23, 1999`,
    logo: calendarOutline,
  }, 
  {
    title: 'Location',
    detail: `Delhi, India`,
    logo: locationOutline,
  }, 
];

export const socialConfig = [
  {
    name: 'github',
    url: `https://github.com/rmauryaa/`,
    logo: logoGithub,
  },
  {
    name: 'linkedin',
    url: `https://www.linkedin.com/in/rmaurya`,
    logo: logoLinkedin,
  },
  {
    name: 'instagram',
    url: `https://www.instagram.com/rmaurya_`,
    logo: logoInstagram,
  },
];
