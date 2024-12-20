/// <reference path="./globals.d.ts" />
/// <reference path="./registries.d.ts" />
declare const ServerEvents: {
    /**
     * @at *server*
    */
recipes(handler: (event: Internal.RecipesEventJS) => void):void,
    /**
     * @at *server*
    */
specialRecipeSerializers(handler: (event: Internal.SpecialRecipeSerializerManager) => void):void,
    /**
     * @at *server*
    */
compostableRecipes(handler: (event: Internal.CompostableRecipesEventJS) => void):void,
    /**
     * @at *server*
    */
entityLootTables(handler: (event: Internal.EntityLootEventJS) => void):void,
    /**
     * @at *server*
    */
tick(handler: (event: Internal.ServerEventJS) => void):void,
    /**
     * @at *server*
     * 
     * @cancellable
    */
command(extra: string, handler: (event: Internal.CommandEventJS) => void):void,
command(handler: (event: Internal.CommandEventJS) => void):void,
    /**
     * @at *server*
    */
blockLootTables(handler: (event: Internal.BlockLootEventJS) => void):void,
tags(type: "recipe_serializer", handler: (event: TagEvent.RecipeSerializer) => void): void
tags(type: "minecraft:recipe_serializer", handler: (event: TagEvent.RecipeSerializer) => void): void
tags(type: "banner_pattern", handler: (event: TagEvent.BannerPattern) => void): void
tags(type: "minecraft:banner_pattern", handler: (event: TagEvent.BannerPattern) => void): void
tags(type: "potion", handler: (event: TagEvent.Potion) => void): void
tags(type: "minecraft:potion", handler: (event: TagEvent.Potion) => void): void
tags(type: "damage_type", handler: (event: TagEvent.DamageType) => void): void
tags(type: "minecraft:damage_type", handler: (event: TagEvent.DamageType) => void): void
tags(type: "instrument", handler: (event: TagEvent.Instrument) => void): void
tags(type: "minecraft:instrument", handler: (event: TagEvent.Instrument) => void): void
tags(type: "enchantment", handler: (event: TagEvent.Enchantment) => void): void
tags(type: "minecraft:enchantment", handler: (event: TagEvent.Enchantment) => void): void
tags(type: "sound_event", handler: (event: TagEvent.SoundEvent) => void): void
tags(type: "minecraft:sound_event", handler: (event: TagEvent.SoundEvent) => void): void
tags(type: "block", handler: (event: TagEvent.Block) => void): void
tags(type: "minecraft:block", handler: (event: TagEvent.Block) => void): void
tags(type: "entity_type", handler: (event: TagEvent.EntityType) => void): void
tags(type: "minecraft:entity_type", handler: (event: TagEvent.EntityType) => void): void
tags(type: "game_event", handler: (event: TagEvent.GameEvent) => void): void
tags(type: "minecraft:game_event", handler: (event: TagEvent.GameEvent) => void): void
tags(type: "worldgen/placed_feature", handler: (event: TagEvent.PlacedFeature) => void): void
tags(type: "minecraft:worldgen/placed_feature", handler: (event: TagEvent.PlacedFeature) => void): void
tags(type: "painting_variant", handler: (event: TagEvent.PaintingVariant) => void): void
tags(type: "minecraft:painting_variant", handler: (event: TagEvent.PaintingVariant) => void): void
tags(type: "fluid", handler: (event: TagEvent.Fluid) => void): void
tags(type: "minecraft:fluid", handler: (event: TagEvent.Fluid) => void): void
tags(type: "worldgen/structure_set", handler: (event: TagEvent.StructureSet) => void): void
tags(type: "minecraft:worldgen/structure_set", handler: (event: TagEvent.StructureSet) => void): void
tags(type: "enhancedcelestials:lunar/event", handler: (event: TagEvent.Event) => void): void
tags(type: "point_of_interest_type", handler: (event: TagEvent.PointOfInterestType) => void): void
tags(type: "minecraft:point_of_interest_type", handler: (event: TagEvent.PointOfInterestType) => void): void
tags(type: "worldgen/world_preset", handler: (event: TagEvent.WorldPreset) => void): void
tags(type: "minecraft:worldgen/world_preset", handler: (event: TagEvent.WorldPreset) => void): void
tags(type: "worldgen/biome", handler: (event: TagEvent.Biome) => void): void
tags(type: "minecraft:worldgen/biome", handler: (event: TagEvent.Biome) => void): void
tags(type: "mob_effect", handler: (event: TagEvent.MobEffect) => void): void
tags(type: "minecraft:mob_effect", handler: (event: TagEvent.MobEffect) => void): void
tags(type: "worldgen/flat_level_generator_preset", handler: (event: TagEvent.FlatLevelGeneratorPreset) => void): void
tags(type: "minecraft:worldgen/flat_level_generator_preset", handler: (event: TagEvent.FlatLevelGeneratorPreset) => void): void
tags(type: "item", handler: (event: TagEvent.Item) => void): void
tags(type: "minecraft:item", handler: (event: TagEvent.Item) => void): void
tags(type: "cat_variant", handler: (event: TagEvent.CatVariant) => void): void
tags(type: "minecraft:cat_variant", handler: (event: TagEvent.CatVariant) => void): void
tags(type: "attribute", handler: (event: TagEvent.Attribute) => void): void
tags(type: "minecraft:attribute", handler: (event: TagEvent.Attribute) => void): void
tags(type: "worldgen/structure", handler: (event: TagEvent.Structure) => void): void
tags(type: "minecraft:worldgen/structure", handler: (event: TagEvent.Structure) => void): void
tags(type: "dimension_type", handler: (event: TagEvent.DimensionType) => void): void
tags(type: "minecraft:dimension_type", handler: (event: TagEvent.DimensionType) => void): void
tags(type: "moonlight:soft_fluids", handler: (event: TagEvent.SoftFluids) => void): void
    /**
     * @at *server*
    */
loaded(handler: (event: Internal.ServerEventJS) => void):void,
    /**
     * @at *server*
     * 
     * @cancellable
    */
customCommand(extra: string, handler: (event: Internal.CustomCommandEventJS) => void):void,
customCommand(handler: (event: Internal.CustomCommandEventJS) => void):void,
    /**
     * @at *server*
    */
giftLootTables(handler: (event: Internal.GiftLootEventJS) => void):void,
    /**
     * @at *server*
    */
commandRegistry(handler: (event: Internal.CommandRegistryEventJS) => void):void,
    /**
     * @at *server*
    */
afterRecipes(handler: (event: Internal.AfterRecipesLoadedEventJS) => void):void,
    /**
     * @at *server*
    */
chestLootTables(handler: (event: Internal.ChestLootEventJS) => void):void,
    /**
     * @at *server*
    */
unloaded(handler: (event: Internal.ServerEventJS) => void):void,
    /**
     * @at *server*
    */
lowPriorityData(handler: (event: Internal.DataPackEventJS) => void):void,
    /**
     * @at *server*
    */
fishingLootTables(handler: (event: Internal.FishingLootEventJS) => void):void,
    /**
     * @at *server*
    */
genericLootTables(handler: (event: Internal.GenericLootEventJS) => void):void,
    /**
     * @at *server*
    */
highPriorityData(handler: (event: Internal.DataPackEventJS) => void):void,
};
declare const ExposureEvents: {
    /**
     * @at *server*
    */
frameAdded(handler: (event: Internal.FrameAddedEventJS) => void):void,
    /**
     * @at *server, client*
     * 
     * @cancellable
    */
shutterOpening(handler: (event: Internal.ShutterOpeningEventJS) => void):void,
    /**
     * @at *server*
    */
modifyFrameData(handler: (event: Internal.ModifyFrameDataEventJS) => void):void,
};
declare const FTBTeamsEvents: {
    /**
     * @at *server*
    */
playerJoinedParty(handler: (event: Internal.PlayerTeamEventJS) => void):void,
    /**
     * @at *server*
    */
playerLeftParty(handler: (event: Internal.PlayerTeamEventJS) => void):void,
};
declare const TaCZStartupEvents: {
    /**
     * @at *startup*
    */
attachmentDataLoad(handler: (event: Internal.AttachmentDataLoadEvent) => void):void,
    /**
     * @at *startup*
    */
attachmentIndexLoad(handler: (event: Internal.AttachmentIndexLoadEvent) => void):void,
    /**
     * @at *startup*
    */
gunIndexLoad(handler: (event: Internal.GunIndexLoadEvent) => void):void,
    /**
     * @at *startup*
    */
gunDataLoad(handler: (event: Internal.GunDataLoadEvent) => void):void,
    /**
     * @at *startup*
    */
attachmentTagsLoad(handler: (event: Internal.AttachmentTagsLoadEvent) => void):void,
    /**
     * @at *startup*
    */
ammoIndexLoad(handler: (event: Internal.AmmoIndexLoadEvent) => void):void,
    /**
     * @at *startup*
    */
recipeLoadEnd(handler: (event: Internal.RecipeLoadEndEvent) => void):void,
    /**
     * @at *startup*
    */
recipeLoadBegin(handler: (event: Internal.RecipeLoadBeginEvent) => void):void,
    /**
     * @at *startup*
    */
recipeLoad(handler: (event: Internal.RecipeLoadEvent) => void):void,
};
declare const WorldgenEvents: {
    /**
     * @at *startup*
    */
add(handler: (event: Internal.AddWorldgenEventJS) => void):void,
    /**
     * @at *startup*
    */
remove(handler: (event: Internal.RemoveWorldgenEventJS) => void):void,
};
declare const NetworkEvents: {
    /**
     * Invoked when a network packet is received.
     * 
     * Note that the behaviour of this event is depending on the **script type**.
     * 
     * In `server_scripts`, this event is invoked on the server side when a packet is received from a client.
     * 
     * In `client_scripts`, this event is invoked on the client side when a packet is received from the server.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
dataReceived(extra: string, handler: (event: Internal.NetworkEventJS) => void):void,
};
declare const LycheeEvents: {
    /**
     * @at *startup*
     * 
     * @cancellable
    */
customAction(extra: string, handler: (event: Internal.CustomActionEventJS) => void):void,
customAction(handler: (event: Internal.CustomActionEventJS) => void):void,
    /**
     * @at *startup*
     * 
     * @cancellable
    */
customCondition(extra: string, handler: (event: Internal.CustomConditionEventJS) => void):void,
customCondition(handler: (event: Internal.CustomConditionEventJS) => void):void,
    /**
     * @at *client*
     * 
     * @cancellable
    */
clickedInfoBadge(extra: string, handler: (event: Internal.ClickedInfoBadgeEventJS) => void):void,
clickedInfoBadge(handler: (event: Internal.ClickedInfoBadgeEventJS) => void):void,
};
declare const JEIEvents: {
    /**
     * @at *client*
    */
hideItems(handler: (event: Internal.HideJEIEventJS<any>) => void):void,
    /**
     * @at *client*
    */
addFluids(handler: (event: Internal.AddJEIEventJS<any>) => void):void,
    /**
     * @at *client*
    */
hideFluids(handler: (event: Internal.HideJEIEventJS<any>) => void):void,
    /**
     * @at *client*
    */
removeRecipes(handler: (event: Internal.RemoveJEIRecipesEvent) => void):void,
    /**
     * @at *client*
    */
removeCategories(handler: (event: Internal.RemoveJEICategoriesEvent) => void):void,
    /**
     * @at *client*
    */
information(handler: (event: Internal.InformationJEIEventJS) => void):void,
    /**
     * @at *client*
    */
hideCustom(handler: (event: Internal.HideCustomJEIEventJS) => void):void,
    /**
     * @at *client*
    */
subtypes(handler: (event: Internal.JEISubtypesEventJS) => void):void,
    /**
     * @at *client*
    */
addItems(handler: (event: Internal.AddJEIEventJS<any>) => void):void,
};
declare const PlayerEvents: {
    /**
     * Invoked when a player sends a chat message.
     * 
     * If cancelled (`PlayerEvents.chat`), the message will not be sent.
     * 
     * @at *server*
    */
decorateChat(handler: (event: Internal.PlayerChatDecorateEventJS) => void):void,
    /**
     * Invoked when a player opens a chest.
     * 
     * Same as `PlayerEvents.inventoryOpened`, but only for chests.
     * 
     * @at *server, client*
    */
chestOpened(extra: Internal.MenuType_<any>, handler: (event: Internal.ChestEventJS) => void):void,
chestOpened(handler: (event: Internal.ChestEventJS) => void):void,
    /**
     * Invoked when a player gets an advancement.
     * 
     * @at *server*
     * 
     * @cancellable
    */
advancement(extra: string, handler: (event: Internal.PlayerAdvancementEventJS) => void):void,
advancement(handler: (event: Internal.PlayerAdvancementEventJS) => void):void,
    /**
     * Invoked when a player sends a chat message.
     * 
     * If cancelled (`PlayerEvents.chat`), the message will not be sent.
     * 
     * @at *server*
     * 
     * @cancellable
    */
chat(handler: (event: Internal.PlayerChatDecorateEventJS) => void):void,
    /**
     * Invoked when a player opens a chest.
     * 
     * Same as `PlayerEvents.inventoryOpened`, but only for chests.
     * 
     * @at *server, client*
    */
chestClosed(extra: Internal.MenuType_<any>, handler: (event: Internal.ChestEventJS) => void):void,
chestClosed(handler: (event: Internal.ChestEventJS) => void):void,
    /**
     * @at *server*
    */
loggedIn(handler: (event: Internal.SimplePlayerEventJS) => void):void,
    /**
     * @at *server*
    */
loggedOut(handler: (event: Internal.SimplePlayerEventJS) => void):void,
    /**
     * Invoked when a player opens or closes a container.
     * 
     * @at *server, client*
    */
inventoryClosed(extra: Internal.MenuType_<any>, handler: (event: Internal.InventoryEventJS) => void):void,
inventoryClosed(handler: (event: Internal.InventoryEventJS) => void):void,
    /**
     * Invoked when a player's inventory changes.
     * 
     * @at *server, client*
    */
inventoryChanged(extra: Internal.Item_, handler: (event: Internal.InventoryChangedEventJS) => void):void,
inventoryChanged(handler: (event: Internal.InventoryChangedEventJS) => void):void,
    /**
     * Invoked when a player opens or closes a container.
     * 
     * @at *server, client*
    */
inventoryOpened(extra: Internal.MenuType_<any>, handler: (event: Internal.InventoryEventJS) => void):void,
inventoryOpened(handler: (event: Internal.InventoryEventJS) => void):void,
    /**
     * @at *server, client*
    */
tick(handler: (event: Internal.SimplePlayerEventJS) => void):void,
    /**
     * Invoked when a player respawns.
     * 
     * The reason of respawn can be either death or returning from the end.
     * 
     * @at *server*
    */
respawned(handler: (event: Internal.PlayerRespawnedEventJS) => void):void,
};
declare const ProbeJSEvents: {
    /**
     * @at *server*
    */
fileSaved(extra: string, handler: (event: Internal.VSCodeFileSavedEventJS) => void):void,
fileSaved(handler: (event: Internal.VSCodeFileSavedEventJS) => void):void,
    /**
     * @at *server*
    */
generateDoc(handler: (event: Internal.DocGenerationEventJS) => void):void,
};
declare const ItemEvents: {
    /**
     * Invoked when a player right clicks with an item **without targeting anything**.
     * 
     * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
rightClicked(extra: Internal.Item_, handler: (event: Internal.ItemClickedEventJS) => void):void,
rightClicked(handler: (event: Internal.ItemClickedEventJS) => void):void,
    /**
     * Invoked when a player crafts an item.
     * 
     * @at *server, client*
    */
crafted(extra: Internal.Item_, handler: (event: Internal.ItemCraftedEventJS) => void):void,
crafted(handler: (event: Internal.ItemCraftedEventJS) => void):void,
    /**
     * Invoked when a player drops an item.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
dropped(extra: Internal.Item_, handler: (event: Internal.ItemDroppedEventJS) => void):void,
dropped(handler: (event: Internal.ItemDroppedEventJS) => void):void,
    /**
     * Invoked when registering handlers for item tooltips.
     * 
     * `text` can be a component or a list of components.
     * 
     * @at *client*
    */
tooltip(handler: (event: Internal.ItemTooltipEventJS) => void):void,
    /**
     * @at *startup*
    */
modelProperties(handler: (event: Internal.ItemModelPropertiesEventJS) => void):void,
    /**
     * Invoked when a player right clicks with an item **without targeting anything**.
     * 
     * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
     * 
     * @at *server, client*
    */
firstRightClicked(extra: Internal.Item_, handler: (event: Internal.ItemClickedEventJS) => void):void,
firstRightClicked(handler: (event: Internal.ItemClickedEventJS) => void):void,
    /**
     * Invoked after all items are registered to modify them.
     * 
     * @at *startup*
    */
modification(handler: (event: Internal.ItemModificationEventJS) => void):void,
    /**
     * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
     * 
     * @at *server, client*
    */
pickedUp(extra: Internal.Item_, handler: (event: Internal.ItemPickedUpEventJS) => void):void,
pickedUp(handler: (event: Internal.ItemPickedUpEventJS) => void):void,
    /**
     * @at *server, client*
    */
destroyed(extra: Internal.Item_, handler: (event: Internal.ItemDestroyedEventJS) => void):void,
destroyed(handler: (event: Internal.ItemDestroyedEventJS) => void):void,
    /**
     * Invoked when a player right clicks on an entity.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
entityInteracted(extra: Internal.Item_, handler: (event: Internal.ItemEntityInteractedEventJS) => void):void,
entityInteracted(handler: (event: Internal.ItemEntityInteractedEventJS) => void):void,
    /**
     * Invoked when the game is starting up and the item tool tiers are being registered.
     * 
     * @at *startup*
    */
toolTierRegistry(handler: (event: Internal.ItemToolTierRegistryEventJS) => void):void,
    /**
     * Invoked when an entity eats food.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
foodEaten(extra: Internal.Item_, handler: (event: Internal.FoodEatenEventJS) => void):void,
foodEaten(handler: (event: Internal.FoodEatenEventJS) => void):void,
    /**
     * Invoked when a player right clicks with an item **without targeting anything**.
     * 
     * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
     * 
     * @at *server, client*
    */
firstLeftClicked(extra: Internal.Item_, handler: (event: Internal.ItemClickedEventJS) => void):void,
firstLeftClicked(handler: (event: Internal.ItemClickedEventJS) => void):void,
    /**
     * Invoked when the game is starting up and the armor tier registry is being built.
     * 
     * @at *startup*
    */
armorTierRegistry(handler: (event: Internal.ItemArmorTierRegistryEventJS) => void):void,
    /**
     * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
canPickUp(extra: Internal.Item_, handler: (event: Internal.ItemPickedUpEventJS) => void):void,
canPickUp(handler: (event: Internal.ItemPickedUpEventJS) => void):void,
    /**
     * Invoked when an item is smelted by a player.
     * 
     * @at *server, client*
    */
smelted(extra: Internal.Item_, handler: (event: Internal.ItemSmeltedEventJS) => void):void,
smelted(handler: (event: Internal.ItemSmeltedEventJS) => void):void,
};
declare const LevelEvents: {
    /**
     * @at *server*
    */
loaded(extra: string, handler: (event: Internal.SimpleLevelEventJS) => void):void,
loaded(handler: (event: Internal.SimpleLevelEventJS) => void):void,
    /**
     * @at *server*
    */
unloaded(extra: string, handler: (event: Internal.SimpleLevelEventJS) => void):void,
unloaded(handler: (event: Internal.SimpleLevelEventJS) => void):void,
    /**
     * Invoked right before an explosion happens.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
beforeExplosion(handler: (event: Internal.ExplosionEventJS$Before) => void):void,
    /**
     * @at *server, client*
    */
tick(extra: string, handler: (event: Internal.SimpleLevelEventJS) => void):void,
tick(handler: (event: Internal.SimpleLevelEventJS) => void):void,
    /**
     * Invoked right after an explosion happens.
     * 
     * @at *server, client*
    */
afterExplosion(handler: (event: Internal.ExplosionEventJS$After) => void):void,
};
declare const TaCZServerEvents: {
    /**
     * @at *server*
    */
entityMelee(handler: (event: Internal.LivingEntityMeleeEvent) => void):void,
    /**
     * @at *server*
    */
entityReload(handler: (event: Internal.LivingEntityReloadEvent) => void):void,
    /**
     * @at *server*
    */
entityAim(handler: (event: Internal.LivingEntityAimEvent) => void):void,
    /**
     * @at *server*
    */
entityShoot(handler: (event: Internal.LivingEntityShootEvent) => void):void,
};
declare const EntityEvents: {
    /**
     * Invoked when an entity is about to be added to the world.
     * 
     * This event also fires for existing entities when they are loaded from a save.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
spawned(extra: Internal.EntityType_<any>, handler: (event: Internal.EntitySpawnedEventJS) => void):void,
spawned(handler: (event: Internal.EntitySpawnedEventJS) => void):void,
    /**
     * @at *server, client*
     * 
     * @cancellable
    */
drops(extra: Internal.EntityType_<any>, handler: (event: Internal.LivingEntityDropsEventJS) => void):void,
drops(handler: (event: Internal.LivingEntityDropsEventJS) => void):void,
    /**
     * Invoked before an entity is spawned into the world.
     * 
     * Only entities from a `BaseSpawner` or world generation will trigger this event.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
checkSpawn(extra: Internal.EntityType_<any>, handler: (event: Internal.CheckLivingEntitySpawnEventJS) => void):void,
checkSpawn(handler: (event: Internal.CheckLivingEntitySpawnEventJS) => void):void,
    /**
     * Invoked before a living entity dies.
     * 
     * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
death(extra: Internal.EntityType_<any>, handler: (event: Internal.LivingEntityDeathEventJS) => void):void,
death(handler: (event: Internal.LivingEntityDeathEventJS) => void):void,
    /**
     * Invoked before an entity is hurt by a damage source.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
hurt(extra: Internal.EntityType_<any>, handler: (event: Internal.LivingEntityHurtEventJS) => void):void,
hurt(handler: (event: Internal.LivingEntityHurtEventJS) => void):void,
};
declare const ClientEvents: {
    /**
     * @at *startup*
    */
init(handler: (event: Internal.ClientInitEventJS) => void):void,
    /**
     * Invoked when the debug info is rendered.
     * 
     * @at *client*
    */
rightDebugInfo(handler: (event: Internal.DebugInfoEventJS) => void):void,
    /**
     * Invoked when the debug info is rendered.
     * 
     * @at *client*
    */
leftDebugInfo(handler: (event: Internal.DebugInfoEventJS) => void):void,
    /**
     * @at *client*
    */
loggedIn(handler: (event: Internal.ClientEventJS) => void):void,
    /**
     * @at *client*
    */
atlasSpriteRegistry(extra: string, handler: (event: Internal.AtlasSpriteRegistryEventJS) => void):void,
    /**
     * @at *client*
    */
loggedOut(handler: (event: Internal.ClientEventJS) => void):void,
    /**
     * @at *client*
    */
paintScreen(handler: (event: Internal.PaintScreenEventJS) => void):void,
    /**
     * @at *client*
    */
tick(handler: (event: Internal.ClientEventJS) => void):void,
    /**
     * @at *client*
    */
painterUpdated(handler: (event: Internal.ClientEventJS) => void):void,
    /**
     * @at *client*
    */
lang(extra: string, handler: (event: Internal.LangEventJS) => void):void,
    /**
     * @at *client*
    */
highPriorityAssets(handler: (event: Internal.GenerateClientAssetsEventJS) => void):void,
};
declare const TaCZClientEvents: {
    /**
     * @at *client*
    */
gunIndexLoad(handler: (event: Internal.ClientGunIndexLoadEvent) => void):void,
    /**
     * @at *client*
    */
playerMelee(handler: (event: Internal.LocalPlayerMeleeEvent) => void):void,
    /**
     * @at *client*
    */
playerReload(handler: (event: Internal.LocalPlayerReloadEvent) => void):void,
    /**
     * @at *client*
    */
playerShoot(handler: (event: Internal.LocalPlayerShootEvent) => void):void,
    /**
     * @at *client*
    */
playerAim(handler: (event: Internal.LocalPlayerAimEvent) => void):void,
};
declare const StartupEvents: {
    /**
     * @at *startup*
    */
init(handler: (event: Internal.StartupEventJS) => void):void,
registry(type: "minecraft:sound_event", handler: (event: Registry.SoundEvent) => void):void,
registry(type: "sound_event", handler: (event: Registry.SoundEvent) => void):void,
registry(type: "minecraft:fluid", handler: (event: Registry.Fluid) => void):void,
registry(type: "fluid", handler: (event: Registry.Fluid) => void):void,
registry(type: "minecraft:mob_effect", handler: (event: Registry.MobEffect) => void):void,
registry(type: "mob_effect", handler: (event: Registry.MobEffect) => void):void,
registry(type: "minecraft:block", handler: (event: Registry.Block) => void):void,
registry(type: "block", handler: (event: Registry.Block) => void):void,
registry(type: "minecraft:enchantment", handler: (event: Registry.Enchantment) => void):void,
registry(type: "enchantment", handler: (event: Registry.Enchantment) => void):void,
registry(type: "minecraft:entity_type", handler: (event: Registry.EntityType) => void):void,
registry(type: "entity_type", handler: (event: Registry.EntityType) => void):void,
registry(type: "minecraft:item", handler: (event: Registry.Item) => void):void,
registry(type: "item", handler: (event: Registry.Item) => void):void,
registry(type: "minecraft:potion", handler: (event: Registry.Potion) => void):void,
registry(type: "potion", handler: (event: Registry.Potion) => void):void,
registry(type: "minecraft:particle_type", handler: (event: Registry.ParticleType) => void):void,
registry(type: "particle_type", handler: (event: Registry.ParticleType) => void):void,
registry(type: "minecraft:block_entity_type", handler: (event: Registry.BlockEntityType) => void):void,
registry(type: "block_entity_type", handler: (event: Registry.BlockEntityType) => void):void,
registry(type: "minecraft:painting_variant", handler: (event: Registry.PaintingVariant) => void):void,
registry(type: "painting_variant", handler: (event: Registry.PaintingVariant) => void):void,
registry(type: "minecraft:custom_stat", handler: (event: Registry.CustomStat) => void):void,
registry(type: "custom_stat", handler: (event: Registry.CustomStat) => void):void,
registry(type: "minecraft:chunk_status", handler: (event: Registry.ChunkStatus) => void):void,
registry(type: "chunk_status", handler: (event: Registry.ChunkStatus) => void):void,
registry(type: "minecraft:rule_test", handler: (event: Registry.RuleTest) => void):void,
registry(type: "rule_test", handler: (event: Registry.RuleTest) => void):void,
registry(type: "minecraft:pos_rule_test", handler: (event: Registry.PosRuleTest) => void):void,
registry(type: "pos_rule_test", handler: (event: Registry.PosRuleTest) => void):void,
registry(type: "minecraft:menu", handler: (event: Registry.Menu) => void):void,
registry(type: "menu", handler: (event: Registry.Menu) => void):void,
registry(type: "minecraft:recipe_type", handler: (event: Registry.RecipeType) => void):void,
registry(type: "recipe_type", handler: (event: Registry.RecipeType) => void):void,
registry(type: "minecraft:recipe_serializer", handler: (event: Registry.RecipeSerializer) => void):void,
registry(type: "recipe_serializer", handler: (event: Registry.RecipeSerializer) => void):void,
registry(type: "minecraft:attribute", handler: (event: Registry.Attribute) => void):void,
registry(type: "attribute", handler: (event: Registry.Attribute) => void):void,
registry(type: "minecraft:game_event", handler: (event: Registry.GameEvent) => void):void,
registry(type: "game_event", handler: (event: Registry.GameEvent) => void):void,
registry(type: "minecraft:position_source_type", handler: (event: Registry.PositionSourceType) => void):void,
registry(type: "position_source_type", handler: (event: Registry.PositionSourceType) => void):void,
registry(type: "minecraft:stat_type", handler: (event: Registry.StatType) => void):void,
registry(type: "stat_type", handler: (event: Registry.StatType) => void):void,
registry(type: "minecraft:villager_type", handler: (event: Registry.VillagerType) => void):void,
registry(type: "villager_type", handler: (event: Registry.VillagerType) => void):void,
registry(type: "minecraft:villager_profession", handler: (event: Registry.VillagerProfession) => void):void,
registry(type: "villager_profession", handler: (event: Registry.VillagerProfession) => void):void,
registry(type: "minecraft:point_of_interest_type", handler: (event: Registry.PointOfInterestType) => void):void,
registry(type: "point_of_interest_type", handler: (event: Registry.PointOfInterestType) => void):void,
registry(type: "minecraft:memory_module_type", handler: (event: Registry.MemoryModuleType) => void):void,
registry(type: "memory_module_type", handler: (event: Registry.MemoryModuleType) => void):void,
registry(type: "minecraft:sensor_type", handler: (event: Registry.SensorType) => void):void,
registry(type: "sensor_type", handler: (event: Registry.SensorType) => void):void,
registry(type: "minecraft:schedule", handler: (event: Registry.Schedule) => void):void,
registry(type: "schedule", handler: (event: Registry.Schedule) => void):void,
registry(type: "minecraft:activity", handler: (event: Registry.Activity) => void):void,
registry(type: "activity", handler: (event: Registry.Activity) => void):void,
registry(type: "minecraft:loot_pool_entry_type", handler: (event: Registry.LootPoolEntryType) => void):void,
registry(type: "loot_pool_entry_type", handler: (event: Registry.LootPoolEntryType) => void):void,
registry(type: "minecraft:loot_function_type", handler: (event: Registry.LootFunctionType) => void):void,
registry(type: "loot_function_type", handler: (event: Registry.LootFunctionType) => void):void,
registry(type: "minecraft:loot_condition_type", handler: (event: Registry.LootConditionType) => void):void,
registry(type: "loot_condition_type", handler: (event: Registry.LootConditionType) => void):void,
registry(type: "minecraft:loot_number_provider_type", handler: (event: Registry.LootNumberProviderType) => void):void,
registry(type: "loot_number_provider_type", handler: (event: Registry.LootNumberProviderType) => void):void,
registry(type: "minecraft:loot_nbt_provider_type", handler: (event: Registry.LootNbtProviderType) => void):void,
registry(type: "loot_nbt_provider_type", handler: (event: Registry.LootNbtProviderType) => void):void,
registry(type: "minecraft:loot_score_provider_type", handler: (event: Registry.LootScoreProviderType) => void):void,
registry(type: "loot_score_provider_type", handler: (event: Registry.LootScoreProviderType) => void):void,
registry(type: "minecraft:command_argument_type", handler: (event: Registry.CommandArgumentType) => void):void,
registry(type: "command_argument_type", handler: (event: Registry.CommandArgumentType) => void):void,
registry(type: "minecraft:dimension_type", handler: (event: Registry.DimensionType) => void):void,
registry(type: "dimension_type", handler: (event: Registry.DimensionType) => void):void,
registry(type: "minecraft:dimension", handler: (event: Registry.Dimension) => void):void,
registry(type: "dimension", handler: (event: Registry.Dimension) => void):void,
registry(type: "minecraft:float_provider_type", handler: (event: Registry.FloatProviderType) => void):void,
registry(type: "float_provider_type", handler: (event: Registry.FloatProviderType) => void):void,
registry(type: "minecraft:int_provider_type", handler: (event: Registry.IntProviderType) => void):void,
registry(type: "int_provider_type", handler: (event: Registry.IntProviderType) => void):void,
registry(type: "minecraft:height_provider_type", handler: (event: Registry.HeightProviderType) => void):void,
registry(type: "height_provider_type", handler: (event: Registry.HeightProviderType) => void):void,
registry(type: "minecraft:block_predicate_type", handler: (event: Registry.BlockPredicateType) => void):void,
registry(type: "block_predicate_type", handler: (event: Registry.BlockPredicateType) => void):void,
registry(type: "minecraft:worldgen/noise_settings", handler: (event: Registry.WorldgenNoiseSettings) => void):void,
registry(type: "worldgen.noise_settings", handler: (event: Registry.WorldgenNoiseSettings) => void):void,
registry(type: "minecraft:worldgen/configured_carver", handler: (event: Registry.WorldgenConfiguredCarver) => void):void,
registry(type: "worldgen.configured_carver", handler: (event: Registry.WorldgenConfiguredCarver) => void):void,
registry(type: "minecraft:worldgen/configured_feature", handler: (event: Registry.WorldgenConfiguredFeature) => void):void,
registry(type: "worldgen.configured_feature", handler: (event: Registry.WorldgenConfiguredFeature) => void):void,
registry(type: "minecraft:worldgen/placed_feature", handler: (event: Registry.WorldgenPlacedFeature) => void):void,
registry(type: "worldgen.placed_feature", handler: (event: Registry.WorldgenPlacedFeature) => void):void,
registry(type: "minecraft:worldgen/structure", handler: (event: Registry.WorldgenStructure) => void):void,
registry(type: "worldgen.structure", handler: (event: Registry.WorldgenStructure) => void):void,
registry(type: "minecraft:worldgen/structure_set", handler: (event: Registry.WorldgenStructureSet) => void):void,
registry(type: "worldgen.structure_set", handler: (event: Registry.WorldgenStructureSet) => void):void,
registry(type: "minecraft:worldgen/processor_list", handler: (event: Registry.WorldgenProcessorList) => void):void,
registry(type: "worldgen.processor_list", handler: (event: Registry.WorldgenProcessorList) => void):void,
registry(type: "minecraft:worldgen/template_pool", handler: (event: Registry.WorldgenTemplatePool) => void):void,
registry(type: "worldgen.template_pool", handler: (event: Registry.WorldgenTemplatePool) => void):void,
registry(type: "minecraft:worldgen/biome", handler: (event: Registry.WorldgenBiome) => void):void,
registry(type: "worldgen.biome", handler: (event: Registry.WorldgenBiome) => void):void,
registry(type: "minecraft:worldgen/noise", handler: (event: Registry.WorldgenNoise) => void):void,
registry(type: "worldgen.noise", handler: (event: Registry.WorldgenNoise) => void):void,
registry(type: "minecraft:worldgen/density_function", handler: (event: Registry.WorldgenDensityFunction) => void):void,
registry(type: "worldgen.density_function", handler: (event: Registry.WorldgenDensityFunction) => void):void,
registry(type: "minecraft:worldgen/world_preset", handler: (event: Registry.WorldgenWorldPreset) => void):void,
registry(type: "worldgen.world_preset", handler: (event: Registry.WorldgenWorldPreset) => void):void,
registry(type: "minecraft:worldgen/flat_level_generator_preset", handler: (event: Registry.WorldgenFlatLevelGeneratorPreset) => void):void,
registry(type: "worldgen.flat_level_generator_preset", handler: (event: Registry.WorldgenFlatLevelGeneratorPreset) => void):void,
registry(type: "minecraft:worldgen/carver", handler: (event: Registry.WorldgenCarver) => void):void,
registry(type: "worldgen.carver", handler: (event: Registry.WorldgenCarver) => void):void,
registry(type: "minecraft:worldgen/feature", handler: (event: Registry.WorldgenFeature) => void):void,
registry(type: "worldgen.feature", handler: (event: Registry.WorldgenFeature) => void):void,
registry(type: "minecraft:worldgen/structure_placement", handler: (event: Registry.WorldgenStructurePlacement) => void):void,
registry(type: "worldgen.structure_placement", handler: (event: Registry.WorldgenStructurePlacement) => void):void,
registry(type: "minecraft:worldgen/structure_piece", handler: (event: Registry.WorldgenStructurePiece) => void):void,
registry(type: "worldgen.structure_piece", handler: (event: Registry.WorldgenStructurePiece) => void):void,
registry(type: "minecraft:worldgen/structure_type", handler: (event: Registry.WorldgenStructureType) => void):void,
registry(type: "worldgen.structure_type", handler: (event: Registry.WorldgenStructureType) => void):void,
registry(type: "minecraft:worldgen/placement_modifier_type", handler: (event: Registry.WorldgenPlacementModifierType) => void):void,
registry(type: "worldgen.placement_modifier_type", handler: (event: Registry.WorldgenPlacementModifierType) => void):void,
registry(type: "minecraft:worldgen/block_state_provider_type", handler: (event: Registry.WorldgenBlockStateProviderType) => void):void,
registry(type: "worldgen.block_state_provider_type", handler: (event: Registry.WorldgenBlockStateProviderType) => void):void,
registry(type: "minecraft:worldgen/foliage_placer_type", handler: (event: Registry.WorldgenFoliagePlacerType) => void):void,
registry(type: "worldgen.foliage_placer_type", handler: (event: Registry.WorldgenFoliagePlacerType) => void):void,
registry(type: "minecraft:worldgen/trunk_placer_type", handler: (event: Registry.WorldgenTrunkPlacerType) => void):void,
registry(type: "worldgen.trunk_placer_type", handler: (event: Registry.WorldgenTrunkPlacerType) => void):void,
registry(type: "minecraft:worldgen/tree_decorator_type", handler: (event: Registry.WorldgenTreeDecoratorType) => void):void,
registry(type: "worldgen.tree_decorator_type", handler: (event: Registry.WorldgenTreeDecoratorType) => void):void,
registry(type: "minecraft:worldgen/root_placer_type", handler: (event: Registry.WorldgenRootPlacerType) => void):void,
registry(type: "worldgen.root_placer_type", handler: (event: Registry.WorldgenRootPlacerType) => void):void,
registry(type: "minecraft:worldgen/feature_size_type", handler: (event: Registry.WorldgenFeatureSizeType) => void):void,
registry(type: "worldgen.feature_size_type", handler: (event: Registry.WorldgenFeatureSizeType) => void):void,
registry(type: "minecraft:worldgen/biome_source", handler: (event: Registry.WorldgenBiomeSource) => void):void,
registry(type: "worldgen.biome_source", handler: (event: Registry.WorldgenBiomeSource) => void):void,
registry(type: "minecraft:worldgen/chunk_generator", handler: (event: Registry.WorldgenChunkGenerator) => void):void,
registry(type: "worldgen.chunk_generator", handler: (event: Registry.WorldgenChunkGenerator) => void):void,
registry(type: "minecraft:worldgen/material_condition", handler: (event: Registry.WorldgenMaterialCondition) => void):void,
registry(type: "worldgen.material_condition", handler: (event: Registry.WorldgenMaterialCondition) => void):void,
registry(type: "minecraft:worldgen/material_rule", handler: (event: Registry.WorldgenMaterialRule) => void):void,
registry(type: "worldgen.material_rule", handler: (event: Registry.WorldgenMaterialRule) => void):void,
registry(type: "minecraft:worldgen/density_function_type", handler: (event: Registry.WorldgenDensityFunctionType) => void):void,
registry(type: "worldgen.density_function_type", handler: (event: Registry.WorldgenDensityFunctionType) => void):void,
registry(type: "minecraft:worldgen/structure_processor", handler: (event: Registry.WorldgenStructureProcessor) => void):void,
registry(type: "worldgen.structure_processor", handler: (event: Registry.WorldgenStructureProcessor) => void):void,
registry(type: "minecraft:worldgen/structure_pool_element", handler: (event: Registry.WorldgenStructurePoolElement) => void):void,
registry(type: "worldgen.structure_pool_element", handler: (event: Registry.WorldgenStructurePoolElement) => void):void,
registry(type: "minecraft:chat_type", handler: (event: Registry.ChatType) => void):void,
registry(type: "chat_type", handler: (event: Registry.ChatType) => void):void,
registry(type: "minecraft:cat_variant", handler: (event: Registry.CatVariant) => void):void,
registry(type: "cat_variant", handler: (event: Registry.CatVariant) => void):void,
registry(type: "minecraft:frog_variant", handler: (event: Registry.FrogVariant) => void):void,
registry(type: "frog_variant", handler: (event: Registry.FrogVariant) => void):void,
registry(type: "minecraft:banner_pattern", handler: (event: Registry.BannerPattern) => void):void,
registry(type: "banner_pattern", handler: (event: Registry.BannerPattern) => void):void,
registry(type: "minecraft:instrument", handler: (event: Registry.Instrument) => void):void,
registry(type: "instrument", handler: (event: Registry.Instrument) => void):void,
registry(type: "minecraft:trim_material", handler: (event: Registry.TrimMaterial) => void):void,
registry(type: "trim_material", handler: (event: Registry.TrimMaterial) => void):void,
registry(type: "minecraft:trim_pattern", handler: (event: Registry.TrimPattern) => void):void,
registry(type: "trim_pattern", handler: (event: Registry.TrimPattern) => void):void,
registry(type: "minecraft:creative_mode_tab", handler: (event: Registry.CreativeModeTab) => void):void,
registry(type: "creative_mode_tab", handler: (event: Registry.CreativeModeTab) => void):void,
registry(type: "minecraft:damage_type", handler: (event: Registry.DamageType) => void):void,
registry(type: "damage_type", handler: (event: Registry.DamageType) => void):void,
registry(type: "minecraft:rule_block_entity_modifier", handler: (event: Registry.RuleBlockEntityModifier) => void):void,
registry(type: "rule_block_entity_modifier", handler: (event: Registry.RuleBlockEntityModifier) => void):void,
registry(type: "minecraft:decorated_pot_patterns", handler: (event: Registry.DecoratedPotPatterns) => void):void,
registry(type: "decorated_pot_patterns", handler: (event: Registry.DecoratedPotPatterns) => void):void,
registry(type: "minecraft:worldgen/multi_noise_biome_source_parameter_list", handler: (event: Registry.WorldgenMultiNoiseBiomeSourceParameterList) => void):void,
registry(type: "worldgen.multi_noise_biome_source_parameter_list", handler: (event: Registry.WorldgenMultiNoiseBiomeSourceParameterList) => void):void,
registry(type: "corgilib:blending_function", handler: (event: Registry.BlendingFunction) => void):void,
registry(type: "corgilib:condition", handler: (event: Registry.Condition) => void):void,
registry(type: "corgilib:villager_trades_item_listing", handler: (event: Registry.VillagerTradesItemListing) => void):void,
registry(type: "aether:advancement_sound_override", handler: (event: Registry.AdvancementSoundOverride) => void):void,
registry(type: "aether:moa_type", handler: (event: Registry.MoaType) => void):void,
registry(type: "collectorsalbum:album_bonus", handler: (event: Registry.AlbumBonus) => void):void,
registry(type: "collectorsalbum:card_type", handler: (event: Registry.CardType) => void):void,
registry(type: "collectorsalbum:category", handler: (event: Registry.Category) => void):void,
registry(type: "collectorsalbum:item_drop_provider", handler: (event: Registry.ItemDropProvider) => void):void,
registry(type: "collectorsalbum:number_provider", handler: (event: Registry.NumberProvider) => void):void,
registry(type: "cumulus_menus:menu", handler: (event: Registry.Menu) => void):void,
registry(type: "forge:biome_modifier_serializers", handler: (event: Registry.BiomeModifierSerializers) => void):void,
registry(type: "forge:display_contexts", handler: (event: Registry.DisplayContexts) => void):void,
registry(type: "forge:entity_data_serializers", handler: (event: Registry.EntityDataSerializers) => void):void,
registry(type: "forge:fluid_type", handler: (event: Registry.FluidType) => void):void,
registry(type: "forge:global_loot_modifier_serializers", handler: (event: Registry.GlobalLootModifierSerializers) => void):void,
registry(type: "forge:holder_set_type", handler: (event: Registry.HolderSetType) => void):void,
registry(type: "forge:structure_modifier_serializers", handler: (event: Registry.StructureModifierSerializers) => void):void,
registry(type: "fruitfulfun:fruit_type", handler: (event: Registry.FruitType) => void):void,
registry(type: "l2screentracker:item_source", handler: (event: Registry.ItemSource) => void):void,
registry(type: "l2screentracker:tracked_entry_type", handler: (event: Registry.TrackedEntryType) => void):void,
registry(type: "lychee:contextual", handler: (event: Registry.Contextual) => void):void,
registry(type: "lychee:post_action", handler: (event: Registry.PostAction) => void):void,
registry(type: "reterraforged:worldgen/chance_modifier_type", handler: (event: Registry.WorldgenChanceModifierType) => void):void,
registry(type: "reterraforged:worldgen/curve_function_type", handler: (event: Registry.WorldgenCurveFunctionType) => void):void,
registry(type: "reterraforged:worldgen/domain_type", handler: (event: Registry.WorldgenDomainType) => void):void,
registry(type: "reterraforged:worldgen/noise_type", handler: (event: Registry.WorldgenNoiseType) => void):void,
registry(type: "reterraforged:worldgen/structure_rule_type", handler: (event: Registry.WorldgenStructureRuleType) => void):void,
registry(type: "reterraforged:worldgen/template_decorator_type", handler: (event: Registry.WorldgenTemplateDecoratorType) => void):void,
registry(type: "reterraforged:worldgen/template_placement_type", handler: (event: Registry.WorldgenTemplatePlacementType) => void):void,
registry(type: "the_bumblezone:biome_height", handler: (event: Registry.BiomeHeight) => void):void,
registry(type: "moonlight:map_markers", handler: (event: Registry.MapMarkers) => void):void,
registry(type: "forge:biome_modifier", handler: (event: Registry.BiomeModifier) => void):void,
registry(type: "enhancedcelestials:lunar/event", handler: (event: Registry.LunarEvent) => void):void,
registry(type: "reterraforged:worldgen/structure_rule", handler: (event: Registry.WorldgenStructureRule) => void):void,
registry(type: "reterraforged:worldgen/noise", handler: (event: Registry.WorldgenNoise) => void):void,
registry(type: "enhancedcelestials:lunar/dimension_settings", handler: (event: Registry.LunarDimensionSettings) => void):void,
registry(type: "reterraforged:worldgen/preset", handler: (event: Registry.WorldgenPreset) => void):void,
registry(type: "forge:structure_modifier", handler: (event: Registry.StructureModifier) => void):void,
registry(type: "moonlight:soft_fluids", handler: (event: Registry.SoftFluids) => void):void,
    /**
     * @at *startup*
    */
modifyCreativeTab(extra: string, handler: (event: Internal.CreativeTabEvent) => void):void,
    /**
     * @at *startup*
    */
recipeSchemaRegistry(handler: (event: Internal.RecipeSchemaRegistryEventJS) => void):void,
    /**
     * @at *startup*
    */
postInit(handler: (event: Internal.StartupEventJS) => void):void,
};
declare const BlockEvents: {
    /**
     * Invoked when a block is destroyed by a player.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
broken(extra: Internal.Block_, handler: (event: Internal.BlockBrokenEventJS) => void):void,
broken(handler: (event: Internal.BlockBrokenEventJS) => void):void,
    /**
     * Invoked when a detector block registered in KubeJS receives a block update.
     * 
     * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
     * 
     * @at *server, client*
    */
detectorPowered(extra: string, handler: (event: Internal.DetectorBlockEventJS) => void):void,
detectorPowered(handler: (event: Internal.DetectorBlockEventJS) => void):void,
    /**
     * Invoked when an entity attempts to trample farmland.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
farmlandTrampled(extra: Internal.Block_, handler: (event: Internal.FarmlandTrampledEventJS) => void):void,
farmlandTrampled(handler: (event: Internal.FarmlandTrampledEventJS) => void):void,
    /**
     * Invoked when a block is placed.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
placed(extra: Internal.Block_, handler: (event: Internal.BlockPlacedEventJS) => void):void,
placed(handler: (event: Internal.BlockPlacedEventJS) => void):void,
    /**
     * Invoked when a detector block registered in KubeJS receives a block update.
     * 
     * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
     * 
     * @at *server, client*
    */
detectorUnpowered(extra: string, handler: (event: Internal.DetectorBlockEventJS) => void):void,
detectorUnpowered(handler: (event: Internal.DetectorBlockEventJS) => void):void,
    /**
     * Invoked when a player left clicks on a block.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
leftClicked(extra: Internal.Block_, handler: (event: Internal.BlockLeftClickedEventJS) => void):void,
leftClicked(handler: (event: Internal.BlockLeftClickedEventJS) => void):void,
    /**
     * Invoked when a player right clicks on a block.
     * 
     * @at *server, client*
     * 
     * @cancellable
    */
rightClicked(extra: Internal.Block_, handler: (event: Internal.BlockRightClickedEventJS) => void):void,
rightClicked(handler: (event: Internal.BlockRightClickedEventJS) => void):void,
    /**
     * Invoked when a detector block registered in KubeJS receives a block update.
     * 
     * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
     * 
     * @at *server, client*
    */
detectorChanged(extra: string, handler: (event: Internal.DetectorBlockEventJS) => void):void,
detectorChanged(handler: (event: Internal.DetectorBlockEventJS) => void):void,
    /**
     * @at *startup*
    */
modification(handler: (event: Internal.BlockModificationEventJS) => void):void,
};
declare const FTBQuestsEvents: {
    /**
     * @at *server*
     * 
     * @cancellable
    */
customReward(extra: string, handler: (event: Internal.CustomRewardEventJS) => void):void,
customReward(handler: (event: Internal.CustomRewardEventJS) => void):void,
    /**
     * @at *server*
    */
started(extra: string, handler: (event: Internal.QuestObjectStartedEventJS) => void):void,
started(handler: (event: Internal.QuestObjectStartedEventJS) => void):void,
    /**
     * @at *server*
    */
completed(extra: string, handler: (event: Internal.QuestObjectCompletedEventJS) => void):void,
completed(handler: (event: Internal.QuestObjectCompletedEventJS) => void):void,
    /**
     * @at *client*
    */
customFilterItem(handler: (event: Internal.CustomFilterItemEventJS) => void):void,
    /**
     * @at *server*
     * 
     * @cancellable
    */
customTask(extra: string, handler: (event: Internal.CustomTaskEventJS) => void):void,
customTask(handler: (event: Internal.CustomTaskEventJS) => void):void,
};
