"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const auth_1 = __importDefault(require("./routes/auth"));
const posts_1 = __importDefault(require("./routes/posts"));
const upload_1 = __importDefault(require("./routes/upload"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
const PORT = 4000;
// Connect database
mongoose_1.default
    .connect(constants_1.MONGO_URL)
    .then(() => {
    console.log('connecting DB...');
})
    .catch((err) => {
    console.log(err);
});
// Middleware
app.use((0, cors_1.default)({
    origin: [constants_1.PROD_CLIENT_SIDE_BASE_URL, constants_1.DEV_CLIENT_SIDE_BASE_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use('/images', express_1.default.static(path_1.default.join(__dirname, '../src/public/images')));
app.use(express_1.default.json());
app.use('/api/users', users_1.default);
app.use('/api/auth', auth_1.default);
app.use('/api/posts', posts_1.default);
app.use('/api/upload', upload_1.default);
app.get('/', (req, res) => {
    res.send('Real-SNS Backend');
});
app.listen(PORT, () => console.log('server running'));
