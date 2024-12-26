const express = require('express');
const {
  createAdmin,
  loginAdmin,
  getAdmins,
  verifyAdminEmail,
  updateAdmin,
  deleteAdmin,
  getTotalAdminCount,
  signUpAsSellerAdmin,
  getTotalSellerAdminCount,
} = require('../controller/admin.controller');
const authenticateAdmin = require('../middlewares/authenticateAdmin');
const router = express.Router();

// anyone can sign up as a seller admin
router.post('/signUpAsSellerAdmin', signUpAsSellerAdmin);

// only super admin can create an admin
router.post('/create', authenticateAdmin, createAdmin);
router.post('/login', loginAdmin);
router.get('/getAllAdmins', authenticateAdmin, getAdmins);

// TODO: do otp verification for email and then implement this
router.post('/verify-email', authenticateAdmin, verifyAdminEmail);
// TODO: Implement forgot password
// router.post('/forgot-password', authenticateAdmin, forgotPassword);
router.put('/update', authenticateAdmin, updateAdmin);
router.delete('/delete/:adminId', authenticateAdmin, deleteAdmin);
router.get('/all-admin-count', authenticateAdmin, getTotalAdminCount);
router.get('/seller-admin-count', authenticateAdmin, getTotalSellerAdminCount);

module.exports = router;
