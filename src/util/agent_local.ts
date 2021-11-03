import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory  as idl} from "../dfxgen/idl/difi.did";
import { _SERVICE  as dbs}  from "../dfxgen/service/difi.did";

const canister_id_local = "rrkah-fqaaa-aaaaa-aaaaq-cai";
const host_local = "http://127.0.0.1:8000";
export class Actor_Local {
    public actor : dbs;
    constructor(){
        const host = host_local;
        let options = {};
        const agentOptions = { ...options,  host: host };
        const agent = new HttpAgent(agentOptions);
        agent.fetchRootKey();
        this.actor = Actor.createActor<dbs>( idl, {
            agent,
            canisterId: canister_id_local
        });
    }
}
