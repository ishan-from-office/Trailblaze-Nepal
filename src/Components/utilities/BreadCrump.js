import React from 'react'
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from '@material-ui/core'
import { Container } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
const BreadCrump = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const pathnames = pathname.split('/').filter(Boolean)
  return (
    <>
      <Container>
        <MUIBreadcrumbs aria-label="breadcrumb">
          {pathnames.length ? (
            <Link onClick={() => navigate('/')}>Home</Link>
          ) : (
            <Typography> Home </Typography>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            return isLast ? (
              <Typography key={name}>{name}</Typography>
            ) : (
              <Link key={name} onClick={() => navigate(routeTo)}>
                {name}
              </Link>
            )
          })}
        </MUIBreadcrumbs>
      </Container>
    </>
  )
}

export default BreadCrump
