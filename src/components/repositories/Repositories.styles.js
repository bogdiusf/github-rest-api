const commonDisplayStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const UserRepositoryStyles = {
  repoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    height: 420
  },

  repo: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3d3d3d',
    padding: 25,
    borderRadius: 2,
    border: [1, 'solid', 'rgba(255,255,255,0.1)']
  },

  separator: {
    position: 'absolute',
    right: '20%',
    height: '70%',
    backgroundColor: '#FFF',
    width: 1
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
