---
serverName: maple
location: "Toronto, CAN"
type: vps
provider:
  name: ParadoxNetworks
  url: https://pdxnet.co.uk
---

maple is another one of our primary nodes, rented from Paradox Networks. It is also one of our single-most peered nodes, as we ħave [ONIX](https://onix.cx) access through it. ONIX is the largest exchange that we are a part of.

This node also recieves free transit (via ONIX) from the lovely folks over at [Hurricane Electric](https://he.net).

It runs NixOS with Pathvector and BIRD 2.

## Prefixes

- `2602:fbcf:d8::/48`
- `2602:fbcf:df::/48` (anycast)
