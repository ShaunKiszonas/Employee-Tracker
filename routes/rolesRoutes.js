const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const inputCheck = require('../utils/inputCheck');

// Get the roles
router.get('/roles', (req, res) => {
  const sql = `SELECT roles.*
                COUNT(candidate_id) 
                AS count FROM votes 
                LEFT JOIN candidates ON votes.candidate_id = candidates.id 
                LEFT JOIN parties ON candidates.party_id = parties.id 
                GROUP BY candidate_id 
                ORDER BY count DESC`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Create a roles record
router.post('/roles', ({ body }, res) => {
  // Data validation
  const errors = inputCheck(body, 'department_id', 'employee_id');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO votes (department_id, employee_id) VALUES (?,?)`;
  const params = [body.department_id, body.employee_id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body,
      changes: result.affectedRows
    });
  });
});

module.exports = router;
