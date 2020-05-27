import { Injectable, NotFoundException } from '@nestjs/common';
import { Dashboard } from './dashboard.entity'

@Injectable()
export class DashboardService {
    DataArr: Dashboard[] = [
        {
            "id": 1,
            "numberOfcars": "100",
            "carParking": "200",
            "deliveryParking": "300",
            "carVIP": "20"
        },
        {
            "id": 2,
            "numberOfcars": "100",
            "carParking": "200",
            "deliveryParking": "300",
            "carVIP": "20"
        },
        {
            "id": 3,
            "numberOfcars": "100",
            "carParking": "200",
            "deliveryParking": "300",
            "carVIP": "20"
        }
    ]

    async getDashboard(): Promise<any> {
        try {
            if (!this.DataArr) {
                throw new Error('Not found.');
            }
            else {
                return this.DataArr;
            }

        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }

    async getIdDashboard(id:number): Promise<any> {
        try {
            if (!this.DataArr[id-1]) {
                throw new Error('Not found.');
            }
            else {
                const index = this.DataArr.findIndex(data => data.id === id)
                return this.DataArr[id-1];
            }

        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }

    async postDashboard(addNumberOfcars: string): Promise<any> {
        try {
            const addData = new Dashboard();
            addData.id = this.DataArr.length > 0 ? this.DataArr[this.DataArr.length - 1].id + 1 : 0;
            addData.numberOfcars = addNumberOfcars
            this.DataArr.push(addData)

            if (!this.DataArr) {
                throw new Error('Not found.');
            }
            else {
                return `Created new id: ${addData.id}`
            }

        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }

    async deleteDashboard(id: number): Promise<any> {
        try {
            const found = this.DataArr.find(data => data.id === id)

            if (!found) {
                throw new Error(`id: ${id} Not found.`);
            }
            else {
                this.DataArr = this.DataArr.filter(data => data.id !== id)
                if (typeof id == 'number') {
                    console.log(`${id} is a number`)
                }
                if (typeof +id == 'number') {
                    console.log(`${+id} + is a number`)
                }
                return `Deleted id: ${id} , ${+id}`;
            }
        } catch (error) {
            throw new NotFoundException({
                succress: false,
                error: error.message
            })
        }
    }

    async putDashboard(id: number, updateNumberOfcars: string): Promise<any> {
        try {
            const found = this.DataArr.find(data => data.id === id)

            if (!found) {
                throw new Error(`id: ${id} Not found.`);
            }
            else {
                const index: number = this.DataArr.findIndex(data => data.id === id)
                this.DataArr[index].numberOfcars = updateNumberOfcars
                return `Updated id: ${id}`
            }
        } catch (error) {
            throw new NotFoundException({
                succress: false,
                error: error.message
            })
        }
    }

    async patchDashboard(id: number, updateNumberOfcars: string): Promise<any> {
        try {
            const found = this.DataArr.find(data => data.id === id)

            if (!found) {
                throw new Error(`id: ${id} Not found.`);
            }
            else {
                const index: number = this.DataArr.findIndex(data => data.id === id)
                this.DataArr[index].numberOfcars = updateNumberOfcars
                return `Updated id: ${id}`
            }
        } catch (error) {
            throw new NotFoundException({
                succress: false,
                error: error.message
            })
        }
    }
}
