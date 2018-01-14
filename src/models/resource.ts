export class Resource {
    private obj: object;
    id: string;
    name: string;
    location: string;
    type: string;
    resourceGroup: string;

    constructor(obj: object) {
        this.obj = obj;
        this.id = obj['id'];
        this.name = obj['name'];
        this.type = obj['type'];
        this.location = obj['location'];
        this.resourceGroup = obj['resourceGroup'];
    }

    get appServicePlan(): string {
        if (Object.keys(this.obj).indexOf('tags') >= 0 && this.obj['tags']) {
            let asp = Object.keys(this.obj['tags']).filter(x => x.startsWith('hidden-related'));
            if (asp && asp.length > 0) {
                return asp[0].substring(asp[0].lastIndexOf('/') + 1);
            }
        }
        return undefined;
    }

    isAppService(): boolean {
        return this.type === 'Microsoft.Web/sites';
    }

    isAppServicePlan(): boolean {
        return this.type === 'Microsoft.Web/serverFarms';
    }

    toTerraform(): string {
        if (this.isAppService()) {
            return this.appServicePlan;
        }
        return null;
    }
}
