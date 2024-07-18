import { BN, IdlAccounts, Program } from "@coral-xyz/anchor";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { BoldFun } from "./bold_fun";
import * as idl from "./bold_fun.json";
import { createAssociatedTokenAccountInstruction, getAssociatedTokenAddressSync } from "@solana/spl-token";

const programId = new PublicKey("CQWVirVNpfetErb6iDcZTDkgTrfGf2yXHnrcrwAaBMHb");
const TOKEN_METADATA_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

const connection = new Connection("http://localhost:8899");
// @ts-ignore
export const program = new Program<BoldFun>(idl, programId, {connection});
export const [global] = PublicKey.findProgramAddressSync([Buffer.from("global")], programId);

export async function createToken(name: string, ticker: string, url: string, user: PublicKey | string) {
    const mint = Keypair.generate();
    const metadata = PublicKey.findProgramAddressSync([
        Buffer.from("metadata"), TOKEN_METADATA_PROGRAM_ID.toBuffer(), mint.publicKey.toBuffer(),
      ], TOKEN_METADATA_PROGRAM_ID)[0];
    
      return program.methods.create(name, ticker, url).accounts({
        mint: mint.publicKey,
        metadata: metadata,
        global: global,
        user,
      }).signers([mint]).instruction();
}

export async function buy(mint: PublicKey | string, user: PublicKey | string, amount: number) {
    let mintPk = new PublicKey(mint);
    let userPk = new PublicKey(user);

    const userAta = getAssociatedTokenAddressSync(mintPk, userPk);
    const createAta = createAssociatedTokenAccountInstruction(
      userPk,
      userAta,
      userPk,
      mintPk
    );

    return program.methods.buy(new BN(amount), new BN(20200000)).accounts({
      mint: mintPk,
      user: userPk,
    }).preInstructions([createAta]).instruction();
}

export type GlobalData = IdlAccounts<BoldFun>["global"];