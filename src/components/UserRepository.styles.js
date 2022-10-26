const commonDisplayStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const UserRepositoryStyles = {
  repoContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '50vw',
    minWidth: 350,
    justifyContent: 'space-between',
    backgroundColor: '#3d3d3d',
    padding: 25,
    borderRadius: 5,
    border: [1, 'solid', 'rgba(255,255,255,0.1)']
  },
  starAndForkContainer: {
    display: 'flex',
    gap: 15,
    '&>div:first-child': {
      gap: 5
    }
  },
  center: {
    ...commonDisplayStyles
  }
}
