export type Biome = 'ocean'|'coast'|'grassland'|'forest'|'rainforest'|'desert'|'tundra'|'mountain'|'wetland';
export type Diet = 'herbivore'|'predator'|'omnivore';
export interface Genome { size:number; speed:number; fertility:number; lifespan:number; preferredTemperature:number; preferredMoisture:number; diet:Diet; aggression:number; social:number; intelligence:number; mutationRate:number; migration:number }
export interface Species { id:string; name:string; parentId:string|null; birthYear:number; extinctionYear:number|null; genome:Genome; population:number; regions:number[] }
export interface Cell { elevation:number; temperature:number; moisture:number; biome:Biome; fertility:number; water:number; resources:number; populations:Record<string,number> }
export interface Region { id:number; name:string; x:number; y:number; biome:Biome; temperature:number; moisture:number }
export interface Event { id:string; year:number; type:string; importance:number; title:string; description:string; speciesIds:string[]; regionIds:number[]; civilisationIds:string[]; metadata:Record<string,number|string> }
export interface Civilisation { id:string; speciesId:string; population:number; territory:number[]; food:number; technology:number; stability:number }
export interface World { meta:{seed:number; year:number; generation:number; engineVersion:string; lastEvolved:string}; grid:{width:number;height:number;cells:Cell[]}; species:Species[]; regions:Region[]; civilisations:Civilisation[]; climateDrift:number; recentEvents:Event[] }
