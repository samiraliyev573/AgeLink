/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import Avatar1 from 'assets/testimonial/avatar1.png';
import Avatar2 from 'assets/testimonial/avatar2.png';
import Avatar3 from 'assets/testimonial/avatar3.png';
import Avatar4 from 'assets/testimonial/avatar4.png';

const data = [
  {
    id: 1,
    title: 'Excellent Community',
    description:
      'Agelink as an initiative has done so much more than allow access to generational wisdom. It has allowed me to meet with so many beautiful people. Connecting with seniors has been very insightful, and it is always rewarding to see how much they cherish spending time with you. I feel much more rooted in the community and learn so much with every interaction. I am grateful to Agelink for providing opportunities to have these meaningful conversations, and I hope more and more people can benefit from its values.',
    
    name: 'Joy Shukla',
    designation: '4th year Computer Science student at UBC Okanagan',
    review: 5,
  },
  {
    id: 2,
    title: 'University Experience',
    description:
      'Age-Link greatly nurtures my university experience at UBCO. Its events brought such a fresh atmosphere for both students and elders. It was a different way for students to enrich their community involvement and also a monthly gathering that the elder community would look forward to with excitement. From the organizers, to guests and to the attendees; everyone had a smile from ear to ear. Always ready to engage in any and every type of conversation. My first Age-Link event was in 2015 and my last in 2020. 5 years where I met some incredible people and made great memories. 5 years I would not change for anything. Thanks Age-Link UBCO',
    name: 'Dennis Genaro Luna',
    designation: 'UBC Okanagan Alumnus',
    review: 5,
  },
  {
    id: 3,
    title: 'Amazing Team and Organizers',
    description:
      'My family and I really enjoyed the Age-Link events. We are so glad to be a part of an inclusive community and our sincere thanks to the organizers and volunteers. It is important to understand the importance of sharing our laughter, wisdom, and cherished moments with others regardless of their age, gender, and race. Thank you so much and look forward to joining the future events in the post-pandemic world.',
    avatar: Avatar3,
    name: 'Irene Chen and family',
    designation: 'Age-Link member ',
    review: 5,
  },
  
  
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom:0,
  arrows:false,
  autoPlaySpeed:3000,
  centerMode:false,
  className:"",
  containerClass:"carousel-container",
  customButtonGroup:<ButtonGroup />,
  dotListClass:"",
  draggable: true,
  focusOnSelect:false,
  infinite:true,
  itemClass:"",
  keyBoardControl: true,
  minimumTouchDrag:80,
  renderButtonGroupOutside: true,
  renderDotsOutside:false,
  responsive:responsive,
  showDots:false,
  sliderClass:"",
  slidesToSlide:1,
}

export default function TestimonialCard() {
  return (
   <section id="testimonial" sx={{variant: 'section.testimonoal'}}>
     <Container css={{textAlign: 'center'}}>
       <SectionHeader 
          slogan="Testimonial"
          title="Meet Client Satisfaction"
       />

     </Container>
     <Box sx= {styles.carouselWrapper}>
        <Carousel {...carouselParams}>
          {data.map((item, i)=> (
            <Box sx={styles.reviewCard} key={i}>
                <Rating  rating ={item.review}/>
                <Heading as ="h3" sx={styles.title}>
                  {item.title}
                </Heading>
                <Text sx={styles.description}> {item.description}</Text>
                <div className="card-footer">
                  
                  <div className="reviewer-info">
                    <Heading as ="h4" sx={styles.heading}>
                      {item.name}
                    </Heading>
                    <Text sx={styles.designation}> {item.designation}</Text>

                  </div>
                </div>
            </Box>
          ))}

        </Carousel>
     </Box>

   </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
