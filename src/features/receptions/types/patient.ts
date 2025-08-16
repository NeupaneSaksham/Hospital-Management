export interface Patient {
    id: string;
    name: string;
    phone: string;
    doctor: string;
    disease: string;
    appointment_date: string;
    appointement_type: string;
    status: string;
    email?: string;
    bloodType?: string;
    age?: number;
    gender?: string;
    primaryDoctor?: string;
}