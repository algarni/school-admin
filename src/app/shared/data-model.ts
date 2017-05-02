/**
 * About data model
 */

export interface IAboutPage{
    title: string;
    body: string;
}
export class AboutPage implements IAboutPage{
    title: string;
    body: string;

    constructor(title: string) {
        this.title = title;
    }
}

/**
 * Notification data model
 */

export interface ISchoolNotification{
    title: string;
    body: string;
}

export class SchoolNotification implements ISchoolNotification{
    title: string;
    body: string;
}