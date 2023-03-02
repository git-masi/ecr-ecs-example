import { faker } from '@faker-js/faker';

export function makeTransaction() {
    return {
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        total: faker.commerce.price(),
        date: faker.date.recent(),
    }
}