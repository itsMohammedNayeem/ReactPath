import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const RemoveTrailingSlash = () => {
  const location = useLocation()

  // Function to remove trailing slashes from the pathname
  const removeTrailingSlash = (pathname: string) => (pathname.endsWith('/') ? pathname.slice(0, -1) : pathname)

  // Check if the pathname has a trailing slash
  if (location.pathname.endsWith('/')) {
    return (
      <Navigate
        to={{
          pathname: removeTrailingSlash(location.pathname),
          search: location.search
        }}
        replace
      />
    )
  }

  return null
}
