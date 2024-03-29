import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Hi, I am DevGhandy<br />
       Welcome To <br />
       My Personal Portfolio
     </SectionTitle>
       I am a Front-end Developer.
     <SectionText>
     </SectionText>
     <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;