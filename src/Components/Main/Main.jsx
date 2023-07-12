import React from 'react';
import './Main.css';
import iconone from '../../assets/Images/icon1.png';
import icontwo from '../../assets/Images/icon2.png';
import iconthree from '../../assets/Images/icon3.png';
import iconfour from '../../assets/Images/icon4.png';
import iconfive from '../../assets/Images/icon5.png';
import iconsix from '../../assets/Images/icon6.png';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Main() {
  const main = [
    {
      id: 0,
      icon: iconone,
      title: 'Using Abstract',
      description:
        ' Abstract lets you manage, version, and document your designs in one place',
      Link: 'Learn More',
    },
    {
      id: 1,
      icon: icontwo,
      title: 'Manage your account',
      description:
        ' Configure your account settings, such as your email, profile details, and password.',
      Link: 'Learn More',
    },
    {
      id: 2,
      icon: iconthree,
      title: 'Manage organizations, teams, and projects',
      description:
        'Use Abstract organizations, teams, and projects to organize your people and your work.',
      Link: 'Learn More',
    },
    {
      id: 3,
      icon: iconfour,
      title: 'Manage Billing',
      description: 'Change subscriptions and payment details.',
      Link: 'Learn More',
    },
    {
      id: 4,
      icon: iconfive,
      title: 'Authenticate to Abstract',
      description:
        'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
      Link: 'Learn More',
    },
    {
      id: 5,
      icon: iconsix,
      title: 'Abstract support',
      description: 'Get in touch with a human.',
      Link: 'Learn More',
    },
  ];
  return (
    <>
      <div className="grid-container">
        {main.map((item) => {
          return (
            <div key={item.id} className="grid-item">
              <div className="icon">
                <img src={item.icon} className="iconimg" />
              </div>
              <div className="description">
                <section className="title">
                  <h2>{item.title}</h2>
                </section>
                <section className="desc">
                  <p>{item.description}</p>
                </section>
                <section className="link">
                  <a href=""> {item.Link}</a>
                  <AiOutlineArrowRight className="arrow" />
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
