export const ProfileCardStyles = {
  header: {
    height: 'auto',
    display: 'flex',
    border: [1, 'solid', '#3D3D3D'],
    borderRadius: 5,
    padding: [20, 35],
    gap: 45,

    '@media screen and (max-width: 768px)': {
      flexDirection: 'column',
      padding: [20, 20]
    }
  },

  headerLeftCol: {
    display: 'flex',
    gap: 30,
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
      alignItems: 'center',
      fontSize: 16,
      gap: 5
    },
    '& div span:first-child': {
      fontWeight: 600
    },

    '@media screen and (max-width: 820px)': {
      flexDirection: 'column',
      gap: 0
    }
  },

  personalInfo: {
    fontSize: 16,
    '& div': {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      lineHeight: 1.5
    },
    '@media screen and (min-width: 769px)': {
      '& div': {
        width: 'fit-content'
      }
    }
  },
  userName: {
    fontWeight: 600
  },
  blogUrl: {
    '&>div': {
      display: 'inline-block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    '& svg': {
      fontSize: 'x-large',
      height: 16
    },
    '@media screen and (min-width: 768px) and (max-width: 820px)': {
      '& div': {
        width: '50%'
      }
    }
  }
}
