"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const event_entity_1 = require("./events/event.entity");
const events_module_1 = require("./events/events.module");
const app_japan_service_1 = require("./app.japan.service");
const app_dummy_1 = require("./app.dummy");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: 'example',
                database: 'nest-events',
                entities: [event_entity_1.Event],
                synchronize: true
            }),
            events_module_1.EventsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [{
                provide: app_service_1.AppService,
                useClass: app_japan_service_1.AppJapanService
            }, {
                provide: 'APP_NAME',
                useValue: 'Nest Events Backend'
            }, {
                provide: 'MESSAGE',
                inject: [app_dummy_1.AppDummy],
                useFactory: (app) => `${app.dummy()} Factory!`
            }, app_dummy_1.AppDummy],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map