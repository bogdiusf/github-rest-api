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
    display: 'flex',
    alignItems: 'center',
    width: '50vw',
    minWidth: 350,
    justifyContent: 'space-between',
    backgroundColor: '#3d3d3d',
    padding: 25,
    borderRadius: 2,
    border: [1, 'solid', 'rgba(255,255,255,0.1)']
  },
  starAndForkContainer: {
    display: 'flex',
    gap: 20,
    '&>div': {
      gap: 3
    }
  },
  center: {
    ...commonDisplayStyles
  }
}
