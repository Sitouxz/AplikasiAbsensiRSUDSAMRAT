export interface Placement {
    placement_id: number;
    name: string;
}

export interface Employee {
    employeeId: number;
    name: string;
    role: string;
    placement: Placement;
}
