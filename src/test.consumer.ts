import { Injectable, OnModuleInit } from '@nestjs/common';
import { createProduct } from './graphql/createProduct';
import { updateProduct } from './graphql/updateProduct';
import { ConsumerService } from './kafka/consumer.service';

@Injectable()
export class TestConsumer implements OnModuleInit {
  constructor(private readonly consumerService: ConsumerService) {}

  async onModuleInit() {
    await this.consumerService.consume(
      // subscribing to topic
      { topic: 'product_create' },
      {
        eachMessage: async ({ topic, partition, message }) => {
          // consuming product payload message sent by debezium
          console.log({
            value: message.value.toString(),
            topic: topic.toString(),
            partition: partition.toString(),
          });
          // creating product through graphql
          createProduct(message.value);
        },
      },
    );
    await this.consumerService.consume(
      // subscribing to topic
      { topic: 'product_update' },
      {
        eachMessage: async ({ topic, partition, message }) => {
          // consuming product payload message sent by debezium
          console.log({
            value: message.value.toString(),
            topic: topic.toString(),
            partition: partition.toString(),
          });
          // creating product through graphql
          updateProduct(message.value);
        },
      },
    );
  }
}
