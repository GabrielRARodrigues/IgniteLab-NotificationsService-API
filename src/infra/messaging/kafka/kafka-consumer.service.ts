import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['better-troll-8785-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'YmV0dGVyLXRyb2xsLTg3ODUkPikGm89YTdoHvByG_1N_XhZC4gmjNqOZd5Gs2Mw',
          password:
            '3ZJt4pt2fKPmbgh--mnG040SlmsBPYtIWqu84_nnJLMICvipepywgF9pinFkTRJZYk3u8w=='
        },
        ssl: true
      }
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
