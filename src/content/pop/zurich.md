---
serverName: zurich
location: "Zurich, CHE"
type: vps
provider:
  name: iFog (v6only)
  url: https://ifog.ch
---

> This VPS is currently under maintenance as we work on finalizing our transition to a full NixOS based infrastructure. As such, our presence in Zurich will intermittent at best.

`zurich` is a [v6only](https://v6only.ch/en/vps-europe) VPS rented from iFog that we use to maintain presence in Europe. We are US-based, but we don't want to piss off our RIR. More recently we have acquired other Europe-based VPS' but this one will stay as FogIXP is valuable to us.

This VPS runs Debian with BIRDv2/Pathvector, and is connected to FogIXP.

## Prefixes

- `2602:fbcf:da::/48`
- `2602:fbcf:df::/48` (anycast)
