import React, { useState, useEffect } from 'react';
import {
  Root,
} from './style';
import InstaPost from './InstaPost';
import Carousel from 'react-elastic-carousel';

export default function Instagram() {
  const url = `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={%22id%22:%227936089193%22,%20%22first%22:12}`
  const profilePicUrl = "https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables=%7B%22user_id%22%3A%227936089193%22%2C%22include_chaining%22%3Atrue%2C%22include_reel%22%3Atrue%2C%22include_suggested_users%22%3Afalse%2C%22include_logged_out_extras%22%3Afalse%2C%22include_highlight_reels%22%3Atrue%2C%22include_live_status%22%3Atrue%7D"
  
  const [profileSrc, setProfileSrc] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchInstagramProfilePic = async () => {
    const data = await fetch(profilePicUrl);
    const jsonData = await data.json();
    const profilePic = jsonData.data.user.reel.owner.profile_pic_url;
    setProfileSrc(profilePic);
  }

  const fetchInstagramPosts = async () => {
    let data = await fetch(url);
    let jsonData = await data.json();

    const thumbs = jsonData.data.user.edge_owner_to_timeline_media.edges.map(
      edge => ({
        url: edge.node.thumbnail_src,
        like: edge.node.edge_media_preview_like.count,
        comment: edge.node.edge_media_to_comment.count,
        postUrl:`https://www.instagram.com/p/${edge.node.shortcode}`,
      })
    );

    setPosts(thumbs);
  }

  useEffect(() => {
    fetchInstagramProfilePic();
    fetchInstagramPosts();
  }, []);

  return (
    <Root>
      <Carousel
        verticalMode={true}
        showArrows={false}
        enableTilt={false}
        pagination={false}
      >
      {
        posts.map((post, index) => <InstaPost key={index} profileSrc={profileSrc} postSrc={post.url} postUrl={post.postUrl} />)
      }
      </Carousel>
    </Root>
  )
}

