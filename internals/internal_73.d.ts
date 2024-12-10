/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class HugeBrownMushroomFeature extends Internal.AbstractHugeMushroomFeature {
        constructor(arg0: Internal.Codec_<Internal.HugeMushroomFeatureConfiguration>)
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.HugeMushroomFeatureConfiguration, Internal.Feature<Internal.HugeMushroomFeatureConfiguration>>>;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        place(arg0: Internal.FeaturePlaceContext_<Internal.HugeMushroomFeatureConfiguration>): boolean;
        place(arg0: Internal.HugeMushroomFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type HugeBrownMushroomFeature_ = HugeBrownMushroomFeature;
    interface MobEffectBuilder$EffectTickCallback {
        abstract applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        (arg0: Internal.LivingEntity, arg1: number): void;
    }
    type MobEffectBuilder$EffectTickCallback_ = MobEffectBuilder$EffectTickCallback | ((arg0: Internal.LivingEntity, arg1: number)=> void);
    class Mule extends Internal.AbstractChestedHorse {
        constructor(arg0: Internal.EntityType_<Internal.Mule>, arg1: Internal.Level_)
        getKnockBackStrength(): number;
        etf$getType(): Internal.EntityType<any>;
        getUpVector(arg0: number): Vec3d;
        handler$emc000$simplyswords$tick(ci: Internal.CallbackInfo_): void;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        setCulled(value: boolean): void;
        isOnFire(): boolean;
        getOwner(): Internal.LivingEntity;
        redirect$emg000$fixSpawnAnimX(instance: Internal.Mob_, v: number): number;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        emf$isOnGround(): boolean;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        setMotionZ(z: number): void;
        abstract tdv$shouldUpdateDynamicLight(): boolean;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        getIsInsideStructureTracker(): Internal.IsInsideStructureTracker;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        emf$isGlowing(): boolean;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        isRegisteredToWorld(): boolean;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        etf$getVelocity(): Vec3d;
        resetFallDistance(): void;
        handler$zzn000$onRemove(arg0: Internal.CallbackInfo_): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isEating(): boolean;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        abstract tdv$resetDynamicLight(): void;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        etf$getHandItems(): Internal.Iterable<any>;
        invalidateCaps(): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        getName(): net.minecraft.network.chat.Component;
        addEatEffect(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): void;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        emf$isTouchingWater(): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        emf$getVariableMap(): Internal.Object2FloatOpenHashMap<any>;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        setOutOfCamera(value: boolean): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        "handler$emc000$simplyswords$tick(org.spongepowered.asm.mixin.injection.callback.CallbackInfo)"(ci: Internal.CallbackInfo_): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        emf$getPitch(): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        getCacheProperty(): Internal.AttachmentCacheProperty;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        getSynBoltCoolDown(): number;
        callUpdateEffectVisibility(): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        isCulled(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        etf$getOptifineId(): number;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        fedFood(arg0: Internal.Player_, arg1: Internal.ItemStack_): InteractionResult;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSaddleSoundEvent(): Internal.SoundEvent;
        getSlot(arg0: number): Internal.SlotAccess;
        wrapOperation$cop001$fruitsdelight$getfriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: Internal.Operation_<any>): number;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        emf$isInLava(): boolean;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        callVibrationAndSoundEffectsFromBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: boolean, arg3: boolean, arg4: Vec3d_): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        getSelfAndPassengers(): Internal.Stream<any>;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        abstract tdv$lambdynlights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        callIsAlwaysExperienceDropper(): boolean;
        emf$getZ(): number;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        setStanding(arg0: boolean): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        emf$getYaw(): number;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        canFallInLove(): boolean;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        etf$getBlockY(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        resetKnockBackStrength(): void;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getDimensions(): Internal.EntityDimensions;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getLastDamageSource(): DamageSource;
        getSoundSource(): Internal.SoundSource;
        isJumping(): boolean;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        ageUp(arg0: number): void;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        etf$getUuid(): Internal.UUID;
        removeVehicle(): void;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        finalizeSpawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_, arg2: Internal.AgeableMob_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        setIsJumping(arg0: boolean): void;
        bookshelf$makePoofParticles(): void;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        emf$getVelocity(): Vec3d;
        o0oo000Oo000OO0O00OoOooo(arg0: number, arg1: boolean): void;
        wrapOperation$zoj000$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        etf$isBlockEntity(): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        setAlcohol(alcoholLevel: Internal.AlcoholLevel_): void;
        bolt(): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        modify$zil000$immersiveArmors$modifyArgs(amount: number): number;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        spawnChildFromBreeding(arg0: Internal.ServerLevel_, arg1: Internal.Animal_): void;
        setInLoveTime(arg0: number): void;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        reload(): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        setOwnerUUID(arg0: Internal.UUID_): void;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        etf$getWorld(): Internal.Level;
        isUndead(): boolean;
        static createBaseHorseAttributes(): Internal.AttributeSupplier$Builder;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        getTargetSelector(): Internal.GoalSelector;
        setRegisteredToWorld(arg0: Internal.PathNavigation_): void;
        isSleeping(): boolean;
        stopUsingItem(): void;
        etf$getNbt(): Internal.CompoundTag;
        acceptsFailure(): boolean;
        etf$getBlockPos(): BlockPos;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setLastDamageSource(arg0: DamageSource_): void;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        emf$age(): number;
        etf$hasCustomName(): boolean;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        canEatGrass(): boolean;
        setSilent(arg0: boolean): void;
        openCustomInventoryScreen(arg0: Internal.Player_): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getSwimSplashSound(): Internal.SoundEvent;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        handler$ekg000$getAttackAnim(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): InteractionResult;
        emf$getX(): number;
        getInventoryColumns(): number;
        onPlayerJump(arg0: number): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        emf$hasPassengers(): boolean;
        getSynAimingProgress(): number;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        emf$hasVehicle(): boolean;
        canMate(arg0: Internal.Animal_): boolean;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        handler$ekc000$isDamageSourceBlocked(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        canaryOnBlockCacheSet(arg0: Internal.BlockState_): void;
        bookshelf$getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        handler$zzn002$onTick(arg0: Internal.CallbackInfo_): void;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        handler$dai000$youkaishomecoming$dampensVibration(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        emf$isInvisible(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        emf$isSprinting(): boolean;
        ageUp(arg0: number, arg1: boolean): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        aether$getRandom(): Internal.RandomSource;
        setPose(arg0: Internal.Pose_): void;
        aim(arg0: boolean): void;
        getReachDistance(): number;
        setChest(arg0: boolean): void;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        canWearArmor(): boolean;
        "isJumping()"(): boolean;
        etf$getScoreboardTeam(): Internal.Team;
        getBreedOffspring(arg0: Internal.ServerLevel_, arg1: Internal.AgeableMob_): Internal.AgeableMob;
        abstract tdv$getDynamicLightY(): number;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        getAmbientStandSound(): Internal.SoundEvent;
        mobInteract(arg0: Internal.Player_, arg1: Internal.InteractionHand_): InteractionResult;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setRotation(yaw: number, pitch: number): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setBred(arg0: boolean): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        bookshelf$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        handler$bpm000$l2library_overrideClientGlow_isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        getFeetArmorItem(): Internal.ItemStack;
        isSaddleable(): boolean;
        static getViewScale(): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        getCustomJump(): number;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        callGetRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        canBreed(): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        emf$prevY(): number;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        shoot(arg0: Internal.Supplier_<any>, arg1: Internal.Supplier_<any>): Internal.ShootResult;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        emf$getTypeString(): string;
        abstract tdv$lambdynlights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isFullyFrozen(): boolean;
        callCollide(arg0: Vec3d_): Vec3d;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        handler$eka000$getPickRadius(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        getPassengersAndSelf(): Internal.Stream<any>;
        breakItem(arg0: Internal.ItemStack_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        getMaxTemper(): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        getAge(): number;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        isWearingArmor(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        getSynSprintTime(): number;
        handler$eak000$alcoholMovement(cir: Internal.CallbackInfoReturnable_<any>): void;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        isFood(arg0: Internal.ItemStack_): boolean;
        setBaby(arg0: boolean): void;
        getTemper(): number;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        tameWithName(arg0: Internal.Player_): boolean;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        setNextStep(arg0: number): void;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getFlag(arg0: number): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        consumesAmmoOrNot(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        etf$getItemsEquipped(): Internal.Iterable<any>;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        crawl(arg0: boolean): void;
        canUpdate(arg0: boolean): void;
        getEyeInFluidType(): Internal.FluidType;
        distanceToSqr(arg0: Vec3d_): number;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        makeMad(): void;
        getY(arg0: number): number;
        emf$prevPitch(): number;
        canaryOnBlockCacheDeleted(): void;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        etf$getArmorItems(): Internal.Iterable<any>;
        isSaddled(): boolean;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        abstract tdv$getDynamicLightZ(): number;
        getAmbientStandInterval(): number;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        handler$zko000$addSugarCube(ci: Internal.CallbackInfo_): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getScriptType(): Internal.ScriptType;
        equipSaddle(arg0: Internal.SoundSource_): void;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        handler$cjp000$isInsideWall(arg0: Internal.CallbackInfoReturnable_<any>, arg1: number, arg2: Internal.AABB_): void;
        serializeNBT(): Internal.Tag;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getEyeY(): number;
        setKnockBackStrength(arg0: number): void;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        getStandAnim(arg0: number): number;
        static createBaseChestedHorseAttributes(): Internal.AttributeSupplier$Builder;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getCitadelEntityData(): Internal.CompoundTag;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        needCheckAmmo(): boolean;
        static getDATA_BABY_ID(): Internal.EntityDataAccessor<boolean>;
        setTicksFrozen(arg0: number): void;
        isArmor(arg0: Internal.ItemStack_): boolean;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        etf$getPose(): Internal.Pose;
        etf$getEntityKey(): string;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        tdv$getLuminance(): number;
        setTemper(arg0: number): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        static getDATA_BABY_ID_$md$3ae8d1$0(): Internal.EntityDataAccessor<any>;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        etf$distanceTo(entity: Internal.Entity_): number;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        thebumblezone_performedEntityDrops(): void;
        setLastDamageStamp(arg0: number): void;
        canaryOnEquipmentChanged(): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        handler$dgn000$l2damagetracker$checkTotemDeathProtection$addCustomTotem(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        bookshelf$getFallDamageSound(arg0: number): Internal.SoundEvent;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        callGetTypeName(): net.minecraft.network.chat.Component;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        static fromLivingEntity(arg0: Internal.LivingEntity_): Internal.KnockBackModifier;
        isRemoved(): boolean;
        handleStopJump(): void;
        getEatAnim(arg0: number): number;
        emf$isSneaking(): boolean;
        handler$zil000$immersiveArmors$injectDamage(source: DamageSource_, amount: number, cir: Internal.CallbackInfoReturnable_<any>): void;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        aether$getPortalEntrancePos(): BlockPos;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        handler$dak000$youkaishomecoming$canBeSeenAsEnemy$unconscious(arg0: Internal.CallbackInfoReturnable_<any>): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        bookshelf$getAmbientSound(): Internal.SoundEvent;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        standIfPossible(): void;
        redirect$dpn000$improvedJumpBoostFall(livingEntity: Internal.LivingEntity_, effect: Internal.MobEffect_): Internal.MobEffectInstance;
        getSynMeleeCoolDown(): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): InteractionResult;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        tdv$isDynamicLightEnabled(): boolean;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        tdv$setDynamicLightEnabled(arg0: boolean): void;
        getLookAngle(): Vec3d;
        "handler$emc000$simplyswords$tick(org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable)"(cir: Internal.CallbackInfoReturnable_<any>): void;
        fireSelect(): void;
        getAmbientSoundInterval(): number;
        emf$isOnFire(): boolean;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        isTamed(): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        setInLove(arg0: Internal.Player_): void;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        emf$isAlive(): boolean;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        isBred(): boolean;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        static getSpeedUpSecondsWhenFeeding(arg0: number): number;
        aether$setPortalEntrancePos(arg0: BlockPos_): void;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        setTimeout(): void;
        position(): Vec3d;
        melee(): void;
        localvar$eci000$setAmount(arg0: number): number;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        isOutOfCamera(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        getSynReloadState(): Internal.ReloadState;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        etf$canBeBright(): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(attribute: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        emf$isWet(): boolean;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        getJumpCooldown(): number;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        setAge(arg0: number): void;
        tdv$dynamicLightTick(): void;
        getTarget(): Internal.LivingEntity;
        draw(arg0: Internal.Supplier_<any>): void;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<any>): Vec3d;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        isInLove(): boolean;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        handleStartJump(arg0: number): void;
        swing(arg0: Internal.InteractionHand_): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getRootVehicle(): Internal.Entity;
        getOwnerUUID(): Internal.UUID;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        setCitadelEntityData(arg0: Internal.CompoundTag_): void;
        getMouthAnim(arg0: number): number;
        emf$getY(): number;
        handler$emc000$simplyswords$tick(cir: Internal.CallbackInfoReturnable_<any>): void;
        resetLove(): void;
        bookshelf$createHoverEvent(): Internal.HoverEvent;
        isImmobile(): boolean;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSynDrawCoolDown(): number;
        getSpeed(): number;
        abstract getCachedFeetBlockState(): Internal.BlockState;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getSynShootCoolDown(): number;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        etf$getCustomName(): net.minecraft.network.chat.Component;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        hasChest(): boolean;
        updateNavigationRegistration(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        deserializeNBT(arg0: Internal.Tag_): void;
        setEating(arg0: boolean): void;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        setTamed(arg0: boolean): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        getAlcohol(): Internal.AlcoholLevel;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        abstract tdv$getDynamicLightWorld(): Internal.Level;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        canJump(): boolean;
        handler$zko000$eatSugarCube(player: Internal.Player_, stack: Internal.ItemStack_, cir: Internal.CallbackInfoReturnable_<any>): void;
        abstract tdv$getDynamicLightX(): number;
        emf$prevZ(): number;
        getUsername(): string;
        getInLoveTime(): number;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        getPickResult(): Internal.ItemStack;
        getNextStep(): number;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        getMobType(): Internal.MobType;
        static collideWithShapes(arg0: Vec3d_, arg1: Internal.AABB_, arg2: Internal.List_<Internal.VoxelShape>): Vec3d;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        restoreLeashFromSave(): void;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        hasInventoryChanged(arg0: net.minecraft.world.Container_): boolean;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        getIndirectPassengers(): Internal.Iterable<any>;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLoveCause(): Internal.ServerPlayer;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        getType(): string;
        static checkAnimalSpawnRules(arg0: Internal.EntityType_<Internal.Animal>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        handler$bdd000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        emf$prevX(): number;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        thebumblezone_hasPerformedEntityDrops(): boolean;
        canDisableShield(): boolean;
        handler$coj000$fruitsdelight$canFallInLove$durian(arg0: Internal.CallbackInfoReturnable_<any>): void;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        initialData(): void;
        canarySetClimbingMobCachingSectionUpdateBehavior(arg0: boolean): void;
        bookshelf$getDeathSound(): Internal.SoundEvent;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        equipArmor(arg0: Internal.Player_, arg1: Internal.ItemStack_): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        getSynIsAiming(): boolean;
        getRegisteredNavigation(): Internal.PathNavigation;
        isForcedVisible(): boolean;
        modifyTemper(arg0: number): number;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        zoom(): void;
        updateCacheProperty(arg0: Internal.AttachmentCacheProperty_): void;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        containerChanged(arg0: net.minecraft.world.Container_): void;
        runCommand(command: string): number;
        isStanding(): boolean;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        get knockBackStrength(): number
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        set culled(value: boolean)
        get onFire(): boolean
        get owner(): Internal.LivingEntity
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get isInsideStructureTracker(): Internal.IsInsideStructureTracker
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        get registeredToWorld(): boolean
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get eating(): boolean
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        set outOfCamera(value: boolean)
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        get cacheProperty(): Internal.AttachmentCacheProperty
        set absorptionAmount(arg0: number)
        get synBoltCoolDown(): number
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get culled(): boolean
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get saddleSoundEvent(): Internal.SoundEvent
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get selfAndPassengers(): Internal.Stream<any>
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        set standing(arg0: boolean)
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get dimensions(): Internal.EntityDimensions
        get lastHurtMob(): Internal.LivingEntity
        get addedToWorld(): boolean
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        get jumping(): boolean
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        set isJumping(arg0: boolean)
        get blocking(): boolean
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        set alcohol(alcoholLevel: Internal.AlcoholLevel_)
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        set inLoveTime(arg0: number)
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        set ownerUUID(arg0: Internal.UUID_)
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get targetSelector(): Internal.GoalSelector
        set registeredToWorld(arg0: Internal.PathNavigation_)
        get sleeping(): boolean
        set lastDamageSource(arg0: DamageSource_)
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get inventoryColumns(): number
        get synAimingProgress(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        set chest(arg0: boolean)
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get "jumping()"(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get ambientStandSound(): Internal.SoundEvent
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set bred(arg0: boolean)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get saddleable(): boolean
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get customJump(): number
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<any>
        get maxTemper(): number
        get age(): number
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        get wearingArmor(): boolean
        set yya(arg0: number)
        get synSprintTime(): number
        set baby(arg0: boolean)
        get temper(): number
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set nextStep(arg0: number)
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get saddled(): boolean
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get ambientStandInterval(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        set knockBackStrength(arg0: number)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get citadelEntityData(): Internal.CompoundTag
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        get DATA_BABY_ID(): Internal.EntityDataAccessor<boolean>
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set temper(arg0: number)
        get DATA_BABY_ID_$md$3ae8d1$0(): Internal.EntityDataAccessor<any>
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        set lastDamageStamp(arg0: number)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get synMeleeCoolDown(): number
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get tamed(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        set inLove(arg0: Internal.Player_)
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get bred(): boolean
        get offHandItem(): Internal.ItemStack
        get outOfCamera(): boolean
        get synReloadState(): Internal.ReloadState
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get jumpCooldown(): number
        get boundingBoxForCulling(): Internal.AABB
        set age(arg0: number)
        get target(): Internal.LivingEntity
        get inLove(): boolean
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get ownerUUID(): Internal.UUID
        get noGravity(): boolean
        set citadelEntityData(arg0: Internal.CompoundTag_)
        get immobile(): boolean
        get synDrawCoolDown(): number
        get speed(): number
        get cachedFeetBlockState(): Internal.BlockState
        get synShootCoolDown(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        set eating(arg0: boolean)
        get bbWidth(): number
        set tamed(arg0: boolean)
        get alcohol(): Internal.AlcoholLevel
        get "name()"(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get inLoveTime(): number
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get nextStep(): number
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get indirectPassengers(): Internal.Iterable<any>
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get loveCause(): Internal.ServerPlayer
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get synIsAiming(): boolean
        get registeredNavigation(): Internal.PathNavigation
        get forcedVisible(): boolean
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        get standing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
    }
    type Mule_ = Mule;
    class TelemetryProperty$ServerType extends Internal.Enum<Internal.TelemetryProperty$ServerType> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        static valueOf(arg0: string): Internal.TelemetryProperty$ServerType;
        getSerializedName(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(net.minecraft.client.telemetry.TelemetryProperty$ServerType)"(arg0: Internal.TelemetryProperty$ServerType_): number;
        compareTo(arg0: Internal.TelemetryProperty$ServerType_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TelemetryProperty$ServerType>>;
        static values(): Internal.TelemetryProperty$ServerType[];
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.TelemetryProperty$ServerType;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.TelemetryProperty$ServerType
        static readonly OTHER: (Internal.TelemetryProperty$ServerType) & (Internal.TelemetryProperty$ServerType);
        static readonly CODEC: Internal.Codec<Internal.TelemetryProperty$ServerType>;
        static readonly REALM: (Internal.TelemetryProperty$ServerType) & (Internal.TelemetryProperty$ServerType);
        static readonly LOCAL: (Internal.TelemetryProperty$ServerType) & (Internal.TelemetryProperty$ServerType);
    }
    type TelemetryProperty$ServerType_ = "local" | "other" | "realm" | TelemetryProperty$ServerType;
    abstract class ScreenDrawEvent extends Internal.BalmEvent {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: Internal.GuiGraphics_, arg2: number, arg3: number, arg4: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getGuiGraphics(): Internal.GuiGraphics;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        isCanceled(): boolean;
        getMouseY(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMouseX(): number;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getTickDelta(): number;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get guiGraphics(): Internal.GuiGraphics
        set phase(arg0: Internal.EventPriority_)
        get screen(): Internal.Screen
        get canceled(): boolean
        get mouseY(): number
        get mouseX(): number
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get tickDelta(): number
    }
    type ScreenDrawEvent_ = ScreenDrawEvent;
    class ScaffoldingBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        static getDistance(arg0: Internal.BlockGetter_, arg1: BlockPos_): number;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly STABILITY_MAX_DISTANCE: (7) & (number);
        static readonly BOTTOM: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly DISTANCE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type ScaffoldingBlock_ = ScaffoldingBlock;
    class ContextualHolder {
        constructor()
        getClass(): typeof any;
        getConditions(): Internal.List<Internal.ContextualCondition>;
        toString(): string;
        showingConditionsCount(): number;
        notifyAll(): void;
        parseConditions(arg0: Internal.JsonElement_): void;
        isSecretCondition(arg0: number): boolean;
        rawConditionsToJson(): Internal.JsonElement;
        getConditionTooltips(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: number, arg2: Internal.Level_, arg3: Internal.Player_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        conditionsToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        conditionsFromNetwork(arg0: Internal.FriendlyByteBuf_): void;
        withCondition(arg0: Internal.ContextualCondition_): void;
        equals(arg0: any): boolean;
        checkConditions(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.LycheeContext_, arg2: number): number;
        get class(): typeof any
        get conditions(): Internal.List<Internal.ContextualCondition>
    }
    type ContextualHolder_ = ContextualHolder;
    interface IForgeTransformation {
        blockCornerToCenter(): Internal.Transformation;
        transformPosition(arg0: Vec4f_): void;
        applyOrigin(arg0: Vec3f_): Internal.Transformation;
        blockCenterToCorner(): Internal.Transformation;
        isIdentity(): boolean;
        transformNormal(arg0: Vec3f_): void;
        rotateTransform(arg0: Internal.Direction_): Internal.Direction;
        get identity(): boolean
    }
    type IForgeTransformation_ = IForgeTransformation;
    class BobberModifier extends Internal.Enum<Internal.BobberModifier> {
        compareTo(arg0: Internal.BobberModifier_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getTranslationKey(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.BobberModifier>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        getTextureLocation(): ResourceLocation;
        "compareTo(org.li64.tide.data.rods.BobberModifier)"(arg0: Internal.BobberModifier_): number;
        static values(): Internal.BobberModifier[];
        ordinal(): number;
        wait(): void;
        getItem(): Internal.Item;
        wait(arg0: number): void;
        getDeclaringClass(): typeof Internal.BobberModifier;
        static valueOf(arg0: string): Internal.BobberModifier;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get translationKey(): string
        get textureLocation(): ResourceLocation
        get item(): Internal.Item
        get declaringClass(): typeof Internal.BobberModifier
        static readonly LIME: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly LIGHT_GRAY: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly PINK: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly MAGENTA: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly CYAN: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly WHITE: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly RED: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly LIGHT_BLUE: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly BROWN: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly YELLOW: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly BLUE: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly ORANGE: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly GREEN: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly BLACK: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly PURPLE: (Internal.BobberModifier) & (Internal.BobberModifier);
        static readonly GRAY: (Internal.BobberModifier) & (Internal.BobberModifier);
    }
    type BobberModifier_ = "light_blue" | "magenta" | "lime" | "brown" | "red" | "purple" | "pink" | "black" | "green" | "cyan" | "light_gray" | "yellow" | "white" | "gray" | BobberModifier | "blue" | "orange";
    class BubbleBlowerItem extends Internal.Item implements Internal.IThirdPersonAnimationProvider, Internal.IFirstPersonAnimationProvider {
        constructor(properties: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, worldIn: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, flagIn: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(stack: Internal.ItemStack_, book: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(stack: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        animateItemFirstPerson(entity: Internal.Player_, stack: Internal.ItemStack_, hand: Internal.InteractionHand_, arm: Internal.HumanoidArm_, poseStack: Internal.PoseStack_, partialTicks: number, pitch: number, attackAnim: number, handHeight: number): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        getClass(): typeof any;
        isTwoHanded(): boolean;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(level: Internal.Level_, player: Internal.Player_, hand: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        animateItemFirstPerson(entity: Internal.LivingEntity_, stack: Internal.ItemStack_, hand: Internal.InteractionHand_, matrixStack: Internal.PoseStack_, partialTicks: number, pitch: number, attackAnim: number, handHeight: number): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        static "attachToItem(net.minecraft.world.item.Item,net.mehvahdjukaar.moonlight.api.item.IFirstPersonAnimationProvider)"(target: Internal.Item_, object: Internal.IFirstPersonAnimationProvider_): void;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(stack: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        static "attachToItem(net.minecraft.world.item.Item,net.mehvahdjukaar.moonlight.api.item.IThirdPersonAnimationProvider)"(target: Internal.Item_, object: Internal.IThirdPersonAnimationProvider_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(level: Internal.Level_, entity: Internal.LivingEntity_, stack: Internal.ItemStack_, remainingUseDuration: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(stack: Internal.ItemStack_, enchantment: Internal.Enchantment_): boolean;
        getUseAnimation(stack: Internal.ItemStack_): Internal.UseAnim;
        poseLeftArm<T extends Internal.LivingEntity>(stack: Internal.ItemStack_, model: Internal.HumanoidModel_<T>, entity: T, mainHand: Internal.HumanoidArm_): boolean;
        getDescriptionId(): string;
        isValidRepairItem(toRepair: Internal.ItemStack_, repair: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static attachToItem(target: Internal.Item_, object: Internal.IThirdPersonAnimationProvider_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(stack: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        poseRightArm<T extends Internal.LivingEntity>(stack: Internal.ItemStack_, model: Internal.HumanoidModel_<T>, entity: T, mainHand: Internal.HumanoidArm_): boolean;
        isRepairable(stack: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        notify(): void;
        animateHands<T extends Internal.LivingEntity>(model: Internal.HumanoidModel_<T>, entity: T, leftHand: boolean): void;
        isBarVisible(stack: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        static attachToItem(target: Internal.Item_, object: Internal.IFirstPersonAnimationProvider_): void;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static get(target: Internal.Item_): Internal.IThirdPersonAnimationProvider;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get twoHanded(): boolean
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type BubbleBlowerItem_ = BubbleBlowerItem;
    interface CustomMapData$DirtyCounter {
        abstract clearDirty(): void;
        abstract isDirty(): boolean;
        get dirty(): boolean
    }
    type CustomMapData$DirtyCounter_ = CustomMapData$DirtyCounter;
    class ClientboundUpdateRecipesPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Collection_<Internal.Recipe<any>>)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        static toNetwork<T extends Internal.Recipe<any>>(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        equals(arg0: any): boolean;
        getRecipes(): Internal.List<Internal.Recipe<any>>;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get recipes(): Internal.List<Internal.Recipe<any>>
    }
    type ClientboundUpdateRecipesPacket_ = ClientboundUpdateRecipesPacket;
    abstract class ScriptableObject implements Internal.SymbolScriptable, Internal.Scriptable, Internal.ConstProperties {
        constructor()
        constructor(scope: Internal.Scriptable_, prototype: Internal.Scriptable_)
        preventExtensions(): void;
        static getFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        static getArrayPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static putProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        "get(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        static putProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,int,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        get(cx: Internal.Context_, index: number, start: Internal.Scriptable_): any;
        setParentScope(m: Internal.Scriptable_): void;
        "setAttributes(dev.latvian.mods.rhino.Context,int,int)"(cx: Internal.Context_, index: number, attributes: number): void;
        "put(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        getTypeOf(): Internal.MemberType;
        static deleteProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        static getTopScopeValue(scope: Internal.Scriptable_, key: any, cx: Internal.Context_): any;
        defineOwnProperties(cx: Internal.Context_, props: Internal.ScriptableObject_): void;
        getIds(cx: Internal.Context_): any[];
        "delete(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): void;
        setAttributes(cx: Internal.Context_, name: string, attributes: number): void;
        associateValue(key: any, value: any): any;
        getParentScope(): Internal.Scriptable;
        setAttributes(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, cx: Internal.Context_): void;
        "delete(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): void;
        avoidObjectDetection(): boolean;
        static getClassPrototype(scope: Internal.Scriptable_, className: string, cx: Internal.Context_): Internal.Scriptable;
        put(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static getProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        getClass(): typeof any;
        static hasProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "delete(dev.latvian.mods.rhino.Context,int)"(cx: Internal.Context_, index: number): void;
        hasInstance(cx: Internal.Context_, instance: Internal.Scriptable_): boolean;
        getExternalArrayData(): Internal.ExternalArrayData;
        put(cx: Internal.Context_, index: number, start: Internal.Scriptable_, value: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        "defineProperty(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        static defineConstProperty(destination: Internal.Scriptable_, propertyName: string, cx: Internal.Context_): void;
        sealObject(cx: Internal.Context_): void;
        has(cx: Internal.Context_, index: number, start: Internal.Scriptable_): boolean;
        static deleteProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "get(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        static defineProperty(destination: Internal.Scriptable_, propertyName: string, value: any, attributes: number, cx: Internal.Context_): void;
        getAttributes(cx: Internal.Context_, index: number): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        toString(): string;
        notifyAll(): void;
        setGetterOrSetter(cx: Internal.Context_, name: string, index: number, getterOrSetter: dev.latvian.mods.rhino.Callable_, isSetter: boolean): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, mapInheritance: boolean, cx: Internal.Context_): string;
        enumerationIteratorNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        size(): number;
        static getProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        has(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        static getObjectPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        wait(arg0: number): void;
        defineProperty(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        setAttributes(cx: Internal.Context_, index: number, attributes: number): void;
        putConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        defineProperty(cx: Internal.Context_, propertyName: string, delegateTo: any, getter: Internal.WrappedExecutable_, setter: Internal.WrappedExecutable_, attributes: number): void;
        abstract getClassName(): string;
        defineFunctionProperties(cx: Internal.Context_, names: string[], clazz: typeof any, attributes: number): void;
        "delete"(cx: Internal.Context_, name: string): void;
        static putProperty(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        "delete"(cx: Internal.Context_, index: number): void;
        static getGeneratorFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        "put(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, cx: Internal.Context_): void;
        notify(): void;
        static putConstProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        static redefineProperty(obj: Internal.Scriptable_, name: string, isConst: boolean, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        get(cx: Internal.Context_, key: any): any;
        get(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        getPrototype(cx: Internal.Context_): Internal.Scriptable;
        static getDefaultValue(object: Internal.Scriptable_, typeHint: typeof any, cx: Internal.Context_): any;
        "put(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, index: number, start: Internal.Scriptable_, value: any): void;
        enumerationIteratorHasNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        "has(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, index: number, start: Internal.Scriptable_): boolean;
        isConst(name: string): boolean;
        getAttributes(cx: Internal.Context_, sym: Internal.Symbol_): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "getAttributes(dev.latvian.mods.rhino.Context,int)"(cx: Internal.Context_, index: number): number;
        isExtensible(): boolean;
        wait(): void;
        setPrototype(m: Internal.Scriptable_): void;
        getGetterOrSetter(name: string, index: number, isSetter: boolean): any;
        getAttributes(cx: Internal.Context_, name: string): number;
        defineProperty(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        static getPropertyIds(cx: Internal.Context_, obj: Internal.Scriptable_): any[];
        getAssociatedValue(key: any): any;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Object,int)"(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        "delete"(cx: Internal.Context_, key: Internal.Symbol_): void;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        static getProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        "has(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        has(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        defineConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_): void;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Class,int)"(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        defineOwnProperty(cx: Internal.Context_, id: any, desc: Internal.ScriptableObject_): void;
        getDefaultValue(cx: Internal.Context_, typeHint: typeof any): any;
        setExternalArrayData(cx: Internal.Context_, array: Internal.ExternalArrayData_): void;
        "getAttributes(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): number;
        get(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        static hasProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        "setAttributes(dev.latvian.mods.rhino.Context,java.lang.String,int)"(cx: Internal.Context_, name: string, attributes: number): void;
        isSealed(cx: Internal.Context_): boolean;
        getAllIds(cx: Internal.Context_): any[];
        "has(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        defineProperty(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        static hasProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        "get(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, index: number, start: Internal.Scriptable_): any;
        "setAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,int)"(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        hashCode(): number;
        getExternalArrayLength(): any;
        "getAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, sym: Internal.Symbol_): number;
        static getTopLevelScope(obj: Internal.Scriptable_): Internal.Scriptable;
        put(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        equals(arg0: any): boolean;
        set parentScope(m: Internal.Scriptable_)
        get typeOf(): Internal.MemberType
        get parentScope(): Internal.Scriptable
        get class(): typeof any
        get externalArrayData(): Internal.ExternalArrayData
        get className(): string
        get extensible(): boolean
        set prototype(m: Internal.Scriptable_)
        get empty(): boolean
        get externalArrayLength(): any
        static readonly EMPTY: (0) & (number);
        static readonly READONLY: (1) & (number);
        static readonly DONTENUM: (2) & (number);
        static readonly UNINITIALIZED_CONST: (8) & (number);
        static readonly CONST: (13) & (number);
        static readonly PERMANENT: (4) & (number);
    }
    type ScriptableObject_ = ScriptableObject;
    interface BaseRecipe$RecInv <R extends dev.xkmc.l2library.serial.recipe.BaseRecipe<any, R, any>> extends net.minecraft.world.Container {
        stopOpen(arg0: Internal.Player_): void;
        count(ingredient: Internal.Ingredient_): number;
        tryClear(arg0: any): void;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        abstract isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        abstract removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        abstract setChanged(): void;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        abstract getContainerSize(): number;
        getStackInSlot(slot: number): Internal.ItemStack;
        abstract setItem(arg0: number, arg1: Internal.ItemStack_): void;
        getHeight(): number;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
        kjs$self(): net.minecraft.world.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        "isEmpty()"(): boolean;
        abstract removeItemNoUpdate(arg0: number): Internal.ItemStack;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract stillValid(arg0: Internal.Player_): boolean;
        isMutable(): boolean;
        clear(): void;
        abstract getItem(arg0: number): Internal.ItemStack;
        find(ingredient: Internal.Ingredient_): number;
        abstract clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        get empty(): boolean
        get slots(): number
        get containerSize(): number
        get height(): number
        get width(): number
        get maxStackSize(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get "empty()"(): boolean
        get mutable(): boolean
    }
    type BaseRecipe$RecInv_<R extends dev.xkmc.l2library.serial.recipe.BaseRecipe<any, R, any>> = BaseRecipe$RecInv<R>;
    class RefinedBeeswaxPillar extends Internal.RotatedPillarBlock {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static rotatePillar(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type RefinedBeeswaxPillar_ = RefinedBeeswaxPillar;
    interface IAmmoBox {
        abstract isAllTypeCreative(arg0: Internal.ItemStack_): boolean;
        abstract getAmmoId(arg0: Internal.ItemStack_): ResourceLocation;
        abstract setAmmoId(arg0: Internal.ItemStack_, arg1: ResourceLocation_): void;
        abstract getAmmoLevel(arg0: Internal.ItemStack_): number;
        abstract isCreative(arg0: Internal.ItemStack_): boolean;
        abstract setAmmoCount(arg0: Internal.ItemStack_, arg1: number): void;
        abstract setCreative(arg0: Internal.ItemStack_, arg1: boolean): Internal.ItemStack;
        abstract isAmmoBoxOfGun(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        abstract setAmmoLevel(arg0: Internal.ItemStack_, arg1: number): Internal.ItemStack;
        abstract getAmmoCount(arg0: Internal.ItemStack_): number;
    }
    type IAmmoBox_ = IAmmoBox;
    class BackpackBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock, Internal.EntityBlock {
        constructor()
        constructor(arg0: number)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        static playerInteract(arg0: Internal.PlayerInteractEvent$RightClickBlock_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly LEFT_TANK: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly BATTERY: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly RIGHT_TANK: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
    }
    type BackpackBlock_ = BackpackBlock;
    class JukeboxBlock extends Internal.BaseEntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        getOcclusionShape(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getSoundType(state: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly HAS_RECORD: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type JukeboxBlock_ = JukeboxBlock;
    class ObjectStartedEvent$ChapterEvent extends Internal.ObjectStartedEvent<Internal.Chapter> {
        constructor(d: Internal.QuestProgressEventData_<Internal.Chapter>)
        getObject(): Internal.Chapter;
        getClass(): typeof any;
        getTime(): Internal.Date;
        toString(): string;
        getNotifiedPlayers(): Internal.List<Internal.ServerPlayer>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getChapter(): Internal.Chapter;
        getOnlineMembers(): Internal.List<Internal.ServerPlayer>;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        wait(arg0: number): void;
        getData(): Internal.TeamData;
        equals(arg0: any): boolean;
        get object(): Internal.Chapter
        get class(): typeof any
        get time(): Internal.Date
        get notifiedPlayers(): Internal.List<Internal.ServerPlayer>
        get chapter(): Internal.Chapter
        get onlineMembers(): Internal.List<Internal.ServerPlayer>
        get cancelable(): boolean
        get data(): Internal.TeamData
    }
    type ObjectStartedEvent$ChapterEvent_ = ObjectStartedEvent$ChapterEvent;
    class FirstPersonMode extends Internal.Enum<Internal.FirstPersonMode> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getDeclaringClass(): typeof Internal.FirstPersonMode;
        getClass(): typeof any;
        static values(): Internal.FirstPersonMode[];
        toString(): string;
        static isFirstPersonPass(): boolean;
        "compareTo(dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode)"(arg0: Internal.FirstPersonMode_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static valueOf(name: string): Internal.FirstPersonMode;
        isEnabled(): boolean;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.FirstPersonMode>>;
        wait(arg0: number): void;
        compareTo(arg0: Internal.FirstPersonMode_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static setFirstPersonPass(newValue: boolean): void;
        equals(arg0: any): boolean;
        get declaringClass(): typeof Internal.FirstPersonMode
        get class(): typeof any
        get firstPersonPass(): boolean
        get enabled(): boolean
        set firstPersonPass(newValue: boolean)
        static readonly THIRD_PERSON_MODEL: (Internal.FirstPersonMode) & (Internal.FirstPersonMode);
        static readonly DISABLED: (Internal.FirstPersonMode) & (Internal.FirstPersonMode);
        static readonly VANILLA: (Internal.FirstPersonMode) & (Internal.FirstPersonMode);
        static readonly NONE: (Internal.FirstPersonMode) & (Internal.FirstPersonMode);
    }
    type FirstPersonMode_ = "vanilla" | "disabled" | FirstPersonMode | "third_person_model" | "none";
    class BigInteger extends number implements Internal.Comparable<Internal.BigInteger> {
        constructor(arg0: number, arg1: number[], arg2: number, arg3: number)
        constructor(arg0: string, arg1: number)
        constructor(arg0: number, arg1: number[])
        constructor(arg0: number, arg1: number, arg2: Internal.Random_)
        constructor(arg0: number[], arg1: number, arg2: number)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.Random_)
        constructor(arg0: string)
        modInverse(arg0: Internal.BigInteger_): this;
        doubleValue(): number;
        static valueOf(arg0: number): Internal.BigInteger;
        andNot(arg0: Internal.BigInteger_): this;
        bitCount(): number;
        notify(): void;
        not(): this;
        compareTo(arg0: any): number;
        parallelMultiply(arg0: Internal.BigInteger_): this;
        min(arg0: Internal.BigInteger_): this;
        shiftRight(arg0: number): this;
        compareTo(arg0: Internal.BigInteger_): number;
        longValue(): number;
        max(arg0: Internal.BigInteger_): this;
        setBit(arg0: number): this;
        clearBit(arg0: number): this;
        multiply(arg0: Internal.BigInteger_): this;
        divideAndRemainder(arg0: Internal.BigInteger_): Internal.BigInteger[];
        testBit(arg0: number): boolean;
        abs(): this;
        pow(arg0: number): this;
        toByteArray(): number[];
        shortValue(): number;
        modPow(arg0: Internal.BigInteger_, arg1: Internal.BigInteger_): this;
        isProbablePrime(arg0: number): boolean;
        wait(): void;
        toString(arg0: number): string;
        getLowestSetBit(): number;
        and(arg0: Internal.BigInteger_): this;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getClass(): typeof any;
        nextProbablePrime(): this;
        floatValue(): number;
        "compareTo(java.math.BigInteger)"(arg0: Internal.BigInteger_): number;
        wait(arg0: number, arg1: number): void;
        mod(arg0: Internal.BigInteger_): this;
        static probablePrime(arg0: number, arg1: Internal.Random_): Internal.BigInteger;
        sqrtAndRemainder(): Internal.BigInteger[];
        remainder(arg0: Internal.BigInteger_): this;
        intValue(): number;
        intValueExact(): number;
        negate(): this;
        shiftLeft(arg0: number): this;
        toString(): string;
        subtract(arg0: Internal.BigInteger_): this;
        shortValueExact(): number;
        notifyAll(): void;
        or(arg0: Internal.BigInteger_): this;
        longValueExact(): number;
        byteValueExact(): number;
        bitLength(): number;
        hashCode(): number;
        flipBit(arg0: number): this;
        divide(arg0: Internal.BigInteger_): this;
        wait(arg0: number): void;
        sqrt(): this;
        gcd(arg0: Internal.BigInteger_): this;
        xor(arg0: Internal.BigInteger_): this;
        equals(arg0: any): boolean;
        add(arg0: Internal.BigInteger_): this;
        signum(): number;
        byteValue(): number;
        set bit(arg0: number)
        get lowestSetBit(): number
        get class(): typeof any
        static readonly TEN: (10) & (Internal.BigInteger);
        static readonly ONE: (1) & (Internal.BigInteger);
        static readonly TWO: (2) & (Internal.BigInteger);
        static readonly ZERO: (0) & (Internal.BigInteger);
    }
    type BigInteger_ = BigInteger;
    class EverlastingUpgradeItem extends Internal.UpgradeItemBase<Internal.EverlastingUpgradeItem$Wrapper> {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getUpgradeConflicts(): Internal.List<Internal.IUpgradeItem$UpgradeConflictDefinition>;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        getInventoryColumnsTaken(): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        canAddUpgradeTo(arg0: Internal.IStorageWrapper_, arg1: Internal.ItemStack_, arg2: boolean, arg3: boolean): Internal.UpgradeSlotChangeResult;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        checkExtraInsertConditions(arg0: Internal.ItemStack_, arg1: Internal.IStorageWrapper_, arg2: boolean): Internal.UpgradeSlotChangeResult;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getUpgradeGroup(): Internal.UpgradeGroup;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getName(): net.minecraft.network.chat.Component;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getUpgradesPerStorage(arg0: string): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        canSwapUpgradeFor(arg0: Internal.ItemStack_, arg1: number, arg2: Internal.IStorageWrapper_, arg3: boolean): Internal.UpgradeSlotChangeResult;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        canRemoveUpgradeFrom(arg0: Internal.IStorageWrapper_, arg1: boolean): Internal.UpgradeSlotChangeResult;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        addCreativeTabItems(arg0: Internal.Consumer_<Internal.ItemStack>): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        notify(): void;
        getType(): Internal.UpgradeType<Internal.EverlastingUpgradeItem$Wrapper>;
        getCleanedUpgradeStack(arg0: Internal.ItemStack_): Internal.ItemStack;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getUpgradesInGroupPerStorage(arg0: string): number;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        get upgradeConflicts(): Internal.List<Internal.IUpgradeItem$UpgradeConflictDefinition>
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get inventoryColumnsTaken(): number
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get upgradeGroup(): Internal.UpgradeGroup
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get name(): net.minecraft.network.chat.Component
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get type(): Internal.UpgradeType<Internal.EverlastingUpgradeItem$Wrapper>
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        static readonly TYPE: Internal.UpgradeType<Internal.EverlastingUpgradeItem$Wrapper>;
        static readonly UPGRADE_CONFLICT_DEFINITIONS: ([Internal.IUpgradeItem$UpgradeConflictDefinition]) & (Internal.List<Internal.IUpgradeItem$UpgradeConflictDefinition>);
    }
    type EverlastingUpgradeItem_ = EverlastingUpgradeItem;
    interface DimensionTypeAccessor {
        abstract getFixedTime(): Internal.OptionalLong;
        abstract getAmbientLight(): number;
        get fixedTime(): Internal.OptionalLong
        get ambientLight(): number
    }
    type DimensionTypeAccessor_ = DimensionTypeAccessor;
    interface Type$TypeMatcher <FT, FR> {
        abstract match<S>(arg0: com.mojang.datafixers.types.Type_<S>): Internal.Either<Internal.TypedOptic<S, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        (arg0: com.mojang.datafixers.types.Type<S>): Internal.Either_<Internal.TypedOptic<S, any, FT, FR>, Internal.Type$FieldNotFoundException>;
    }
    type Type$TypeMatcher_<FT, FR> = ((arg0: com.mojang.datafixers.types.Type<S>)=> Internal.Either_<Internal.TypedOptic<S, any, FT, FR>, Internal.Type$FieldNotFoundException>) | Type$TypeMatcher<FT, FR>;
    class ModelProperty <T> implements Internal.Predicate<T> {
        constructor()
        constructor(arg0: Internal.Predicate_<T>)
        getClass(): typeof any;
        negate(): Internal.Predicate<T>;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        or(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        toString(): string;
        and(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        hashCode(): number;
        test(arg0: T): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type ModelProperty_<T> = ModelProperty<T>;
    class GunpowderBlock extends Internal.LightUpBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        static createMiniExplosion(world: Internal.Level_, pos: BlockPos_, alwaysFire: boolean): void;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, eventID: number, eventParam: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        setLitUp(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, lit: boolean): void;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, face: Internal.Direction_, igniter: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(state: Internal.BlockState_, worldIn: Internal.Level_, pos: BlockPos_, entityIn: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        isLitUp(state: Internal.BlockState_): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        interactWithProjectile(level: Internal.Level_, state: Internal.BlockState_, projectile: Internal.Projectile_, pos: BlockPos_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        playExtinguishSound(world: Internal.LevelAccessor_, pos: BlockPos_): void;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(state: Internal.BlockState_, world: Internal.ServerLevel_, pos: BlockPos_, random: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, neighborBlock: Internal.Block_, neighborPos: BlockPos_, moving: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        updateIndirectNeighbourShapes(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, var1: number, var2: number): void;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        use(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        extinguish(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): boolean;
        static isFireSource(world: Internal.LevelAccessor_, pos: BlockPos_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(state: Internal.BlockState_, direction: Internal.Direction_, otherState: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, otherPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(state: Internal.BlockState_, rotation: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        onProjectileHit(level: Internal.Level_, state: Internal.BlockState_, pHit: Internal.BlockHitResult_, projectile: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, newState: Internal.BlockState_, isMoving: boolean): void;
        equals(arg0: any): boolean;
        canBeExtinguishedBy(item: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isLitUp(state: Internal.BlockState_, level: Internal.LevelAccessor_, pos: BlockPos_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, explosion: Internal.Explosion_): void;
        fallOn(world: Internal.Level_, state: Internal.BlockState_, pos: BlockPos_, entity: Internal.Entity_, height: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, face: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        lightUp(entity: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_, fireSourceType: Internal.ILightable$FireSourceType_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        static isFireSource(state: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, oldState: Internal.BlockState_, moving: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        toggleLitState(state: Internal.BlockState_, lit: boolean): Internal.BlockState;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(state: Internal.BlockState_, world: Internal.LevelReader_, pos: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        interactWithPlayer(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_): InteractionResult;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(state: Internal.BlockState_, mirror: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_, random: Internal.RandomSource_): void;
        getFireSpreadSpeed(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, face: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(state: Internal.BlockState_, world: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        playLightUpSound(world: Internal.LevelAccessor_, pos: BlockPos_, type: Internal.ILightable$FireSourceType_): void;
        spawnSmokeParticles(state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly BURNING: (Internal.IntegerProperty) & (Internal.IntegerProperty);
        static readonly WEST: Internal.EnumProperty<Internal.RedstoneSide>;
        static readonly PROPERTY_BY_DIRECTION: ({[key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>, [key: Internal.Direction]: Internal.EnumProperty<any>}) & (Internal.Map<Internal.Direction, Internal.EnumProperty<Internal.RedstoneSide>>);
        static readonly NORTH: Internal.EnumProperty<Internal.RedstoneSide>;
        static readonly SOUTH: Internal.EnumProperty<Internal.RedstoneSide>;
        static readonly EAST: Internal.EnumProperty<Internal.RedstoneSide>;
    }
    type GunpowderBlock_ = GunpowderBlock;
    interface IForgeIntrinsicHolderTagAppender <T> extends Internal.IForgeTagAppender<T> {
        remove(arg0: Internal.ResourceKey_<T>, ...arg1: Internal.ResourceKey_<T>[]): Internal.IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: ResourceLocation_, arg1: ResourceLocation_[]): Internal.TagsProvider$TagAppender<any>;
        "remove(net.minecraft.tags.TagKey)"(arg0: Internal.TagKey_<any>): Internal.TagsProvider$TagAppender<any>;
        remove(arg0: T): Internal.IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: Internal.ResourceKey_<T>): Internal.IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        "remove(net.minecraft.tags.TagKey,net.minecraft.tags.TagKey[])"(arg0: Internal.TagKey_<any>, arg1: Internal.TagKey_<any>[]): Internal.TagsProvider$TagAppender<any>;
        "remove(java.lang.Object,java.lang.Object[])"(arg0: T, ...arg1: T[]): Internal.IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        addOptionalTags(...arg0: Internal.TagKey_<T>[]): Internal.TagsProvider$TagAppender<T>;
        remove(arg0: Internal.TagKey_<any>): Internal.TagsProvider$TagAppender<any>;
        "remove(java.lang.Object)"(arg0: T): Internal.IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        replace(arg0: boolean): Internal.IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        addOptionalTag(arg0: Internal.TagKey_<T>): Internal.TagsProvider$TagAppender<T>;
        "remove(net.minecraft.resources.ResourceLocation,net.minecraft.resources.ResourceLocation[])"(arg0: ResourceLocation_, arg1: ResourceLocation_[]): Internal.TagsProvider$TagAppender<any>;
        "remove(net.minecraft.resources.ResourceKey,net.minecraft.resources.ResourceKey[])"(arg0: Internal.ResourceKey_<T>, ...arg1: Internal.ResourceKey_<T>[]): Internal.IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: ResourceLocation_): Internal.TagsProvider$TagAppender<any>;
        "remove(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<T>): Internal.IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: T, ...arg1: T[]): Internal.IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        remove(arg0: Internal.TagKey_<any>, arg1: Internal.TagKey_<any>[]): Internal.TagsProvider$TagAppender<any>;
        abstract getKey(arg0: T): Internal.ResourceKey<T>;
        replace(): Internal.TagsProvider$TagAppender<any>;
        addTags(...arg0: Internal.TagKey_<T>[]): Internal.IntrinsicHolderTagsProvider$IntrinsicTagAppender<T>;
        "remove(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): Internal.TagsProvider$TagAppender<any>;
        (arg0: T): Internal.ResourceKey_<T>;
    }
    type IForgeIntrinsicHolderTagAppender_<T> = ((arg0: T)=> Internal.ResourceKey_<T>) | IForgeIntrinsicHolderTagAppender<T>;
    interface CommentedConfig$Entry extends Internal.UnmodifiableCommentedConfig$Entry, Internal.Config$Entry {
        getChar(): string;
        getShortOrElse(arg0: number): number;
        abstract removeComment(): string;
        abstract setValue<T>(arg0: any): T;
        getByte(): number;
        abstract getComment(): string;
        abstract getKey(): string;
        abstract getRawValue<T>(): T;
        getIntOrElse(arg0: number): number;
        getLongOrElse(arg0: number): number;
        getOptionalLong(): Internal.OptionalLong;
        getLong(): number;
        abstract setComment(arg0: string): string;
        getByteOrElse(arg0: number): number;
        getShort(): number;
        getValue<T>(): T;
        isNull(): boolean;
        getOrElse<T>(arg0: T): T;
        getOptional<T>(): Internal.Optional<T>;
        getOptionalInt(): Internal.OptionalInt;
        getInt(): number;
        getCharOrElse(arg0: string): string;
        get "char"(): string
        set value(arg0: any)
        get "byte"(): number
        get comment(): string
        get key(): string
        get rawValue(): T
        get optionalLong(): Internal.OptionalLong
        get "long"(): number
        set comment(arg0: string)
        get "short"(): number
        get value(): T
        get "null"(): boolean
        get optional(): Internal.Optional<T>
        get optionalInt(): Internal.OptionalInt
        get "int"(): number
    }
    type CommentedConfig$Entry_ = CommentedConfig$Entry;
    class BeeswaxBlock extends Internal.Block {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type BeeswaxBlock_ = BeeswaxBlock;
    class ServerRecipeBook extends Internal.RecipeBook {
        constructor()
        getClass(): typeof any;
        toNbt(): Internal.CompoundTag;
        copyOverData(arg0: Internal.RecipeBook_): void;
        contains(arg0: ResourceLocation_): boolean;
        removeHighlight(arg0: Internal.Recipe_<any>): void;
        fromNbt(arg0: Internal.CompoundTag_, arg1: Internal.RecipeManager_): void;
        removeRecipes(arg0: Internal.Collection_<Internal.Recipe<any>>, arg1: Internal.ServerPlayer_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        willHighlight(arg0: Internal.Recipe_<any>): boolean;
        "isFiltering(net.minecraft.world.inventory.RecipeBookType)"(arg0: Internal.RecipeBookType_): boolean;
        contains(arg0: Internal.Recipe_<any>): boolean;
        toString(): string;
        "contains(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): boolean;
        remove(arg0: Internal.Recipe_<any>): void;
        isOpen(arg0: Internal.RecipeBookType_): boolean;
        notifyAll(): void;
        add(arg0: Internal.Recipe_<any>): void;
        "contains(net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.Recipe_<any>): boolean;
        addHighlight(arg0: Internal.Recipe_<any>): void;
        setOpen(arg0: Internal.RecipeBookType_, arg1: boolean): void;
        sendInitialRecipeBook(arg0: Internal.ServerPlayer_): void;
        hashCode(): number;
        "isFiltering(net.minecraft.world.inventory.RecipeBookMenu)"(arg0: Internal.RecipeBookMenu_<any>): boolean;
        isFiltering(arg0: Internal.RecipeBookType_): boolean;
        wait(): void;
        isFiltering(arg0: Internal.RecipeBookMenu_<any>): boolean;
        setFiltering(arg0: Internal.RecipeBookType_, arg1: boolean): void;
        wait(arg0: number): void;
        addRecipes(arg0: Internal.Collection_<Internal.Recipe<any>>, arg1: Internal.ServerPlayer_): number;
        setBookSettings(arg0: Internal.RecipeBookSettings_): void;
        setBookSetting(arg0: Internal.RecipeBookType_, arg1: boolean, arg2: boolean): void;
        getBookSettings(): Internal.RecipeBookSettings;
        equals(arg0: any): boolean;
        get class(): typeof any
        set bookSettings(arg0: Internal.RecipeBookSettings_)
        get bookSettings(): Internal.RecipeBookSettings
        static readonly RECIPE_BOOK_TAG: ("recipeBook") & (string);
    }
    type ServerRecipeBook_ = ServerRecipeBook;
    class IronBubbleItem extends Internal.AccessoryItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        canSync(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canUnequip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canWalkOnPowderedSnow(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        curioTick(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getLootingBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canEquip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        getClass(): typeof any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        showAttributesTooltip(arg0: string, arg1: Internal.ItemStack_): boolean;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        onEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        canUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        writeSyncData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "getAttributeModifiers(java.lang.String,net.minecraft.world.item.ItemStack)"(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        readSyncData(arg0: Internal.CompoundTag_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canSync(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getFortuneBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onEquip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioTick(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isEnderMask(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canRightClickEquip(arg0: Internal.ItemStack_): boolean;
        getEquipSound(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.ICurio$SoundInfo;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        "makesPiglinsNeutral(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        curioBreak(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        "isEnderMask(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.player.Player,net.minecraft.world.entity.monster.EnderMan)"(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "curioBreak(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        getDropRule(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: number, arg3: boolean, arg4: Internal.ItemStack_): Internal.ICurio$DropRule;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        "canWalkOnPowderedSnow(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.LivingEntity)"(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onUnequip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDropRule(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): Internal.ICurio$DropRule;
        getAttributesTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        playRightClickEquipSound(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): void;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        hasCurioCapability(arg0: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getAttributeModifiers(arg0: Internal.SlotContext_, arg1: Internal.UUID_, arg2: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        "curioBreak(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        "makesPiglinsNeutral(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTagsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioBreak(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        notify(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioAnimate(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        readSyncData(arg0: Internal.SlotContext_, arg1: Internal.CompoundTag_, arg2: Internal.ItemStack_): void;
        getLootingLevel(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: Internal.LivingEntity_, arg3: number, arg4: Internal.ItemStack_): number;
        writeSyncData(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.CompoundTag;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        canEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        getFortuneLevel(arg0: Internal.SlotContext_, arg1: Internal.LootContext_, arg2: Internal.ItemStack_): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        "canEquip(java.lang.String,net.minecraft.world.entity.LivingEntity,net.minecraft.world.item.ItemStack)"(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        "canWalkOnPowderedSnow(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getSlotsTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>, arg1: Internal.ItemStack_): Internal.List<net.minecraft.network.chat.Component>;
        "isEnderMask(top.theillusivec4.curios.api.SlotContext,net.minecraft.world.entity.monster.EnderMan,net.minecraft.world.item.ItemStack)"(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        makesPiglinsNeutral(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAttributeModifiers(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        "canEquip(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.entity.Entity)"(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        canEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type IronBubbleItem_ = IronBubbleItem;
    class ItemBroom extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type ItemBroom_ = ItemBroom;
    interface ItemExtension extends Internal.IForgeItem {
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        abstract isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        bz$canPerformAction(stack: Internal.ItemStack_, toolAction: string): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        bz$getEquipmentSlot(stack: Internal.ItemStack_): Internal.EquipmentSlot;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getBzItem(): Internal.Item;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        bz$getMaxDamage(stack: Internal.ItemStack_): number;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        canPerformAction(stack: Internal.ItemStack_, toolAction: Internal.ToolAction_): boolean;
        bz$canApplyAtEnchantingTable(stack: Internal.ItemStack_, enchantment: Internal.Enchantment_): Internal.OptionalBoolean;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        bz$setDamage(stack: Internal.ItemStack_, damage: number): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        bz$onArmorTick(itemstack: Internal.ItemStack_, world: Internal.Level_, player: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        get bzItem(): Internal.Item
        (arg0: Internal.ItemStack): boolean;
    }
    type ItemExtension_ = ItemExtension | ((arg0: Internal.ItemStack)=> boolean);
    class BlindsBlock extends Internal.FurnitureHorizontalBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly EXTENSION: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly OPEN: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        readonly SHAPES: Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
    }
    type BlindsBlock_ = BlindsBlock;
    class DoorHingeSide extends Internal.Enum<Internal.DoorHingeSide> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.DoorHingeSide[];
        getDeclaringClass(): typeof Internal.DoorHingeSide;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        getSerializedName(): string;
        "compareTo(net.minecraft.world.level.block.state.properties.DoorHingeSide)"(arg0: Internal.DoorHingeSide_): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.DoorHingeSide;
        name(): string;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DoorHingeSide>>;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: Internal.DoorHingeSide_): number;
        get class(): typeof any
        get declaringClass(): typeof Internal.DoorHingeSide
        get serializedName(): string
        static readonly LEFT: (Internal.DoorHingeSide) & (Internal.DoorHingeSide);
        static readonly RIGHT: (Internal.DoorHingeSide) & (Internal.DoorHingeSide);
    }
    type DoorHingeSide_ = DoorHingeSide | "right" | "left";
    class TropicalFish$Base extends Internal.Enum<Internal.TropicalFish$Base> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        static values(): Internal.TropicalFish$Base[];
        notifyAll(): void;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TropicalFish$Base>>;
        notify(): void;
        "compareTo(net.minecraft.world.entity.animal.TropicalFish$Base)"(arg0: Internal.TropicalFish$Base_): number;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        getDeclaringClass(): typeof Internal.TropicalFish$Base;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        compareTo(arg0: Internal.TropicalFish$Base_): number;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static valueOf(arg0: string): Internal.TropicalFish$Base;
        get class(): typeof any
        get declaringClass(): typeof Internal.TropicalFish$Base
        static readonly LARGE: (Internal.TropicalFish$Base) & (Internal.TropicalFish$Base);
        static readonly SMALL: (Internal.TropicalFish$Base) & (Internal.TropicalFish$Base);
    }
    type TropicalFish$Base_ = "large" | "small" | TropicalFish$Base;
    interface IPistonMotionReact {
        /**
         * @deprecated
        */
        "moveTick(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.phys.AABB,net.minecraft.world.level.block.piston.PistonMovingBlockEntity)"(movedState: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, aabb: Internal.AABB_, tile: Internal.PistonMovingBlockEntity_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onMoved(movedState: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, direction: Internal.Direction_, extending: boolean, tile: Internal.PistonMovingBlockEntity_): void;
        onMoved(level: Internal.Level_, pos: BlockPos_, movedState: Internal.BlockState_, direction: Internal.Direction_, extending: boolean): void;
        moveTick(level: Internal.Level_, pos: BlockPos_, movedState: Internal.BlockState_, aabb: Internal.AABB_, tile: Internal.PistonMovingBlockEntity_): void;
        onMagnetMoved(level: Internal.Level_, blockPos: BlockPos_, direction: Internal.Direction_, blockState: Internal.BlockState_, blockEntity: Internal.BlockEntity_): void;
        ticksWhileMoved(): boolean;
        /**
         * @deprecated
        */
        moveTick(movedState: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, aabb: Internal.AABB_, tile: Internal.PistonMovingBlockEntity_): void;
        "moveTick(net.minecraft.world.level.Level,net.minecraft.core.BlockPos,net.minecraft.world.level.block.state.BlockState,net.minecraft.world.phys.AABB,net.minecraft.world.level.block.piston.PistonMovingBlockEntity)"(level: Internal.Level_, pos: BlockPos_, movedState: Internal.BlockState_, aabb: Internal.AABB_, tile: Internal.PistonMovingBlockEntity_): void;
    }
    type IPistonMotionReact_ = IPistonMotionReact;
    interface MapRegionInfo {
        abstract hasLookedForCache(): boolean;
        abstract getRegionFile(): Internal.File;
        abstract getRegionZ(): number;
        abstract getDimId(): string;
        abstract getRegionX(): number;
        abstract shouldCache(): boolean;
        abstract setShouldCache(arg0: boolean, arg1: string): void;
        abstract getMwId(): string;
        abstract setCacheFile(arg0: Internal.File_): void;
        abstract getWorldId(): string;
        abstract getCacheFile(): Internal.File;
        get regionFile(): Internal.File
        get regionZ(): number
        get dimId(): string
        get regionX(): number
        get mwId(): string
        set cacheFile(arg0: Internal.File_)
        get worldId(): string
        get cacheFile(): Internal.File
    }
    type MapRegionInfo_ = MapRegionInfo;
    class CreativeModeTab$ItemDisplayParameters extends Internal.Record {
        constructor(enabledFeatures: Internal.FeatureFlagSet_, hasPermissions: boolean, holders: Internal.HolderLookup$Provider_)
        getClass(): typeof any;
        needsUpdate(arg0: Internal.FeatureFlagSet_, arg1: boolean, arg2: Internal.HolderLookup$Provider_): boolean;
        holders(): Internal.HolderLookup$Provider;
        toString(): string;
        enabledFeatures(): Internal.FeatureFlagSet;
        hasPermissions(): boolean;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type CreativeModeTab$ItemDisplayParameters_ = CreativeModeTab$ItemDisplayParameters;
    interface CooldownInstanceAccessor {
        abstract getStartTime(): number;
        get startTime(): number
        (): number;
    }
    type CooldownInstanceAccessor_ = (()=> number) | CooldownInstanceAccessor;
    class PainEffect extends Internal.MobEffect {
        constructor(statusEffectCategory: Internal.MobEffectCategory_, color: number)
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        isInstantenous(): boolean;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        getColor(): number;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        getEffectRendererInternal(): any;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        setAdditionalData(data: number): void;
        applyEffectTick(livingEntity: Internal.LivingEntity_, amplifier: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        setSourcePlayer(livingEntity: Internal.LivingEntity_): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(pDuration: number, pAmplifier: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get color(): number
        get effectRendererInternal(): any
        set additionalData(data: number)
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
        set sourcePlayer(livingEntity: Internal.LivingEntity_)
        sourceEntity: Internal.LivingEntity;
        additionalData: number;
    }
    type PainEffect_ = PainEffect;
    class TabNavigationBar extends Internal.AbstractContainerEventHandler implements Internal.NarratableEntry, Internal.GuiEventListener, Internal.Renderable {
        charTyped(arg0: string, arg1: number): boolean;
        getClass(): typeof any;
        abstract isFocused(): boolean;
        "setFocused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_): void;
        setFocused(arg0: boolean): void;
        isActive(): boolean;
        selectTab(arg0: number, arg1: boolean): void;
        getTabOrderGroup(): number;
        setFocused(arg0: Internal.GuiEventListener_): void;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        arrangeElements(): void;
        setWidth(arg0: number): void;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        getFocused(): Internal.GuiEventListener;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        keyPressed(arg0: number): boolean;
        magicalSpecialHackyFocus(arg0: Internal.GuiEventListener_): void;
        toString(): string;
        narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        notifyAll(): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        "setFocused(boolean)"(arg0: boolean): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        static builder(arg0: Internal.TabManager_, arg1: number): Internal.TabNavigationBar$Builder;
        hashCode(): number;
        getCurrentFocusPath(): Internal.ComponentPath;
        setDragging(arg0: boolean): void;
        updateNarration(arg0: Internal.NarrationElementOutput_): void;
        wait(): void;
        children(): Internal.List<Internal.GuiEventListener>;
        wait(arg0: number): void;
        render(arg0: Internal.GuiGraphics_, arg1: number, arg2: number, arg3: number): void;
        isDragging(): boolean;
        getChildAt(arg0: number, arg1: number): Internal.Optional<Internal.GuiEventListener>;
        equals(arg0: any): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        get class(): typeof any
        get focused(): boolean
        set "focused(net.minecraft.client.gui.components.events.GuiEventListener)"(arg0: Internal.GuiEventListener_)
        set focused(arg0: boolean)
        get active(): boolean
        get tabOrderGroup(): number
        set focused(arg0: Internal.GuiEventListener_)
        set width(arg0: number)
        get rectangle(): Internal.ScreenRectangle
        get focused(): Internal.GuiEventListener
        set "focused(boolean)"(arg0: boolean)
        get currentFocusPath(): Internal.ComponentPath
        set dragging(arg0: boolean)
        get dragging(): boolean
    }
    type TabNavigationBar_ = TabNavigationBar;
    class ExtraCodecs$LazyInitializedCodec <A> extends Internal.Record implements Internal.Codec<A> {
        optionalFieldOf(arg0: string, arg1: A): Internal.MapCodec<A>;
        static empty<A>(): Internal.MapEncoder<A>;
        fieldOf(arg0: string): Internal.MapCodec<A>;
        static "of(com.mojang.serialization.MapEncoder,com.mojang.serialization.MapDecoder)"<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        withLifecycle(arg0: Internal.Lifecycle_): com.mojang.serialization.Decoder<any>;
        static error<A>(arg0: string): Internal.Encoder<A>;
        static unit<A>(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        parse<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<A>;
        notify(): void;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<A>>): Internal.Encoder<B>;
        simple(): Internal.Decoder$Simple<A>;
        static floatRange(arg0: number, arg1: number): Internal.Codec<number>;
        stable(): Internal.Codec<A>;
        static "of(com.mojang.serialization.Encoder,com.mojang.serialization.Decoder)"<A>(arg0: Internal.Encoder_<A>, arg1: com.mojang.serialization.Decoder_<A>): Internal.Codec<A>;
        static ofBoxed<A>(arg0: Internal.Decoder$Boxed_<A>): com.mojang.serialization.Decoder<A>;
        dispatch<E>(arg0: Internal.Function_<E, A>, arg1: Internal.Function_<A, Internal.Codec<E>>): Internal.Codec<E>;
        partialDispatch<E>(arg0: string, arg1: Internal.Function_<E, Internal.DataResult<A>>, arg2: Internal.Function_<A, Internal.DataResult<Internal.Codec<E>>>): Internal.Codec<E>;
        "orElseGet(java.util.function.Consumer,java.util.function.Supplier)"(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<A>): Internal.Codec<A>;
        comap<B>(arg0: Internal.Function_<B, A>): Internal.Encoder<B>;
        dispatchMap<E>(arg0: string, arg1: Internal.Function_<E, A>, arg2: Internal.Function_<A, Internal.Codec<E>>): Internal.MapCodec<E>;
        static unit<A>(arg0: A): Internal.Codec<A>;
        static intRange(arg0: number, arg1: number): Internal.Codec<number>;
        orElseGet(arg0: Internal.Consumer_<string>, arg1: Internal.Supplier_<A>): Internal.Codec<A>;
        orElse(arg0: Internal.UnaryOperator_<string>, arg1: A): Internal.Codec<A>;
        static pair<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<com.mojang.datafixers.util.Pair<F, S>>;
        static either<F, S>(arg0: Internal.Codec_<F>, arg1: Internal.Codec_<S>): Internal.Codec<Internal.Either<F, S>>;
        static "unit(java.lang.Object)"<A>(arg0: A): Internal.Codec<A>;
        static checkRange<N extends number & Internal.Comparable<N>>(arg0: N, arg1: N): Internal.Function<N, Internal.DataResult<N>>;
        wait(): void;
        "orElse(java.util.function.UnaryOperator,java.lang.Object)"(arg0: Internal.UnaryOperator_<string>, arg1: A): Internal.Codec<A>;
        optionalFieldOf(arg0: string): Internal.MapCodec<Internal.Optional<A>>;
        static unboundedMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.UnboundedMapCodec<K, V>;
        dispatchStable<E>(arg0: Internal.Function_<E, A>, arg1: Internal.Function_<A, Internal.Codec<E>>): Internal.Codec<E>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: com.mojang.serialization.Decoder_<A>, arg2: string): Internal.Codec<A>;
        optionalFieldOf(arg0: string, arg1: Internal.Lifecycle_, arg2: A, arg3: Internal.Lifecycle_): Internal.MapCodec<A>;
        parse<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<A>;
        getClass(): typeof any;
        static ofSimple<A>(arg0: Internal.Decoder$Simple_<A>): com.mojang.serialization.Decoder<A>;
        static mapEither<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<Internal.Either<F, S>>;
        static doubleRange(arg0: number, arg1: number): Internal.Codec<number>;
        static optionalField<F>(arg0: string, arg1: Internal.Codec_<F>): Internal.MapCodec<Internal.Optional<F>>;
        static simpleMap<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>, arg2: Internal.Keyable_): Internal.SimpleMapCodec<K, V>;
        "orElse(java.util.function.Consumer,java.lang.Object)"(arg0: Internal.Consumer_<string>, arg1: A): Internal.Codec<A>;
        orElseGet(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        static ofTerminal<A>(arg0: Internal.Decoder$Terminal_<A>): com.mojang.serialization.Decoder<A>;
        map<B>(arg0: Internal.Function_<A, B>): com.mojang.serialization.Decoder<B>;
        wait(arg0: number, arg1: number): void;
        orElse(arg0: A): Internal.Codec<A>;
        deprecated(arg0: number): Internal.Codec<A>;
        static list<E>(arg0: Internal.Codec_<E>): Internal.Codec<Internal.List<E>>;
        dispatchMap<E>(arg0: Internal.Function_<E, A>, arg1: Internal.Function_<A, Internal.Codec<E>>): Internal.MapCodec<E>;
        flatMap<B>(arg0: Internal.Function_<A, Internal.DataResult<B>>): com.mojang.serialization.Decoder<B>;
        boxed(): Internal.Decoder$Boxed<A>;
        promotePartial(arg0: Internal.Consumer_<any>): com.mojang.serialization.Decoder<any>;
        xmap<S>(arg0: Internal.Function_<A, S>, arg1: Internal.Function_<S, A>): Internal.Codec<S>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>): Internal.MapCodec<A>;
        static "unit(java.util.function.Supplier)"<A>(arg0: Internal.Supplier_<A>): Internal.Codec<A>;
        "orElseGet(java.util.function.UnaryOperator,java.util.function.Supplier)"(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<A>): Internal.Codec<A>;
        dispatch<E>(arg0: string, arg1: Internal.Function_<E, A>, arg2: Internal.Function_<A, Internal.Codec<E>>): Internal.Codec<E>;
        comapFlatMap<S>(arg0: Internal.Function_<A, Internal.DataResult<S>>, arg1: Internal.Function_<S, A>): Internal.Codec<S>;
        toString(): string;
        delegate(): Internal.Supplier<Internal.Codec<A>>;
        static of<A>(arg0: Internal.Encoder_<A>, arg1: com.mojang.serialization.Decoder_<A>): Internal.Codec<A>;
        notifyAll(): void;
        orElseGet(arg0: Internal.UnaryOperator_<string>, arg1: Internal.Supplier_<A>): Internal.Codec<A>;
        optionalFieldOf(arg0: string, arg1: A, arg2: Internal.Lifecycle_): Internal.MapCodec<A>;
        terminal(): Internal.Decoder$Terminal<A>;
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<com.mojang.datafixers.util.Pair<A, T>>;
        static of<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        orElse(arg0: Internal.Consumer_<string>, arg1: A): Internal.Codec<A>;
        static compoundList<K, V>(arg0: Internal.Codec_<K>, arg1: Internal.Codec_<V>): Internal.Codec<Internal.List<com.mojang.datafixers.util.Pair<K, V>>>;
        listOf(): Internal.Codec<Internal.List<A>>;
        encodeStart<T>(arg0: Internal.DynamicOps_<T>, arg1: A): Internal.DataResult<T>;
        hashCode(): number;
        flatXmap<S>(arg0: Internal.Function_<A, Internal.DataResult<S>>, arg1: Internal.Function_<S, Internal.DataResult<A>>): Internal.Codec<S>;
        decode<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<A, T>>;
        flatComapMap<S>(arg0: Internal.Function_<A, S>, arg1: Internal.Function_<S, Internal.DataResult<A>>): Internal.Codec<S>;
        mapResult(arg0: Internal.Codec$ResultFunction_<A>): Internal.Codec<A>;
        wait(arg0: number): void;
        static "of(com.mojang.serialization.MapEncoder,com.mojang.serialization.MapDecoder,java.util.function.Supplier)"<A>(arg0: Internal.MapEncoder_<A>, arg1: Internal.MapDecoder_<A>, arg2: Internal.Supplier_<string>): Internal.MapCodec<A>;
        static "of(com.mojang.serialization.Encoder,com.mojang.serialization.Decoder,java.lang.String)"<A>(arg0: Internal.Encoder_<A>, arg1: com.mojang.serialization.Decoder_<A>, arg2: string): Internal.Codec<A>;
        equals(arg0: any): boolean;
        static mapPair<F, S>(arg0: Internal.MapCodec_<F>, arg1: Internal.MapCodec_<S>): Internal.MapCodec<com.mojang.datafixers.util.Pair<F, S>>;
        encode<T>(arg0: A, arg1: Internal.DynamicOps_<T>, arg2: T): Internal.DataResult<T>;
        get class(): typeof any
    }
    type ExtraCodecs$LazyInitializedCodec_<A> = ExtraCodecs$LazyInitializedCodec<A>;
    class IdFunctionObject extends Internal.BaseFunction {
        constructor(idcall: Internal.IdFunctionCall_, tag: any, id: number, name: string, arity: number, scope: Internal.Scriptable_)
        constructor(idcall: Internal.IdFunctionCall_, tag: any, id: number, arity: number)
        preventExtensions(): void;
        static getFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        getTag(): any;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        setImmunePrototypeProperty(value: any): void;
        static getArrayPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        static putProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        "get(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        static putProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,int,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        abstract get(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): any;
        abstract setParentScope(arg0: Internal.Scriptable_): void;
        "setAttributes(dev.latvian.mods.rhino.Context,int,int)"(cx: Internal.Context_, index: number, attributes: number): void;
        "put(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        getTypeOf(): Internal.MemberType;
        abstract getIds(arg0: Internal.Context_): any[];
        static deleteProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        static getTopScopeValue(scope: Internal.Scriptable_, key: any, cx: Internal.Context_): any;
        defineOwnProperties(cx: Internal.Context_, props: Internal.ScriptableObject_): void;
        "delete(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): void;
        setAttributes(cx: Internal.Context_, name: string, attributes: number): void;
        unknown(): Internal.RuntimeException;
        associateValue(key: any, value: any): any;
        abstract getParentScope(): Internal.Scriptable;
        setAttributes(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, cx: Internal.Context_): void;
        "delete(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): void;
        getLength(): number;
        hasTag(tag: any): boolean;
        avoidObjectDetection(): boolean;
        static getClassPrototype(scope: Internal.Scriptable_, className: string, cx: Internal.Context_): Internal.Scriptable;
        put(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static getProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        getClass(): typeof any;
        static hasProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        abstract "delete(dev.latvian.mods.rhino.Context,int)"(arg0: Internal.Context_, arg1: number): void;
        call(cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[]): any;
        hasInstance(cx: Internal.Context_, instance: Internal.Scriptable_): boolean;
        getExternalArrayData(): Internal.ExternalArrayData;
        abstract put(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_, arg3: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        "defineProperty(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        "initPrototypeMethod(java.lang.Object,int,java.lang.String,java.lang.String,int,dev.latvian.mods.rhino.Context)"(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): this;
        static defineConstProperty(destination: Internal.Scriptable_, propertyName: string, cx: Internal.Context_): void;
        sealObject(cx: Internal.Context_): void;
        initPrototypeMethod(tag: any, id: number, name: string, arity: number, cx: Internal.Context_): this;
        abstract has(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): boolean;
        createObject(cx: Internal.Context_, scope: Internal.Scriptable_): Internal.Scriptable;
        static deleteProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "get(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        "initPrototypeValue(int,dev.latvian.mods.rhino.Symbol,java.lang.Object,int)"(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        static defineProperty(destination: Internal.Scriptable_, propertyName: string, value: any, attributes: number, cx: Internal.Context_): void;
        getAttributes(cx: Internal.Context_, index: number): number;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        getArity(): number;
        toString(): string;
        notifyAll(): void;
        "initPrototypeValue(int,java.lang.String,java.lang.Object,int)"(id: number, name: string, value: any, attributes: number): void;
        setGetterOrSetter(cx: Internal.Context_, name: string, index: number, getterOrSetter: dev.latvian.mods.rhino.Callable_, isSetter: boolean): void;
        initFunction(name: string, scope: Internal.Scriptable_): void;
        enumerationIteratorNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, mapInheritance: boolean, cx: Internal.Context_): string;
        has(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        size(): number;
        static getProperty(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): any;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        execIdCall(f: Internal.IdFunctionObject_, cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[]): any;
        static getObjectPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        wait(arg0: number): void;
        construct(cx: Internal.Context_, scope: Internal.Scriptable_, args: any[]): Internal.Scriptable;
        initPrototypeValue(id: number, key: Internal.Symbol_, value: any, attributes: number): void;
        defineProperty(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        addAsProperty(target: Internal.Scriptable_, cx: Internal.Context_): void;
        initPrototypeValue(id: number, name: string, value: any, attributes: number): void;
        setAttributes(cx: Internal.Context_, index: number, attributes: number): void;
        putConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): any;
        defineProperty(cx: Internal.Context_, propertyName: string, delegateTo: any, getter: Internal.WrappedExecutable_, setter: Internal.WrappedExecutable_, attributes: number): void;
        getClassName(): string;
        defineFunctionProperties(cx: Internal.Context_, names: string[], clazz: typeof any, attributes: number): void;
        "delete"(cx: Internal.Context_, name: string): void;
        static putProperty(obj: Internal.Scriptable_, index: number, value: any, cx: Internal.Context_): void;
        abstract "delete"(arg0: Internal.Context_, arg1: number): void;
        "initPrototypeMethod(java.lang.Object,int,dev.latvian.mods.rhino.Symbol,java.lang.String,int,dev.latvian.mods.rhino.Context)"(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): this;
        static getGeneratorFunctionPrototype(scope: Internal.Scriptable_, cx: Internal.Context_): Internal.Scriptable;
        "put(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_, value: any): void;
        static defineClass<T extends Internal.Scriptable>(scope: Internal.Scriptable_, clazz: T, sealed: boolean, cx: Internal.Context_): void;
        notify(): void;
        methodId(): number;
        initPrototypeMethod(tag: any, id: number, propertyName: string, functionName: string, arity: number, cx: Internal.Context_): this;
        static putConstProperty(obj: Internal.Scriptable_, name: string, value: any, cx: Internal.Context_): void;
        hasPrototypeMap(): boolean;
        static redefineProperty(obj: Internal.Scriptable_, name: string, isConst: boolean, cx: Internal.Context_): void;
        exportAsScopeProperty(cx: Internal.Context_): void;
        static "putProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,java.lang.Object,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, value: any, cx: Internal.Context_): void;
        get(cx: Internal.Context_, key: any): any;
        getPrototype(cx: Internal.Context_): Internal.Scriptable;
        get(cx: Internal.Context_, name: string, start: Internal.Scriptable_): any;
        static getDefaultValue(object: Internal.Scriptable_, typeHint: typeof any, cx: Internal.Context_): any;
        abstract "put(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable,java.lang.Object)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_, arg3: any): void;
        enumerationIteratorHasNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        static "getProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        abstract "has(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): boolean;
        isConst(name: string): boolean;
        getAttributes(cx: Internal.Context_, key: Internal.Symbol_): number;
        initPrototypeConstructor(f: Internal.IdFunctionObject_, cx: Internal.Context_): void;
        static "deleteProperty(dev.latvian.mods.rhino.Scriptable,java.lang.String,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, name: string, cx: Internal.Context_): boolean;
        "getAttributes(dev.latvian.mods.rhino.Context,int)"(cx: Internal.Context_, index: number): number;
        isExtensible(): boolean;
        wait(): void;
        abstract setPrototype(arg0: Internal.Scriptable_): void;
        markAsConstructor(prototypeProperty: Internal.Scriptable_): void;
        getGetterOrSetter(name: string, index: number, isSetter: boolean): any;
        getAttributes(cx: Internal.Context_, name: string): number;
        activatePrototypeMap(maxPrototypeId: number): void;
        defineProperty(cx: Internal.Context_, key: Internal.Symbol_, value: any, attributes: number): void;
        static getPropertyIds(cx: Internal.Context_, obj: Internal.Scriptable_): any[];
        getAssociatedValue(key: any): any;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Object,int)"(cx: Internal.Context_, propertyName: string, value: any, attributes: number): void;
        "delete"(cx: Internal.Context_, key: Internal.Symbol_): void;
        initPrototypeMethod(tag: any, id: number, key: Internal.Symbol_, functionName: string, arity: number, cx: Internal.Context_): this;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,int,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        static getProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): any;
        "has(dev.latvian.mods.rhino.Context,java.lang.String,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        has(cx: Internal.Context_, name: string, start: Internal.Scriptable_): boolean;
        defineConst(cx: Internal.Context_, name: string, start: Internal.Scriptable_): void;
        "defineProperty(dev.latvian.mods.rhino.Context,java.lang.String,java.lang.Class,int)"(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        defineOwnProperty(cx: Internal.Context_, key: any, desc: Internal.ScriptableObject_): void;
        getFunctionName(): string;
        abstract getDefaultValue(arg0: Internal.Context_, arg1: typeof any): any;
        setExternalArrayData(cx: Internal.Context_, array: Internal.ExternalArrayData_): void;
        "getAttributes(dev.latvian.mods.rhino.Context,java.lang.String)"(cx: Internal.Context_, name: string): number;
        get(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): any;
        static hasProperty(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        "setAttributes(dev.latvian.mods.rhino.Context,java.lang.String,int)"(cx: Internal.Context_, name: string, attributes: number): void;
        isSealed(cx: Internal.Context_): boolean;
        getAllIds(cx: Internal.Context_): any[];
        "has(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Scriptable)"(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_): boolean;
        defineProperty(cx: Internal.Context_, propertyName: string, clazz: typeof any, attributes: number): void;
        static hasProperty(obj: Internal.Scriptable_, index: number, cx: Internal.Context_): boolean;
        exportAsJSClass(maxPrototypeId: number, scope: Internal.Scriptable_, sealed: boolean, cx: Internal.Context_): this;
        abstract "get(dev.latvian.mods.rhino.Context,int,dev.latvian.mods.rhino.Scriptable)"(arg0: Internal.Context_, arg1: number, arg2: Internal.Scriptable_): any;
        "setAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol,int)"(cx: Internal.Context_, key: Internal.Symbol_, attributes: number): void;
        static "hasProperty(dev.latvian.mods.rhino.Scriptable,dev.latvian.mods.rhino.Symbol,dev.latvian.mods.rhino.Context)"(obj: Internal.Scriptable_, key: Internal.Symbol_, cx: Internal.Context_): boolean;
        hashCode(): number;
        getExternalArrayLength(): any;
        "getAttributes(dev.latvian.mods.rhino.Context,dev.latvian.mods.rhino.Symbol)"(cx: Internal.Context_, key: Internal.Symbol_): number;
        static getTopLevelScope(obj: Internal.Scriptable_): Internal.Scriptable;
        put(cx: Internal.Context_, key: Internal.Symbol_, start: Internal.Scriptable_, value: any): void;
        equals(arg0: any): boolean;
        get tag(): any
        set immunePrototypeProperty(value: any)
        set parentScope(arg0: Internal.Scriptable_)
        get typeOf(): Internal.MemberType
        get parentScope(): Internal.Scriptable
        get length(): number
        get class(): typeof any
        get externalArrayData(): Internal.ExternalArrayData
        get arity(): number
        get className(): string
        get extensible(): boolean
        set prototype(arg0: Internal.Scriptable_)
        get empty(): boolean
        get functionName(): string
        get externalArrayLength(): any
    }
    type IdFunctionObject_ = IdFunctionObject;
    interface IWingsExpandable {
        abstract getExpansionFactor(): number;
        get expansionFactor(): number
        (): number;
    }
    type IWingsExpandable_ = IWingsExpandable | (()=> number);
    class MessageInABottleItem extends Internal.BlockItem {
        constructor(block: Internal.Block_, settings: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        static createTreasureMap(entity: Internal.Entity_): Internal.ItemStack;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        abstract moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        static createMansionMap(entity: Internal.Entity_): Internal.ItemStack;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(world: Internal.Level_, user: Internal.Player_, hand: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        static createMap(entity: Internal.Entity_, structure: Internal.TagKey_<Internal.Structure>, nameKey: string, iconType: Internal.MapDecoration$Type_): Internal.ItemStack;
        static createShipwreckMap(entity: Internal.Entity_): Internal.ItemStack;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        static getRandomMap(entity: Internal.Entity_): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): InteractionResult;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        static createMonumentMap(entity: Internal.Entity_): Internal.ItemStack;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        puzzleslib$setBlock(arg0: Internal.Block_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type MessageInABottleItem_ = MessageInABottleItem;
    class FoodData implements Internal.PlayerSensitive, Internal.FoodDataAccessor {
        constructor()
        getClass(): typeof any;
        localvar$epc000$diet$tick(arg0: boolean): boolean;
        getSaturationLevel(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getFoodLevel(): number;
        eat(arg0: Internal.Item_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_): void;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        setFoodLevel(arg0: number): void;
        /**
         * @deprecated
        */
        "eat(net.minecraft.world.item.Item,net.minecraft.world.item.ItemStack)"(arg0: Internal.Item_, arg1: Internal.ItemStack_): void;
        setSaturation(arg0: number): void;
        handler$con000$fruitsdelight$eat(arg0: number, arg1: number, arg2: Internal.CallbackInfo_, arg3: Internal.LocalFloatRef_): void;
        getLastFoodLevel(): number;
        handler$epc000$diet$eat(arg0: number, arg1: number, arg2: Internal.CallbackInfo_): void;
        getExhaustionLevel(): number;
        needsFood(): boolean;
        setExhaustion(arg0: number): void;
        toString(): string;
        addExhaustion(arg0: number): void;
        setPlayer(arg0: Internal.Player_): void;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        notifyAll(): void;
        hashCode(): number;
        tick(arg0: Internal.Player_): void;
        "eat(int,float)"(arg0: number, arg1: number): void;
        fruitsdelight$setPlayer(arg0: Internal.Player_): void;
        wait(): void;
        /**
         * @deprecated
        */
        eat(arg0: Internal.Item_, arg1: Internal.ItemStack_): void;
        handler$ekb000$tick(arg0: Internal.Player_, arg1: Internal.CallbackInfo_): void;
        wait(arg0: number): void;
        eat(arg0: number, arg1: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get saturationLevel(): number
        get foodLevel(): number
        set foodLevel(arg0: number)
        set saturation(arg0: number)
        get lastFoodLevel(): number
        get exhaustionLevel(): number
        set exhaustion(arg0: number)
        set player(arg0: Internal.Player_)
        fruitsdelight$player: Internal.Player;
    }
    type FoodData_ = FoodData;
    class ChunkDataEvent$Save extends Internal.ChunkDataEvent {
        constructor()
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.LevelAccessor_, arg2: Internal.CompoundTag_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        getChunk(): Internal.ChunkAccess;
        setPhase(arg0: Internal.EventPriority_): void;
        architectury$getAttachedLevel(): Internal.LevelAccessor;
        notifyAll(): void;
        isCanceled(): boolean;
        getData(): Internal.CompoundTag;
        architectury$attachLevel(level: Internal.LevelAccessor_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getLevel(): Internal.LevelAccessor;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get chunk(): Internal.ChunkAccess
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get data(): Internal.CompoundTag
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get level(): Internal.LevelAccessor
    }
    type ChunkDataEvent$Save_ = ChunkDataEvent$Save;
    abstract class RangeSearchEffect extends Internal.MobEffect {
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        isInstantenous(): boolean;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        getColor(): number;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        getEffectRendererInternal(): any;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        getEntitiesInRange<T extends Internal.Entity>(arg0: Internal.LivingEntity_, arg1: T): Internal.List<T>;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(arg0: number, arg1: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get color(): number
        get effectRendererInternal(): any
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
    }
    type RangeSearchEffect_ = RangeSearchEffect;
    interface IConfigSpec <T extends Internal.IConfigSpec<T>> extends Internal.UnmodifiableConfig {
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        "getLongOrElse(java.util.List,long)"(arg0: Internal.List_<string>, arg1: number): number;
        "get(java.util.List)"<T>(arg0: Internal.List_<string>): T;
        getEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        "getByteOrElse(java.util.List,byte)"(arg0: Internal.List_<string>, arg1: number): number;
        getInt(arg0: Internal.List_<string>): number;
        getShortOrElse(arg0: string, arg1: number): number;
        getByteOrElse(arg0: string, arg1: number): number;
        "getChar(java.lang.String)"(arg0: string): string;
        "getOptional(java.lang.String)"<T>(arg0: string): Internal.Optional<T>;
        "apply(java.lang.String)"<T>(arg0: string): T;
        getShortOrElse(arg0: Internal.List_<string>, arg1: number): number;
        "getEnumOrElse(java.util.List,java.lang.Class,java.util.function.Supplier)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.Supplier_<T>): T;
        "getEnumOrElse(java.util.List,java.lang.Class,com.electronwill.nightconfig.core.EnumGetMethod,java.util.function.Supplier)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        abstract isCorrecting(): boolean;
        "getRaw(java.lang.String)"<T>(arg0: string): T;
        getIntOrElse(arg0: Internal.List_<string>, arg1: number): number;
        abstract getRaw<T>(arg0: Internal.List_<string>): T;
        "getEnumOrElse(java.lang.String,java.lang.Enum)"<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        "getOptionalInt(java.util.List)"(arg0: Internal.List_<string>): Internal.OptionalInt;
        "getOptionalLong(java.util.List)"(arg0: Internal.List_<string>): Internal.OptionalLong;
        "getCharOrElse(java.util.List,char)"(arg0: Internal.List_<string>, arg1: string): string;
        getOptionalLong(arg0: string): Internal.OptionalLong;
        "getIntOrElse(java.lang.String,java.util.function.IntSupplier)"(arg0: string, arg1: Internal.IntSupplier_): number;
        abstract "getRaw(java.util.List)"<T>(arg0: Internal.List_<string>): T;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        "getIntOrElse(java.util.List,java.util.function.IntSupplier)"(arg0: Internal.List_<string>, arg1: Internal.IntSupplier_): number;
        "getEnum(java.lang.String,java.lang.Class,com.electronwill.nightconfig.core.EnumGetMethod)"<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        "getOptionalEnum(java.util.List,java.lang.Class)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): Internal.Optional<T>;
        "getShort(java.lang.String)"(arg0: string): number;
        "getOptionalEnum(java.util.List,java.lang.Class,com.electronwill.nightconfig.core.EnumGetMethod)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        "contains(java.lang.String)"(arg0: string): boolean;
        "getLongOrElse(java.util.List,java.util.function.LongSupplier)"(arg0: Internal.List_<string>, arg1: Internal.LongSupplier_): number;
        getOptionalLong(arg0: Internal.List_<string>): Internal.OptionalLong;
        get<T>(arg0: string): T;
        abstract contains(arg0: Internal.List_<string>): boolean;
        getLong(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        apply<T>(arg0: Internal.List_<string>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: Internal.LongSupplier_): number;
        getInt(arg0: string): number;
        abstract isCorrect(arg0: Internal.CommentedConfig_): boolean;
        "getOptional(java.util.List)"<T>(arg0: Internal.List_<string>): Internal.Optional<T>;
        getRaw<T>(arg0: string): T;
        getIntOrElse(arg0: string, arg1: Internal.IntSupplier_): number;
        "getOrElse(java.util.List,java.util.function.Supplier)"<T>(arg0: Internal.List_<string>, arg1: Internal.Supplier_<T>): T;
        isNull(arg0: string): boolean;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): Internal.Optional<T>;
        "getLong(java.lang.String)"(arg0: string): number;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getLongOrElse(arg0: string, arg1: number): number;
        getByteOrElse(arg0: Internal.List_<string>, arg1: number): number;
        getOptionalInt(arg0: string): Internal.OptionalInt;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.Supplier_<T>): T;
        "getEnumOrElse(java.util.List,java.lang.Enum,com.electronwill.nightconfig.core.EnumGetMethod)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        getIntOrElse(arg0: string, arg1: number): number;
        abstract correct(arg0: Internal.CommentedConfig_): number;
        getOptionalInt(arg0: Internal.List_<string>): Internal.OptionalInt;
        abstract acceptConfig(arg0: Internal.CommentedConfig_): void;
        "getEnumOrElse(java.lang.String,java.lang.Enum,com.electronwill.nightconfig.core.EnumGetMethod)"<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        abstract size(): number;
        "getShortOrElse(java.util.List,short)"(arg0: Internal.List_<string>, arg1: number): number;
        abstract valueMap(): Internal.Map<string, any>;
        "get(java.lang.String)"<T>(arg0: string): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Supplier_<T>): T;
        "getByte(java.lang.String)"(arg0: string): number;
        "getEnum(java.util.List,java.lang.Class,com.electronwill.nightconfig.core.EnumGetMethod)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        apply<T>(arg0: string): T;
        getOrElse<T>(arg0: string, arg1: T): T;
        "getLongOrElse(java.lang.String,long)"(arg0: string, arg1: number): number;
        "getLong(java.util.List)"(arg0: Internal.List_<string>): number;
        "getChar(java.util.List)"(arg0: Internal.List_<string>): string;
        "getEnum(java.lang.String,java.lang.Class)"<T extends Internal.Enum<T>>(arg0: string, arg1: T): T;
        getLong(arg0: string): number;
        "getOptionalLong(java.lang.String)"(arg0: string): Internal.OptionalLong;
        get<T>(arg0: Internal.List_<string>): T;
        getCharOrElse(arg0: string, arg1: string): string;
        contains(arg0: string): boolean;
        "getShort(java.util.List)"(arg0: Internal.List_<string>): number;
        getShort(arg0: Internal.List_<string>): number;
        isNull(arg0: Internal.List_<string>): boolean;
        abstract "contains(java.util.List)"(arg0: Internal.List_<string>): boolean;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: Internal.Supplier_<T>): T;
        "getOptionalEnum(java.lang.String,java.lang.Class)"<T extends Internal.Enum<T>>(arg0: string, arg1: T): Internal.Optional<T>;
        "getOrElse(java.util.List,java.lang.Object)"<T>(arg0: Internal.List_<string>, arg1: T): T;
        getOptional<T>(arg0: Internal.List_<string>): Internal.Optional<T>;
        "getLongOrElse(java.lang.String,java.util.function.LongSupplier)"(arg0: string, arg1: Internal.LongSupplier_): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        getOptional<T>(arg0: string): Internal.Optional<T>;
        "getByte(java.util.List)"(arg0: Internal.List_<string>): number;
        getShort(arg0: string): number;
        getOrElse<T>(arg0: string, arg1: Internal.Supplier_<T>): T;
        "getOptionalEnum(java.lang.String,java.lang.Class,com.electronwill.nightconfig.core.EnumGetMethod)"<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): Internal.Optional<T>;
        abstract entrySet(): Internal.Set<Internal.UnmodifiableConfig$Entry>;
        "getEnum(java.util.List,java.lang.Class)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        "getInt(java.util.List)"(arg0: Internal.List_<string>): number;
        "getByteOrElse(java.lang.String,byte)"(arg0: string, arg1: number): number;
        getChar(arg0: string): string;
        getOrElse<T>(arg0: Internal.List_<string>, arg1: T): T;
        getChar(arg0: Internal.List_<string>): string;
        self(): T;
        abstract afterReload(): void;
        "getEnumOrElse(java.lang.String,java.lang.Class,java.util.function.Supplier)"<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Supplier_<T>): T;
        "getIntOrElse(java.util.List,int)"(arg0: Internal.List_<string>, arg1: number): number;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getLongOrElse(arg0: Internal.List_<string>, arg1: number): number;
        "getOrElse(java.lang.String,java.lang.Object)"<T>(arg0: string, arg1: T): T;
        isEmpty(): boolean;
        "getOptionalInt(java.lang.String)"(arg0: string): Internal.OptionalInt;
        getIntOrElse(arg0: Internal.List_<string>, arg1: Internal.IntSupplier_): number;
        "getInt(java.lang.String)"(arg0: string): number;
        "getEnumOrElse(java.util.List,java.lang.Enum)"<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T, arg2: Internal.EnumGetMethod_): T;
        "getOrElse(java.lang.String,java.util.function.Supplier)"<T>(arg0: string, arg1: Internal.Supplier_<T>): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: Internal.List_<string>, arg1: T): T;
        getCharOrElse(arg0: Internal.List_<string>, arg1: string): string;
        getByte(arg0: Internal.List_<string>): number;
        getOptionalEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): Internal.Optional<T>;
        getLongOrElse(arg0: string, arg1: Internal.LongSupplier_): number;
        "isNull(java.lang.String)"(arg0: string): boolean;
        "getIntOrElse(java.lang.String,int)"(arg0: string, arg1: number): number;
        getByte(arg0: string): number;
        "getCharOrElse(java.lang.String,char)"(arg0: string, arg1: string): string;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        "apply(java.util.List)"<T>(arg0: Internal.List_<string>): T;
        abstract configFormat(): Internal.ConfigFormat<any>;
        "isNull(java.util.List)"(arg0: Internal.List_<string>): boolean;
        "getShortOrElse(java.lang.String,short)"(arg0: string, arg1: number): number;
        "getEnumOrElse(java.lang.String,java.lang.Class,com.electronwill.nightconfig.core.EnumGetMethod,java.util.function.Supplier)"<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getEnumOrElse<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_, arg3: Internal.Supplier_<T>): T;
        getEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.EnumGetMethod_): T;
        get correcting(): boolean
        get empty(): boolean
    }
    type IConfigSpec_<T extends Internal.IConfigSpec<T>> = IConfigSpec<T>;
    class RefinedBeeswaxSlab extends Internal.SlabBlock {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type RefinedBeeswaxSlab_ = RefinedBeeswaxSlab;
    abstract class TemplateComponent implements Internal.IVariablesAvailableCallback {
        constructor()
        onVariablesAvailable(arg0: Internal.UnaryOperator_<Internal.IVariable>): void;
        getClass(): typeof any;
        getVisibleStatus(arg0: Internal.IComponentProcessor_): boolean;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compile(arg0: Internal.Level_, arg1: Internal.IVariableProvider_, arg2: Internal.IComponentProcessor_, arg3: Internal.TemplateInclusion_): void;
        mouseClicked(arg0: Internal.BookPage_, arg1: number, arg2: number, arg3: number): boolean;
        hashCode(): number;
        render(arg0: Internal.GuiGraphics_, arg1: Internal.BookPage_, arg2: number, arg3: number, arg4: number): void;
        onDisplayed(arg0: Internal.BookPage_, arg1: Internal.GuiBookEntry_, arg2: number, arg3: number): void;
        wait(): void;
        build(arg0: Internal.BookContentsBuilder_, arg1: Internal.BookPage_, arg2: Internal.BookEntry_, arg3: number): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        x: number;
        y: number;
        flag: string;
        group: string;
        advancement: string;
        guard: string;
    }
    type TemplateComponent_ = TemplateComponent;
    interface Char2ReferenceFunction <V> extends Internal.IntFunction<V>, it.unimi.dsi.fastutil.Function<string, V> {
        composeLong(arg0: Internal.Long2CharFunction_): Internal.Long2ReferenceFunction<V>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        containsKey(arg0: string): boolean;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<string, V>;
        composeShort(arg0: Internal.Short2CharFunction_): Internal.Short2ReferenceFunction<V>;
        composeDouble(arg0: Internal.Double2CharFunction_): Internal.Double2ReferenceFunction<V>;
        remove(arg0: string): V;
        composeFloat(arg0: Internal.Float2CharFunction_): Internal.Float2ReferenceFunction<V>;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        "getOrDefault(char,java.lang.Object)"(arg0: string, arg1: V): V;
        abstract get(arg0: string): V;
        "apply(java.lang.Character)"(arg0: string): V;
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Char2ShortFunction;
        getOrDefault(arg0: string, arg1: V): V;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Char2ByteFunction;
        put(arg0: string, arg1: V): V;
        "put(char,java.lang.Object)"(arg0: string, arg1: V): V;
        defaultReturnValue(): V;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Char2ObjectFunction<T>;
        identity<T>(): Internal.Function<T, T>;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Char2DoubleFunction;
        defaultReturnValue(arg0: V): void;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Char2IntFunction;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        "containsKey(char)"(arg0: string): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        "remove(char)"(arg0: string): V;
        composeReference<T>(arg0: Internal.Reference2CharFunction_<T>): Internal.Reference2ReferenceFunction<T, V>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeChar(arg0: Internal.Char2CharFunction_): this;
        composeByte(arg0: Internal.Byte2CharFunction_): Internal.Byte2ReferenceFunction<V>;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        composeInt(arg0: Internal.Int2CharFunction_): Internal.Int2ReferenceFunction<V>;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        abstract "get(char)"(arg0: string): V;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Char2CharFunction;
        /**
         * @deprecated
        */
        put(arg0: string, arg1: V): V;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, V>;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Char2ReferenceFunction<T>;
        size(): number;
        apply(arg0: string): V;
        composeObject<T>(arg0: Internal.Object2CharFunction_<T>): Internal.Object2ReferenceFunction<T, V>;
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Char2LongFunction;
        clear(): void;
        /**
         * @deprecated
        */
        "apply(int)"(arg0: number): V;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Char2FloatFunction;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
        /**
         * @deprecated
        */
        "put(java.lang.Character,java.lang.Object)"(arg0: string, arg1: V): V;
    }
    type Char2ReferenceFunction_<V> = Char2ReferenceFunction<V>;
    class ChainBuffer {
        constructor()
        applyChainWaveBuffer(...arg0: any_[]): void;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        calculateChainWaveBuffer(arg0: number, arg1: number, arg2: number, arg3: Internal.LivingEntity_): void;
        hashCode(): number;
        calculateChainSwingBuffer(arg0: number, arg1: number, arg2: number, arg3: Internal.LivingEntity_): void;
        wait(): void;
        wait(arg0: number): void;
        resetRotations(): void;
        equals(arg0: any): boolean;
        applyChainSwingBuffer(...arg0: any_[]): void;
        calculateChainWaveBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.LivingEntity_): void;
        calculateChainSwingBuffer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.LivingEntity_): void;
        get class(): typeof any
    }
    type ChainBuffer_ = ChainBuffer;
    class PoolNoodleItem extends Internal.SwordItem implements Internal.DyeableLeatherItem {
        constructor(toolMaterial: Internal.Tier_, attackDamage: number, attackSpeed: number, properties: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(itemStack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, tooltipContext: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        hasCustomColor(arg0: Internal.ItemStack_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDamage(): number;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        setColor(arg0: Internal.ItemStack_, arg1: number): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getColor(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        clearColor(arg0: Internal.ItemStack_): void;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        static dyeArmor(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.DyeItem>): Internal.ItemStack;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get damage(): number
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type PoolNoodleItem_ = PoolNoodleItem;
    class DataGenContext <R, E extends R> implements com.tterrag.registrate.util.nullness.NonNullSupplier<E> {
        constructor(arg0: com.tterrag.registrate.util.nullness.NonNullSupplier_<E>, arg1: string, arg2: ResourceLocation_)
        lazy(): com.tterrag.registrate.util.nullness.NonNullSupplier<E>;
        getClass(): typeof any;
        get(): E;
        /**
         * @deprecated
        */
        static from<R, E extends R>(arg0: com.tterrag.registrate.builders.Builder_<R, E, any, any>, arg1: Internal.ResourceKey_<Internal.Registry<R>>): Internal.DataGenContext<R, E>;
        toString(): string;
        static of<T>(arg0: Internal.Supplier_<T>, arg1: com.tterrag.registrate.util.nullness.NonNullSupplier_<string>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        notifyAll(): void;
        static of<T>(arg0: Internal.Supplier_<T>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        static from<R, E extends R>(arg0: com.tterrag.registrate.builders.Builder_<R, E, any, any>): Internal.DataGenContext<R, E>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getEntry(): E;
        static lazy<T>(arg0: Internal.Supplier_<T>): com.tterrag.registrate.util.nullness.NonNullSupplier<T>;
        hashCode(): number;
        getId(): ResourceLocation;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get entry(): E
        get id(): ResourceLocation
        get name(): string
    }
    type DataGenContext_<R, E extends R> = DataGenContext<R, E>;
    class GunTransform {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        static getDefault(): Internal.GunTransform;
        getScale(): Internal.TransformScale;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get "default"(): Internal.GunTransform
        get scale(): Internal.TransformScale
    }
    type GunTransform_ = GunTransform;
    class JsonWriter implements Internal.Closeable, Internal.Flushable {
        constructor(arg0: Internal.Writer_)
        getClass(): typeof any;
        "value(boolean)"(arg0: boolean): this;
        "value(double)"(arg0: number): this;
        value(arg0: number): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "value(float)"(arg0: number): this;
        name(arg0: string): this;
        flush(): void;
        value(arg0: string): this;
        value(arg0: number): this;
        value(arg0: number): this;
        "value(java.lang.String)"(arg0: string): this;
        isLenient(): boolean;
        getSerializeNulls(): boolean;
        nullValue(): this;
        "value(java.lang.Boolean)"(arg0: boolean): this;
        toString(): string;
        notifyAll(): void;
        "value(java.lang.Number)"(arg0: number): this;
        value(arg0: boolean): this;
        value(arg0: boolean): this;
        isHtmlSafe(): boolean;
        beginObject(): this;
        value(arg0: number): this;
        hashCode(): number;
        jsonValue(arg0: string): this;
        endArray(): this;
        setHtmlSafe(arg0: boolean): void;
        wait(): void;
        close(): void;
        wait(arg0: number): void;
        beginArray(): this;
        "value(long)"(arg0: number): this;
        setSerializeNulls(arg0: boolean): void;
        equals(arg0: any): boolean;
        endObject(): this;
        setIndent(arg0: string): void;
        setLenient(arg0: boolean): void;
        get class(): typeof any
        get lenient(): boolean
        get serializeNulls(): boolean
        get htmlSafe(): boolean
        set htmlSafe(arg0: boolean)
        set serializeNulls(arg0: boolean)
        set indent(arg0: string)
        set lenient(arg0: boolean)
    }
    type JsonWriter_ = JsonWriter;
    class LootCrate {
        constructor(table: Internal.RewardTable_, initFromTable: boolean)
        getClass(): typeof any;
        readNetData(data: Internal.FriendlyByteBuf_): void;
        writeData(nbt: Internal.CompoundTag_): void;
        toString(): string;
        static allCrateStacks(): Internal.Collection<Internal.ItemStack>;
        notifyAll(): void;
        readData(nbt: Internal.CompoundTag_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isGlow(): boolean;
        fillConfigGroup(config: Internal.ConfigGroup_): void;
        createStack(): Internal.ItemStack;
        getStringID(): string;
        hashCode(): number;
        writeNetData(data: Internal.FriendlyByteBuf_): void;
        getItemName(): string;
        wait(): void;
        initFromTable(): void;
        wait(arg0: number): void;
        getColor(): Internal.Color4I;
        equals(arg0: any): boolean;
        getDrops(): Internal.EntityWeight;
        getTable(): Internal.RewardTable;
        get class(): typeof any
        get glow(): boolean
        get stringID(): string
        get itemName(): string
        get color(): Internal.Color4I
        get drops(): Internal.EntityWeight
        get table(): Internal.RewardTable
        static LOOT_CRATES: ({}) & (Internal.Map<string, Internal.LootCrate>);
    }
    type LootCrate_ = LootCrate;
    class BatchEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        getClass(): typeof any;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        getFullname(arg0: number): net.minecraft.network.chat.Component;
        getRarity(): Internal.Enchantment$Rarity;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        isTradeable(): boolean;
        isTreasureOnly(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        getMinCost(arg0: number): number;
        static byId(arg0: number): Internal.Enchantment;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        getDescriptionId(): string;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        getMinLevel(): number;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        hashCode(): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        isAllowedOnBooks(): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        get treasureOnly(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get curse(): boolean
        get allowedOnBooks(): boolean
    }
    type BatchEnchantment_ = BatchEnchantment;
    class Music {
        constructor(arg0: Internal.Holder_<Internal.SoundEvent>, arg1: number, arg2: number, arg3: boolean)
        getClass(): typeof any;
        toString(): string;
        getMaxDelay(): number;
        notifyAll(): void;
        getMinDelay(): number;
        getEvent(): Internal.Holder<Internal.SoundEvent>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        replaceCurrentMusic(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get maxDelay(): number
        get minDelay(): number
        get event(): Internal.Holder<Internal.SoundEvent>
        static readonly CODEC: Internal.Codec<Internal.Music>;
    }
    type Music_ = Music;
    class TofuArmorItem extends Internal.ArmorItem implements Internal.IEnergyInsertable {
        constructor(arg0: any_, arg1: Internal.ArmorItem$Type_, arg2: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        getDefense(): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        fill(arg0: Internal.ItemStack_, arg1: number, arg2: boolean): number;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        getMaterial(): Internal.ArmorMaterial;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getToughness(): number;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getType(): Internal.ArmorItem$Type;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEquipmentSlot(): Internal.EquipmentSlot;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        get defense(): number
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get type(): Internal.ArmorItem$Type
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        static readonly TAG_TF: ("tf_energy") & (string);
        static readonly TAG_TFMAX: ("tf_energymax") & (string);
    }
    type TofuArmorItem_ = TofuArmorItem;
    class RosehipPieSliceItem extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type RosehipPieSliceItem_ = RosehipPieSliceItem;
    class ItemSmartSlab extends Internal.AbstractStoreMaidItem {
        constructor(arg0: any_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        static storeMaidData(arg0: Internal.ItemStack_, arg1: Internal.EntityMaid_): void;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        static getMaidData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getRenderPropertiesInternal(): any;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        static hasMaidData(arg0: Internal.ItemStack_): boolean;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type ItemSmartSlab_ = ItemSmartSlab;
    class BonusChestFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Internal.Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
    }
    type BonusChestFeature_ = BonusChestFeature;
    interface Char2IntFunction extends Internal.IntUnaryOperator, it.unimi.dsi.fastutil.Function<string, number> {
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, number>;
        defaultReturnValue(): number;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Char2CharFunction;
        remove(arg0: string): number;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        containsKey(arg0: string): boolean;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Char2ObjectFunction<T>;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Char2LongFunction;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeChar(arg0: Internal.Char2CharFunction_): this;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Char2FloatFunction;
        "remove(char)"(arg0: string): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<string, T>;
        composeLong(arg0: Internal.Long2CharFunction_): Internal.Long2IntFunction;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, number>;
        "containsKey(char)"(arg0: string): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeShort(arg0: Internal.Short2CharFunction_): Internal.Short2IntFunction;
        composeByte(arg0: Internal.Byte2CharFunction_): Internal.Byte2IntFunction;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        put(arg0: string, arg1: number): number;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        put(arg0: string, arg1: number): number;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<number, T>): Internal.Function<string, T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        getOrDefault(arg0: string, arg1: number): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "getOrDefault(char,int)"(arg0: string, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2CharFunction_<T>): Internal.Reference2IntFunction<T>;
        identity(): Internal.IntUnaryOperator;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Char2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): number;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Char2ShortFunction;
        composeInt(arg0: Internal.Int2CharFunction_): Internal.Int2IntFunction;
        apply(arg0: string): number;
        /**
         * @deprecated
        */
        "put(java.lang.Character,java.lang.Integer)"(arg0: string, arg1: number): number;
        composeDouble(arg0: Internal.Double2CharFunction_): Internal.Double2IntFunction;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Char2DoubleFunction;
        "put(char,int)"(arg0: string, arg1: number): number;
        abstract get(arg0: string): number;
        size(): number;
        defaultReturnValue(arg0: number): void;
        clear(): void;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Char2ByteFunction;
        composeObject<T>(arg0: Internal.Object2CharFunction_<T>): Internal.Object2IntFunction<T>;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): number;
        abstract "get(char)"(arg0: string): number;
        composeFloat(arg0: Internal.Float2CharFunction_): Internal.Float2IntFunction;
    }
    type Char2IntFunction_ = Char2IntFunction;
    abstract class CoralFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        toString(): string;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Internal.Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
    }
    type CoralFeature_ = CoralFeature;
    class RestockUpgradeWrapper extends Internal.UpgradeWrapperBase<Internal.RestockUpgradeWrapper, Internal.RestockUpgradeItem> implements Internal.IItemHandlerInteractionUpgrade, Internal.IContentsFilteredUpgrade {
        constructor(arg0: Internal.IStorageWrapper_, arg1: Internal.ItemStack_, arg2: Internal.Consumer_<Internal.ItemStack>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getUpgradeStack(): Internal.ItemStack;
        setEnabled(arg0: boolean): void;
        isInCooldown(arg0: Internal.Level_): boolean;
        notify(): void;
        onHandlerInteract(arg0: Internal.IItemHandler_, arg1: Internal.Player_): void;
        getFilterLogic(): Internal.FilterLogic;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        getCooldownTime(): number;
        canBeDisabled(): boolean;
        hashCode(): number;
        hideSettingsTab(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        onAdded(): void;
        onBeforeRemoved(): void;
        get class(): typeof any
        get upgradeStack(): Internal.ItemStack
        set enabled(arg0: boolean)
        get filterLogic(): Internal.FilterLogic
        get enabled(): boolean
        get cooldownTime(): number
    }
    type RestockUpgradeWrapper_ = RestockUpgradeWrapper;
    class ElysianGrassBlock extends Internal.GrassBlock {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        static callCanPropagate(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        static callCanBeGrass(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        static callCanBeGrass_$md$3ae8d1$0(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        static callCanPropagate_$md$3ae8d1$1(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        static isSnowySetting(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        static canBeGrass(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        handler$eaa000$onTick(state: Internal.BlockState_, world: Internal.ServerLevel_, pos: BlockPos_, random: Internal.RandomSource_, ci: Internal.CallbackInfo_, defaultState: Internal.BlockState_, j: number, spreadPos: BlockPos_): void;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type ElysianGrassBlock_ = ElysianGrassBlock;
    interface GravititeTool {
        floatBlock(arg0: Internal.UseOnContext_): boolean;
    }
    type GravititeTool_ = GravititeTool;
    abstract class FlowingFluid extends Internal.Fluid implements Internal.FlowingFluidAccessor {
        constructor()
        getClass(): typeof any;
        getStateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>;
        tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_): void;
        getHeight(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getFlow(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Vec3d;
        canHoldFluid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        abstract isSource(arg0: Internal.FluidState_): boolean;
        getOwnHeight(arg0: Internal.FluidState_): number;
        isEmpty(): boolean;
        notify(): void;
        getFluidType(): Internal.FluidType;
        wait(arg0: number, arg1: number): void;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Fluid>;
        getShape(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        defaultFluidState(): Internal.FluidState;
        abstract getTickDelay(arg0: Internal.LevelReader_): number;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        arch$registryName(): ResourceLocation;
        callSpreadToSides(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidState_, arg3: Internal.BlockState_): void;
        abstract getAmount(arg0: Internal.FluidState_): number;
        getSource(arg0: boolean): Internal.FluidState;
        toString(): string;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        abstract getFlowing(): Internal.Fluid;
        notifyAll(): void;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        abstract getBucket(): Internal.Item;
        callCanPassThroughWall(arg0: Internal.Direction_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_, arg5: Internal.BlockState_): boolean;
        isSame(arg0: Internal.Fluid_): boolean;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        hashCode(): number;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getFlowing(arg0: number, arg1: boolean): Internal.FluidState;
        wait(arg0: number): void;
        abstract getSource(): Internal.Fluid;
        callSourceNeighborCount(arg0: Internal.LevelReader_, arg1: BlockPos_): number;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        is(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        get class(): typeof any
        get stateDefinition(): Internal.StateDefinition<Internal.Fluid, Internal.FluidState>
        get empty(): boolean
        get fluidType(): Internal.FluidType
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get flowing(): Internal.Fluid
        get bucket(): Internal.Item
        get source(): Internal.Fluid
        static readonly FALLING: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly LEVEL: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type FlowingFluid_ = FlowingFluid;
    class NetherWartBlock extends Internal.BushBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        callMayPlaceOn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly AGE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
        static readonly MAX_AGE: (3) & (number);
    }
    type NetherWartBlock_ = NetherWartBlock;
    class BountyItem extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<net.minecraft.network.chat.Component>, context: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(stack: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type BountyItem_ = BountyItem;
    class IntOpenHashSet extends Internal.AbstractIntSet implements Internal.Cloneable, Internal.Hash, Internal.Serializable {
        constructor()
        constructor(arg0: Internal.IntCollection_)
        constructor(arg0: Internal.Iterator_<any>)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: number[], arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.Iterator_<any>, arg1: number)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number[], arg1: number)
        constructor(arg0: Internal.IntCollection_, arg1: number)
        constructor(arg0: Internal.Collection_<number>)
        constructor(arg0: number[], arg1: number, arg2: number)
        constructor(arg0: Internal.Collection_<number>, arg1: number)
        constructor(arg0: Internal.IntIterator_)
        constructor(arg0: Internal.IntIterator_, arg1: number)
        static of(arg0: number, arg1: number, arg2: number): Internal.IntOpenHashSet;
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        "contains(int)"(arg0: number): boolean;
        trim(arg0: number): boolean;
        static toSetWithExpectedSize(arg0: Internal.IntStream_, arg1: number): Internal.IntOpenHashSet;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        clone(): this;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        "remove(int)"(arg0: number): boolean;
        removeAll(arg0: Internal.IntCollection_): boolean;
        "removeAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        "add(int)"(arg0: number): boolean;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        /**
         * @deprecated
        */
        "contains(java.lang.Object)"(arg0: any): boolean;
        remove(arg0: number): boolean;
        trim(): boolean;
        addAll(arg0: Internal.IntCollection_): boolean;
        retainAll(arg0: Internal.IntCollection_): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        "toArray(int[])"(arg0: number[]): number[];
        /**
         * @deprecated
        */
        toIntArray(arg0: number[]): number[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        "removeAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Integer)"(arg0: number): boolean;
        static of(arg0: number): Internal.IntOpenHashSet;
        static "of(int,int)"(arg0: number, arg1: number): Internal.IntOpenHashSet;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        static of(arg0: number, arg1: number): Internal.IntOpenHashSet;
        getClass(): typeof any;
        "retainAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        forEach(arg0: Internal.IntConsumer_): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        static "of(int,int,int)"(arg0: number, arg1: number, arg2: number): Internal.IntOpenHashSet;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        iterator(): Internal.IntIterator;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        toString(): string;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "forEach(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "removeIf(it.unimi.dsi.fastutil.ints.IntPredicate)"(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        notifyAll(): void;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        static of(): Internal.IntOpenHashSet;
        size(): number;
        clear(): void;
        /**
         * @deprecated
        */
        rem(arg0: number): boolean;
        wait(arg0: number): void;
        static of(...arg0: number[]): Internal.IntOpenHashSet;
        "forEach(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        addAll(arg0: Internal.Collection_<number>): boolean;
        contains(arg0: number): boolean;
        notify(): void;
        static toSet(arg0: Internal.IntStream_): Internal.IntOpenHashSet;
        retainAll(arg0: Internal.Collection_<any>): boolean;
        "containsAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intParallelStream(): Internal.IntStream;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        static "of(int[])"(...arg0: number[]): Internal.IntOpenHashSet;
        "retainAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intIterator(): Internal.IntIterator;
        static "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        "removeIf(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): boolean;
        add(arg0: number): boolean;
        containsAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        static "of(int)"(arg0: number): Internal.IntOpenHashSet;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<any>;
        removeAll(arg0: Internal.Collection_<any>): boolean;
        wait(): void;
        static "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        isEmpty(): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): boolean;
        toIntArray(): number[];
        wait(arg0: number, arg1: number): void;
        containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray(arg0: number[]): number[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        "addAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        "removeIf(java.util.function.IntPredicate)"(arg0: Internal.IntPredicate_): boolean;
        static "of(java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        removeIf(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        hashCode(): number;
        "addAll(java.util.Collection)"(arg0: Internal.Collection_<number>): boolean;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        "containsAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        equals(arg0: any): boolean;
        static "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get class(): typeof any
        get empty(): boolean
    }
    type IntOpenHashSet_ = IntOpenHashSet;
    interface IRecipeSerializerReversed <T extends Internal.Recipe<any>> {
        abstract write(arg0: T): Internal.JsonObject;
        (arg0: T): Internal.JsonObject_;
    }
    type IRecipeSerializerReversed_<T extends Internal.Recipe<any>> = IRecipeSerializerReversed<T> | ((arg0: T)=> Internal.JsonObject_);
    interface ProfileKeyPairManager {
        abstract prepareKeyPair(): Internal.CompletableFuture<Internal.Optional<Internal.ProfileKeyPair>>;
        create(arg0: Internal.UserApiService_, arg1: Internal.User_, arg2: Internal.Path_): this;
        abstract shouldRefreshKeyPair(): boolean;
        readonly EMPTY_KEY_MANAGER: Internal.ProfileKeyPairManager;
    }
    type ProfileKeyPairManager_ = ProfileKeyPairManager;
    interface SignatureValidator {
        abstract validate(arg0: Internal.SignatureUpdater_, arg1: number[]): boolean;
        from(arg0: Internal.ServicesKeySet_, arg1: Internal.ServicesKeyType_): this;
        "validate(byte[],byte[])"(arg0: number[], arg1: number[]): boolean;
        abstract "validate(net.minecraft.util.SignatureUpdater,byte[])"(arg0: Internal.SignatureUpdater_, arg1: number[]): boolean;
        validate(arg0: number[], arg1: number[]): boolean;
        "from(com.mojang.authlib.yggdrasil.ServicesKeySet,com.mojang.authlib.yggdrasil.ServicesKeyType)"(arg0: Internal.ServicesKeySet_, arg1: Internal.ServicesKeyType_): this;
        from(arg0: Internal.PublicKey_, arg1: string): this;
        "from(java.security.PublicKey,java.lang.String)"(arg0: Internal.PublicKey_, arg1: string): this;
        readonly NO_VALIDATION: Internal.SignatureValidator;
        readonly LOGGER: (Internal.Log4jLogger) & (org.slf4j.Logger);
    }
    type SignatureValidator_ = SignatureValidator;
    interface Npc {
    }
    type Npc_ = Npc;
    abstract class FullHeightShiftPushBox extends Internal.PushBox {
        constructor(arg0: number, arg1: number, arg2: number)
        getClass(): typeof any;
        toString(): string;
        getH(arg0: number, arg1: number): number;
        notifyAll(): void;
        isActive(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getVerticalBias(): number;
        hashCode(): number;
        push(arg0: Internal.InterfaceInstance_, arg1: Internal.Interface_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        postUpdate(): void;
        getW(arg0: number, arg1: number): number;
        update(): void;
        getX(arg0: number, arg1: number): number;
        wait(): void;
        getY(arg0: number, arg1: number): number;
        getAnchorY(): number;
        wait(arg0: number): void;
        getAnchorX(): number;
        equals(arg0: any): boolean;
        setActive(arg0: boolean): void;
        get class(): typeof any
        get active(): boolean
        get verticalBias(): number
        get anchorY(): number
        get anchorX(): number
        set active(arg0: boolean)
    }
    type FullHeightShiftPushBox_ = FullHeightShiftPushBox;
    class BlockTintFunction$Fixed extends Internal.Record implements Internal.BlockTintFunction {
        constructor(color: dev.latvian.mods.rhino.mod.util.color.Color_)
        getClass(): typeof any;
        hashCode(): number;
        static of(cx: Internal.Context_, o: any): Internal.BlockTintFunction;
        toString(): string;
        getColor(state: Internal.BlockState_, level: Internal.BlockAndTintGetter_, pos: BlockPos_, index: number): dev.latvian.mods.rhino.mod.util.color.Color;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(o: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        color(): dev.latvian.mods.rhino.mod.util.color.Color;
        get class(): typeof any
    }
    type BlockTintFunction$Fixed_ = BlockTintFunction$Fixed;
    class BlockPattern$BlockPatternMatch {
        constructor(arg0: BlockPos_, arg1: Internal.Direction_, arg2: Internal.Direction_, arg3: Internal.LoadingCache_<BlockPos, Internal.BlockInWorld>, arg4: number, arg5: number, arg6: number)
        getClass(): typeof any;
        getDepth(): number;
        toString(): string;
        getWidth(): number;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        getBlock(arg0: number, arg1: number, arg2: number): Internal.BlockInWorld;
        wait(): void;
        wait(arg0: number): void;
        getUp(): Internal.Direction;
        getHeight(): number;
        equals(arg0: any): boolean;
        getFrontTopLeft(): BlockPos;
        getForwards(): Internal.Direction;
        get class(): typeof any
        get depth(): number
        get width(): number
        get up(): Internal.Direction
        get height(): number
        get frontTopLeft(): BlockPos
        get forwards(): Internal.Direction
    }
    type BlockPattern$BlockPatternMatch_ = BlockPattern$BlockPatternMatch;
    interface HoglinBase {
        abstract getAttackAnimationRemainingTicks(): number;
        hurtAndThrowTarget(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        throwTarget(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): void;
        get attackAnimationRemainingTicks(): number
        (): number;
        readonly ATTACK_ANIMATION_DURATION: (10) & (number);
    }
    type HoglinBase_ = HoglinBase | (()=> number);
    class SpongeOnAStickItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.SpongeMaterial_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type SpongeOnAStickItem_ = SpongeOnAStickItem;
    class TankPosition extends Internal.Enum<Internal.TankPosition> implements Internal.StringRepresentable {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        toString(): string;
        compareTo(arg0: Internal.TankPosition_): number;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.TankPosition;
        getDeclaringClass(): typeof Internal.TankPosition;
        notifyAll(): void;
        static values(): Internal.TankPosition[];
        notify(): void;
        "compareTo(net.p3pp3rf1y.sophisticatedcore.renderdata.TankPosition)"(arg0: Internal.TankPosition_): number;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TankPosition>>;
        get class(): typeof any
        get serializedName(): string
        get declaringClass(): typeof Internal.TankPosition
        static readonly LEFT: (Internal.TankPosition) & (Internal.TankPosition);
        static readonly RIGHT: (Internal.TankPosition) & (Internal.TankPosition);
    }
    type TankPosition_ = TankPosition | "right" | "left";
    class EventRenderSplashText$Pre extends Internal.EventRenderSplashText {
        constructor()
        constructor(arg0: string, arg1: Internal.GuiGraphics_, arg2: number, arg3: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        getGuiGraphics(): Internal.GuiGraphics;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        getSplashText(): string;
        isCanceled(): boolean;
        setSplashText(arg0: string): void;
        getSplashTextColor(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        setSplashTextColor(arg0: number): void;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        getPartialTicks(): number;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get guiGraphics(): Internal.GuiGraphics
        set phase(arg0: Internal.EventPriority_)
        get splashText(): string
        get canceled(): boolean
        set splashText(arg0: string)
        get splashTextColor(): number
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        set splashTextColor(arg0: number)
        get listenerList(): Internal.ListenerList
        get partialTicks(): number
        get phase(): Internal.EventPriority
    }
    type EventRenderSplashText$Pre_ = EventRenderSplashText$Pre;
    class FilmDevelopingRecipe extends Internal.AbstractNbtTransferringRecipe {
        constructor(id: ResourceLocation_, filmIngredient: Internal.Ingredient_, ingredients: Internal.NonNullList_<Internal.Ingredient>, result: Internal.ItemStack_)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        matches(container: Internal.CraftingContainer_, level: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(container: Internal.CraftingContainer_, level: Internal.Level_): boolean;
        getRemainingItems(container: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        assemble(container: Internal.CraftingContainer_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        category(): Internal.CraftingBookCategory;
        getSerializer(): Internal.RecipeSerializer<any>;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getId(): ResourceLocation;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        transferNbt(transferIngredientStack: Internal.ItemStack_, recipeResultStack: Internal.ItemStack_): Internal.ItemStack;
        toString(): string;
        "getRemainingItems(net.minecraft.world.inventory.CraftingContainer)"(container: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getRemainingItems(arg0: net.minecraft.world.Container_): Internal.NonNullList<any>;
        getTransferIngredient(): Internal.Ingredient;
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(container: Internal.CraftingContainer_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        notifyAll(): void;
        canCraftInDimensions(width: number, height: number): boolean;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        getResult(): Internal.ItemStack;
        hashCode(): number;
        "getRemainingItems(net.minecraft.world.Container)"(arg0: net.minecraft.world.Container_): Internal.NonNullList<any>;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get transferIngredient(): Internal.Ingredient
        get type(): ResourceLocation
        set group(group: string)
        get result(): Internal.ItemStack
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type FilmDevelopingRecipe_ = FilmDevelopingRecipe;
    interface SuperCandle {
        lightCandle(level: Internal.Level_, blockPos: BlockPos_, player: Internal.Player_): boolean;
        placeWickIfPossible(levelAccessor: Internal.LevelAccessor_, blockPos: BlockPos_, lit: boolean): void;
        CandleLightBehaviors(blockState: Internal.BlockState_, level: Internal.Level_, blockPos: BlockPos_, player: Internal.Player_, interactionHand: Internal.InteractionHand_): boolean;
        canBeLit(level: Internal.Level_, state: Internal.BlockState_, pos: BlockPos_): boolean;
    }
    type SuperCandle_ = SuperCandle;
    class OoOoO0o0Oo000OO0oOOo0Ooo <T> extends Internal.OO0OOOO00oOOO0O0OooOOoOO<T> {
        constructor(arg0: T, arg1: number, arg2: string, arg3: string, arg4: string, arg5: Internal.O0oOo00000o0oOoOOo0OoOOo_<any>)
        getClass(): typeof any;
        o0ooo0oooooooooOOO0o0OoO(): Internal.O0oOo00000o0oOoOOo0OoOOo<any>;
        hashCode(): number;
        ooO0OOoo0oOOO0OOOo0OOooo(): T;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        o0oo000Oo000OO0O00OoOooo(): number;
        get class(): typeof any
        readonly ooO0OOoo0oOOO0OOOo0OOooo: string;
        readonly o0oo000Oo000OO0O00OoOooo: string;
        readonly o0ooo0oooooooooOOO0o0OoO: string;
    }
    type OoOoO0o0Oo000OO0oOOo0Ooo_<T> = OoOoO0o0Oo000OO0oOOo0Ooo<T>;
    class ChorusFishItem extends Internal.TideFishItem {
        constructor(arg0: Internal.Item$Properties_, arg1: number)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getStrength(): number;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        get strength(): number
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type ChorusFishItem_ = ChorusFishItem;
    class GorgonTempleStructure extends Internal.IafStructure {
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.Holder_<Internal.StructureTemplatePool>, arg2: Internal.Optional_<ResourceLocation>, arg3: number, arg4: Internal.HeightProvider_, arg5: Internal.Optional_<Internal.Heightmap$Types>, arg6: number)
        static simpleCodec<S extends Internal.Structure>(arg0: Internal.Function_<Internal.Structure$StructureSettings, S>): Internal.Codec<S>;
        getClass(): typeof any;
        generate(arg0: Internal.RegistryAccess_, arg1: Internal.ChunkGenerator_, arg2: Internal.BiomeSource_, arg3: Internal.RandomState_, arg4: Internal.StructureTemplateManager_, arg5: number, arg6: Internal.ChunkPos_, arg7: number, arg8: Internal.LevelHeightAccessor_, arg9: Internal.Predicate_<Internal.Holder<Internal.Biome>>): Internal.StructureStart;
        toString(): string;
        biomes(): Internal.HolderSet<Internal.Biome>;
        findValidGenerationPoint(arg0: Internal.Structure$GenerationContext_): Internal.Optional<Internal.Structure$GenerationStub>;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        step(): Internal.GenerationStep$Decoration;
        notifyAll(): void;
        notify(): void;
        terrainAdaptation(): Internal.TerrainAdjustment;
        wait(arg0: number, arg1: number): void;
        adjustBoundingBox(arg0: Internal.BoundingBox_): Internal.BoundingBox;
        hashCode(): number;
        type(): Internal.StructureType<any>;
        static settingsCodec<S extends Internal.Structure>(arg0: Internal.RecordCodecBuilder$Instance_<S>): Internal.RecordCodecBuilder<S, Internal.Structure$StructureSettings>;
        wait(): void;
        modifiableStructureInfo(): Internal.ModifiableStructureInfo;
        wait(arg0: number): void;
        afterPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.StructureManager_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: Internal.BoundingBox_, arg5: Internal.ChunkPos_, arg6: Internal.PiecesContainer_): void;
        static buildStructureConfig(arg0: Internal.BootstapContext_<Internal.Structure>): Internal.GorgonTempleStructure;
        equals(arg0: any): boolean;
        getModifiedStructureSettings(): Internal.Structure$StructureSettings;
        get class(): typeof any
        set tingsCodec(arg0: Internal.RecordCodecBuilder$Instance_<S>)
        get modifiedStructureSettings(): Internal.Structure$StructureSettings
        static readonly CODEC: Internal.Codec<Internal.GorgonTempleStructure>;
    }
    type GorgonTempleStructure_ = GorgonTempleStructure;
    class ValueLayouts$OfIntImpl extends Internal.ValueLayouts$AbstractValueLayout<Internal.ValueLayouts$OfIntImpl> implements Internal.ValueLayout$OfInt {
        getClass(): typeof any;
        static sequenceLayout(arg0: number, arg1: Internal.MemoryLayout_): Internal.SequenceLayout;
        withName(arg0: string): Internal.MemoryLayout;
        arrayElementVarHandle(...arg0: number[]): Internal.VarHandle;
        static sequenceLayout(arg0: Internal.MemoryLayout_): Internal.SequenceLayout;
        byteOffset(...arg0: any_[]): number;
        notify(): void;
        withByteAlignment(arg0: number): Internal.MemoryLayout;
        wait(arg0: number, arg1: number): void;
        withoutName(): Internal.ValueLayout;
        accessHandle(): Internal.VarHandle;
        order(): Internal.ByteOrder;
        select(...arg0: any_[]): Internal.MemoryLayout;
        sliceHandle(...arg0: any_[]): Internal.MethodHandle;
        static paddingLayout(arg0: number): Internal.PaddingLayout;
        varHandle(...arg0: any_[]): Internal.VarHandle;
        static of(arg0: Internal.ByteOrder_): Internal.ValueLayout$OfInt;
        static unionLayout(...arg0: Internal.MemoryLayout_[]): Internal.UnionLayout;
        toString(): string;
        name(): Internal.Optional<string>;
        notifyAll(): void;
        withOrder(arg0: Internal.ByteOrder_): Internal.ValueLayout$OfInt;
        byteSize(): number;
        static structLayout(...arg0: Internal.MemoryLayout_[]): Internal.StructLayout;
        hashCode(): number;
        hasNaturalAlignment(): boolean;
        wait(): void;
        byteAlignment(): number;
        wait(arg0: number): void;
        byteOffsetHandle(...arg0: any_[]): Internal.MethodHandle;
        carrier(): typeof any;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type ValueLayouts$OfIntImpl_ = ValueLayouts$OfIntImpl;
    class BlockSupplierItem extends Internal.BlockItem {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.Block_, arg2: Internal.Supplier_<Internal.Block>)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        abstract moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): net.minecraft.network.chat.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): InteractionResult;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        puzzleslib$setBlock(arg0: Internal.Block_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type BlockSupplierItem_ = BlockSupplierItem;
    class StringArgumentType$StringType extends Internal.Enum<Internal.StringArgumentType$StringType> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        static values(): Internal.StringArgumentType$StringType[];
        compareTo(arg0: Internal.StringArgumentType$StringType_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.StringArgumentType$StringType>>;
        notifyAll(): void;
        "compareTo(com.mojang.brigadier.arguments.StringArgumentType$StringType)"(arg0: Internal.StringArgumentType$StringType_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        getExamples(): Internal.Collection<string>;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.StringArgumentType$StringType;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        static valueOf(arg0: string): Internal.StringArgumentType$StringType;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get examples(): Internal.Collection<string>
        get declaringClass(): typeof Internal.StringArgumentType$StringType
        static readonly QUOTABLE_PHRASE: (Internal.StringArgumentType$StringType) & (Internal.StringArgumentType$StringType);
        static readonly GREEDY_PHRASE: (Internal.StringArgumentType$StringType) & (Internal.StringArgumentType$StringType);
        static readonly SINGLE_WORD: (Internal.StringArgumentType$StringType) & (Internal.StringArgumentType$StringType);
    }
    type StringArgumentType$StringType_ = StringArgumentType$StringType | "greedy_phrase" | "single_word" | "quotable_phrase";
    class ClientboundLevelParticlesPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: T, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        getClass(): typeof any;
        getCount(): number;
        notify(): void;
        isOverrideLimiter(): boolean;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        getXDist(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        getZDist(): number;
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        getMaxSpeed(): number;
        notifyAll(): void;
        getParticle(): Internal.ParticleOptions;
        getX(): number;
        getY(): number;
        getZ(): number;
        hashCode(): number;
        getYDist(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get count(): number
        get overrideLimiter(): boolean
        get skippable(): boolean
        get XDist(): number
        get ZDist(): number
        get maxSpeed(): number
        get particle(): Internal.ParticleOptions
        get x(): number
        get y(): number
        get z(): number
        get YDist(): number
    }
    type ClientboundLevelParticlesPacket_ = ClientboundLevelParticlesPacket;
    class SteadyHandsEffect extends Internal.MobEffect {
        constructor()
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        isInstantenous(): boolean;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        getColor(): number;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        getEffectRendererInternal(): any;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(arg0: number, arg1: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get color(): number
        get effectRendererInternal(): any
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
    }
    type SteadyHandsEffect_ = SteadyHandsEffect;
    abstract class FileLock implements Internal.AutoCloseable {
        getClass(): typeof any;
        abstract isValid(): boolean;
        toString(): string;
        overlaps(arg0: number, arg1: number): boolean;
        position(): number;
        notifyAll(): void;
        isShared(): boolean;
        size(): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        acquiredBy(): Internal.Channel;
        hashCode(): number;
        wait(): void;
        close(): void;
        abstract release(): void;
        wait(arg0: number): void;
        channel(): Internal.FileChannel;
        equals(arg0: any): boolean;
        get class(): typeof any
        get valid(): boolean
        get shared(): boolean
    }
    type FileLock_ = FileLock;
    class Locale$FilteringMode extends Internal.Enum<Internal.Locale$FilteringMode> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Locale$FilteringMode>>;
        toString(): string;
        static values(): Internal.Locale$FilteringMode[];
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        static valueOf(arg0: string): Internal.Locale$FilteringMode;
        hashCode(): number;
        getDeclaringClass(): typeof Internal.Locale$FilteringMode;
        ordinal(): number;
        wait(): void;
        compareTo(arg0: Internal.Locale$FilteringMode_): number;
        wait(arg0: number): void;
        "compareTo(java.util.Locale$FilteringMode)"(arg0: Internal.Locale$FilteringMode_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.Locale$FilteringMode
        static readonly EXTENDED_FILTERING: (Internal.Locale$FilteringMode) & (Internal.Locale$FilteringMode);
        static readonly IGNORE_EXTENDED_RANGES: (Internal.Locale$FilteringMode) & (Internal.Locale$FilteringMode);
        static readonly AUTOSELECT_FILTERING: (Internal.Locale$FilteringMode) & (Internal.Locale$FilteringMode);
        static readonly MAP_EXTENDED_RANGES: (Internal.Locale$FilteringMode) & (Internal.Locale$FilteringMode);
        static readonly REJECT_EXTENDED_RANGES: (Internal.Locale$FilteringMode) & (Internal.Locale$FilteringMode);
    }
    type Locale$FilteringMode_ = "reject_extended_ranges" | Locale$FilteringMode | "extended_filtering" | "ignore_extended_ranges" | "autoselect_filtering" | "map_extended_ranges";
    class WaypointGuiRenderContext {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        settings: Internal.ModSettings;
        filter: Internal.Predicate<Internal.Waypoint>;
        readonly sortingList: Internal.List<Internal.Waypoint>;
        waypointBackgroundConsumer: Internal.VertexConsumer;
        deleteReachedDeathpoints: boolean;
        scale: number;
        readonly filterParams: Internal.WaypointFilterParams;
        dimDiv: number;
    }
    type WaypointGuiRenderContext_ = WaypointGuiRenderContext;
    abstract class ModalPanel extends Internal.Panel {
        constructor(panel: Internal.Panel_)
        getScrollStep(): number;
        static getClipboardString(): string;
        mousePressed(button: Internal.MouseButton_): boolean;
        getY(): number;
        closeGui(openPrevScreen: boolean): void;
        scrollPanel(scroll: number): boolean;
        mouseDragged(button: number, dragX: number, dragY: number): boolean;
        add(widget: Internal.Widget_): void;
        isDefaultScrollVertical(): boolean;
        setPos(x: number, y: number): void;
        keyPressed(key: dev.ftb.mods.ftblibrary.ui.input.Key_): boolean;
        isGhostIngredientTarget(ingredient: any): boolean;
        getPartialTicks(): number;
        setScrollX(scroll: number): void;
        getWidth(): number;
        getDrawLayer(): Internal.Widget$DrawLayer;
        isMouseOverAnyWidget(): boolean;
        keyReleased(key: dev.ftb.mods.ftblibrary.ui.input.Key_): void;
        getMouseX(): number;
        "compareTo(dev.ftb.mods.ftblibrary.ui.Widget)"(widget: Internal.Widget_): number;
        static isShiftKeyDown(): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getExtraZlevel(): number;
        static setClipboardString(string: string): void;
        getClass(): typeof any;
        setScrollStep(s: number): void;
        handleClick(scheme: string, path: string): boolean;
        getX(): number;
        getParent(): Internal.Panel;
        run(): void;
        updateMouseOver(mouseX: number, mouseY: number): void;
        getPosY(): number;
        static isMouseButtonDown(button: Internal.MouseButton_): boolean;
        setOnlyRenderWidgetsInside(value: boolean): void;
        setScrollY(scroll: number): void;
        getWidget(index: number): Internal.Widget;
        setPosAndSize(x: number, y: number, w: number, h: number): Internal.Widget;
        setWidth(v: number): void;
        getHeight(): number;
        charTyped(c: string, modifiers: Internal.KeyModifiers_): boolean;
        getContentHeight(): number;
        toString(): string;
        setSize(w: number, h: number): void;
        getCursor(): Internal.CursorType;
        isOffset(): boolean;
        notifyAll(): void;
        mouseReleased(button: Internal.MouseButton_): void;
        collidesWith(x: number, y: number, w: number, h: number): boolean;
        openGuiLater(): void;
        getScrollX(): number;
        getOnlyInteractWithWidgetsInside(): boolean;
        checkMouseOver(mouseX: number, mouseY: number): boolean;
        getScreen(): com.mojang.blaze3d.platform.Window;
        drawWidget(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, widget: Internal.Widget_, x: number, y: number, w: number, h: number): void;
        handleClick(click: string): boolean;
        wait(arg0: number): void;
        setHeight(v: number): void;
        addMouseOverText(list: Internal.TooltipList_): void;
        shouldDraw(): boolean;
        compareTo(widget: Internal.Widget_): number;
        notify(): void;
        compareTo(arg0: any): number;
        getWidgets(): Internal.List<Internal.Widget>;
        getPosX(): number;
        closeGui(): void;
        openGui(): void;
        getWidgetType(): Internal.WidgetType;
        abstract alignWidgets(): void;
        setX(v: number): void;
        clearWidgets(): void;
        setOnlyInteractWithWidgetsInside(value: boolean): void;
        getScrollY(): number;
        getGui(): Internal.BaseScreen;
        tick(): void;
        wait(): void;
        refreshWidgets(): void;
        getTitle(): net.minecraft.network.chat.Component;
        openAfter(runnable: Internal.Runnable_): Internal.Runnable;
        draw(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        getContentWidth(): number;
        drawBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        closeContextMenu(): void;
        mouseScrolled(scroll: number): boolean;
        getIngredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>;
        shouldAddMouseOverText(): boolean;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        setOffset(flag: boolean): void;
        movePanelScroll(dx: number, dy: number): boolean;
        setExtraZlevel(extraZlevel: number): void;
        setY(v: number): void;
        static isKeyDown(key: number): boolean;
        static isCtrlKeyDown(): boolean;
        abstract addWidgets(): void;
        isMouseOver(): boolean;
        playClickSound(): void;
        mouseDoubleClicked(button: Internal.MouseButton_): boolean;
        onClosed(): void;
        acceptGhostIngredient(ingredient: any): void;
        drawOffsetBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        getMouseY(): number;
        hashCode(): number;
        getOnlyRenderWidgetsInside(): boolean;
        setDrawLayer(drawLayer: Internal.Widget$DrawLayer_): void;
        addAll(list: Internal.Iterable_<Internal.Widget>): void;
        align(layout: Internal.WidgetLayout_): number;
        equals(arg0: any): boolean;
        get scrollStep(): number
        get clipboardString(): string
        get y(): number
        get defaultScrollVertical(): boolean
        get partialTicks(): number
        set scrollX(scroll: number)
        get width(): number
        get drawLayer(): Internal.Widget$DrawLayer
        get mouseOverAnyWidget(): boolean
        get mouseX(): number
        get shiftKeyDown(): boolean
        get extraZlevel(): number
        set clipboardString(string: string)
        get class(): typeof any
        set scrollStep(s: number)
        get x(): number
        get parent(): Internal.Panel
        get posY(): number
        set onlyRenderWidgetsInside(value: boolean)
        set scrollY(scroll: number)
        set width(v: number)
        get height(): number
        get contentHeight(): number
        get cursor(): Internal.CursorType
        get offset(): boolean
        get scrollX(): number
        get onlyInteractWithWidgetsInside(): boolean
        get screen(): com.mojang.blaze3d.platform.Window
        set height(v: number)
        get widgets(): Internal.List<Internal.Widget>
        get posX(): number
        get widgetType(): Internal.WidgetType
        set x(v: number)
        set onlyInteractWithWidgetsInside(value: boolean)
        get scrollY(): number
        get gui(): Internal.BaseScreen
        get title(): net.minecraft.network.chat.Component
        get contentWidth(): number
        get ingredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>
        get enabled(): boolean
        set offset(flag: boolean)
        set extraZlevel(extraZlevel: number)
        set y(v: number)
        get ctrlKeyDown(): boolean
        get mouseOver(): boolean
        get mouseY(): number
        get onlyRenderWidgetsInside(): boolean
        set drawLayer(drawLayer: Internal.Widget$DrawLayer_)
    }
    type ModalPanel_ = ModalPanel;
    class TabNavigationBar$Builder {
        getClass(): typeof any;
        hashCode(): number;
        addTabs(...arg0: Internal.Tab_[]): this;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        build(): Internal.TabNavigationBar;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type TabNavigationBar$Builder_ = TabNavigationBar$Builder;
    class ArmorItem$Type extends Internal.Enum<Internal.ArmorItem$Type> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        "compareTo(net.minecraft.world.item.ArmorItem$Type)"(arg0: Internal.ArmorItem$Type_): number;
        static values(): Internal.ArmorItem$Type[];
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        getSlot(): Internal.EquipmentSlot;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.ArmorItem$Type;
        getName(): string;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ArmorItem$Type>>;
        compareTo(arg0: Internal.ArmorItem$Type_): number;
        getDeclaringClass(): typeof Internal.ArmorItem$Type;
        get class(): typeof any
        get slot(): Internal.EquipmentSlot
        get name(): string
        get declaringClass(): typeof Internal.ArmorItem$Type
        static readonly HELMET: (Internal.ArmorItem$Type) & (Internal.ArmorItem$Type);
        static readonly LEGGINGS: (Internal.ArmorItem$Type) & (Internal.ArmorItem$Type);
        static readonly BOOTS: (Internal.ArmorItem$Type) & (Internal.ArmorItem$Type);
        static readonly CHESTPLATE: (Internal.ArmorItem$Type) & (Internal.ArmorItem$Type);
    }
    type ArmorItem$Type_ = "leggings" | ArmorItem$Type | "chestplate" | "boots" | "helmet";
    interface AsyncLoggerConfigDelegate {
        abstract enqueueEvent(event: Internal.LogEvent_, asyncLoggerConfig: Internal.AsyncLoggerConfig_): void;
        abstract createRingBufferAdmin(contextName: string, loggerConfigName: string): Internal.RingBufferAdmin;
        abstract tryEnqueue(event: Internal.LogEvent_, asyncLoggerConfig: Internal.AsyncLoggerConfig_): boolean;
        abstract setLogEventFactory(logEventFactory: Internal.LogEventFactory_): void;
        abstract getEventRoute(level: org.apache.logging.log4j.Level_): Internal.EventRoute;
        set logEventFactory(logEventFactory: Internal.LogEventFactory_)
    }
    type AsyncLoggerConfigDelegate_ = AsyncLoggerConfigDelegate;
    class SconceLeverBlock extends Internal.SconceWallBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_, particleData: Internal.Supplier_<Internal.SimpleParticleType>)
        getSignal(blockState: Internal.BlockState_, blockAccess: Internal.BlockGetter_, pos: BlockPos_, side: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        setLitUp(state: Internal.BlockState_, world: Internal.LevelAccessor_, pos: BlockPos_, lit: boolean): void;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(state: Internal.BlockState_, worldIn: Internal.Level_, pos: BlockPos_, entityIn: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        isLitUp(state: Internal.BlockState_): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        interactWithProjectile(level: Internal.Level_, state: Internal.BlockState_, projectile: Internal.Projectile_, pos: BlockPos_): boolean;
        setPowered(state: Internal.BlockState_, world: Internal.Level_, pos: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(state: Internal.BlockState_): Internal.FluidState;
        playExtinguishSound(world: Internal.LevelAccessor_, pos: BlockPos_): void;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        use(state: Internal.BlockState_, worldIn: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_, hit: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(worldIn: Internal.LevelAccessor_, pos: BlockPos_, state: Internal.BlockState_, fluidStateIn: Internal.FluidState_): boolean;
        extinguish(player: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(stateIn: Internal.BlockState_, facing: Internal.Direction_, facingState: Internal.BlockState_, worldIn: Internal.LevelAccessor_, currentPos: BlockPos_, facingPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(state: Internal.BlockState_, rot: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(state: Internal.BlockState_): boolean;
        onProjectileHit(level: Internal.Level_, state: Internal.BlockState_, pHit: Internal.BlockHitResult_, projectile: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(state: Internal.BlockState_, worldIn: Internal.Level_, pos: BlockPos_, newState: Internal.BlockState_, isMoving: boolean): void;
        equals(arg0: any): boolean;
        canBeExtinguishedBy(item: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isLitUp(state: Internal.BlockState_, level: Internal.LevelAccessor_, pos: BlockPos_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        lightUp(entity: Internal.Entity_, state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_, fireSourceType: Internal.ILightable$FireSourceType_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        getDirectSignal(blockState: Internal.BlockState_, blockAccess: Internal.BlockGetter_, pos: BlockPos_, side: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        toggleLitState(state: Internal.BlockState_, lit: boolean): Internal.BlockState;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(state: Internal.BlockState_, worldIn: Internal.LevelReader_, pos: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        interactWithPlayer(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, handIn: Internal.InteractionHand_): InteractionResult;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(state: Internal.BlockState_, mirrorIn: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(stateIn: Internal.BlockState_, worldIn: Internal.Level_, pos: BlockPos_, rand: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(state: Internal.BlockState_, worldIn: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        playLightUpSound(world: Internal.LevelAccessor_, pos: BlockPos_, type: Internal.ILightable$FireSourceType_): void;
        spawnSmokeParticles(state: Internal.BlockState_, pos: BlockPos_, world: Internal.LevelAccessor_): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly POWERED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type SconceLeverBlock_ = SconceLeverBlock;
    class BzLiquidBlock extends Internal.LiquidBlock implements Internal.FluidGetter {
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        arch$getFluid(): Internal.FlowingFluid;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getFluid(): Internal.FlowingFluid;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        handler$bpg000$bumblezone$onInit(info: Internal.FluidInfo_, properties: Internal.BlockBehaviour$Properties_, ci: Internal.CallbackInfo_): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get fluid(): Internal.FlowingFluid
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type BzLiquidBlock_ = BzLiquidBlock;
    class BlockDragonBone extends Internal.RotatedPillarBlock implements Internal.IDragonProof {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static rotatePillar(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type BlockDragonBone_ = BlockDragonBone;
    interface BucketItemAccessor {
        abstract permanentsponges$getContent(): Internal.Fluid;
        (): Internal.Fluid_;
    }
    type BucketItemAccessor_ = (()=> Internal.Fluid_) | BucketItemAccessor;
    class SimpleWeightedRandomList$Builder <E> {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        build(): Internal.SimpleWeightedRandomList<E>;
        wait(arg0: number): void;
        add(arg0: E, arg1: number): this;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type SimpleWeightedRandomList$Builder_<E> = SimpleWeightedRandomList$Builder<E>;
    abstract class AbstractObject2IntFunction <K> implements Internal.Object2IntFunction<K>, Internal.Serializable {
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2IntFunction<T>;
        defaultReturnValue(): number;
        removeInt(arg0: any): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        notify(): void;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2IntFunction;
        apply(arg0: K): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2IntFunction;
        abstract getInt(arg0: any): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenInt(arg0: Internal.Int2IntFunction_): Internal.Object2IntFunction<K>;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        applyAsInt(arg0: K): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        wait(): void;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Object2ByteFunction<K>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        getOrDefault(arg0: any, arg1: number): number;
        static identity<T>(): Internal.Function<T, T>;
        put(arg0: K, arg1: number): number;
        getClass(): typeof any;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Object2FloatFunction<K>;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Object2LongFunction<K>;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2IntFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        "getOrDefault(java.lang.Object,int)"(arg0: any, arg1: number): number;
        wait(arg0: number, arg1: number): void;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Object2ShortFunction<K>;
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "put(java.lang.Object,int)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Integer)"(arg0: K, arg1: number): number;
        toString(): string;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        notifyAll(): void;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2IntFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2IntFunction;
        hashCode(): number;
        size(): number;
        defaultReturnValue(arg0: number): void;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2IntFunction;
        clear(): void;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        wait(arg0: number): void;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Object2CharFunction<K>;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2IntFunction;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type AbstractObject2IntFunction_<K> = AbstractObject2IntFunction<K>;
    interface ITerrain {
        isShallowOcean(): boolean;
        isLake(): boolean;
        erosionModifier(): number;
        isWetland(): boolean;
        isOverground(): boolean;
        isRiver(): boolean;
        isVolcano(): boolean;
        isSubmerged(): boolean;
        isDeepOcean(): boolean;
        isMountain(): boolean;
        overridesRiver(): boolean;
        overridesCoast(): boolean;
        isCoast(): boolean;
        isFlat(): boolean;
        get shallowOcean(): boolean
        get lake(): boolean
        get wetland(): boolean
        get overground(): boolean
        get river(): boolean
        get volcano(): boolean
        get submerged(): boolean
        get deepOcean(): boolean
        get mountain(): boolean
        get coast(): boolean
        get flat(): boolean
    }
    type ITerrain_ = ITerrain;
    interface RenderableResource extends de.keksuccino.fancymenu.util.resource.Resource {
        abstract getAspectRatio(): Internal.AspectRatio;
        abstract open(): Internal.InputStream;
        abstract getWidth(): number;
        abstract isLoadingCompleted(): boolean;
        abstract isClosed(): boolean;
        waitForLoadingCompletedOrFailed(arg0: number): void;
        abstract isReady(): boolean;
        abstract getResourceLocation(): ResourceLocation;
        waitForReady(arg0: number): void;
        abstract close(): void;
        abstract reset(): void;
        abstract getHeight(): number;
        abstract isLoadingFailed(): boolean;
        get aspectRatio(): Internal.AspectRatio
        get width(): number
        get loadingCompleted(): boolean
        get closed(): boolean
        get ready(): boolean
        get resourceLocation(): ResourceLocation
        get height(): number
        get loadingFailed(): boolean
        readonly FULLY_TRANSPARENT_TEXTURE: (ResourceLocation) & (ResourceLocation);
        readonly MISSING_TEXTURE_LOCATION: (ResourceLocation) & (ResourceLocation);
    }
    type RenderableResource_ = RenderableResource;
    class BeeAttributes {
        constructor()
        getClass(): typeof any;
        toNBT(arg0: Internal.CompoundTag_): void;
        static of(arg0: any): Internal.BeeAttributes;
        setTraits(arg0: Internal.List_<Internal.Trait>): void;
        getTexture(): ResourceLocation;
        getLoci(): Internal.Map<Internal.Allele, Internal.Locus>;
        randomize(arg0: Internal.Bee_): void;
        notify(): void;
        anyGene(arg0: Internal.Allele_, arg1: number): boolean;
        wait(arg0: number, arg1: number): void;
        updateTraits(arg0: Internal.Bee_): void;
        addTrusted(arg0: Internal.UUID_): void;
        hasTrait(arg0: Internal.Trait_): boolean;
        getTraits(): Internal.Set<Internal.Trait>;
        setSaddle(arg0: Internal.ItemStack_): void;
        toString(): string;
        isSaddled(): boolean;
        breedFrom(arg0: Internal.BeeAttributes_, arg1: Internal.Allele_, arg2: Internal.BeeAttributes_, arg3: Internal.Allele_, arg4: Internal.Bee_): void;
        notifyAll(): void;
        setTexture(arg0: ResourceLocation_): void;
        getPollens(): Internal.List<string>;
        getSaddle(): Internal.ItemStack;
        updateTexture(): void;
        setMutagenEndsIn(arg0: number, arg1: number): void;
        fromNBT(arg0: Internal.CompoundTag_, arg1: Internal.Bee_): void;
        allGene(arg0: Internal.Allele_, arg1: number): boolean;
        hashCode(): number;
        setTrusted(arg0: Internal.List_<Internal.UUID>): void;
        getLocus(arg0: Internal.Allele_): Internal.Locus;
        wait(): void;
        getMutagenEndsIn(): number;
        wait(arg0: number): void;
        trusts(arg0: Internal.UUID_): boolean;
        getTrusted(): Internal.List<Internal.UUID>;
        equals(arg0: any): boolean;
        isSaddleable(): boolean;
        get class(): typeof any
        set traits(arg0: Internal.List_<Internal.Trait>)
        get texture(): ResourceLocation
        get loci(): Internal.Map<Internal.Allele, Internal.Locus>
        get traits(): Internal.Set<Internal.Trait>
        set saddle(arg0: Internal.ItemStack_)
        get saddled(): boolean
        set texture(arg0: ResourceLocation_)
        get pollens(): Internal.List<string>
        get saddle(): Internal.ItemStack
        set trusted(arg0: Internal.List_<Internal.UUID>)
        get mutagenEndsIn(): number
        get trusted(): Internal.List<Internal.UUID>
        get saddleable(): boolean
        dirty: boolean;
    }
    type BeeAttributes_ = BeeAttributes;
    class Menu extends Internal.MenuItem implements Internal.Accessible, Internal.MenuContainer {
        constructor()
        constructor(arg0: string, arg1: boolean)
        constructor(arg0: string)
        paramString(): string;
        /**
         * @deprecated
        */
        countItems(): number;
        getLabel(): string;
        setEnabled(arg0: boolean): void;
        setFont(arg0: Internal.Font_): void;
        getItem(arg0: number): Internal.MenuItem;
        notify(): void;
        dispatchEvent(arg0: Internal.AWTEvent_): void;
        getItemCount(): number;
        addActionListener(arg0: Internal.ActionListener_): void;
        getParent(): Internal.MenuContainer;
        remove(arg0: number): void;
        setName(arg0: string): void;
        /**
         * @deprecated
        */
        abstract postEvent(arg0: Internal.Event_): boolean;
        "insert(java.awt.MenuItem,int)"(arg0: Internal.MenuItem_, arg1: number): void;
        setShortcut(arg0: Internal.MenuShortcut_): void;
        deleteShortcut(): void;
        addSeparator(): void;
        "remove(java.awt.MenuComponent)"(arg0: Internal.MenuComponent_): void;
        "insert(java.lang.String,int)"(arg0: string, arg1: number): void;
        setActionCommand(arg0: string): void;
        wait(): void;
        add(arg0: string): void;
        removeActionListener(arg0: Internal.ActionListener_): void;
        getActionListeners(): Internal.ActionListener[];
        getClass(): typeof any;
        /**
         * @deprecated
        */
        disable(): void;
        insertSeparator(arg0: number): void;
        add(arg0: Internal.MenuItem_): Internal.MenuItem;
        getListeners<T extends Internal.EventListener>(arg0: T): T[];
        insert(arg0: Internal.MenuItem_, arg1: number): void;
        wait(arg0: number, arg1: number): void;
        abstract getFont(): Internal.Font;
        isEnabled(): boolean;
        getName(): string;
        getActionCommand(): string;
        /**
         * @deprecated
        */
        enable(arg0: boolean): void;
        addNotify(): void;
        "remove(int)"(arg0: number): void;
        remove(arg0: Internal.MenuComponent_): void;
        removeAll(): void;
        "add(java.lang.String)"(arg0: string): void;
        toString(): string;
        notifyAll(): void;
        isTearOff(): boolean;
        getAccessibleContext(): Internal.AccessibleContext;
        /**
         * @deprecated
        */
        enable(): void;
        getShortcut(): Internal.MenuShortcut;
        hashCode(): number;
        removeNotify(): void;
        "add(java.awt.MenuItem)"(arg0: Internal.MenuItem_): Internal.MenuItem;
        setLabel(arg0: string): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        insert(arg0: string, arg1: number): void;
        get label(): string
        set enabled(arg0: boolean)
        set font(arg0: Internal.Font_)
        get itemCount(): number
        get parent(): Internal.MenuContainer
        set name(arg0: string)
        set shortcut(arg0: Internal.MenuShortcut_)
        set actionCommand(arg0: string)
        get actionListeners(): Internal.ActionListener[]
        get class(): typeof any
        get font(): Internal.Font
        get enabled(): boolean
        get name(): string
        get actionCommand(): string
        get tearOff(): boolean
        get accessibleContext(): Internal.AccessibleContext
        get shortcut(): Internal.MenuShortcut
        set label(arg0: string)
    }
    type Menu_ = Menu;
    interface LevelReader extends Internal.BlockAndTintGetter, Internal.SignalGetter, Internal.ChunkView, Internal.BiomeManager$NoiseBiomeSource, Internal.CollisionGetter {
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        abstract getShade(arg0: Internal.Direction_, arg1: boolean): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getMaxSection(): number;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getSectionYFromSectionIndex(arg0: number): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        abstract getBiomeManager(): Internal.BiomeManager;
        isEmptyBlock(arg0: BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        canSeeSky(arg0: BlockPos_): boolean;
        abstract enabledFeatures(): Internal.FeatureFlagSet;
        abstract isClientSide(): boolean;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        abstract getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        abstract dimensionType(): Internal.DimensionType;
        abstract getSkyDarken(): number;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        abstract getHeight(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): number;
        getMinBuildHeight(): number;
        getSectionsCount(): number;
        "noCollision(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        getLoadedChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        getSectionIndexFromSectionY(arg0: number): number;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        abstract getSeaLevel(): number;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getBestNeighborSignal(arg0: BlockPos_): number;
        getSectionIndex(arg0: number): number;
        getDirectSignalTo(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        abstract hasChunk(arg0: number, arg1: number): boolean;
        getMaxBuildHeight(): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        getChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        noCollision(arg0: Internal.AABB_): boolean;
        isWaterAt(arg0: BlockPos_): boolean;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        "isOutsideBuildHeight(int)"(arg0: number): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        abstract getLightEngine(): Internal.LevelLightEngine;
        abstract getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getHeight(): number;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        abstract getWorldBorder(): Internal.WorldBorder;
        isOutsideBuildHeight(arg0: number): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        abstract getFluidState(arg0: BlockPos_): Internal.FluidState;
        "isOutsideBuildHeight(net.minecraft.core.BlockPos)"(arg0: BlockPos_): boolean;
        abstract getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_, arg3: boolean): Internal.ChunkAccess;
        abstract registryAccess(): Internal.RegistryAccess;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getBiome(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        "noCollision(net.minecraft.world.phys.AABB)"(arg0: Internal.AABB_): boolean;
        getChunkForCollisions(arg0: number, arg1: number): Internal.BlockGetter;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        getMaxLightLevel(): number;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        get biomeManager(): Internal.BiomeManager
        get clientSide(): boolean
        get skyDarken(): number
        get minBuildHeight(): number
        get sectionsCount(): number
        /**
         * @deprecated
        */
        get seaLevel(): number
        get maxBuildHeight(): number
        get lightEngine(): Internal.LevelLightEngine
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get worldBorder(): Internal.WorldBorder
        get maxLightLevel(): number
    }
    type LevelReader_ = LevelReader;
    interface IFrameBlock {
        abstract getFilledBlock(arg0: Internal.Block_): Internal.Block;
        (arg0: Internal.Block): Internal.Block_;
    }
    type IFrameBlock_ = IFrameBlock | ((arg0: Internal.Block)=> Internal.Block_);
    class ShortTag extends Internal.NumericTag {
        getClass(): typeof any;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        sizeInBytes(): number;
        getAsLong(): number;
        getAsFloat(): number;
        getType(): Internal.TagType<Internal.ShortTag>;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        write(arg0: Internal.DataOutput_): void;
        getId(): number;
        copy(): this;
        toString(): string;
        notifyAll(): void;
        specialEquals(o: any, shallow: boolean): boolean;
        getAsDouble(): number;
        accept(arg0: Internal.TagVisitor_): void;
        hashCode(): number;
        getAsInt(): number;
        getAsString(): string;
        getAsByte(): number;
        getAsNumber(): number;
        wait(): void;
        static valueOf(arg0: number): Internal.ShortTag;
        wait(arg0: number): void;
        getAsShort(): number;
        equals(arg0: any): boolean;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        get class(): typeof any
        get asLong(): number
        get asFloat(): number
        get type(): Internal.TagType<Internal.ShortTag>
        get id(): number
        get asDouble(): number
        get asInt(): number
        get asString(): string
        get asByte(): number
        get asNumber(): number
        get asShort(): number
        static readonly TYPE: Internal.TagType<Internal.ShortTag>;
    }
    type ShortTag_ = ShortTag;
    class ProgressBarScreenAddon <T extends Internal.IComponentHarness> extends Internal.BasicScreenAddon {
        constructor(arg0: number, arg1: number, arg2: Internal.ProgressBarComponent_<T>)
        charTyped(arg0: string, arg1: number): boolean;
        getClass(): typeof any;
        isFocused(): boolean;
        getProgressBar(): Internal.ProgressBarComponent<T>;
        setFocused(arg0: boolean): void;
        getTabOrderGroup(): number;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getPosY(): number;
        getPosX(): number;
        getTooltipLines(): Internal.List<net.minecraft.network.chat.Component>;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        getRectangle(): Internal.ScreenRectangle;
        nextFocusPath(arg0: Internal.FocusNavigationEvent_): Internal.ComponentPath;
        toString(): string;
        notifyAll(): void;
        setPosX(arg0: number): void;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        setPosY(arg0: number): void;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        isBackground(): boolean;
        drawBackgroundLayer(arg0: Internal.GuiGraphics_, arg1: Internal.Screen_, arg2: Internal.IAssetProvider_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        getXSize(): number;
        hashCode(): number;
        init(arg0: number, arg1: number): void;
        getYSize(): number;
        getCurrentFocusPath(): Internal.ComponentPath;
        wait(): void;
        drawForegroundLayer(arg0: Internal.GuiGraphics_, arg1: Internal.Screen_, arg2: Internal.IAssetProvider_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isMouseOver(arg0: number, arg1: number): boolean;
        get class(): typeof any
        get focused(): boolean
        get progressBar(): Internal.ProgressBarComponent<T>
        set focused(arg0: boolean)
        get tabOrderGroup(): number
        get posY(): number
        get posX(): number
        get tooltipLines(): Internal.List<net.minecraft.network.chat.Component>
        get rectangle(): Internal.ScreenRectangle
        set posX(arg0: number)
        set posY(arg0: number)
        get background(): boolean
        get XSize(): number
        get YSize(): number
        get currentFocusPath(): Internal.ComponentPath
    }
    type ProgressBarScreenAddon_<T extends Internal.IComponentHarness> = ProgressBarScreenAddon<T>;
    class DoublePlantBlock extends Internal.BushBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        getPlant(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static copyWaterloggedFrom(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.BlockState;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        callMayPlaceOn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        static placeAt(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly HALF: Internal.EnumProperty<Internal.DoubleBlockHalf>;
    }
    type DoublePlantBlock_ = DoublePlantBlock;
    class ChrysalisBlock extends Internal.HorizontalDirectionalBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(pContext: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(pState: Internal.BlockState_, pFacing: Internal.Direction_, pFacingState: Internal.BlockState_, pLevel: Internal.LevelAccessor_, pCurrentPos: BlockPos_, pFacingPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(pState: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(pState: Internal.BlockState_, pLevel: Internal.ServerLevel_, pPos: BlockPos_, pRandom: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(pState: Internal.BlockState_, pLevel: Internal.LevelReader_, pPos: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(pState: Internal.BlockState_, pLevel: Internal.BlockGetter_, pPos: BlockPos_, pContext: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly AGE: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type ChrysalisBlock_ = ChrysalisBlock;
    class AetherDoubleDropsLeaves extends Internal.LeavesBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        embplus$cast(): Internal.LeavesBlock;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        static updateDistance(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        embplus$activeNeighbors(): number;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        onSheared(arg0: Internal.Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        embplus$getResourceLocation(): ResourceLocation;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        static getOptionalDistanceAt(arg0: Internal.BlockState_): Internal.OptionalInt;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        lychee$setTickable(arg0: boolean): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type AetherDoubleDropsLeaves_ = AetherDoubleDropsLeaves;
    class ComparatorBlock extends Internal.DiodeBlock implements Internal.EntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static isDiode(arg0: Internal.BlockState_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        setFriction(arg0: number): void;
        getTypeData(): Internal.CompoundTag;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        getOutputSignal(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): number;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        lychee$isTickable(): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        shouldPrioritize(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        isLocked(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        handler$zlf000$updateSideRelayers(level: Internal.Level_, pos: BlockPos_, state: Internal.BlockState_, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getName(): Internal.MutableComponent;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        lychee$setTickable(arg0: boolean): void;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        set friction(arg0: number)
        get typeData(): Internal.CompoundTag
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly MODE: Internal.EnumProperty<Internal.ComparatorMode>;
    }
    type ComparatorBlock_ = ComparatorBlock;
    class RosehipTeaItem extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type RosehipTeaItem_ = RosehipTeaItem;
    class CaveFilter extends Internal.PlacementFilter {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getPositions(arg0: Internal.PlacementContext_, arg1: Internal.RandomSource_, arg2: BlockPos_): Internal.Stream<BlockPos>;
        wait(): void;
        type(): Internal.PlacementModifierType<any>;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.CaveFilter>;
    }
    type CaveFilter_ = CaveFilter;
    class MapExtendingRecipe extends Internal.ShapedRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        static callDissolvePattern_$md$3ae8d1$7(arg0: string[], arg1: Internal.Map_<any, any>, arg2: number, arg3: number): Internal.NonNullList<any>;
        static callShrink(...toShrink: string[]): string[];
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        callMatches(arg0: Internal.CraftingContainer_, arg1: number, arg2: number, arg3: boolean): boolean;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        notify(): void;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getId(): ResourceLocation;
        static bookshelf$shrink_$md$3ae8d1$9(...arg0: string[]): string[];
        isSpecial(): boolean;
        static bookshelf$dissolvePattern(arg0: string[], arg1: Internal.Map_<string, Internal.Ingredient>, arg2: number, arg3: number): Internal.NonNullList<Internal.Ingredient>;
        getWidth(): number;
        static callShrink_$md$3ae8d1$6(...arg0: string[]): string[];
        static callPatternFromJson_$md$3ae8d1$1(arg0: Internal.JsonArray_): string[];
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        static setCraftingSize(arg0: number, arg1: number): void;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        static itemStackFromJson(arg0: Internal.JsonObject_): Internal.ItemStack;
        getType(): ResourceLocation;
        static dissolvePattern(arg0: string[], arg1: Internal.Map_<string, Internal.Ingredient>, arg2: number, arg3: number): Internal.NonNullList<Internal.Ingredient>;
        static callKeyFromJson(keyEntry: Internal.JsonObject_): Internal.Map<string, Internal.Ingredient>;
        wait(): void;
        isIncomplete(): boolean;
        static callPatternFromJson_$md$3ae8d1$5(arg0: Internal.JsonArray_): string[];
        static callDissolvePattern(pattern: string[], keys: Internal.Map_<string, Internal.Ingredient>, patternWidth: number, patternHeight: number): Internal.NonNullList<Internal.Ingredient>;
        matches(arg0: Internal.CraftingContainer_, arg1: number, arg2: number, arg3: boolean): boolean;
        getClass(): typeof any;
        static keyFromJson(arg0: Internal.JsonObject_): Internal.Map<string, Internal.Ingredient>;
        static bookshelf$keyFromJson_$md$3ae8d1$8(arg0: Internal.JsonObject_): Internal.Map<any, any>;
        static bookshelf$dissolvePattern_$md$3ae8d1$b(arg0: string[], arg1: Internal.Map_<any, any>, arg2: number, arg3: number): Internal.NonNullList<any>;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        wait(arg0: number, arg1: number): void;
        category(): Internal.CraftingBookCategory;
        getSerializer(): Internal.RecipeSerializer<any>;
        assemble(arg0: net.minecraft.world.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        static bookshelf$shrink(...arg0: string[]): string[];
        static bookshelf$patternFromJson_$md$3ae8d1$a(arg0: Internal.JsonArray_): string[];
        static bookshelf$keyFromJson(arg0: Internal.JsonObject_): Internal.Map<string, Internal.Ingredient>;
        static callKeyFromJson_$md$3ae8d1$4(arg0: Internal.JsonObject_): Internal.Map<any, any>;
        static callDissolvePattern_$md$3ae8d1$0(arg0: string[], arg1: Internal.Map_<any, any>, arg2: number, arg3: number): Internal.NonNullList<any>;
        matches(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        static callShrink_$md$3ae8d1$3(...arg0: string[]): string[];
        static callKeyFromJson_$md$3ae8d1$2(arg0: Internal.JsonObject_): Internal.Map<any, any>;
        getHeight(): number;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        getRecipeWidth(): number;
        notifyAll(): void;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: net.minecraft.world.Container_, arg1: Internal.Level_): boolean;
        static patternFromJson(arg0: Internal.JsonArray_): string[];
        static shrink(...arg0: string[]): string[];
        setGroup(group: string): void;
        getResult(): Internal.ItemStack;
        static itemFromJson(arg0: Internal.JsonObject_): Internal.Item;
        static bookshelf$patternFromJson(arg0: Internal.JsonArray_): string[];
        hashCode(): number;
        getRecipeHeight(): number;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        static callPatternFromJson(patternArray: Internal.JsonArray_): string[];
        equals(arg0: any): boolean;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get id(): ResourceLocation
        get special(): boolean
        get width(): number
        get type(): ResourceLocation
        get incomplete(): boolean
        get class(): typeof any
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get height(): number
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get recipeWidth(): number
        set group(group: string)
        get result(): Internal.ItemStack
        get recipeHeight(): number
        get orCreateId(): ResourceLocation
    }
    type MapExtendingRecipe_ = MapExtendingRecipe;
    class EnchantmentMenu extends Internal.AbstractContainerMenu implements Internal.EnchantmentMenuAccessor {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: Internal.ContainerLevelAccess_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        findSlot(arg0: net.minecraft.world.Container_, arg1: number): Internal.OptionalInt;
        setEnchantSlots(arg0: net.minecraft.world.Container_): void;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        addSlot(arg0: Internal.Slot_): Internal.Slot;
        quickMoveStack(arg0: Internal.Player_, arg1: number): Internal.ItemStack;
        setRemoteCarried(arg0: Internal.ItemStack_): void;
        broadcastFullState(): void;
        notify(): void;
        incrementStateId(): number;
        handler$bkn000$onDetectAndSendChanges(arg0: Internal.CallbackInfo_): void;
        getRandom(): Internal.RandomSource;
        isValidSlotIndex(arg0: number): boolean;
        broadcastChanges(): void;
        setData(arg0: number, arg1: number): void;
        getSlot(arg0: number): Internal.Slot;
        aether$setMenuType(arg0: Internal.MenuType_<any>): void;
        slotsChanged(arg0: net.minecraft.world.Container_): void;
        callGetEnchantmentList(arg0: Internal.ItemStack_, arg1: number, arg2: number): Internal.List<any>;
        removeSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        _moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        getEnchantmentSeed(): number;
        setRemoteSlot(arg0: number, arg1: Internal.ItemStack_): void;
        getEnchantmentSeed(): Internal.DataSlot;
        getCarried(): Internal.ItemStack;
        wait(): void;
        getType(): Internal.MenuType<any>;
        puzzlesapi$getMenuType(): Internal.MenuType<any>;
        setSynchronizer(arg0: Internal.ContainerSynchronizer_): void;
        static isValidQuickcraftType(arg0: number, arg1: Internal.Player_): boolean;
        getClass(): typeof any;
        static getRedstoneSignalFromBlockEntity(arg0: Internal.BlockEntity_): number;
        canTakeItemForPickAll(arg0: Internal.ItemStack_, arg1: Internal.Slot_): boolean;
        setItem(arg0: number, arg1: number, arg2: Internal.ItemStack_): void;
        addDataSlot(arg0: Internal.DataSlot_): Internal.DataSlot;
        static getRedstoneSignalFromContainer(arg0: net.minecraft.world.Container_): number;
        handler$bkn000$onContainerClosed(arg0: Internal.Player_, arg1: Internal.CallbackInfo_): void;
        setCarried(arg0: Internal.ItemStack_): void;
        sendAllDataToRemote(): void;
        static getQuickCraftPlaceCount(arg0: Internal.Set_<Internal.Slot>, arg1: number, arg2: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        "getEnchantmentSeed()"(): number;
        resumeRemoteUpdates(): void;
        aether$getLastSlots(): Internal.NonNullList<any>;
        "getEnchantmentSeed()"(): Internal.DataSlot;
        static getQuickcraftHeader(arg0: number): number;
        static canItemQuickReplace(arg0: Internal.Slot_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addSlotListener(arg0: net.minecraft.world.inventory.ContainerListener_): void;
        updateDataSlotListeners(arg0: number, arg1: number): void;
        toString(): string;
        clickMenuButton(arg0: Internal.Player_, arg1: number): boolean;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        notifyAll(): void;
        static getQuickcraftType(arg0: number): number;
        setRemoteSlotNoCopy(arg0: number, arg1: Internal.ItemStack_): void;
        clicked(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_): void;
        stillValid(arg0: Internal.Player_): boolean;
        suppressRemoteUpdates(): void;
        hashCode(): number;
        initializeContents(arg0: number, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): void;
        getStateId(): number;
        wait(arg0: number): void;
        aether$setContainerId(arg0: number): void;
        equals(arg0: any): boolean;
        getGoldCount(): number;
        aether$getRemoteSlots(): Internal.NonNullList<any>;
        transferState(arg0: Internal.AbstractContainerMenu_): void;
        canDragTo(arg0: Internal.Slot_): boolean;
        removed(arg0: Internal.Player_): void;
        set enchantSlots(arg0: net.minecraft.world.Container_)
        get items(): Internal.NonNullList<Internal.ItemStack>
        set remoteCarried(arg0: Internal.ItemStack_)
        get random(): Internal.RandomSource
        get enchantmentSeed(): number
        get enchantmentSeed(): Internal.DataSlot
        get carried(): Internal.ItemStack
        get type(): Internal.MenuType<any>
        set synchronizer(arg0: Internal.ContainerSynchronizer_)
        get class(): typeof any
        set carried(arg0: Internal.ItemStack_)
        get "enchantmentSeed()"(): number
        get "enchantmentSeed()"(): Internal.DataSlot
        get stateId(): number
        get goldCount(): number
        readonly enchantClue: number[];
        readonly levelClue: number[];
        readonly costs: number[];
    }
    type EnchantmentMenu_ = EnchantmentMenu;
}
declare namespace snownee.kiwi.item {
    class ModItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        handler$eob000$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isComplex(): boolean;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getDefaultInstance(): Internal.ItemStack;
        getTypeData(): Internal.CompoundTag;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        static goldenagecombat$getBaseAttackDamageUUID_$md$3ae8d1$1(): Internal.UUID;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        setCraftingRemainingItem(arg0: Internal.Item_): void;
        static goldenagecombat$getBaseAttackDamageUUID(): Internal.UUID;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$setClientAnimationExtension(obj: any): void;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        static goldenagecombat$getBaseAttackSpeedUUID_$md$3ae8d1$2(): Internal.UUID;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static goldenagecombat$getBaseAttackSpeedUUID(): Internal.UUID;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        goldenagecombat$setMaxStackSize(arg0: number): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static permanentsponges$callGetPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        handler$cgj000$overrideConstructor(arg0: Internal.Item$Properties_, arg1: Internal.CallbackInfo_): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        static permanentsponges$callGetPlayerPOVHitResult_$md$3ae8d1$0(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        handler$cbk000$travelerscompass$appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<any>, arg3: Internal.TooltipFlag_, arg4: Internal.CallbackInfo_): void;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        static addTip(arg0: Internal.ItemStack_, arg1: Internal.List_<net.minecraft.network.chat.Component>, arg2: Internal.TooltipFlag_): void;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get defaultInstance(): Internal.ItemStack
        get typeData(): Internal.CompoundTag
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set craftingRemainingItem(arg0: Internal.Item_)
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type ModItem_ = ModItem;
}
declare namespace com.yungnickyoung.minecraft.betteroceanmonuments.mixin.accessor {
    interface StructureManagerAccessor {
        abstract getLevel(): Internal.LevelAccessor;
        get level(): Internal.LevelAccessor
        (): Internal.LevelAccessor_;
    }
    type StructureManagerAccessor_ = (()=> Internal.LevelAccessor_) | StructureManagerAccessor;
}
declare namespace it.unimi.dsi.fastutil.ints {
    interface IntConsumer extends Internal.Consumer<number>, Internal.IntConsumer {
        andThen(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): this;
        "andThen(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): this;
        "andThen(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): Internal.IntConsumer;
        /**
         * @deprecated
        */
        accept(arg0: any): void;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        /**
         * @deprecated
        */
        andThen(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        abstract accept(arg0: number): void;
        /**
         * @deprecated
        */
        "accept(java.lang.Integer)"(arg0: number): void;
        /**
         * @deprecated
        */
        "accept(java.lang.Object)"(arg0: any): void;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        andThen(arg0: Internal.IntConsumer_): Internal.IntConsumer;
        abstract "accept(int)"(arg0: number): void;
    }
    type IntConsumer_ = IntConsumer;
}
declare namespace xaero.map.server.radar.tracker {
    class SyncedTrackedPlayer {
        constructor(arg0: Internal.UUID_, arg1: number, arg2: number, arg3: number, arg4: Internal.ResourceKey_<Internal.Level>)
        getClass(): typeof any;
        setPos(arg0: number, arg1: number, arg2: number): this;
        toString(): string;
        matchesEnough(arg0: Internal.Player_, arg1: number): boolean;
        notifyAll(): void;
        notify(): void;
        update(arg0: Internal.Player_): void;
        wait(arg0: number, arg1: number): void;
        getX(): number;
        getY(): number;
        setDimension(arg0: Internal.ResourceKey_<Internal.Level>): this;
        getZ(): number;
        hashCode(): number;
        getDimension(): Internal.ResourceKey<Internal.Level>;
        copyFrom(arg0: xaero.map.server.radar.tracker.SyncedTrackedPlayer_): void;
        wait(): void;
        getId(): Internal.UUID;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get x(): number
        get y(): number
        set dimension(arg0: Internal.ResourceKey_<Internal.Level>)
        get z(): number
        get dimension(): Internal.ResourceKey<Internal.Level>
        get id(): Internal.UUID
    }
    type SyncedTrackedPlayer_ = SyncedTrackedPlayer;
}
