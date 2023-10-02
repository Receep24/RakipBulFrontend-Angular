export class Entity<T> {
    Id: T | undefined;
    CreatedAt: string | undefined;
    UpdatedAt: string | null | undefined;
    IsDeleted: boolean | undefined;
}