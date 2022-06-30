import React from "react";
import {
  Opening,
  Catalog,
  WeWillSelect,
  AboutUs,
  SecondPartArticles,
  FirstPartArticles,
  DesignersList,
  FixedElements,
} from '../components/sections/index';
import { FormPopup, VideoPopup, NavMenuPopup } from "../components/popups"
import IndexLayout from "../components/index-layout/index-layout";
import useUrlUpdate from "../hooks/use-url-update";
import { useLocation } from '@reach/router';

export default function IndexPage() {
  const [ isFormPopupOpen, setIsFormPopupOpen ] = React.useState(false);
  const [ selectedDesignerVideo, setSelectedDesignerVideo ] = React.useState('');
  const [ isNavMenuOpened, setIsNavMenuOpened] = React.useState(false);

  const [ formForWhom, setFormForWhom ] = React.useState('');
  const changeUrl = useUrlUpdate()

  const openFormPopup = (forWhom) => {
    setIsFormPopupOpen(true);
    setFormForWhom(forWhom)
    changeUrl(forWhom + 's-form')
  }

  const closeFormPopup = () => {
    setIsFormPopupOpen(false);
    setTimeout(() => setFormForWhom(''), 500)
    changeUrl('/')
  }

  const location = useLocation()
  React.useEffect(() => {
    const checkIsPopUp = () => {
      const popupState = location?.state?.isPopup
      
      if (!popupState) return
      if (popupState === 'customers-form') openFormPopup('customer')
      else if (popupState === 'designers-form') openFormPopup('designer')
    }
    checkIsPopUp()
  },[])


  return (
    <IndexLayout>
      <main style={{width: '100%', height: '100%'}}>
        <Opening />
        <Catalog openFormPopupHandler={() => openFormPopup('customer')} />
        <WeWillSelect openFormPopupHandler={() => openFormPopup('customer')} />
        <FirstPartArticles />
        <AboutUs />
        <DesignersList selectVideoHandler={setSelectedDesignerVideo} openFormPopupHandler={() => openFormPopup('designer')} />
        <SecondPartArticles />
      </main>
      <FixedElements isNavOpened={isNavMenuOpened} openNav={setIsNavMenuOpened} />


      <FormPopup isOpen={isFormPopupOpen} forDesigners={formForWhom === 'designer'} closeHandler={closeFormPopup} />
      <VideoPopup
        closeHandler={() => setSelectedDesignerVideo('')}
        videoUrl={selectedDesignerVideo}
        isOpen={!!selectedDesignerVideo}
      />
      <NavMenuPopup isOpen={isNavMenuOpened} closeNavHandler={() => setIsNavMenuOpened(false)} />

    </IndexLayout>
  )
}