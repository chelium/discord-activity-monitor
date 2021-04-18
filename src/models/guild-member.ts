import { DisharmonyGuildMember } from "@chelium/disharmony"

export default class GuildMember extends DisharmonyGuildMember
{
    public get voiceChannelName(): string { return this.djs.voice.channel && this.djs.voice.channel.name || "" }
}
