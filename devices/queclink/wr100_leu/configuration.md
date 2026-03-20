---
slug: /queclink/wr100_leu/configuration
id: wr100_leu-configuration
sidebar_label: Configuration
title: QuecLink - WR100 LEU Configuration
sidebar_class_name: menu_item_tracker
description: Public guidance to configure QuecLink WR100 LEU for use with Plaspy including server settings and example SMS commands
keywords:
  - QuecLink WR100 LEU configuration
  - WR100 LEU setup
  - QuecLink Plaspy configuration
  - WR100 LEU server settings
  - Plaspy tracker setup
  - QuecLink GPS configuration
  - WR100 LEU SMS commands
  - Plaspy compatibility guide
  - GPS tracker server configuration
  - fleet tracker configuration
---

# QuecLink - WR100 LEU Configuration

This page documents the public configuration context for using the QuecLink WR100 LEU gateway with the Plaspy platform. It explains the shared Plaspy server settings, general workflow, and includes example SMS configuration commands that appear in public QuecLink configuration samples. Use this page to understand what needs to be set on the device or via the device management interface before registering the device in Plaspy.

Plaspy uses the same server and port across supported devices and automatically detects the tracker protocol to simplify integration. Manufacturer side steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The WR100 LEU description and the included SMS command examples show an SMS based setup option and the important server values to apply when you point the device at Plaspy.

## Configuration Overview

This configuration process prepares the WR100 LEU or connected Plaspy-compatible trackers to send telemetry and event data to the Plaspy platform. The goal is to ensure the gateway and any attached trackers have correct server settings, APN and transport selection so Plaspy receives location and status updates reliably.

- Point the device or attached tracker to the Plaspy server endpoint and port so data is routed to the platform.
- Configure APN and operator parameters so the device has mobile data connectivity when required.
- Select transport type UDP or TCP and confirm the gateway uses the shared Plaspy port for outgoing connections.
- Apply and save settings then validate that the device is reporting successfully to Plaspy.
- Use the provided example SMS commands as a public reference for devices that support SMS configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when devices connect to the server

## Typical Requirements Before Setup

- Confirm the device has power and is accessible through the chosen configuration method such as Web UI, SSH, or SMS as supported by the gateway or tracker.
- A valid SIM with an active data plan and correct APN values for the operator if the device will use cellular backhaul.
- Access to the WR100 LEU management interface or the SMS command channel used by your installation or installer tools.
- The device should be running firmware compatible with the published SMS commands or management procedures you plan to use.
- Knowledge of the device password if required for configuration; public samples use the default password queclink.

## How This Tracker Connects to Plaspy

When configured, the WR100 LEU or connected Plaspy-compatible trackers send telemetry and event packets to the Plaspy server endpoint. The router acts as a resilient transport layer so Plaspy receives location, alert, and status data from field devices reliably.

- Devices are configured to report to the shared Plaspy server endpoint d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- Transport can be selected as UDP or TCP depending on device support and network considerations.
- Plaspy automatically detects the tracker protocol when data arrives at port 8888 so protocol selection on the platform side is not required.
- The gateway forwards GPS tracker packets, event notifications, and status messages so Plaspy can display location and trigger notifications.
- Operational monitoring and validation happen after configuration to confirm packets arrive and are parsed by Plaspy.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for your device such as the WR100 LEU Web UI, SSH, or the manufacturer SMS command interface.
2. In the device server settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 which Plaspy uses for all supported devices.
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.
5. Configure APN and operator credentials as needed for cellular connectivity, preserving placeholders if used.
6. Apply or save the configuration and restart the device if required by the firmware or management interface.
7. Validate that the device reports to Plaspy by confirming the device appears and sends messages to the platform.

If your installation uses SMS commands for configuration, include those commands in the sequence above and apply them in the order recommended by the manufacturer.

## Example Configuration Commands

The following example SMS commands are taken from public QuecLink configuration samples and demonstrate a typical SMS based setup flow. The default device password shown in the public sample is queclink. Placeholders such as {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your operator APN, APN username, and APN password as required.

1. Optional initial step to restore factory settings
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN with placeholders
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- Replace {{apn}} with your operator APN
- Replace {{apnu}} with the APN username if required
- Replace {{apnp}} with the APN password if required

4. Set the GPRS server to Plaspy using both domain and IP and port 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command configures the device to report to d.plaspy.com and 54.85.159.138 on port 8888

5. Set the position update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Use these commands in the order shown when following an SMS based setup flow. Confirm each command result according to your device response format and the WR100 LEU or tracker firmware behavior.

## Configuration Notes

- The default password used in the public sample commands is queclink. Change default credentials according to your security policy after initial setup.
- Firmware versions and hardware revisions may change command syntax or available parameters. Verify command support on your device firmware before mass deployment.
- The WR100 LEU supports multiple management methods. If you prefer not to use SMS, use the official Web UI or SSH workflows provided by the manufacturer.
- Choose UDP or TCP based on network reliability and transport requirements. Plaspy accepts either on port 8888 and automatically detects the tracker protocol.
- Always confirm APN values and credentials with your mobile operator and preserve placeholders exactly when inserting real values.

## Why Use Plaspy with This Configuration

Configuring the WR100 LEU gateway and Plaspy-compatible trackers to use the shared Plaspy endpoint simplifies integration and reduces per-device configuration complexity. The WR100 LEU provides resilient backhaul and management features so tracker data reaches Plaspy reliably for real-time visibility, alerts, and operational monitoring across fleets and remote deployments.

To learn more about Plaspy and how your deployment can benefit from a single shared server setup visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify information on the official QuecLink site https://www.queclink.com/.
