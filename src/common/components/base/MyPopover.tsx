import { Button, ButtonProps, Popover } from '@mui/material'
import { ReactNode, useState } from 'react'

export interface MyPopoverProps extends ButtonProps {
  buttonComponent?: ReactNode
  popoverChildren?: ReactNode
}

export function MyPopover({ popoverChildren, ...props }: MyPopoverProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setAnchorEl(e.currentTarget)
  }

  return (
    <>
      <Button {...props} onClick={handleOpen}></Button>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        onClick={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {popoverChildren}
      </Popover>
    </>
  )
}
