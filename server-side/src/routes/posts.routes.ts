import { Router } from 'express';
import { getLikeStatus, updateLikeStatus } from '../controllers/post/like.controllers';
import { createPost, deletePost, getParticularPost, updatePost } from '../controllers/post/post.controllers';
import { getTimelineOfHome, getTimelineOfProfile } from '../controllers/post/timeline.controllers';

const router = Router();

// create a post
router.post('/', createPost);

// update a post
router.put('/:postId', updatePost);

// delete a post
router.delete('/:postId', deletePost);

// get a particular post
router.get('/:postId', getParticularPost);

// add or remove 'like' of a post
router.put('/:postId/like', updateLikeStatus);

// get 'like' status of a post
router.get('/:postId/like', getLikeStatus);

// get posts of timeline of profile
router.get('/profile/:username', getTimelineOfProfile);

// get posts of timeline of Home
router.get('/timeline/:userId', getTimelineOfHome);

export default router;
