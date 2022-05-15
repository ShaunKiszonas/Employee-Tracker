const express = require('express');
const router = express.router();

router.use(require('./departmentRoutes'));
router.use(require('./positionRoutes'));
router.use(require('./employeeRoutes'));

mobile.exports = router;