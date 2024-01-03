import { Hono } from 'hono';
import OnboardingController from '../controllers/Onboarding';
import OnboardingRepository from '../repository/Onboarding';
import { db } from '../repository/database/db';
import OnboardingService from '../service/Onboarding';

const onboarding = new Hono();

const repository = new OnboardingRepository(db);
const service = new OnboardingService(repository);
const controller = new OnboardingController(service);

onboarding.get('/:id', controller.getUser);
onboarding.post('/gender', controller.setGender);
onboarding.post('/time', controller.setTime);
onboarding.post('/mode', controller.setMode);

export default onboarding;
