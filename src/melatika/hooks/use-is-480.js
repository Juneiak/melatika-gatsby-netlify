import React from "react";

export default function useIs480() {
  const [ is480, setIs480 ] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if ( document.documentElement.clientWidth <= 480 && !is480) setIs480 (true)
      else if (document.documentElement.clientWidth > 480 && is480) setIs480 (false)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)

  }, [is480]);

  return is480;
}
