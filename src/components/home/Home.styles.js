export const HomeStyles = {
  homeContainer: {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    '& h1': {
      padding: 0
    },
    '& svg': {
      fontSize: 140
    }
  },

  main: {
    display: 'flex',
    justifyContent: 'center'
  },

  input: {
    backgroundColor: 'white',
    color: '#242424',
    padding: [10, 20],
    marginRight: 10,
    borderRadius: 2,
    width: 300,
    height: 30,
    fontWeight: 500
  },
  button: {
    padding: [15, 20],
    border: 'none',
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    gap: 10
  }
}
