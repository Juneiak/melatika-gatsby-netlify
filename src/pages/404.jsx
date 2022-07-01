import * as React from "react"
import NotFound from "../melatika/components/sections/not-found/not-found";
import Helmet from "react-helmet";
import { useLocation } from '@reach/router';
import { navigate } from "gatsby";

const NotFoundPage = () => {
  const [is404, setIs404] = React.useState(false);

  const location = useLocation()
  React.useEffect(() => {
    const path = location.pathname.split('/')

    const handleCheck = () => {
      if (path.includes('customers-form')) {
        navigate('/', {state: { isPopup: 'customers-form'}})
        return
      }

      if (path.includes('designers-form')) {
        navigate('/', {state: { isPopup: 'designers-form'}});
        return
      } 
      setIs404(true)
    }
    handleCheck()
  }, [])

  if (!is404) return <></>

  return (
    <>
    <Helmet>
      <title>Melatika - not found</title>
    </Helmet>
    <main style={{ width: '100%', height: '100vh'}}>
      <NotFound />
    </main>
    </>

  )
}

export default NotFoundPage
