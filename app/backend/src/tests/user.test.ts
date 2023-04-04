import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UserModel from '../database/models/userModel';

import  { validUser, validLogin, invalidLogin, token } from '../tests/mocks/userMock'



chai.use(chaiHttp);

const { expect } = chai;

describe('testa a rota /login', () => {

    afterEach(() => sinon.restore())

    it('testa se retorna o status 200 quando a requisição da certo', async () => {
        const response = await chai.request(app).post('/login').send(validLogin);

			expect(response.status).to.equal(200);
			expect(response.body).to.have.key('token');
    });

    it('testa se retorna o status 401 quando dados de login são inválidos ', async () => {
        sinon.stub(UserModel, 'findOne').resolves(validUser as UserModel);

        const response = await chai.request(app).post('/login').send(invalidLogin);

        expect(response.status).to.be.equal(401)
        expect(response.body.message).to.be.equal('Invalid email or password')
    })

        
      it('testa se retorna status 400 quando tenta logar sem senha', async () => {
        sinon.stub(UserModel, 'findOne').resolves(null);
  const withoutPass = { email: 'lucas@lucas.com', password: ''}
        const response = await chai.request(app).post('/login').send(withoutPass)
  
        expect(response.status).to.be.equal(400)
        expect(response.body.message).to.be.equal('All fields must be filled')
      });

      it('testa se retorna status 400 quando tenta logar sem email', async () => {
        sinon.stub(UserModel, 'findOne').resolves(null);
  const withoutEmail = { email: 'secret_admin', password: ''}
        const response = await chai.request(app).post('/login').send(withoutEmail)
  
        expect(response.status).to.be.equal(400)
        expect(response.body.message).to.be.equal('All fields must be filled')
      });

  });
