export const ButtonsStyles = {
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  button: ({ index }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    width: isNaN(index) ? '10%' : '15%',
    height: 50,
    marginBottom: 5,
    borderRadius: 2
  })
}
