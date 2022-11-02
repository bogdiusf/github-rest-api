const commonDisplayStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const RepositoryStyles = {
  headerTitle: {
    display: 'flex',
    padding: 0,
    marginTop: 20
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    '& img': {
      margin: [0, 'auto']
    }
  },

  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 24,
    fontWeight: 600
  },

  repoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    minHeight: 420
  },

  repo: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '',
    padding: 25,
    borderRadius: 2,
    border: [1, 'solid', 'var(--light-grey)'],

    '&>div:first-child': {
      width: '80%',
      display: '-webkit-box',
      '-webkit-line-clamp': 1,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden'
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
