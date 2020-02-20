it('fails', () => {
  cy.visit('/index.html#!/phones')
  cy.ng('model', '$ctrl.query').as('q')
  function getNames($names) {
    return $names.map(function (index, el) {
      return Cypress.$(el).text()
    }).get()
  }

  cy.get('@q').type('tablet')
  cy.ng('binding', 'phone.name')
    .should(function ($names) {
      expect(getNames($names), 'default order of names').to.deep.eq [
        'Motorola XOOM™ with Wi-Fi',
        'MOTOROLA XOOM™'
      ]
    })
})

