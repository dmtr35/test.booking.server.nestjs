







import test, { describe } from 'node:test'
import { AuthService } from '../auth/auth.service'


describe('authService', () => {
    test('good', () => {
        const {name, email, phone} = AuthService.registerUser('John', 'John@ukr.net', '0954830477')

        expect(name).toEqual('John')
        expect(email).toEqual('John@ukr.net')
        expect(phone).toEqual('0954830477')
    })
})








// // "email": "user22@ukr.net",
// //     "password": "12345",
// //     "name": "user2",
// //     "role": "USER",
// //     "phone": "0954830477"


