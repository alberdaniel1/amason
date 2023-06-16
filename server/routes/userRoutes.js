const router = require('express').Router();

const {
  authUser,
  registerUser,
  getUserProfile,
  logoutUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
  getUserByID,
} = require ('../controllers/userController.js');
const { protect, admin } = require('../middleware/authMiddleware.js');

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router
.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserByID).put(protect, admin, updateUser);

module.exports = router;