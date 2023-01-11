import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"
import { useState } from 'react'

export const MuiDialog = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
          <Button>Open Dialog</Button>
          <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description' >
              <DialogTitle id='dialog-title'>Submit the Test ?</DialogTitle>
              <DialogContent>
                <DialogContentText id='dialog-description'>Are you sure you want to submit the test ? You will not be able to edit after submitting.</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </DialogActions>
          </Dialog>
        </>
        
    )
}