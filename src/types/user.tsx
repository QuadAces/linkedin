export interface UserEducation {
    name : string,
    year_period : string,
    URL? : string,
}

export interface UserExperience {
    name : string,
    role : string,
    year_period : string,
    URL? : string,
}

export interface UserOtherContacts {
    type : string,
    data : string
}

export interface UserContacts {
    phoneNumber: string,
    email : string,
    other : UserOtherContacts[],
}

export interface UserProfile {
    name : string,
    imgsrc? : string,
    location : string,
    about : string,
    email : string ,
    phone : string,
    byline : string,
    educations? : UserEducation[],
    experiences? : UserExperience[],
}