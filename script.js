function test(){
alert("Hello World!")}

fetch('${{ secrets.DATA_API }}/action/findOne', {
  method: 'POST',
  body: JSON.stringify({
    dataSource: 'Cluster0',
    database: 'data',
    collection: 'note',
    filter: {
      text: 'note test'
    }
  }),
  headers: {
    'Content-Type': 'application/json',
    'api-key': '${{ secrets.API_KEY_0 }}'
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error:', error);
});
