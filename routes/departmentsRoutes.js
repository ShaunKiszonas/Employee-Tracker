const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const inputCheck = require('../utils/inputCheck');

// Get all departments
router.get('/departments', (req, res) => {
  const sql = `SELECT departments.*
                FROM departments`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    } console.log(rows);
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Get single department
router.get('/departments/:id', (req, res) => {
  const sql = `SELECT departments.*
               FROM departments  
               WHERE departments.id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});

// Create a department
router.post('/departments', ({ body }, res) => {
  const errors = inputCheck(
    body,
    'id',
    'name'
  );
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO departments (id, name) VALUES (?,?)`;
  const params = [
    body.id,
    body.name
  ];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

// Update a department's name
router.put('/departments/:id', (req, res) => {
  const errors = inputCheck(req.body, 'name');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `UPDATE departments SET name = ? 
               WHERE id = ?`;
  const params = [req.body.name, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Department not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});

// Delete a department
router.delete('/departments/:id', (req, res) => {
  const sql = `DELETE FROM departments WHERE id = ?`;

  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Department not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

module.exports = router;
