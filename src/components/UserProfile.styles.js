export const UserProfileStyles = {
  header: {
    height: 200,
    backgroundColor: '#3d3d3d',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 50,
    padding: '0px 50px',
    gap: 45
  },

  homeBtn: {
    marginBottom: 100,
    marginLeft: -20,
    '& svg': {
      fontSize: 30,
      borderRadius: '50%',
      border: '1px solid white',
      padding: 5
    }
  },

  avatar: {
    borderRadius: '50%',
    border: '1px solid white',
    width: 150,
    cursor: 'pointer'
  },

  profileContainer: {
    '& h1': {
      padding: [20, 0]
    }
  },
  reposContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }
}
