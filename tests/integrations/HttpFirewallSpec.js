'use scrict';

var expect = require('chai').expect;
var sinon = require('sinon');
var HttpFirewall = require('./../../src/HttpFirewall');

describe('HttpFirewall', function () {
    var firewallConfig = {
        foo_area: {
            method: 'GET',
            path: '/foo',
            roles: ['CUSTOMER', 'PRODUCT_MANAGER']
        },

        foo_area_by_post: {
            method: 'POST',
            path: '/foo',
            roles: ['CUSTOMER']
        }
    };

    it('should match the a path with an HTTP verbs', function () {
        var hasRoleStub = sinon.stub();
        hasRoleStub.throws(new Error('This role is not managed by the test.'));
        hasRoleStub.withArgs('PRODUCT_MANAGER').returns(true);
        hasRoleStub.withArgs('CUSTOMER').returns(false);

        var authenticationManagerMock = { hasRole: hasRoleStub };

        var sut = new HttpFirewall(authenticationManagerMock, firewallConfig);

        expect(sut.hasAccess('GET', '/foo')).to.be.true;
        expect(sut.hasAccess('POST', '/foo')).to.be.false;
        expect(sut.hasAccess('OPTIONS', '/foo')).to.be.undefined;
    });
});