export interface CachingInterface {
    get<ReadValue = unknown>(key: string): Promise<ReadValue>;
    set<WriteValue = unknown>(
        key: string,
        value: WriteValue
    ): Promise<WriteValue>;
}
