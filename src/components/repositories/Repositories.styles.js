const commonDisplayStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const RepositoryStyles = {
  header: {
    padding: 0,
    margin: [20, 0, 0, 0]
  },

  repoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    height: 'auto'
  },

  repo: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '',
    padding: 25,
    borderRadius: 2,
    border: [1, 'solid', '#3D3D3D']
  },

  separator: {
    position: 'absolute',
    right: '20%',
    height: '70%',
    backgroundColor: '#3D3D3D',
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
