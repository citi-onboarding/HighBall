import { Request, Response } from 'express';
import { Purpose } from '@models/Purpose';
import { Citi, Crud } from '../global'

let list = [];

export default class PurposeController implements Crud {

    async create(request: Request, response: Response){
        const {purpose, description} = request.body;
        list.push(purpose);
        
        const isAnyUndefined = Citi.areValuesUndefined(purpose, description);
        if(isAnyUndefined || list.length>1) return response.status(400).send();

        const newPurpose = { purpose, description };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Purpose, newPurpose);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Purpose);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: purposeFound, message } = await Citi.findByID(Purpose, id); 
           
        if(!purposeFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Purpose, purposeFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {purpose, description } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(purpose, description, id);
        if(isAnyUndefined) return response.status(400).send();

        const purposeWithUpdatedValues = { purpose, description };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Purpose, id, purposeWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}
