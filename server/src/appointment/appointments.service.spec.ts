import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentsService } from './appointments.service'

describe('AppointmentsService', () => {
  let service: AppointmentsService

  let requestMosk = {

  }

  let responseMosk = {

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentsService],
    }).compile();

    service = module.get<AppointmentsService>(AppointmentsService)
  });

  it('should be defined', () => {

    service.find()




    // const result = ['test'];
    // jest.spyOn(service, 'find').mockImplementation(() => result)

    // expect(service).toBeDefined()
    expect(service).toBeDefined()
  });
});
