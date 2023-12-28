import React, { useState, useEffect } from "react"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import * as S from "./age-verification.styles"
import { graphql, useStaticQuery } from "gatsby"

function AgeVerification() {
  const [openPopup, setOpenPopup] = useState(false)
  const [showUnderageMessage, setShowUnderageMessage] = useState(false)

  useEffect(() => {
    // Check if the user is visiting for the first time
    const isAgeConfirmed = localStorage.getItem("ageConfirmed")
    if (!isAgeConfirmed) {
      setOpenPopup(true)
    }
  }, [])

  const handleAgree = () => {
    // User confirms they are of age
    localStorage.setItem("ageConfirmed", true)
    setOpenPopup(false)
    setShowUnderageMessage(false)
  }

  const handleDisagree = () => {
    // User is not of age
    setShowUnderageMessage(true)
  }
  const staticQuery = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "footer-palm-logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <div>
      <S.CustomDialog
        open={openPopup}
        onClose={() => {}}
        aria-labelledby="age-verification-title"
        aria-describedby="age-verification-description"
      >
        <S.LogoBlack />
        <DialogContent>
          <S.CustomDialogContentText id="age-verification-description">
            Are you 21 years old or older?
          </S.CustomDialogContentText>
        </DialogContent>
        <S.CustomDialogActions>
          <S.CustomButton onClick={handleDisagree} color="secondary">
            No
          </S.CustomButton>
          <S.CustomButton onClick={handleAgree} color="primary">
            Yes
          </S.CustomButton>
        </S.CustomDialogActions>
        {showUnderageMessage && (
          <Typography color="red">You are not old enough yet.</Typography>
        )}
      </S.CustomDialog>
    </div>
  )
}

export default AgeVerification
