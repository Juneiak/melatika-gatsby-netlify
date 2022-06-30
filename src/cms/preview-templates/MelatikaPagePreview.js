import React from 'react'
import { MelatikaTemplate } from '../../templates/melatika-page'

const MelatikaPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <MelatikaTemplate
      openingData={data.opening}
      catalogData={data.catalog}
      weWillSelectData={data.weWillSelect}
      articles1Data={data.articles1}
      aboutUsData={data.aboutUs}
      designersData={data.designers}
      articles2Data={data.articles2}
      popupsData={data.popups}
    />
  )
}

export default MelatikaPagePreview;
