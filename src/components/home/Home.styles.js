export const HomeStyles = {
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
    color: 'black',
    padding: [10, 20],
    marginRight: 10,
    borderRadius: 2,
    width: 300,
    height: 30
  },
  button: {
    padding: [15, 20],
    border: 'none',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    gap: 10
  }
}
