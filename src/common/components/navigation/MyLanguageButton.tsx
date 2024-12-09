import { MyPopover } from '@components/base/MyPopover'
import { Translations } from '@config'
import TranslateIcon from '@mui/icons-material/Translate'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { selectTranslation, setTranslation } from '@store/slice/coreSlice'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

export function MyLanguageButton() {
  const { i18n } = useTranslation()

  const dispatch = useDispatch()
  const translation = useSelector(selectTranslation)

  const handleChange = (key: string) => {
    i18n.changeLanguage(key)
    dispatch(setTranslation(key))
  }

  return (
    <MyPopover
      startIcon={<TranslateIcon />}
      sx={{ color: 'black' }}
      popoverChildren={
        <List disablePadding>
          {Translations.map(({ key, name }) => (
            <ListItem key={key} disablePadding>
              <ListItemButton onClick={() => handleChange(key)}>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      }
    >
      {translation}
    </MyPopover>
  )
}
