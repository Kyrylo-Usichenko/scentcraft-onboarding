import { XataDatabase } from '@xata.io/drizzle';
import { eq } from 'drizzle-orm';
import { SetGenderData, SetModeData, SetTimeData } from '../types';
import { usersTable } from './database/schemas';

class OnboardingRepository {
	constructor(private db: XataDatabase) {}

	selectUser = async (id: string) => {
		const user = await this.db
			.selectDistinct()
			.from(usersTable)
			.where(eq(usersTable.id, id))
			.execute();
		return user[0];
	};

	selectGender = async (id: string) => {
		const record = await this.db
			.select({
				Gender: usersTable.Gender,
			})
			.from(usersTable)
			.where(eq(usersTable.id, id))
			.execute();

		return record[0].Gender;
	};

	insertGender = async ({ id, gender }: SetGenderData) => {
		await this.db.insert(usersTable).values({
			id,
			Gender: gender,
		});
	};

	updateGender = async ({ id, gender }: SetGenderData) => {
		await this.db
			.update(usersTable)
			.set({
				Gender: gender,
			})
			.where(eq(usersTable.id, id))
			.returning();
	};

	selectTime = async (id: string) => {
		const record = await this.db
			.select({
				Time: usersTable.Time,
			})
			.from(usersTable)
			.where(eq(usersTable.id, id))
			.execute();
		return record[0].Time;
	};
	insertTime = async ({ id, time }: SetTimeData) => {
		console.log(id, time);

		await this.db
			.insert(usersTable)
			.values({
				id,
				Time: time,
			})
			.returning();
	};
	updateTime = async ({ id, time }: SetTimeData) => {
		await this.db
			.update(usersTable)
			.set({
				Time: time,
			})
			.where(eq(usersTable.id, id))
			.returning();
	};
	selectMode = async (id: string) => {
		const record = await this.db
			.select({
				Mode: usersTable.Mode,
			})
			.from(usersTable)
			.where(eq(usersTable.id, id))
			.execute();
		return record[0].Mode;
	};
	insertMode = async ({ id, mode }: SetModeData) => {
		const res = await this.db.insert(usersTable).values({
			id,
			Mode: mode,
		}).returning();
		console.log(res);
	};
	updateMode = async ({ id, mode }: SetModeData) => {
		await this.db
			.update(usersTable)
			.set({
				Mode: mode,
			})
			.where(eq(usersTable.id, id))
			.returning();
	};
}

export default OnboardingRepository;
