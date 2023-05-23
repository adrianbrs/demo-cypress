describe("Teste End-to-End", () => {
  it("Teste 2: Verifica item na página", () => {
    // visita a página
    cy.visit("http://localhost:5000/");

    // Verifica se existe o livro desejado
    cy.get("[data-id=3]").should("contain.text", "Design Patterns");
  });

  it("Teste 3: Calcula Frete", () => {
    // visita a página
    cy.visit("http://localhost:5000/");

    // Calcula o frete
    cy.get("div[data-id=3]").within(() => {
      cy.get("input").type("10000-000");
      cy.contains("Calcular Frete").click().then;
      cy.wait(2000);
    });
    cy.get(".swal-text").contains("O frete é: R$");

    // Fecha o pop-up com o preço do frete
    cy.get(".swal-button").click();
  });

  it("Teste 4: Compra de um Livro", () => {
    // visita a página
    cy.visit("http://localhost:5000/");

    // Clica no botão comprar
    cy.contains("Comprar").click();
    cy.wait(2000);

    // Verifica conteúdo do modal
    cy.get(".swal-modal .swal-text").contains(
      "Sua compra foi realizada com sucesso"
    );

    // Fecha o pop-up com o preço do frete
    cy.get(".swal-button").click();
  });
});
