import * as dotenv from "dotenv";
dotenv.config();
import { Client, Collection } from "discord.js";
import { Command } from "./command";

class XPManager extends Client {
  commands: Collection<string, Command> = new Collection();
  misc: Collection<unknown, unknown> = new Collection();
  constructor() {
    super({ intents: 3276799 });
  }

  login() {
    return super.login(process.env.TOKEN);
  }

}
export { XPManager };
