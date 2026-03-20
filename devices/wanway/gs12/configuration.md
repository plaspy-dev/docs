---
slug: /wanway/gs12/configuration
id: gs12-configuration
sidebar_label: Configuration
title: WanWay - GS12 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for WanWay GS12 setup with Plaspy server settings and SMS commands for a fast integration
keywords:
  - WanWay GS12 configuration
  - WanWay GS12 setup
  - WanWay GS12 Plaspy
  - GS12 server configuration
  - GS12 GPS tracker setup
  - Plaspy device configuration
  - GPS tracker server settings
  - vehicle tracking GS12
  - GS12 SMS commands
  - fleet tracking configuration
---

# WanWay - GS12 Configuration

This page covers the public configuration context for using the WanWay GS12 tracker with Plaspy. It explains the practical server settings and common setup steps you can use to provision a GS12 so it reports location and event data into the Plaspy platform. Content here uses publicly available configuration commands and the shared Plaspy server settings needed to connect the device.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by GS12 firmware, hardware revision, installation type, and vendor tools, so treat these instructions as practical public guidance rather than device specific guarantees.

## Configuration Overview

The goal of the configuration process is to prepare the GS12 to communicate with Plaspy so that position fixes and event messages appear in your Plaspy account. Setup typically includes providing mobile data parameters, pointing the device at the Plaspy server endpoint, selecting transport if required, and verifying the device reports status.

- Configure the device APN so the tracker can use mobile data to reach Plaspy
- Point the tracker to Plaspy using the shared server endpoint and port
- Select UDP or TCP transport if the device requires a transport selection
- Set reporting intervals and enable GPRS mode so the device sends position updates
- Verify connectivity and confirm the tracker is visible on Plaspy after configuration

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and installed GS12 with access to SMS configuration or the manufacturer configuration tool
- An active SIM card with mobile data enabled and the correct APN for the carrier
- Ability to send and receive SMS messages from the device for SMS based configuration if you use that method
- Access to the official WanWay configuration instructions or software for reference
- A Plaspy account or onboarding instructions so you can validate the device is visible in the platform

## How This Tracker Connects to Plaspy

The GS12 sends GNSS location and device event telemetry over the cellular link to the Plaspy server address and port. Plaspy ingests the messages and presents them as real time location updates, event alerts, and telemetry for monitoring and reporting.

- The device is configured to report to the shared Plaspy server endpoint d.plaspy.com on port 8888
- Data can be transmitted using UDP or TCP depending on device selection and network conditions
- Plaspy automatically detects the tracker protocol so the server will accept incoming data from supported devices
- Location fixes and events such as ACC, disassembly alarm, overspeed, and mileage are forwarded to Plaspy for dashboards and alerts
- After configuration the tracker should appear in Plaspy for operational monitoring and reporting

## Common Configuration Workflow

1. Access the official WanWay configuration method or software suitable for the GS12 (SMS commands or vendor tool).
2. Set the device APN to match the mobile carrier so GPRS or cellular data is available.
3. Enter the Plaspy server endpoint by using d.plaspy.com or the server IP 54.85.159.138.
4. Set the server port to 8888 in the device configuration.
5. Choose UDP or TCP transport if the GS12 requires an explicit transport selection.
6. Apply or save the configuration and switch the device to GPRS mode if required.
7. Restart the tracker if the manufacturer instructions recommend a reboot.
8. Validate the device reports to Plaspy and appears in the platform after configuration.

## Example Configuration Commands

The GS12 supports SMS based configuration. Below are the public example commands you can send to the device by SMS. Preserve the placeholders when you replace them with carrier specific values.

- Configure your carrier APN. Replace {{apn}} with your carrier APN. If your carrier requires username and password, include {{apnu}} and {{apnp}} as provided by the carrier.

```
APN,{{apn}}{{# if apnu then }},{{apnu}},{{apnp}}{{# endif }}#
```

(If your message system does not support conditional syntax, use one of the following forms depending on whether your APN requires credentials.)

With only APN:
```
APN,{{apn}}#
```

With APN username and password:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Setup the GPRS server to point at Plaspy using the public server domain and port:

```
SERVER,1,d.plaspy.com,8888,0#
```

- Example to set a periodic reporting interval. The values are illustrative and should be adjusted to your reporting needs:

```
TIMER,60,60#
```

- Switch to GPRS mode to enable IP data reporting over mobile network:

```
GPRSON,1#
```

- Verify configuration and device parameters:

```
PARAM#
```

- Check device status:

```
STATUS#
```

Notes on placeholders and commands:
- {{apn}} is the carrier APN string required for cellular data.
- {{apnu}} and {{apnp}} are optional APN username and APN password placeholders used only when the carrier requires credentials.
- Keep the trailing hash character (#) as shown; it is part of the GS12 SMS command format.

## Configuration Notes

- Many GS12 units support SMS based configuration as shown, but manufacturers may also provide configuration tools or PC software for bulk provisioning.
- Firmware variations can change command syntax or available options; always check the device firmware notes if a command is not accepted.
- Choose UDP or TCP based on your network reliability and device requirements. Both transports are supported by Plaspy and the server will accept either on port 8888.
- If you use the server IP instead of domain, you may send 54.85.159.138 in place of d.plaspy.com in the SERVER command.
- When using SMS commands, allow the device a minute to apply settings and switch to GPRS mode before validating connectivity.

## Why Use Plaspy with This Configuration

Using the WanWay GS12 with Plaspy provides a straightforward path to get GNSS position and event telemetry into a centralized fleet management platform. The GS12 feature set for ACC detection, alarms, mileage and remote cut off pairs with Plaspy’s ingestion of real time data to support monitoring, alerts, and operational reporting across vehicle fleets.

Learn more about Plaspy and how devices are managed on the platform at https://www.plaspy.com. For the most current GS12 device specific details, firmware notes, and manufacturer tools consult the official WanWay website https://www.wanwaytech.net/ as device specifications and setup methods may change over time.
