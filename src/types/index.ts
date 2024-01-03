type OnboardingReqBody = {
	id?: string;
};
type OnboardingData = {
	id: string;
};
export interface SetGenderReqBody extends OnboardingReqBody {
	gender?: Gender;
}
export interface SetTimeReqBody extends OnboardingReqBody {
	time?: Time;
}
export interface SetModeReqBody extends OnboardingReqBody {
	mode?: Mode;
}

export interface SetGenderData extends OnboardingData {
	gender: Gender;
}
export interface SetTimeData extends OnboardingData {
	time: Time;
}
export interface SetModeData extends OnboardingData {
	mode: Mode;
}

type Gender = 'male' | 'female' | 'unisex';
type Time = 'daylight' | 'moonlight';
type Mode = 'sexy' | 'elegant' | 'relaxed' | 'fresh';
