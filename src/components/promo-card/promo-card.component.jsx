import React from "react"
import * as S from "./promo-card.styles.jsx"
import PropTypes from "prop-types"

const PromoCard = ({
  title,
  description,
  image,
  shopLinkText,
  shopLinkUrl,
  ...others
}) => {
  return (
    <S.Wrapper {...others}>
      <S.Image img={image}></S.Image>
      <S.Title className="title">{title}</S.Title>
      <S.Description className="description">{description}</S.Description>
      <S.Link className="link" href={shopLinkUrl}>
        {shopLinkText}
      </S.Link>
    </S.Wrapper>
  )
}

PromoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  shopLink: PropTypes.string,
}
export default PromoCard
