import Button from '../button';
import Heading from '../heading';
import Image from '../image'
import Text from '../text';

import './index.css'

const ImageCard = ({image, heading, text, link}) => {
  return (
    <div className="imageCard">
      <Image src={image} alt={heading} className="imageCard__image"/>
      <div className='imageCard__content'>
        <Heading level={3}>{heading}</Heading>
        <Text className="imageCard__text"> {text} </Text>
        <Button type="link" href={link}>Read More</Button>
      </div>
    </div>
  )
};

export default ImageCard;
