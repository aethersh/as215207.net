---
serverName: pete
location: "New York City, USA"
type: vps
provider:
  name: Neptune Networks
  url: https://neptunenetworks.org
---

pete is one of our primary nodes, as we are based in the NYC metro area.
It is currently hosted with Neptune Networks due to how expensive colocation is in the area; we checked. Its name is a reference to comedian Pete Davidson, as he is from Staten Island, which happens to also be where Neptune Networks' hardware is located (Telehouse Teleport).

This vps runs Alpine Linux, with the usual BIRDv2 and Pathvector. We are in the process of transitioning this system to NixOS, however there are some problems stemming from not being able to access lower level hypervisor settings.

## Prefixes

- `2602:fbcf:d0::/47`
- `2602:fbcf:df::/48` (anycast)
