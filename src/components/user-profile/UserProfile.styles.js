export const UserProfileStyles = {
  userProfileContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    maxWidth: '50vw',
    minWidth: 800
  },

  header: {
    height: 'auto',
    width: '100%',
    minWidth: 350,
    backgroundColor: '#3d3d3d',
    display: 'flex',
    borderRadius: [5, 5, 0, 0],
    padding: [20, 35],
    gap: 45
  },

  headerLeftCol: {
    display: 'flex',
    gap: 30,
    margin: ['auto', 0]
  },

  homeBtn: {
    height: 40,
    width: 40,
    marginTop: -10,
    marginLeft: -10,
    '& svg': {
      fontSize: 40,
      borderRadius: '50%',
      padding: 5
    }
  },

  avatar: {
    borderRadius: '50%',
    border: '1px solid white',
    width: 200,
    height: 200,
    marginLeft: 20,
    cursor: 'pointer'
  },

  headerRightCol: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20
  },

  username: {
    fontSize: 28
  },

  statisticsHeader: {
    display: 'flex',
    gap: 40,
    padding: [20, 0],
    '& div': {
      display: 'inherit',
      alignItems: 'center',
      fontSize: 16,
      gap: 5
    },
    '& div span:first-child': {
      fontWeight: 600
    }
  },

  personalInfo: {
    width: 'fit-content',
    fontSize: 16,
    '& div:first-child': {
      fontWeight: 600
    },
    '& div': {
      display: 'flex',
      alignItems: 'center',
      width: 'fit-content',
      gap: 5,
      lineHeight: 1.5
    }
  },

  userRepoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    minHeight: 565
  }
}
