// hide the pet
$(document).ready(() => {

  const petOwnerDiv = $('#pet-owners')
  const petNameSpan = $('#owners-pet-name')
  const ownersList = $('#owners-list')
  petOwnerDiv.hide()

  $('.pet-name').on('click', (event) => {
    petOwnerDiv.show()
    const petId = $(event.target).data().id
    petNameSpan.html(event.target.innerText)
    fetch(`/pets/${petId}/owners`)
      .then((data) => {
        console.log('data', data);
        return data
      })
      .then((owners) => {
        console.log('owners', owners);
        ownersList.empty()
        owners.forEach(owner => {
          ownersList.append(`<li>${owner.name}</li>`)
        })
      })
      .catch(console.error)
  })

})
