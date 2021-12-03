const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');
const { toBindingIdentifierName } = require('@babel/types');
const { test, expect, jest } = require('@jest/globals');
const Player = require('../lib/Player');

test('creates a new player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});