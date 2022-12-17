import { Test } from '@nestjs/testing'
import { AppointmentsController } from '../appointment/appointments.controller'
import { AppointmentsService } from '../appointment/appointments.service'

describe('AppointmentsController', () => {
  let appointmentsController: AppointmentsController
  let appointmentsService: AppointmentsService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [AppointmentsController],
      providers: [AppointmentsService],
    }).compile();

    appointmentsService = module.get<AppointmentsService>(AppointmentsService)
    appointmentsController = module.get<AppointmentsController>(AppointmentsController)
  })


  describe('find', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(appointmentsService, 'find').mockImplementation(() => result)

      expect(await appointmentsService.find()).toBe(result)
    })
  })
})


// import test, { describe } from 'node:test'
// import { AppointmentsService } from '../auth/auth.service'


// describe('appointmentsService', () => {
//     test('good', () => {
//         const {name, email, phone} = AppointmentsService.registerUser('John', 'John@ukr.net', '0954830477')

//         expect(name).toEqual('John')
//         expect(email).toEqual('John@ukr.net')
//         expect(phone).toEqual('0954830477')
//     })
// })








// // "email": "user22@ukr.net",
// //     "password": "12345",
// //     "name": "user2",
// //     "role": "USER",
// //     "phone": "0954830477"


