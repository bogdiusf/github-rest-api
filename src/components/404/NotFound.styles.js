export const NotFoundStyles = {
  pageNotFoundContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 100,
    margin: ['auto', 0]
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& svg:nth-child(1)': {
      fontSize: 150
    },
    '& svg:nth-child(2n)': {
      fontSize: 50
    }
  },
  toHomeButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    color: '#242424',
    padding: [15, 20],
    borderRadius: 2,
    fontWeight: 600
  }
}
