 
const express = require('express');
const router = express.Router();
//comentarios

const mysqlConnection  = require('../database.js');

// GET all Employees
router.get('/get', (req, res) => {
    mysqlConnection.query('SELECT * FROM competencias', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  });
// GET An Employee
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM competencias WHERE id_competencia = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An Employee
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM competencias WHERE id_competencia = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employee Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An Employee
router.post('/post', (req, res) => {
  const query = ('INSERT INTO usuarios values ("1",?,?,?,?,?,"Privado")');
  mysqlConnection.query(query,[req.body.nombre, req.body.apellido_p, req.body.apellido_m,req.body.correo, req.body.pass], (err,rows, fields) => {
    if(!err) {
      res.json({status: 'Employeed Saved'});
    } else {
      console.log(err);
    }
  });
});

router.put('/', (req, res) => {
  const {COMPETENCIA} = req.body ;
  console.log(COMPETENCIA);
  const query = ('UPDATE competencias SET COMPETENCIA = "PUTISIMO" WHERE COMPETENCIA="PUTO"');
  mysqlConnection.query(query,[COMPETENCIA], (err,rows, fields) => {
    if(!err) {
      res.json({status: 'Employeed Updated'});
    } else {
      console.log(err);
    }
  });

});

module.exports = router;