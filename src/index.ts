import {ResourceGroup} from "./models/resource-group";
import {Resource} from "./models/resource";

let groups: ResourceGroup[] = require('../tmp/groups.json')
    .map(x => new ResourceGroup(x));
let resources: Resource[] = require('../tmp/resources.json')
    .map(x => new Resource(x));
