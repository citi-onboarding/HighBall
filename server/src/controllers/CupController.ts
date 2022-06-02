import { Request, Response } from 'express';
import { Cup } from '@models/Cup';
import { Citi, Crud } from '../global'

export default class CupController implements Crud {

    async create(request: Request, response: Response){
        const {name, description, link} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(name, description, link);
        if(isAnyUndefined) return response.status(400).send();

        const newCup = { name, description, link };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Cup, newCup);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Cup);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: cupFound, message } = await Citi.findByID(Cup, id); 
           
        if(!cupFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Cup, cupFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {name, description, link} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(name, description, link, id);
        if(isAnyUndefined) return response.status(400).send();

        const cupWithUpdatedValues = { name, description, link };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Cup, id, cupWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

}