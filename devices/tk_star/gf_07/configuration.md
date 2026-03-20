---
slug: /tk_star/gf_07/configuration
id: gf_07-configuration
sidebar_label: Configuration
title: TK-Star - GF 07 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the TK-Star GF 07 with Plaspy server settings and SMS commands for basic setup and connectivity
keywords:
  - TK-Star GF 07 configuration
  - TK-Star GF 07 setup
  - GF 07 server configuration
  - GF 07 Plaspy setup
  - Plaspy GPS tracker configuration
  - GPS tracker setup guide
  - vehicle tracking configuration
  - asset tracker configuration
  - TK-Star tracker commands
  - GPRS tracker configuration
---

# TK-Star - GF 07 Configuration

This page documents the public configuration context for using the TK-Star GF 07 tracker with Plaspy. It focuses on the practical server settings, SMS configuration commands that are publicly available, and the workflow required to register the device so it can report position data to the Plaspy platform. The GF 07 is a compact GSM positioning tracker that uses a SIM card for connectivity and can be configured using the manufacturer's SMS commands.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol, while exact manufacturer setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. This guide shows the common, public SMS commands provided by the manufacturer and explains how to apply the Plaspy server values so the tracker can report to your Plaspy account.

## Configuration Overview

This configuration process prepares the GF 07 to communicate with the Plaspy server so location and basic device reporting appear in the Plaspy platform. The public manufacturer commands make it possible to set APN, specify the GPRS server, control reporting interval, and switch the tracker into GPRS mode.

- Set the operator APN and optional APN credentials so the tracker can establish GPRS data.
- Configure the tracker to report to Plaspy by specifying the Plaspy server endpoint and port.
- Set a reporting interval so the device sends periodic location updates to Plaspy.
- Switch the device into GPRS mode and verify the device is visible in the Plaspy platform.
- Use the device default password when sending SMS configuration commands unless it has been changed.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices use the same port

## Typical Requirements Before Setup

- A powered GF 07 tracker with a compatible SIM card inserted and active data or SMS service.
- Knowledge of the SIM operator APN and any APN username or APN password required by the carrier.
- Access to a phone capable of sending SMS to the tracker for manufacturer SMS commands.
- The device default password if it has not been changed (the public default shown below is 123456).
- Access to the manufacturer's configuration instructions or reference manual for the GF 07.

## How This Tracker Connects to Plaspy

The GF 07 uses GSM GPRS connectivity to send position reports to a remote server endpoint. When configured with the Plaspy server settings, the tracker opens a data connection and transmits periodic updates to the shared Plaspy endpoint and port so the device becomes visible and reportable in Plaspy.

- Tracker uses GPRS to establish a data session with the network operator using the configured APN.
- The tracker is set to report to the Plaspy server endpoint on port 8888.
- The device can be configured to use UDP or TCP transport depending on device options and carrier support.
- Plaspy automatically detects the tracker protocol and accepts incoming data on the shared port.
- Once reporting, location updates and basic device events are visible inside the Plaspy platform.

## Common Configuration Workflow

1. Access the official TK-Star manufacturer configuration method, usually SMS commands sent from a mobile phone or the vendor's setup documentation.
2. Provide the carrier APN and any APN credentials required by your SIM card so the device can establish GPRS.
3. Enter the Plaspy server endpoint by supplying either d.plaspy.com where supported by configuration tools or the server IP 54.85.159.138 when using the device SMS server command.
4. Set the server port to 8888, the same port Plaspy uses for all supported devices.
5. Choose UDP or TCP transport if the device requires a transport selection for GPRS reporting.
6. Apply or save the configuration and, if applicable, restart the device or switch it to GPRS mode.
7. Validate that the device reports to Plaspy by confirming the tracker appears in your Plaspy account and that periodic updates are received.

## Example Configuration Commands

The GF 07 supports SMS configuration. The manufacturer provides public commands in this order. The default device password used in these commands is 123456. If you have changed the device password, replace 123456 with your current password in each command.

1. Optional initial factory restore (use only if you need to reset the tracker to factory defaults)
```text
begin123456
```

2. Set the operator APN (replace [apn] with your carrier APN)
```text
apn123456 [apn]
```

3. Set the APN username if required (replace [apnu] with the APN username)
```text
apnuser123456 [apnu]
```

4. Set the APN password if required (replace [apnp] with the APN password)
```text
apnpasswd123456 [apnp]
```

5. Set the GPRS server to the Plaspy endpoint and port (this example uses the Plaspy server IP and port)
```text
adminip123456 54.85.159.138 8888
```
- Note: Where manufacturer tools allow a domain instead of an IP, you may enter d.plaspy.com in relevant configuration fields. The public SMS command above uses the server IP as shown in manufacturer examples.

6. Set the position upload interval to 60 seconds
```text
upload123456 60
```

7. Switch the device to GPRS reporting mode
```text
gprs123456
```

Placeholders explained:
- [apn] is the mobile operator APN string required for the SIM to use data.
- [apnu] is the APN username when the carrier requires one.
- [apnp] is the APN password when required by the carrier.
- Replace 123456 with your current device password if it differs from the default.

## Configuration Notes

- SMS based setup as shown above is commonly supported by GF 07 firmware; however firmware revisions can change supported commands or syntax.
- Choose TCP or UDP according to your network environment and carrier reliability; Plaspy accepts either transport on the shared port.
- The default device password in the public commands is 123456; change this after initial setup if security policies require it.
- If a manufacturer tool or web interface is available, it may accept the domain d.plaspy.com instead of the IP address.
- Always consult TK-Star documentation for the GF 07 to confirm that commands and syntax match your device firmware and hardware revision.

## Why Use Plaspy with This Configuration

Connecting the TK-Star GF 07 to Plaspy provides a straightforward way to centralize location reporting and monitoring for portable or vehicle-mounted trackers. Using the shared Plaspy server settings and the public SMS configuration commands allows organizations to quickly bring devices online and start receiving periodic location updates for operational visibility and asset tracking.

To learn more about Plaspy and how to manage devices at scale, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance, verify details on the TK-Star website https://www.tk-star.com/ as setup commands and behavior can change with firmware updates and hardware revisions.
