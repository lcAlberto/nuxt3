export interface ApiRequestDefault {
    request(
        url: string,
        method?: string,
        data?: Record<string, any>
    ): Promise<any>;
}
