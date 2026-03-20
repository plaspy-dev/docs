---
slug: /coban/bn_311b/configuration
id: bn_311b-configuration
sidebar_label: Configuration
title: Coban - BN-311B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Coban BN 311B with Plaspy including server settings and sample SMS commands
keywords:
  - Coban BN 311B configuration
  - Coban BN 311B setup
  - BN 311B Plaspy configuration
  - BN 311B server settings
  - Plaspy tracker configuration
  - GPS tracker setup Plaspy
  - motorcycle GPS tracker configuration
  - GPRS tracker SMS commands
  - vehicle tracking platform setup
  - compact GPS tracker configuration
---

# Coban - BN-311B Configuration

This page documents the public configuration context for using the Coban BN-311B with the Plaspy tracking platform. It focuses on the practical server settings and sample manufacturer commands that are commonly used to point the BN-311B at Plaspy, and explains what to check before the device appears online in the platform. Where available, sample SMS commands from the manufacturer are included for convenience.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The BN-311B commonly supports SMS and GPRS based configuration, so this guide combines Plaspy server details with the publicly available SMS command workflow to help you prepare the device for reporting into Plaspy.

## Configuration Overview

This configuration process prepares the BN-311B to report GNSS location and telemetry to Plaspy using the platform shared endpoint and port. The steps typically cover setting the operator APN, configuring the GPRS server address and port, selecting transport mode (UDP or TCP), and verifying connectivity with a status query.

- Configure the device APN and credentials so the tracker can use GPRS data
- Set the device GPRS server to the Plaspy endpoint and the shared port used by Plaspy
- Choose the transport protocol (UDP or TCP) if required by the firmware
- Validate connectivity and reporting with a device status check so Plaspy can auto detect the protocol
- Optionally enable protocol or sensor reporting options supported by the device for richer telemetry

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged and installed BN-311B with power connected and basic wiring completed
- A GSM SIM card active for 2G GPRS data and SMS if using SMS based configuration
- Access to a phone or SMS gateway to send SMS configuration commands for initial setup
- The device default password when present for SMS commands is 123456 in the public samples
- Manufacturer documentation or installer tool for reference and any firmware specific instructions
- Confirmation that the installed SIM plan supports GPRS data and outbound SMS as needed

## How This Tracker Connects to Plaspy

The BN-311B sends GNSS and status data to Plaspy over GPRS using TCP or UDP, or via SMS where supported. On the Plaspy side the platform listens on a shared endpoint and port and automatically identifies the tracker protocol so devices begin reporting without per device port changes.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138
- All devices use the same Plaspy port 8888 so server settings remain consistent across deployments
- The tracker sends periodic position updates and event reports over the selected transport (UDP or TCP)
- Plaspy ingests the incoming messages and detects the device protocol automatically to parse telemetry
- Once reporting is validated, location, alarms, and status appear in Plaspy for mapping and alerts

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as the BN-311B SMS command interface or installer documentation.
2. Ensure the SIM is inserted, has data and SMS enabled, and that you can send SMS messages to the device.
3. Send APN and credential commands to the tracker so it can establish GPRS.
4. Enter d.plaspy.com or 54.85.159.138 as the device server address in the device configuration.
5. Set the server port to 8888 in the device configuration.
6. Choose UDP or TCP transport if the device requires a transport selection and the installer prefers one.
7. Apply or save the configuration and restart the device if required by the firmware.
8. Validate that the device reports to Plaspy using a device check command and confirm the unit appears online in the platform.

## Example Configuration Commands

The BN-311B commonly accepts SMS based configuration commands. The samples below show the manufacturer style commands in order. The public examples use the device password 123456 as the default. Keep placeholders as shown and replace them with your operator values.

- Notes on placeholders
  - {{apn}} is the operator APN string supplied by your mobile operator
  - {{apnu}} is the APN username if required
  - {{apnp}} is the APN password if required

1. Optional initial factory reset (use only when needed)
```text
begin123456
```

2. Set the time zone to UTC 0
```text
time zone123456 0
```

3. Set the operator APN
```text
apn123456 {{apn}}
```

4. Set the APN username and password
```text
up123456 {{apnu}} {{apnp}}
```

5. Set the GPRS server using Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```

6. Set location update interval example
```text
fix060s060s***n123456
```

7. Switch to GPRS mode and select transport
```text
gprs123456,1,1
```
or, if the firmware supports a shorter form:
```text
gprs123456
```

8. Check current settings and status
```text
check123456
```

9. Enable extended protocol reporting such as fuel or sensor status (example)
```text
protocol123456 18
```

Use these commands in the provided order when order matters, and replace placeholders with your operator values. If the device uses a different SMS command syntax in newer firmware, follow the manufacturer documentation.

## Configuration Notes

- The BN-311B supports SMS based setup as shown in public samples, but some installations may prefer a configuration tool or cable depending on local installer practices and firmware.
- Firmware revisions and hardware variants can change command syntax or available options; always verify commands against the device manual for your firmware revision.
- Choose UDP or TCP based on network reliability and any firewall policies at your operator; Plaspy accepts either on port 8888 and will detect the protocol automatically.
- The public SMS examples use the default password 123456; confirm if your unit uses that default and consider changing it if required by your security policy using the manufacturer method.
- When using the numeric IP instead of a domain name for the server, the example uses 54.85.159.138 which corresponds to Plaspy. d.plaspy.com is also a supported server address.

## Why Use Plaspy with This Configuration

Using the BN-311B with Plaspy provides compact hardware suited to motorcycles and small vehicles combined with a shared server configuration that simplifies fleet scale deployments. Pointing the device to Plaspy using the shared server settings lets operators centralize live location, alarms, and event reporting for operational monitoring and anti theft workflows.

To learn more about Plaspy and how to manage devices at scale visit https://www.plaspy.com. For device specific manufacturer details, firmware updates, and exact command references verify the latest information at the Coban website https://www.coban.net/ as manufacturer specifications and setup methods can change over time.
