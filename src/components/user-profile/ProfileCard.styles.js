export const ProfileCardStyles = {
  header: {
    height: 'auto',
    display: 'flex',
    border: [1, 'solid', '#3D3D3D'],
    borderRadius: 5,
    padding: [20, 35],
    gap: 20,

    '@media screen and (max-width: 768px)': {
      flexDirection: 'column',
      padding: [20, 20]
    }
  },

  headerLeftCol: {
    display: 'flex',
    margin: ['auto', 0]
  },

  homeBtn: {
    height: 40,
    width: 40,
    marginLeft: -10,
    '& svg': {
      fontSize: 40,
      borderRadius: '50%',
      padding: 5
    },
    '@media screen and (max-width: 768px)': {
      marginLeft: 0
    }
  },

  avatar: {
    borderRadius: '50%',
    border: '1px solid #FFFFFF',
    width: 200,
    height: 200,
    marginLeft: 20,
    cursor: 'pointer'
  },

  headerRightCol: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    '@media screen and (max-width: 768px)': {
      marginLeft: 0
    }
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
      width: 'fit-content',
      alignItems: 'center',
      fontSize: 16,
      gap: 5
    },
    '& div span:first-child': {
      fontWeight: 600
    },
    '@media screen and (max-width: 489px)': {
      flexDirection: 'column',
      gap: 0
    },
    '@media screen and (min-width: 490px) and (max-width: 768px)': {
      flexDirection: 'row',
      gap: 40
    }
  },

  personalInfo: {
    fontSize: 16,
    '& div': {
      display: 'flex',
      flexWrap: 'wrap',
      width: 'fit-content',
      alignItems: 'center',
      gap: 5,
      lineHeight: 1.5
    }
  },
  userName: {
    fontWeight: 600
  },
  blogUrl: {
    display: 'inline-block !important',
    wordBreak: 'break-all',
    '& svg': {
      fontSize: 'x-large',
      height: 16
    }
  }
}
