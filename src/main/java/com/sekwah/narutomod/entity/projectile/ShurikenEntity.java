package com.sekwah.narutomod.entity.projectile;

import com.sekwah.narutomod.entity.NarutoEntities;
import com.sekwah.narutomod.item.NarutoItems;
import com.sekwah.narutomod.sounds.NarutoSounds;
import net.minecraft.entity.EntityType;
import net.minecraft.entity.LivingEntity;
import net.minecraft.entity.projectile.AbstractArrowEntity;
import net.minecraft.item.ItemStack;
import net.minecraft.network.IPacket;
import net.minecraft.util.SoundEvent;
import net.minecraft.world.World;
import net.minecraftforge.fml.network.NetworkHooks;

public class ShurikenEntity extends AbstractArrowEntity {

    private int prevRotateTicks = 0;

    private int rotateTicks = 0;

    private int rotOffset = 0;

    public ShurikenEntity(EntityType<? extends ShurikenEntity> type, World worldIn) {
        super(type, worldIn);
        this.rotateTicks = worldIn.random.nextInt(140);
        this.rotOffset = (worldIn.random.nextInt(100) - 50);
    }

    public ShurikenEntity(World worldIn, LivingEntity shooter) {
        super(NarutoEntities.SHURIKEN.get(), shooter, worldIn);
    }

    public ShurikenEntity(EntityType<? extends ShurikenEntity> kunaiEntityEntityType, LivingEntity shooter, World worldIn) {
        super(kunaiEntityEntityType, shooter, worldIn);
    }

    @Override
    public void tick() {
        super.tick();
        this.prevRotateTicks = this.rotateTicks;
        if (!this.inGround) {
            this.rotateTicks += 1;
        }
    }

    public int getRotateTicks() {
        return rotateTicks;
    }

    public int getPrevRotateTicks() {
        return prevRotateTicks;
    }

    public int getRotOffset() {
        return rotOffset;
    }

    protected SoundEvent getDefaultHitGroundSoundEvent() {
        return NarutoSounds.KUNAI_THUD.get();
    }


    @Override
    public IPacket<?> getAddEntityPacket() {
        return NetworkHooks.getEntitySpawningPacket(this);
    }


    @Override
    protected ItemStack getPickupItem() {
        return new ItemStack(NarutoItems.SHURIKEN.get());
    }
}
