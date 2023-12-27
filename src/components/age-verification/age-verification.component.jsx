import React, { useState, useEffect } from "react"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Button from "@mui/material/Button"
import * as S from "./age-verification.styles"

function AgeVerification() {
  const [openPopup, setOpenPopup] = useState(false)
  const [showUnderageMessage, setShowUnderageMessage] = useState(false)

  useEffect(() => {
    // Check if the user is visiting for the first time
    const isFirstVisit = !localStorage.getItem("visited")
    if (isFirstVisit) {
      setOpenPopup(true)
      localStorage.setItem("visited", "true")
    }
  }, [])

  const handleAgree = () => {
    // User confirms they are of age
    setOpenPopup(false)
    setShowUnderageMessage(false)
  }

  const handleDisagree = () => {
    // User is not of age
    setShowUnderageMessage(true)
  }

  return (
    <div>
      <S.CustomDialog
        open={openPopup}
        onClose={() => {}}
        aria-labelledby="age-verification-title"
        aria-describedby="age-verification-description"
      >
        <DialogTitle id="age-verification-title">Age Verification</DialogTitle>
        <DialogContent>
          <DialogContentText id="age-verification-description">
            Are you 21 years old or older?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree} color="secondary">
            No
          </Button>
          <Button onClick={handleAgree} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </S.CustomDialog>

      {showUnderageMessage && (
        <p>You are not old enough yet. Please confirm your age to proceed.</p>
      )}
    </div>
  )
}

export default AgeVerification
