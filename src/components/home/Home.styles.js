export const HomeStyles = {
  homeContainer: {
    height: '100vh',
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
    backgroundColor: 'var(--input-background)',
    color: 'var(--input-color)',
    border: [0.5, 'solid', 'var(--input-border)'],
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
    backgroundColor: 'var(--light-grey)',
    border: [0.5, 'solid', 'var(--white)'],
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
