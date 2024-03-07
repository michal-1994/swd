import Button from "../../components/button";
import Heading from "../../components/heading";
// import Rating from "../../components/rating";
import Text from "../../components/text";

import "./index.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className='container'>
        <Heading color="white" level={1} className="heading">
          CLOUDBUDGET
        </Heading>
        <Text size='2.4rem' color="white" className="text">
          Cloud budget management for everyone. Only €69.95 a Month After a 7 Day Trial of <br/>Up to €4.99
        </Text>
        {/* <Rating /> */}
        <Button type="link" style="white" href="#">SIGN UP</Button>
      </div>
    </div>
  )
};

export default Intro;
