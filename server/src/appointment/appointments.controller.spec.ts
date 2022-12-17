import { Test, TestingModule } from '@nestjs/testing'
import { AppointmentsController } from './appointments.controller'

describe('PayController', () => {
  let controller: AppointmentsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentsController],
    }).compile()

    controller = module.get<AppointmentsController>(AppointmentsController)
  })


  describe('find', () => {

    it('must return arr', () => {
  
      controller.find
  
      
      expect(controller).toBeDefined()
    })
  })
})
