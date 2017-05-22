/**
 * About data model
 */

export interface IAboutPage {
    title: string;
    body: string;
}
export class AboutPage implements IAboutPage {
    title: string;
    body: string;

    constructor(title: string) {
        this.title = title;
    }
}

/**
 * Notification data model
 */

export interface ISchoolNotification {
    title: string;
    body: string;
}

export class SchoolNotification implements ISchoolNotification {
    title: string;
    body: string;
}

/**
 * News data model
 */

export interface ISchoolNews {
    title: string;
    body: string;
}

export class SchoolNews implements ISchoolNews {
    title: string;
    body: string;
}

/**
 * Coordinates data model
 */

export interface ISchoolCoordinates {
    lat: number;
    lng: number;
}

export class SchoolCoordinates implements ISchoolCoordinates {
    lat: number;
    lng: number;
}

/**
 * Upload data model
 */

export class Upload {
    $key: string;
    file: File;
    name: string;
    type: string;
    url: string;
    progress: number;
    createdAt: Date = new Date();

    constructor(file: File) {
        this.file = file;
    }
}

/**
 *Job application data model
 */

export class JobApplication {
    fullName: string;
    religion: string;
    sex: string;
    residentIn: string;
    city: string;
    dateOfBirth: Date;
    maritalStatus: string;
    jobTitle: string;
    qualification: string;
    eduSpecialization: string;
    yearsOfExperience: string;
    mobile: string;
    email: string;
    createdAt: string;
}

/**
 * Elearining Form Model
 */

export class Elearning {
    title: string;
    body: string;

    constructor(title: string) {
        this.title = title;
    }
}

/**
 * contact-us Form Model
 */

export class ContactUs {
    title: string;
    body: string;

    constructor(title: string) {
        this.title = title;
    }
}