const commonDisplayStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const RepositoryStyles = {
  headerTitle: {
    padding: 0,
    margin: [20, 0, 0, 0]
  },

  repoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    minHeight: 420,
    '@media screen and (max-width: 768px)': {
      minHeight: 540
    }
  },

  repo: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '',
    padding: 25,
    borderRadius: 2,
    border: [1, 'solid', '#3D3D3D'],

    '&>div:first-child': {
      width: '80%',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden'
    },

    '@media screen and (max-width: 768px)': {
      height: 100
    }
  },

  starAndForkContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    '& div:nth-child(2)': {
      width: 50,
      marginLeft: 10,
      justifyContent: 'flex-end'
    },
    '&>div': {
      gap: 3
    }
  },
  center: {
    ...commonDisplayStyles
  }
}
