import React from 'react'
import PropTypes from 'prop-types';
import { 
  Root,
  PageIndex,
  PageSwapper,
  Swap,
} from './style';
import NextIcon from '../../icons/NextIcon';
import PrevIcon from '../../icons/PrevIcon';

const countPages = (pages) => {
  let arr = [];
  for (let i=0; i<pages ; i++) {
    arr.push(i + 1);
  };
  return arr;
}

export default function index({ pages, page, nextPageTrigger, prevPageTrigger, switchToPageTrigger }) {
  return (
    <Root>
      {
        page > 1 &&
        <NextIcon onClick={prevPageTrigger}>Prev</NextIcon>
      }
      <PageSwapper>
        <Swap  page={page} pages={pages}>
        {
          countPages(pages).map(p => <PageIndex 
            className={page == p && 'active'} key={p}
            onClick={switchToPageTrigger(p)}
            >{p}
          </PageIndex>)
        }
        </Swap>
      </PageSwapper>
      {
        pages > page &&
        <PrevIcon
          onClick={nextPageTrigger}
        >Next</PrevIcon>
      }
    </Root>
  )
};

index.defaultProps = {
  pages: 1,
  page: 1,
}

index.propTypes = {
  nextPageTrigger: PropTypes.func.isRequired,
}
