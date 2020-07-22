import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  color: rgb(51, 51, 51);
  font-size: 13px;
  font-family: "Open Sans", sans-serif;

  .container {
    max-width: 1024px;
    height: auto !important;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .section {
    margin-right: 64px;
    display: flex;
    flex-direction: column;
    align-items: normal;
    justify-content: normal;

    strong {
      font-size: 14px;
      margin-bottom: 6px;
      margin-top: 0px;
    }
    .logo{
        margin-top: 0;
    }
    .iconWhatsapp{
        width: 12px;
    }
  }

`;

export default FooterWrapper;