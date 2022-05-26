import { Request, Response } from 'express';
import { quote } from '@models/quote';
import { Citi, Crud } from '../global'

export default class QuoteController implements Crud {

    async create(request: Request, response: Response){
        const {quote, description, link} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(quote, description, link);
        if(isAnyUndefined) return response.status(400).send();

        const newUser = { quote, description, link };
        const {httpStatus, message} = await Citi.insertIntoDatabase(quote, newQuote);

        return response.status(httpStatus).send({ message });
    }

  