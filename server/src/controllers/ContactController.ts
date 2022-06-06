import { Request, Response } from 'express';
import { Contact } from '@models/Contact';
import { Citi, Crud } from '../global'

export default class ContactController implements Crud {

    async create(request: Request, response: Response){
        const {icon, name, link} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(icon, name, link);
        if(isAnyUndefined) return response.status(400).send();

        const newContact = { icon, name, link };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Contact, newContact);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Contact);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: contactFound, message } = await Citi.findByID(Contact, id);

        if(!contactFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Contact, contactFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {icon, name, link } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(icon, name, link, id);
        if(isAnyUndefined) return response.status(400).send();

        const contactWithUpdatedValues = { icon, name, link };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Contact, id, contactWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }
}