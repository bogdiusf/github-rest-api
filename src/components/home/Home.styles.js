export const HomeStyles = {
  homeContainer: {
    height: '90vh',
    display: 'flex',
    width: '100vw',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: 350,
    margin: [0, 'auto']
  },

  input: {
    backgroundColor: '#3D3D3D',
    color: '#FFFFFF',
    border: [0.5, 'solid', '#FFFFFF'],
    padding: [10, 20],
    borderRadius: 2,
    height: 30,
    minWidth: 250,
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
