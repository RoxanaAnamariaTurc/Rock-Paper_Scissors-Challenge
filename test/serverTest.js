import { expect } from 'chai';
import chaiHttp from 'chai-http';
import chai from 'chai';
import server from '../server.js';

chai.use(chaiHttp);


describe(`Tests `, () =>
{



    describe(`Tests `, () =>
    {
        it(`Testing something for a get request`, async () =>
        {
            const res = await chai.request(server).get(`/`).send();
            expect(res).to.have.status(200);


        })
    })
});