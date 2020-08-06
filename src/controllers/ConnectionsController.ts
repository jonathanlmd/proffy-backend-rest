import { Request, Response, response } from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

export default class ConnectionsController {
	async index(request: Request, reseponse: Response): Promise<Response> {
		const { user_id } = request.body;
		await db('connections').insert({
			user_id,
		});
		return response.status(201);
	}

	async create(request: Request, response: Response): Promise<Response> {
		const totalConnections = await db('connections').count('* as total');

		const { total } = totalConnections[0];

		return response.json({ total });
	}
}
