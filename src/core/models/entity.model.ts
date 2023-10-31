export class Entity<T> {
    id?: T ;
    createdAt: string | undefined;
    updatedAt: string | null | undefined;
    isDeleted: boolean | undefined;
}