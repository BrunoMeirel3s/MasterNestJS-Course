import { CreateEventDto } from "./create-event.dto";
import { UpdateEventDto } from "./update-event.dto";
import { Event } from "./event.entity";
import { Repository } from "typeorm";
export declare class EventsController {
    private readonly repository;
    constructor(repository: Repository<Event>);
    private events;
    findAll(): Promise<Event[]>;
    practice(): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    create(input: CreateEventDto): Promise<{
        when: Date;
        name: string;
        description: string;
        address: string;
    } & Event>;
    update(id: any, input: UpdateEventDto): Promise<{
        when: Date;
        name: string;
        description: string;
        address: string;
        id: number;
    } & Event>;
    remove(id: any): Promise<void>;
}
