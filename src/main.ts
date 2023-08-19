import config from "./configs/config";
import { dateUTCUnix } from "./helpers/datetime.helper";
import { runFunction } from "./modules/basic/1-function";
import { flat } from "./modules/basic/2-flat";
import {
  groupBasedEngineSource,
  countPets,
  sumValues,
} from "./modules/basic/map-reduce";
import { runRegex } from "./modules/regex/regex";

async function main() {
  // dateUTCUnix();
  // runRegex();
  // countPets();
  // groupBasedEngineSource();
  sumValues();
  runFunction();
  flat();
}

main();
