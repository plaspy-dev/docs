---
slug: /xirgo/xt47/configuration
id: xt47-configuration
sidebar_label: Configuration
title: Xirgo - XT47 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Xirgo XT47 to connect with Plaspy including server settings and example SMS commands
keywords:
- Xirgo XT47 configuration
- XT47 setup
- Xirgo tracker Plaspy
- XT47 server configuration
- Xirgo GPS tracker setup
- XT47 GPS platform setup
- Xirgo XT47 SMS setup
- Plaspy tracker integration
- Fleet tracking XT47
- XT47 asset tracking
---

# Xirgo - XT47 Configuration

This page covers the public configuration context for using the Xirgo XT47 tracker with Plaspy. It compiles the Plaspy server settings you need to apply, practical setup steps, and example SMS commands that are publicly documented for configuring the device to send telemetry and location data to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The XT47 is a rugged asset tracker built for remote equipment and the guidance here focuses on the practical process of pointing the device at Plaspy and validating connectivity.

## Configuration Overview

This configuration process prepares the XT47 to report location and telemetry into Plaspy so assets become visible in the platform, event reporting is enabled, and operational workflows can be applied.

- Point the XT47 to the Plaspy server endpoint and ensure the correct transport and port are selected.
- Configure the device APN and GPRS parameters if required so the tracker can use cellular data.
- Verify device connectivity and that reports arrive in Plaspy for live tracking and historical playback.
- Save and apply settings, then perform a restart or power cycle if the manufacturer workflow requires it.
- Use the publicly available SMS commands where supported by the XT47 to set APN and server values as part of initial provisioning.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so you do not normally need to specify a protocol type beyond selecting UDP or TCP when the device requires a transport selection

## Typical Requirements Before Setup

- A powered and installed XT47 unit that is reachable for configuration.
- A cellular SIM with a working data plan and the correct APN information for the mobile operator.
- Access to the manufacturer's supported configuration method such as SMS configuration or official configuration software.
- Basic knowledge of the APN values your SIM requires and any user or password fields for APN authentication.
- Ability to receive or send SMS messages from the phone number allowed by the device for initial configuration if using SMS commands.

## How This Tracker Connects to Plaspy

When configured, the XT47 is set to send its location and telemetry to the shared Plaspy server endpoint and port so the device appears inside the Plaspy platform for monitoring and rules processing.

- The tracker is pointed at d.plaspy.com or the Plaspy server IP 54.85.159.138 and uses port 8888 for outbound reporting.
- Transport can be set to UDP or TCP depending on the device option; Plaspy accepts both and will handle the incoming stream.
- Plaspy automatically detects the tracker protocol so the platform can interpret incoming messages without per device protocol configuration.
- Events and I/O telemetry reported by the XT47 are ingested into Plaspy for alerts, geofence processing, and historical reporting.
- Once reporting begins, operators can validate device visibility, event reporting, and live location inside Plaspy dashboards.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or the vendor configuration tool documented for the XT47.
2. Enter the Plaspy server endpoint by using d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device server port to 8888 as the outbound reporting port.
4. Choose UDP or TCP if the device requires a transport selection; both transports are supported by Plaspy.
5. Configure the device APN and any APN authentication values needed for the SIM to access mobile data.
6. Apply or save the configuration using the device method and restart the device if required by the manufacturer workflow.
7. Validate that the XT47 reports to Plaspy by checking device connectivity and seeing the device appear in Plaspy with recent location updates.

## Example Configuration Commands

The XT47 supports SMS based configuration. The public, documented SMS commands for initial setup are shown below. Send these commands as SMS messages to the device following manufacturer instructions.

1. Set the operator APN (replace placeholders with your operator values)
```text
+XT:1002,[apnu],[apnp],[apn]
```
- [apnu] is the APN username if required by your SIM
- [apnp] is the APN password if required by your SIM
- [apn] is the APN name for your mobile operator

2. Set the GPRS server to Plaspy (port and server IP are explicit in the command)
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- This command sets the device to report to the Plaspy server IP 54.85.159.138 using port 8888
- The trailing numeric flags are part of the device command format and may have firmware dependent meanings; do not change them unless you understand their purpose for your firmware

Note: Send the commands in the order shown when following a manufacturer SMS provisioning flow. Confirm with your device vendor documentation whether additional confirmation or reboot is required after SMS configuration.

## Configuration Notes

- SMS based provisioning is supported and commonly used for field devices like the XT47; follow vendor limits on SMS sender numbers if applicable.
- Firmware versions and hardware revisions can alter command formats and available options; confirm the exact syntax with Xirgo for your firmware version.
- Plaspy uses the same port 8888 for all supported devices and will automatically detect the tracker protocol, so consistent use of the Plaspy port simplifies device onboarding.
- Choose UDP or TCP based on installer preference and network conditions; Plaspy accepts both but network behavior can differ by transport.
- Preserve placeholders such as [apn], [apnu], and [apnp] when composing SMS commands and replace them with your operator specific values.

## Why Use Plaspy with This Configuration

Using the XT47 with Plaspy provides centralized visibility for rugged remote assets, enabling real time tracking, event alerts, and telemetry driven decisions. The combination of the XT47's field focused design and Plaspy's platform capabilities helps reduce downtime, support anti theft workflows, and provide operations teams with a unified source of truth for asset location and status.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup details and command syntax with the manufacturer at https://xirgo.com/. Manufacturer specifications, firmware behavior, and setup methods can change over time so checking the official Xirgo documentation ensures the most current instructions.
