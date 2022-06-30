import React from "react";
import { graphql } from "gatsby";
import {
  Opening,
  Catalog,
  WeWillSelect,
  AboutUs,
  SecondPartArticles,
  FirstPartArticles,
  DesignersList,
  FixedElements,
} from '../melatika/components/sections/index';

import { FormPopup, VideoPopup, NavMenuPopup } from "../melatika/components/popups"
import IndexLayout from "../melatika/components/index-layout/index-layout";
import useUrlUpdate from "../melatika/hooks/use-url-update";
import { useLocation } from '@reach/router';

export const MelatikaTemplate = ({
  openingData,
  catalogData,
  weWillSelectData,
  articles1Data,
  aboutUsData,
  designersData,
  articles2Data,
  popupsData,

}) => {
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

  // const location = useLocation()
  // React.useEffect(() => {
  //   const checkIsPopUp = () => {
  //     const popupState = location?.state?.isPopup
      
  //     if (!popupState) return
  //     if (popupState === 'customers-form') openFormPopup('customer')
  //     else if (popupState === 'designers-form') openFormPopup('designer')
  //   }
  //   checkIsPopUp()
  // },[])


  return (
    <IndexLayout>
      <main style={{width: '100%', height: '100%'}}>
        <Opening data={openingData} />
        <Catalog data={catalogData} openFormPopupHandler={() => openFormPopup('customer')} />
        <WeWillSelect data={weWillSelectData} openFormPopupHandler={() => openFormPopup('customer')} />
        <FirstPartArticles data={articles1Data} />
        <AboutUs data={aboutUsData} />
        <DesignersList data={designersData} selectVideoHandler={setSelectedDesignerVideo} openFormPopupHandler={() => openFormPopup('designer')} />
        <SecondPartArticles data={articles2Data} />
      </main>
      <FixedElements isNavOpened={isNavMenuOpened} openNav={setIsNavMenuOpened} />


      <FormPopup data={popupsData} isOpen={isFormPopupOpen} forDesigners={formForWhom === 'designer'} closeHandler={closeFormPopup} />
      <VideoPopup
        closeHandler={() => setSelectedDesignerVideo('')}
        youtubeVideoHash={selectedDesignerVideo}
        isOpen={!!selectedDesignerVideo}
      />
      <NavMenuPopup isOpen={isNavMenuOpened} closeNavHandler={() => setIsNavMenuOpened(false)} />

    </IndexLayout>
  )
}

const MelatikaPage = ({ data }) => {
  const {
    opening,
    catalog,
    weWillSelect,
    articles1,
    aboutUs,
    designers,
    articles2,
    popups

  } = data.markdownRemark.frontmatter
  return (
      <MelatikaTemplate
        openingData = {opening}
        catalogData = {catalog}
        weWillSelectData = {weWillSelect}
        articles1Data = {articles1}
        aboutUsData = {aboutUs}
        designersData = {designers}
        articles2Data = {articles2}
        popupsData = {popups}
      />
  );
};

export default MelatikaPage;

export const pageQuery = graphql`
  query MelatikaPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "melatika-page" } }) {
      frontmatter {

        opening {
          title
          subtitle
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
          image_480 {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
        }

        catalog {
          catalog1 {
            title
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
          catalog2 {
            title
            image {
            childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
          catalog3 {
            title
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
          catalog4 {
            title
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
        }

        weWillSelect {
          title
          subtitle
          buttonText
          subtitle_480
          buttonText_480
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
          image_480 {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
        }

        articles1 {
          article1 {
            title
            text
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            image_480 {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
          article2 {
            title
            text
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            image_480 {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
          article3 {
            title
            text
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            image_480 {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
        }

        aboutUs {
          title
          text
          vkUrl
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
          image_480 {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
        }

        designers {
          callToAction {
            text
            buttonText
          }
          designer1 {
            name
            specialization
            text
            youtubeVideoHash
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            image_480 {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
          designer2 {
            name
            specialization
            text
            youtubeVideoHash 
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            image_480 {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
          designer3 {
            name
            specialization
            text
            youtubeVideoHash
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            image_480 {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
        }

        articles2 {
          article1 {
            title
            text
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            image_480 {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
          article2 {
            title
            text
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            image_480 {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
          article3 {
            title
            text
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            image_480 {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
          }
        }

      popups {
        clientPopupImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
        designerPopupImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
      }
        
      }
    }
  }
`;
