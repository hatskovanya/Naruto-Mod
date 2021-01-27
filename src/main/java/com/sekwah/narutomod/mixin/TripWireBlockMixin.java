package com.sekwah.narutomod.mixin;

import com.sekwah.narutomod.block.NarutoBlocks;
import com.sekwah.narutomod.block.weapons.PaperBombBlock;
import net.minecraft.block.Block;
import net.minecraft.block.BlockState;
import net.minecraft.block.TripWireBlock;
import net.minecraft.util.Direction;
import net.minecraft.util.math.BlockPos;
import net.minecraft.world.World;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin(TripWireBlock.class)
public class TripWireBlockMixin {

    @Inject(method = "shouldConnectTo", at = @At("RETURN"), cancellable = true)
    public void shouldConnectTo(BlockState state, Direction direction, CallbackInfoReturnable<Boolean> callback) {
        boolean shouldCheck = callback.getReturnValueZ();
        Block block = state.getBlock();
        if(!shouldCheck && block == NarutoBlocks.PAPER_BOMB.get()) {
            callback.setReturnValue(true);
        }
    }

    @Inject(method = "notifyHook", at = @At(value = "RETURN"))
    public void notifyHook(World worldIn, BlockPos pos, BlockState state, CallbackInfo ci) {
        for(Direction direction : new Direction[]{Direction.SOUTH, Direction.WEST}) {
            mainCheckLoop: for(int i = 1; i < 42; ++i) {
                BlockPos blockpos = pos.offset(direction, i);
                BlockState blockstate = worldIn.getBlockState(blockpos);
                if (blockstate.isIn(NarutoBlocks.PAPER_BOMB.get()) && state.get(TripWireBlock.POWERED).equals(Boolean.TRUE)) {
                    for(int j = 1; j < 42; ++j) {
                        BlockPos checkOpposite = pos.offset(direction, -j);
                        BlockState blockStateOpposite = worldIn.getBlockState(checkOpposite);
                        if (blockStateOpposite.isIn(NarutoBlocks.PAPER_BOMB.get()) && state.get(TripWireBlock.POWERED).equals(Boolean.TRUE)) {
                            ((PaperBombBlock) NarutoBlocks.PAPER_BOMB.get()).spawnPaperbomb(blockstate, worldIn, blockpos, null, true);
                            worldIn.removeBlock(blockpos, false);

                            ((PaperBombBlock) NarutoBlocks.PAPER_BOMB.get()).spawnPaperbomb(blockStateOpposite, worldIn, checkOpposite, null, true);
                            worldIn.removeBlock(blockpos, false);
                        }
                        if (!blockStateOpposite.isIn((Block)(Object)this)) {
                            break mainCheckLoop;
                        }
                    }
                    break;
                }

                if (!blockstate.isIn((Block)(Object)this)) {
                    break;
                }
            }
        }
    }

}
