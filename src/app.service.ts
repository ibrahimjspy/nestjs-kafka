import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}
  //  creating demo messages in topic product
  async getHello() {
    await this.producerService.produce({
      topic: 'product_create',
      messages: [
        {
          value: {
            name: 'demo product',
            description: 'lorem ipsum magnum',
          },
        },
      ],
    });
    return 'Hello World!';
  }
}
