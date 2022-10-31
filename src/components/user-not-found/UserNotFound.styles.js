export const UserNotFoundStyles = {
  userNotFound: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: ['auto', 0],

    '& svg': {
      fontSize: 100
    }
  },
  message: {
    fontSize: 20,
    fontWeight: 500,
    minWidth: 350,
    width: '50vh',
    lineHeight: 2,

    '& svg': {
      fontSize: 36,
      margin: [0, 5]
    }
  }
}
