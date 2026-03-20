---
slug: /teltonika/tat100/configuration
id: tat100-configuration
sidebar_label: Configuration
title: Teltonika - TAT100 Configuration
sidebar_class_name: menu_item_tracker
description: Compact battery powered Teltonika TAT100 configuration guide for Plaspy compatibility and server settings
keywords:
  - Teltonika TAT100 configuration
  - Teltonika TAT100 setup
  - TAT100 Plaspy configuration
  - TAT100 server configuration
  - Plaspy tracker setup
  - GPS tracker configuration guide
  - asset tracker setup Teltonika
  - Teltonika configuration commands
  - Plaspy server settings
  - battery powered asset tracker
---

# Teltonika - TAT100 Configuration

This page covers the public configuration context for using the Teltonika TAT100 with Plaspy. It describes the practical, public-facing settings you need to point the TAT100 at Plaspy so the device can report location and telemetry. The TAT100 is a compact, battery powered asset tracker with IP68 protection and quad band 2G GSM connectivity, and it is compatible with Plaspy for mapping, alerts, and historical reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device reports. Exact manufacturer side setup steps can vary by firmware revision, hardware SKU, installer tools, and regional firmware builds. Where available this page shows a common Teltonika setparam command used in public documentation and explains the placeholders and practical workflow for integration with Plaspy.

## Configuration Overview

This configuration process prepares the TAT100 to send periodic location and telemetry to Plaspy so assets appear in the Plaspy platform. The focus is on configuring connectivity parameters, validating that the tracker can reach Plaspy, and confirming the device reports successfully.

- Configure the device APN and network credentials so it has cellular data connectivity.
- Point the tracker to the Plaspy server endpoint so reports are delivered to your account.
- Select the transport type if required and confirm the device is using port 8888 for Plaspy.
- Apply settings and restart the device when required to begin reporting.
- Validate that the device appears and reports in Plaspy for mapping and alerting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port so you should use port 8888 for every supported tracker

## Typical Requirements Before Setup

- A charged TAT100 battery or powered device ready for configuration and testing
- An active SIM card with a data plan and the correct APN credentials for the cellular carrier
- Access to the official Teltonika configuration method you plan to use such as SMS commands or manufacturer tools where available
- Knowledge of APN values including APN name, APN username, and APN password for your mobile provider
- Reliable cellular coverage at the device location so the tracker can reach Plaspy
- Confirmation of the target Plaspy settings d.plaspy.com and port 8888 before applying changes

## How This Tracker Connects to Plaspy

The TAT100 sends periodic GNSS location and device telemetry over the cellular network to the Plaspy endpoint and port. Plaspy ingests these reports and provides mapping, event processing, and historical route playback for visibility and monitoring.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com on port 8888
- Transport can be set to UDP or TCP on the device if prompted during configuration
- Plaspy automatically detects the tracker protocol so reports are parsed and displayed without manual protocol selection on the server side
- Location and basic telemetry are visible in Plaspy once the device successfully reaches the endpoint
- Regular reporting lets Plaspy generate alerts, geofence events, and historical routes for asset management

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software you will use for the TAT100 such as SMS commands or any supported Teltonika tool.
2. Enter the Plaspy server information using the server domain d.plaspy.com or the server IP 54.85.159.138 as required by your configuration method.
3. Set the port to 8888 which is the shared port used by all devices in Plaspy.
4. Choose UDP or TCP if the device requires a transport selection during configuration.
5. Apply or save the configuration on the tracker using the manufacturer method.
6. Restart the device if required by the device or firmware to activate the new settings.
7. Validate that the device reports to Plaspy and appears in your account so mapping and alerts are active.

## Example Configuration Commands

To configure the basic parameters on your Teltonika device using the public setparam command example, send the following command. Preserve the placeholders and replace them with your carrier APN settings.

- Replace [apn] with your carrier APN name
- Replace [apnu] with your APN username if required otherwise leave blank or as configured by your carrier
- Replace [apnp] with your APN password if required otherwise leave blank or as configured by your carrier

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

This example sets the APN credentials and points the device at d.plaspy.com on port 8888. The numeric parameter keys reflect the device parameter mapping used in Teltonika commands. Verify exact parameter meanings and any transport mode mapping in Teltonika documentation for your firmware version before applying.

## Configuration Notes

- Firmware variations and hardware SKUs may change parameter mappings and supported commands. Confirm parameter IDs and meanings with Teltonika documentation for your device firmware.
- Choose UDP or TCP based on installer preference or network environment. If unsure, test both transports and verify successful reporting in Plaspy.
- SMS based configuration is a common method for battery powered asset trackers like the TAT100 when a direct USB or tool connection is not available.
- Keep APN placeholders [apn], [apnu], and [apnp] ready and accurate for your mobile operator to avoid connectivity failures.
- After applying settings, allow time for the device to attach to the network and for Plaspy to automatically detect the tracker protocol and start ingesting reports.

## Why Use Plaspy with This Configuration

Using the Teltonika TAT100 with Plaspy gives organizations a simple path to asset visibility for non powered or wire free equipment. The TAT100's long battery life and rugged housing combined with Plaspy's mapping, alerts, and reporting tools help teams monitor remote assets, maintain security, and optimize utilization without frequent maintenance.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific configuration details, firmware behavior, and exact parameter mappings always verify current information on the manufacturer site https://www.teltonika-gps.com/ so your setup matches the device firmware and regional variants.
