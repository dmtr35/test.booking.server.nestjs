import { Test, TestingModule } from '@nestjs/testing'
import { AuthService } from './auth.service'
import { CreateUserDto } from '../users/dto/create-user.dto'

describe('AppointmentsService', () => {
  let service: AuthService

  const testCase = {
    email: "user22@ukr.net",
    name: "John",
  } as CreateUserDto


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService)
  });

  it('should be defined', () => {

    describe('registerUser', () => {
      it('registerUser', () => {
        const qq = service.registerUser(testCase)
        console.log('qqqqq::', qq)
        // service.registerUser

        // expect(name).toEqual('John')
        expect(name).toBe('John')
        // expect(email).toEqual('John@ukr.net')
        // expect(phone).toEqual('0954830477')
      })
    })
  });
});
