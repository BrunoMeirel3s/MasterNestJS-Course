import { Inject } from "@nestjs/common";

export class AppJapanService {
  constructor(
    @Inject("APP_NAME")
    private readonly name: string,
    @Inject('MESSAGE')
    private readonly message: string
  ) {}
  getHello(): string {
    return `こんにちは世界! from ${this.name}, ${this.message}`;
  }
}
