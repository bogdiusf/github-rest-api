export const UserProfileStyles = {
  userProfileContainer: {
    position: 'relative',
    minHeight: '100vh',
    width: '50vw'
  },

  header: {
    height: 200,
    width: '100%',
    minWidth: 350,
    backgroundColor: '#3d3d3d',
    display: 'flex',
    borderRadius: 5,
    marginBottom: 50,
    padding: '0px 50px',
    gap: 45
  },

  homeBtn: {
    marginTop: 20,
    marginLeft: -30,
    height: 30,
    width: 30,
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
    height: 150,
    margin: ['auto', 0],
    cursor: 'pointer'
  }
}
