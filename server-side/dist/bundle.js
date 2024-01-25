/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PROD_CLIENT_SIDE_BASE_URL = exports.DEV_CLIENT_SIDE_BASE_URL = exports.MONGO_URL = void 0;\n__webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/** MongoDBのURL */\nexports.MONGO_URL = process.env.MONGO_URL || '';\n// クライアント側の開発環境用URL\nexports.DEV_CLIENT_SIDE_BASE_URL = process.env.DEV_CLIENT_SIDE_BASE_URL || '';\n// クライアント側の本番環境用URL\nexports.PROD_CLIENT_SIDE_BASE_URL = process.env.PROD_CLIENT_SIDE_BASE_URL || '';\n\n\n//# sourceURL=webpack://real-sns/./src/constants/index.ts?");

/***/ }),

/***/ "./src/controllers/auth.controllers.ts":
/*!*********************************************!*\
  !*** ./src/controllers/auth.controllers.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loginUser = exports.registerUser = void 0;\nconst User_1 = __webpack_require__(/*! ../models/User */ \"./src/models/User.ts\");\nconst registerUser = async (req, res) => {\n    try {\n        const requestBody = req.body;\n        const newUser = await new User_1.UserModel(requestBody);\n        const user = await newUser.save();\n        return res.status(200).json(user);\n    }\n    catch (err) {\n        console.error(err);\n        return res.status(500).json(err);\n    }\n};\nexports.registerUser = registerUser;\nconst loginUser = async (req, res) => {\n    try {\n        const requestBody = req.body;\n        const user = await User_1.UserModel.findOne({ email: requestBody.email });\n        if (!user)\n            return res.status(404).send('The user does not exist');\n        const isValidPassword = requestBody.password === user.password;\n        if (!isValidPassword)\n            return res.status(400).json('password is wrong');\n        return res.status(200).json(user);\n    }\n    catch (err) {\n        console.error(err);\n        return res.status(500).json(err);\n    }\n};\nexports.loginUser = loginUser;\n\n\n//# sourceURL=webpack://real-sns/./src/controllers/auth.controllers.ts?");

/***/ }),

/***/ "./src/controllers/like.controllers.ts":
/*!*********************************************!*\
  !*** ./src/controllers/like.controllers.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getLikeStatus = exports.updateLikeStatus = void 0;\nconst Post_1 = __webpack_require__(/*! ../models/Post */ \"./src/models/Post.ts\");\n/**\n * update 'like' of a post\n * @param alreadyLiked\n * @param postId\n * @param userId\n * @returns\n */\nconst addOrRemoveLike = async (alreadyLiked, postId, userId) => {\n    const updateOperator = alreadyLiked ? '$pull' : '$push';\n    const updatedPost = await Post_1.PostModel.findByIdAndUpdate(postId, {\n        [updateOperator]: {\n            likes: userId,\n        },\n    }, { returnDocument: 'after' });\n    return updatedPost === null ? null : { likeNumber: (updatedPost.likes ?? []).length, isPushed: !alreadyLiked };\n};\nconst updateLikeStatus = async (req, res) => {\n    try {\n        const { userId } = req.body;\n        const { postId } = req.params;\n        const post = await Post_1.PostModel.findById(postId);\n        if (post === null) {\n            return res.status(404).json('指定したIDの投稿が見つかりませんでした');\n        }\n        const alreadyLiked = (post.likes ?? []).includes(userId);\n        const result = await addOrRemoveLike(alreadyLiked, postId, userId);\n        return result === null\n            ? res.status(404).json('投稿から指定したユーザーが見つかりませんでした')\n            : res.status(200).json(result);\n    }\n    catch (err) {\n        console.error(err);\n        return res.status(500).json(err);\n    }\n};\nexports.updateLikeStatus = updateLikeStatus;\nconst getLikeStatus = async (req, res) => {\n    try {\n        const { postId } = req.params;\n        const { userId } = req.query;\n        const searchedPost = await Post_1.PostModel.findById(postId);\n        if (searchedPost === null) {\n            return res.status(404).json('指定したIDの投稿が見つかりませんでした');\n        }\n        const alreadyLiked = (searchedPost.likes ?? []).includes(userId);\n        return res.status(200).json(alreadyLiked);\n    }\n    catch (err) {\n        console.error(err);\n        return res.status(500).json(err);\n    }\n};\nexports.getLikeStatus = getLikeStatus;\n\n\n//# sourceURL=webpack://real-sns/./src/controllers/like.controllers.ts?");

/***/ }),

/***/ "./src/controllers/post.controllers.ts":
/*!*********************************************!*\
  !*** ./src/controllers/post.controllers.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getParticularPost = exports.deletePost = exports.updatePost = exports.createPost = void 0;\nconst Post_1 = __webpack_require__(/*! ../models/Post */ \"./src/models/Post.ts\");\nconst createPost = async (req, res) => {\n    try {\n        const requestBody = req.body;\n        const newPost = new Post_1.PostModel(requestBody);\n        const savedPost = await newPost.save();\n        return res.status(201).json(savedPost);\n    }\n    catch (err) {\n        console.error(err);\n        return res.status(500).json(err);\n    }\n};\nexports.createPost = createPost;\nconst updatePost = async (req, res) => {\n    try {\n        const requestBody = req.body;\n        const { postId } = req.params;\n        const searchedPost = await Post_1.PostModel.findById(postId);\n        if (searchedPost === null) {\n            return res.status(404).json('指定したIDの投稿が見つかりませんでした');\n        }\n        if (searchedPost.userId === requestBody.userId) {\n            await searchedPost.updateOne({\n                $set: requestBody,\n            });\n            return res.status(200).json('Successfully updated your post');\n        }\n        else {\n            return res.status(403).json('You can only update your posts.');\n        }\n    }\n    catch (err) {\n        console.error(err);\n        return res.status(500).json(err);\n    }\n};\nexports.updatePost = updatePost;\nconst deletePost = async (req, res) => {\n    try {\n        const requestBody = req.body;\n        const { postId } = req.params;\n        const searchedPost = await Post_1.PostModel.findById(postId);\n        if (searchedPost === null) {\n            return res.status(404).json('指定したIDの投稿が見つかりませんでした');\n        }\n        if (searchedPost.userId === requestBody.userId) {\n            await searchedPost.deleteOne();\n            return res.status(204).json('Your post was successfully deleted');\n        }\n        else {\n            return res.status(403).json('You can only delete existing post');\n        }\n    }\n    catch (err) {\n        console.error(err);\n        return res.status(500).json(err);\n    }\n};\nexports.deletePost = deletePost;\nconst getParticularPost = async (req, res) => {\n    try {\n        const { postId } = req.params;\n        const searchedPost = await Post_1.PostModel.findById(postId);\n        if (searchedPost === null) {\n            return res.status(404).json('指定したIDの投稿が見つかりませんでした');\n        }\n        return res.status(200).json(searchedPost);\n    }\n    catch (err) {\n        console.error(err);\n        return res.status(500).json(err);\n    }\n};\nexports.getParticularPost = getParticularPost;\n\n\n//# sourceURL=webpack://real-sns/./src/controllers/post.controllers.ts?");

/***/ }),

/***/ "./src/controllers/timeline.controllers.ts":
/*!*************************************************!*\
  !*** ./src/controllers/timeline.controllers.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getTimelineOfHome = exports.getTimelineOfProfile = void 0;\nconst Post_1 = __webpack_require__(/*! ../models/Post */ \"./src/models/Post.ts\");\nconst User_1 = __webpack_require__(/*! ../models/User */ \"./src/models/User.ts\");\nconst getTimelineOfProfile = async (req, res) => {\n    try {\n        const { username } = req.params;\n        const user = await User_1.UserModel.findOne({ username });\n        if (user === null) {\n            return res.status(404).json('指定したユーザーが見つかりませんでした');\n        }\n        const posts = await Post_1.PostModel.find({ userId: user._id });\n        return res.status(200).json(posts);\n    }\n    catch (err) {\n        console.error(err);\n        return res.status(500).json(err);\n    }\n};\nexports.getTimelineOfProfile = getTimelineOfProfile;\nconst getTimelineOfHome = async (req, res) => {\n    try {\n        const { userId } = req.params;\n        const currentUser = await User_1.UserModel.findById(userId);\n        if (currentUser === null) {\n            return res.status(404).json('指定したユーザーが見つかりませんでした');\n        }\n        const userPosts = await Post_1.PostModel.find({ userId: currentUser._id });\n        // get all posts of following\n        const friendPosts = await Promise.all((currentUser.followings ?? []).map((friendId) => {\n            return Post_1.PostModel.find({ userId: friendId });\n        }));\n        return res.status(200).json(userPosts.concat(...friendPosts));\n    }\n    catch (err) {\n        return res.status(500).json(err);\n    }\n};\nexports.getTimelineOfHome = getTimelineOfHome;\n\n\n//# sourceURL=webpack://real-sns/./src/controllers/timeline.controllers.ts?");

/***/ }),

/***/ "./src/models/Post.ts":
/*!****************************!*\
  !*** ./src/models/Post.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PostModel = void 0;\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst postSchema = new mongoose_1.default.Schema({\n    userId: {\n        type: String,\n        required: true,\n    },\n    desc: {\n        type: String,\n        max: 200,\n    },\n    img: {\n        type: String,\n    },\n    likes: {\n        type: Array,\n        default: [],\n    },\n}, { timestamps: true });\nexports.PostModel = mongoose_1.default.model('Post', postSchema);\n\n\n//# sourceURL=webpack://real-sns/./src/models/Post.ts?");

/***/ }),

/***/ "./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UserModel = void 0;\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst userSchema = new mongoose_1.default.Schema({\n    username: {\n        type: String,\n        required: true,\n        min: 3,\n        max: 25,\n        unique: true,\n    },\n    email: {\n        type: String,\n        required: true,\n        max: 50,\n        unique: true,\n    },\n    password: {\n        type: String,\n        required: true,\n        min: 6,\n        max: 50,\n    },\n    profilePicture: {\n        type: String,\n        default: '',\n    },\n    coverPicture: {\n        type: String,\n        default: '',\n    },\n    followers: {\n        type: Array,\n        default: [],\n    },\n    followings: {\n        type: Array,\n        default: [],\n    },\n    isAdmin: {\n        type: Boolean,\n        default: false,\n    },\n    desc: {\n        type: String,\n        max: 70,\n    },\n    city: {\n        type: String,\n        max: 50,\n    },\n}, { timestamps: true });\nexports.UserModel = mongoose_1.default.model('User', userSchema);\n\n\n//# sourceURL=webpack://real-sns/./src/models/User.ts?");

/***/ }),

/***/ "./src/routes/auth.ts":
/*!****************************!*\
  !*** ./src/routes/auth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst auth_controllers_1 = __webpack_require__(/*! ../controllers/auth.controllers */ \"./src/controllers/auth.controllers.ts\");\nconst router = (0, express_1.Router)();\n// register user\nrouter.post('/register', auth_controllers_1.registerUser);\n// Login\nrouter.post('/login', auth_controllers_1.loginUser);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://real-sns/./src/routes/auth.ts?");

/***/ }),

/***/ "./src/routes/posts.ts":
/*!*****************************!*\
  !*** ./src/routes/posts.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst like_controllers_1 = __webpack_require__(/*! ../controllers/like.controllers */ \"./src/controllers/like.controllers.ts\");\nconst post_controllers_1 = __webpack_require__(/*! ../controllers/post.controllers */ \"./src/controllers/post.controllers.ts\");\nconst timeline_controllers_1 = __webpack_require__(/*! ../controllers/timeline.controllers */ \"./src/controllers/timeline.controllers.ts\");\nconst router = (0, express_1.Router)();\n// create a post\nrouter.post('/', post_controllers_1.createPost);\n// update a post\nrouter.put('/:postId', post_controllers_1.updatePost);\n// delete a post\nrouter.delete('/:postId', post_controllers_1.deletePost);\n// get a particular post\nrouter.get('/:postId', post_controllers_1.getParticularPost);\n// add or remove 'like' of a post\nrouter.put('/:postId/like', like_controllers_1.updateLikeStatus);\n// get 'like' status of a post\nrouter.get('/:postId/like', like_controllers_1.getLikeStatus);\n// get posts of timeline of profile\nrouter.get('/profile/:username', timeline_controllers_1.getTimelineOfProfile);\n// get posts of timeline of Home\nrouter.get('/timeline/:userId', timeline_controllers_1.getTimelineOfHome);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://real-sns/./src/routes/posts.ts?");

/***/ }),

/***/ "./src/routes/upload.ts":
/*!******************************!*\
  !*** ./src/routes/upload.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst multer_1 = __importDefault(__webpack_require__(/*! multer */ \"multer\"));\nconst router = (0, express_1.Router)();\nconst storage = multer_1.default.diskStorage({\n    destination: (req, file, cb) => {\n        cb(null, 'public/images');\n    },\n    filename: (req, file, cb) => {\n        cb(null, req.body.name);\n    },\n});\nconst upload = (0, multer_1.default)({ storage });\n// Api to upload image\nrouter.post('/', upload.single('file'), (req, res) => {\n    try {\n        return res.status(200).json('Successfully uploaded image.');\n    }\n    catch (error) {\n        console.error(error);\n    }\n});\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://real-sns/./src/routes/upload.ts?");

/***/ }),

/***/ "./src/routes/users.ts":
/*!*****************************!*\
  !*** ./src/routes/users.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst User_1 = __webpack_require__(/*! ../models/User */ \"./src/models/User.ts\");\nconst router = (0, express_1.Router)();\n// Update user information\nrouter.put('/:id', async (req, res) => {\n    if (req.body.userId === req.params.id || req.body.isAdmin) {\n        try {\n            const user = await User_1.UserModel.findByIdAndUpdate(req.params.id, {\n                $set: req.body,\n            });\n            return res.status(200).json('Updated user info');\n        }\n        catch (err) {\n            return res.status(500).json(err);\n        }\n    }\n    else {\n        return res.status(403).json('You can update only your info');\n    }\n});\n// Delete user information\nrouter.delete('/:id', async (req, res) => {\n    if (req.body.userId === req.params.id || req.body.isAdmin) {\n        try {\n            const user = await User_1.UserModel.findByIdAndDelete(req.params.id);\n            res.status(200).json('Deleted user info');\n        }\n        catch (err) {\n            return res.status(500).json(err);\n        }\n    }\n    else {\n        return res.status(403).json('You can delete only your info');\n    }\n});\n// get user information with query parameter\nrouter.get('/', async (req, res) => {\n    const userId = req.query.userId;\n    const username = req.query.username;\n    try {\n        const user = userId ? await User_1.UserModel.findById(userId) : await User_1.UserModel.findOne({ username });\n        if (user === null) {\n            return res.status(404).json('指定したユーザーが見つかりませんでした');\n        }\n        // TODO user._docとなっていた書き方を見直し\n        // const { password, updatedAt, ...other } = user._doc;\n        const { password, ...other } = user;\n        return res.status(200).json(other);\n    }\n    catch (err) {\n        return res.status(500).json(err);\n    }\n});\n// Follow user\nrouter.put('/:id/follow', async (req, res) => {\n    if (req.body.userId !== req.params.id) {\n        try {\n            const targetUser = await User_1.UserModel.findById(req.params.id);\n            const sourceUser = await User_1.UserModel.findById(req.body.userId);\n            if (targetUser === null || sourceUser === null) {\n                return res.status(404).json('指定したユーザーが見つかりませんでした');\n            }\n            if (!(targetUser.followers ?? []).includes(req.body.userId)) {\n                await targetUser.updateOne({\n                    $push: {\n                        followers: req.body.userId,\n                    },\n                });\n                await sourceUser.updateOne({\n                    $push: {\n                        followings: req.params.id,\n                    },\n                });\n                return res.status(200).json('Successfully Followed');\n            }\n            else {\n                return res.status(403).json('Already following');\n            }\n        }\n        catch (err) {\n            return res.status(500).json(err);\n        }\n    }\n    else {\n        return res.status(500).json('Can not follow yourself');\n    }\n});\n// Unfollow user\nrouter.put('/:id/unfollow', async (req, res) => {\n    if (req.body.userId !== req.params.id) {\n        try {\n            const targetUser = await User_1.UserModel.findById(req.params.id);\n            const sourceUser = await User_1.UserModel.findById(req.body.userId);\n            if (targetUser === null || sourceUser === null) {\n                return res.status(404).json('指定したユーザーが見つかりませんでした');\n            }\n            if ((targetUser.followers ?? []).includes(req.body.userId)) {\n                await targetUser.updateOne({\n                    $pull: {\n                        followers: req.body.userId,\n                    },\n                });\n                await sourceUser.updateOne({\n                    $pull: {\n                        followings: req.params.id,\n                    },\n                });\n                return res.status(200).json('Successfully Unfollowed');\n            }\n            else {\n                return res.status(403).json('Already unfollowing');\n            }\n        }\n        catch (err) {\n            return res.status(500).json(err);\n        }\n    }\n    else {\n        return res.status(500).json('Can not unfollow yourself');\n    }\n});\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://real-sns/./src/routes/users.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/constants/index.ts\");\nconst auth_1 = __importDefault(__webpack_require__(/*! ./routes/auth */ \"./src/routes/auth.ts\"));\nconst posts_1 = __importDefault(__webpack_require__(/*! ./routes/posts */ \"./src/routes/posts.ts\"));\nconst upload_1 = __importDefault(__webpack_require__(/*! ./routes/upload */ \"./src/routes/upload.ts\"));\nconst users_1 = __importDefault(__webpack_require__(/*! ./routes/users */ \"./src/routes/users.ts\"));\nconst app = (0, express_1.default)();\nconst PORT = 4000;\n// Connect database\nmongoose_1.default\n    .connect(constants_1.MONGO_URL)\n    .then(() => {\n    console.log('connecting DB...');\n})\n    .catch((err) => {\n    console.log(err);\n});\n// Middleware\napp.use((0, cors_1.default)({\n    origin: [constants_1.PROD_CLIENT_SIDE_BASE_URL, constants_1.DEV_CLIENT_SIDE_BASE_URL],\n    methods: ['GET', 'POST', 'PUT', 'DELETE'],\n    credentials: true,\n}));\napp.use('/images', express_1.default.static(path_1.default.join(__dirname, '../src/public/images')));\napp.use(express_1.default.json());\napp.use('/api/users', users_1.default);\napp.use('/api/auth', auth_1.default);\napp.use('/api/posts', posts_1.default);\napp.use('/api/upload', upload_1.default);\napp.get('/', (req, res) => {\n    res.send('Real-SNS Backend');\n});\napp.listen(PORT, () => console.log('server running'));\n\n\n//# sourceURL=webpack://real-sns/./src/server.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;