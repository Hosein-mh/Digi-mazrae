import React from 'react'
import { 
  Root, 
  InstaHead,
  ProfileImg, 
  Dots,
  PostImg,
  InstaActions,
  LeftPart,
  RightPart,
  OverLink,
} from './style';
import HeartIcon from '../../icons/Heart.icon';
import CommentIcon from '../../icons/Comment.icon';
import SendIcon from '../../icons/Send.icon';
import SharePostIcon from '../../icons/SharePost.icon';
 
export default function index({ profileSrc, postSrc, postUrl }) {
  return (
    <Root>
      <OverLink href={postUrl} target="blank">
        <InstaHead>
          <Dots>
          <svg aria-label="More options" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clipRule="evenodd" cx="8" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="24" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="40" cy="24" fillRule="evenodd" r="4.5"></circle></svg>
          </Dots>
          <ProfileImg src={profileSrc} />
        </InstaHead>
      </OverLink>
      <PostImg src={postSrc} />
      <InstaActions>
        <OverLink href={postUrl} target="blank">
          <RightPart>
            <SharePostIcon/>
          </RightPart>
          <LeftPart>
            <SendIcon />
            <CommentIcon />
            <HeartIcon />
          </LeftPart>
        </OverLink>
      </InstaActions>
    </Root>
  )
}
