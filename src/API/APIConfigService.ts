export class APIConfigService {
    private static isMock = false;
    private static isLoggerActive = false;

    static setMock(mock: boolean) {
        APIConfigService.isMock = mock;
    }

    static getIsMock(): boolean {
        return APIConfigService.isMock;
    }

    static setIsLoggerActive(isLoggerActive: boolean) {
        APIConfigService.isLoggerActive = isLoggerActive;
    }

    static getIsLoggerActive(): boolean {
        return APIConfigService.isLoggerActive;
    }
}
