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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

    '@media screen and (min-width: 450px)': {
      flexDirection: 'row'
    }
  },

  input: {
    backgroundColor: '#3D3D3D',
    color: '#FFFFFF',
    border: [0.5, 'solid', '#FFFFFF'],
    padding: [10, 20],
    borderRadius: 2,
    width: 300,
    height: 30,
    fontWeight: 500
  },
  button: {
    height: '100%',
    width: 50,
    height: 50,
    border: 'none',
    backgroundColor: '#3D3D3D',
    border: [0.5, 'solid', '#FFFFFF'],
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    '@media screen and (max-width: 450px)': {
      width: 100
    }
  }
}
