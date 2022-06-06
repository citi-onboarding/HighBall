import { Request, Response } from 'express';
import { quote } from '@models/Quote';
import { Citi, Crud } from '../global'

export default class QuoteController implements Crud {

    async create(request: Request, response: Response){
        const {sentence, description, link} = request.body;

    const {value: quoteFound} = await Citi.findByID(Quote,"1");
        const isAnyUndefined = Citi.areValuesUndefined(quote, description);
        if(isAnyUndefined || quoteFound) return response.status(400).send();

        const newQuote = { sentence, description, link };
        const {httpStatus, message} = await Citi.insertIntoDatabase(quote, newQuote);

        return response.status(httpStatus).send({ message });
    }

  
    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(quote);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: quoteFound, message } = await Citi.findByID(quote, id); 
           
        if(!quoteFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(quote, quoteFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { sentence, description, link } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(sentence, description, link, id);
        if(isAnyUndefined) return response.status(400).send();

        const userWithUpdatedValues = { sentence, description, link };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(quote, id, userWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}
  
