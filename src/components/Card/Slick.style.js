import styled from "styled-components";
import Slider from "react-slick";

const SlickWrapper = styled(Slider)`
  .slick-next {
    right: 0;
  }
  .slick-prev {
    left: 0;
    z-index: 1;
  }
  img {
    object-fit: cover;

    width: 250px;
    height: 150px;
  }
`;

export default SlickWrapper;
