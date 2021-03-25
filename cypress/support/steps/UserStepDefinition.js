/* global Given, Then, When */

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

var id;
var email;
var myHeader = {'Authorization': 'Bearer 2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba'}
var myBody;
var responseBody;

Given("{string} an user", (action) => {

    if (action == "create"){
        myBody = {
            "name": "Tailiny Pereira",
            "email": "tailinyk@gmail.com",
            "gender": "Female",
            "status": "Active"
        };
    }else if (action == "update"){
        myBody = {
            "name": "Nome Alterado"
        };
    }else{
        console.log("Requisição não contém body definido!")
    }
})

When("send the {string} waiting response code {string}", (methodRequest, statusCodeExpected) => {

    if (methodRequest == 'DELETE'){
        cy.request({
            method: methodRequest,
            url: '/' + id,
            headers: myHeader,
            }).its('body.code').should('be.equal', parseInt(statusCodeExpected))
            cy.log("Usuário excluído com sucesso")

    }else if (methodRequest == 'PUT'){
        cy.request({
            method: methodRequest,
            url: '/' + id,
            body: myBody,
            headers: myHeader
        }).then((response) => {
            cy.log(response)
            cy.getValidations(response, statusCodeExpected)
            cy.log("Usuário alterado com sucesso")
        })

    }else{
        cy.request({
            method: methodRequest,
            url: '/',
            body: myBody,
            headers: myHeader
        }).then((response) => {
            cy.getValidations(response, statusCodeExpected)
        })
        cy.log("Pesquisa realizada com sucesso")
    }
})

Then("the user was {string} with success", (status) => {

    if (status == 'created'){
        cy.getUserByEmail(email)
            .then(userName => {
                expect(userName).to.eq(responseBody.body.data.name)
            })

    }else if (status == 'updated'){
        cy.getUserByEmail(email)
            .then(userName => {
                expect(userName).to.eq("Nome Alterado")
            })

    }else if (status == 'deleted'){
        cy.request({
            method: 'GET',
            url: '/' + id,
            headers: myHeader,
            failOnStatusCode: false
        }).its('body.code').should('be.equal', 404)

    }else{
        console.log("Status não mapeado!")
    }
})

Cypress.Commands.add('getUserByEmail', searchEmail => {

    cy.request({
        method: 'GET',
        url: '/',
        headers: myHeader,
        qs: {
            email: searchEmail
        }
    }).then(res => {
        console.log(res)
        return res.body.data[0].name
    })
})

Cypress.Commands.add('getValidations', (response, statusCodeExpected) => {
    expect(response.body).to.have.property('code', parseInt(statusCodeExpected))
    id = response.body.data.id
    email = response.body.data.email
    responseBody = response

    cy.log(responseBody.body.data.id)
    cy.log(responseBody.body.data.email)
    cy.log(responseBody.body.data.name)
})