export class ResourceGroup {
    id: string;
    name: string;
    location: string;

    constructor(obj: object) {
        this.id = obj['id'];
        this.name = obj['name'];
        this.location = obj['location'];
    }

    toTerraform(): string {
        return `resource "azurerm_resource_group" "${this.name.toLowerCase()}" {
  name     = "${this.name}"
  location = "${this.location}"
}`;
    }
}
