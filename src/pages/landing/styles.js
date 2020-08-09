export default function getStyles(theme, height) {
  const styles = {
    ...theme,

    root: {
      minHeight: height,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      color: 'white'
    },

    small: {
      fontSize: '25px',
      marginTop: 10,
      color: 'white',
    },

    link: {
      color: 'white',
    },

    button: {
      color: 'white',
    },

    freenit: {
      height: 70,
      width: 290,
      maxWidth: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      fontSize: 36,
      marginTop: 40,
    },
  }
  return styles
}
