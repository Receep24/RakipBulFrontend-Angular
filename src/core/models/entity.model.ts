export class Entity<T> {
    id: T | undefined;
    createdAt: string | undefined;
    updatedAt: string | null | undefined;
    isDeleted: boolean | undefined;
}