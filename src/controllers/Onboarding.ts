import { Context } from 'hono';
import OnboardingService from '../service/Onboarding';
import { SetGenderReqBody, SetModeReqBody, SetTimeReqBody } from '../types';

class OnboardingController {
	constructor(private service: OnboardingService) {}

	getUser = async (c: Context) => {
		const id = c.req.param('id');
		if (!id || typeof id !== 'string') return c.json({ message: 'id is missing' }, 400);

		const user = await this.service.getUser(id);

		if (!user) return c.json({ message: 'User not found' }, 404);
		return c.json({ user }, 200);
	};

	setGender = async (c: Context) => {
		const body = (await c.req.json()) as SetGenderReqBody;
		const { id, gender } = body;
		if (!id || !gender || typeof id !== 'string' || typeof gender !== 'string')
			return c.json({ message: 'id or gender is missing' }, 400);
		await this.service.setGender({
			id,
			gender,
		});
		return c.json({ message: 'Gender set successfully' }, 200);
	};

	setTime = async (c: Context) => {
		const body = (await c.req.json()) as SetTimeReqBody;
		const { id, time } = body;
		if (!id || !time || typeof id !== 'string' || typeof time !== 'string')
			return c.json({ message: 'id or time is missing' }, 400);
		await this.service.setTime({
			id,
			time,
		});
		return c.json({ message: 'Time set successfully' }, 200);
	};
	setMode = async (c: Context) => {
		const body = (await c.req.json()) as SetModeReqBody;
		const { id, mode } = body;
		if (!id || !mode || typeof id !== 'string' || typeof mode !== 'string')
			return c.json({ message: 'id or "mode" is missing' }, 400);
		await this.service.setMode({
			id,
			mode,
		});
		return c.json({ message: 'Time set successfully' }, 200);
	};
}

export default OnboardingController;
