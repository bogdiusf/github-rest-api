export const NotFoundStyles = {
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--white)',
    '& svg:nth-child(1)': {
      fontSize: 150
    },
    '& svg:nth-child(2n)': {
      fontSize: 50
    },
    '@media screen and (max-width: 768px)': {
      flexDirection: 'column'
    }
  }
}
