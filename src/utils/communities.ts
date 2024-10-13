import { ASN } from "./constants";

const INFO_COMMUNITIES = {
  "0:100": "from Self",
  "100:80": "from Transit",
  "100:90": "from IXP RS",
  "100:100": "from Peer",
  "100:200": "from Downstream",
  "120:$ASN": "from $ASN",
};

function makeInfoCommunities() {
  return Object.entries(INFO_COMMUNITIES).map(([community, description]) => ({
    community: `${ASN}:${community}`,
    description,
  }));
}

/* ------------ IXP Communities ------------ */

const IXP_COMMUNITY_PREFIX = `${ASN}:160`;

const IXP_ASNS = [
  { asn: 209643, ixp: "Locix NL" },
  { asn: 202409, ixp: "Locix DÜS" },
  { asn: 202409, ixp: "Locix FRA" },
  { asn: 62768, ixp: "NVIX" },
  { asn: 57369, ixp: "ONIX" },
  { asn: 57369, ixp: "FREMIX" },
  { asn: 36090, ixp: "F4IX MCI" },
  { asn: 47498, ixp: "FogIXP" },
];

function makeIXPCommunities() {
  return IXP_ASNS.map(({ asn, ixp }) => ({
    community: `${IXP_COMMUNITY_PREFIX}:${asn}`,
    description: `from ${ixp}`,
  }));
}

/* ------------ Location Communities ------------ */

const LOCATION_COMMUNITY_PREFIX = `${ASN}:140`;

const LOCATION_COMMUNITIES = {
  "10840": { iso3166: "840", description: "Virginia, US (10th state)" },
  "11840": { iso3166: "840", description: "New York, US (11th state)" },
  "14840": { iso3166: "840", description: "Vermont, US (14th state)" },
  "31840": { iso3166: "840", description: "California, US (31st state)" },
  "34840": { iso3166: "840", description: "Kansas City, US (34th state)" },
  "4124": {
    iso3166: "124",
    description: "Ontario, CA (4th largest land mass)",
  },
  "2124": {
    iso3166: "124",
    description: "Quebec, CA (2nd largest land mass)",
  },
  "5124": {
    iso3166: "124",
    description: "British Columbia, CA (2nd largest land mass)",
  },
  "1276": {
    iso3166: "276",
    description: "North Rhine-Westphalia (Düsseldorf) Germany",
  },
  "5276": { iso3166: "276", description: "Hesse (Frankfurt) Germany" },
  "528": { iso3166: "528", description: "Netherlands" },
  "756": { iso3166: "756", description: "Switzerland" },
};

function makeLocationCommunities() {
  return Object.entries(LOCATION_COMMUNITIES).map(([id, communityInfo]) => ({
    community: `${LOCATION_COMMUNITY_PREFIX}${id}`,
    ...communityInfo,
  }));
}

export { makeInfoCommunities, makeIXPCommunities, makeLocationCommunities };
