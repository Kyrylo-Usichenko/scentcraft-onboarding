import OnboardingRepository from '../repository/Onboarding';
import { SetGenderData, SetModeData, SetTimeData } from '../types';

class OnboardingService {
	constructor(private repository: OnboardingRepository) {}

	getUser = async (id: string) => {
		const user = await this.repository.selectUser(id);
		return user;
	};
	setGender = async ({ id, gender }: SetGenderData) => {
		const currentGender = await this.repository.selectGender(id);
		if (currentGender) return await this.repository.updateGender({ id, gender });
		await this.repository.insertGender({ id, gender });
	};
	setTime = async ({ id, time }: SetTimeData) => {
		const currentTime = await this.repository.selectTime(id);

		if (currentTime || currentTime === '') return await this.repository.updateTime({ id, time });

		await this.repository.insertTime({ id, time });
	};
	setMode = async ({ id, mode }: SetModeData) => {
		const currentMode = await this.repository.selectMode(id);
		if (currentMode || currentMode === '') return await this.repository.updateMode({ id, mode });
		await this.repository.insertMode({ id, mode });
	};
}

export default OnboardingService;
