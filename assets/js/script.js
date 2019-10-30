console.log('PARTE 1');
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.

// creazione oggetto
var firstStudent = {
  'nome' : 'Francesco',
  'cognome' : 'Biava',
  'età' : '23',
};

// ciclo for in con output
for (var key in firstStudent) {
  console.log(key + ': ' + firstStudent[key]);
}



console.log('PARTE 2');
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

// creazione array
var student = [
  {
    'nome' : 'Francesco',
    'cognome' : 'Biava',
    'età' : '23',
  },
  {
    'nome' : 'Marco',
    'cognome' : 'Rispoli',
    'età' : '28',
  },
  {
    'nome' : 'Sofia',
    'cognome' : 'Giacometti',
    'età' : '28',
  }
];

// output array
for (var i = 0; i < 3; i++) {
  console.log('studente ' + (i+1) + ': ', student[i].nome, student[i].cognome);
}



console.log('PARTE 3');
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.