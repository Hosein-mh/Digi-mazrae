import React, { useState, useEffect } from 'react'
import { Root, Content } from './style';
import Loader from '../../Loader';

export default function DescriptionSection({ description }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (!description) {
      setLoading(true);
    } else {
      let myDoc =document.getElementsByClassName('description_section');
      myDoc[0].innerHTML = description;
      setLoading(false);
    }
  }, [description])

  return (
    <Root>
      {
        loading &&
        <Loader loading={loading} />
      }
      <Content className="description_section"></Content>
    </Root>
  )
}
