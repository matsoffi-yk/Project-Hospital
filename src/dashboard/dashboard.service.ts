import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DashboardService {

    async getDashboard(): Promise<any> {
        try {
            const data = {
                "numberOfcars": "1392",
                "carParking": "392",
                "deliveryParking": "392",
                "carVIP": "60"
            };

            if (!data) {
                throw new Error('Not found.');
            }
            else {
                return { success: true, data: data };
            }

        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }
}
