import { loadSync } from "https://deno.land/std@0.177.0/dotenv/mod.ts";
import { eHallPassClient } from "../lib/index.ts"

const cli = new eHallPassClient(loadSync()["userAuth"])
