import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import TeamModel from '../database/models/teamModel';

import  Mocks from '../tests/mocks/teamsMock'

// import { Response } from 'superagent';
// import { Model } from 'sequelize';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota /teams', () => {
  it('Testa se a rota /teams retorna todos os times da tabela teams ', async () => {

    sinon.stub(TeamModel, 'findAll').resolves(Mocks.allteamsMock as TeamModel[])

    const response = await chai.request(app).get('/teams')

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(Mocks.allteamsMock as TeamModel[]);
  });

  it('Testa se a rota /teams/id retorna um time pelo seu ID', async () => {
    sinon.stub(TeamModel, 'findByPk').resolves(Mocks.allteamsMock[0] as TeamModel);

    const response = await chai.request(app).get('/teams/1');

    expect(response.body).to.be.deep.equal(Mocks.allteamsMock[0]);
    expect(response.status).to.be.deep.equal(200);

    (TeamModel.findByPk as sinon.SinonStub).restore();
  })
});
