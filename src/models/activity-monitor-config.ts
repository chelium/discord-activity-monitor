import { Config as DisharmonyConfig } from "@chelium/disharmony"

export default interface ActivityMonitorConfig extends DisharmonyConfig
{
    cullingIntervalSec: number
}
