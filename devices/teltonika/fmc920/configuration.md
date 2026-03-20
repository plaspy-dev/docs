---
slug: /teltonika/fmc920/configuration
id: fmc920-configuration
sidebar_label: Configuration
title: Teltonika - FMC920 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Teltonika FMC920 for use with Plaspy using shared server settings and example commands for fast integration
keywords:
  - Teltonika FMC920 configuration
  - FMC920 setup Plaspy
  - Teltonika FMC920 server configuration
  - FMC920 GPS tracker configuration
  - Teltonika tracker setup
  - vehicle tracking FMC920
  - FMC920 Plaspy integration
  - fleet tracking Teltonika FMC920
  - Teltonika FMC920 APN setup
  - Teltonika FMC920 commands
---

# Teltonika - FMC920 Configuration

This page documents the public configuration context for using the Teltonika FMC920 with Plaspy. It focuses on the shared Plaspy server settings you must apply to the tracker and explains the practical steps and checks needed to make the FMC920 report into Plaspy for real time fleet visibility.

Plaspy uses the same shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side steps can vary by firmware revision, hardware variant, installation type, and the vendor tools you use to configure the unit, so this page provides the practical public settings and example commands while recommending that you confirm device specific details with Teltonika documentation.

## Configuration Overview

The goal of this configuration is to prepare the FMC920 to send its location and telemetry to Plaspy reliably. That includes applying the server endpoint and port used by Plaspy, ensuring the device has working cellular connectivity and correct APN credentials, and validating the tracker appears in Plaspy after configuration.

- Point the FMC920 to the Plaspy server endpoint so reported data reaches your Plaspy account.
- Configure APN and connectivity parameters so the device can use the cellular network.
- Select the transport mode the device requires and confirm it communicates on the shared Plaspy port.
- Save and apply configuration, then validate the device is visible in Plaspy dashboards and maps.
- Use the example command below as a practical starting point for basic server and APN parameters.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and automatically detects the tracker protocol when the device connects to the shared endpoint.

## Typical Requirements Before Setup

- Physical access or remote access to the FMC920 configuration method provided by Teltonika.
- Active SIM card and valid data plan with correct APN credentials for the device to use cellular data.
- Device powered and installed with any required wiring or antennas in place.
- Knowledge of the manufacturer configuration method you will use such as SMS commands, Teltonika tools, or vendor provisioning workflows.
- Current firmware and compatible hardware variant verified with Teltonika if there are regional or EOL differences.
- Access to Plaspy account and the ability to confirm device reporting in the platform.

## How This Tracker Connects to Plaspy

When configured, the FMC920 sends GNSS position and telemetry over the cellular network to the shared Plaspy server endpoint and port. Plaspy ingests the incoming messages and maps them to the device for real time monitoring, event processing, and reporting.

- The tracker is set to report to d.plaspy.com or the Plaspy IP 54.85.159.138 on port 8888.
- Transport may be configured as UDP or TCP depending on device requirement and installer preference.
- Plaspy automatically detects the device protocol when a connection is made to the shared server.
- Once connected the device provides location updates and telemetry that Plaspy surfaces in dashboards and alerts.
- Validate connectivity in Plaspy to confirm the device is sending position reports after configuration.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for the FMC920 as recommended by the manufacturer.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device server settings.
3. Set the device port to 8888 as the primary reporting port used by Plaspy.
4. Choose UDP or TCP if the device requires a transport selection during setup.
5. Configure APN credentials and any required authentication for cellular connectivity.
6. Apply or save the configuration and restart the device if the method requires a reboot.
7. Validate that the tracker reports to Plaspy and appears in your Plaspy account with recent position updates.

If you use an example command or SMS batch command, run it after confirming the APN placeholders are correctly replaced for your mobile operator.

## Example Configuration Commands

To configure the basic parameters on your Teltonika device, send the following command string. This public example demonstrates how APN and Plaspy server parameters can be set in a single command. Preserve the placeholders and replace them with your operator values where needed.

- Example command to set APN and Plaspy server parameters

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Explanation of placeholders and fields in the command
- {{apn}}  Replace with your SIM card APN name provided by the mobile operator.
- {{apnu}} Replace with the APN username if your operator requires one, otherwise leave blank.
- {{apnp}} Replace with the APN password if required by the operator.
- d.plaspy.com This sets the Plaspy server domain destination for reporting.
- 8888 This sets the reporting port used by Plaspy for all devices.
- The final parameter configures the transport or profile as required by the device firmware. Verify the transport value interpretation for your firmware version before applying.

Use the manufacturer recommended method for sending commands, such as the Teltonika SMS interface or configuration tools, and confirm commands are accepted by the device. If your provisioning environment uses the Plaspy IP address instead of the domain, you can supply 54.85.159.138 in place of d.plaspy.com where the device or tool requires an IP.

## Configuration Notes

- Firmware and hardware variants can change parameter IDs or transport value mappings; always check the device firmware documentation for exact parameter meanings.
- The command example preserves APN placeholders to be filled with operator credentials; incorrect APN settings prevent cellular data and reporting.
- Some installers prefer the domain d.plaspy.com for DNS based routing while others provision the Plaspy IP 54.85.159.138 directly for deterministic routing.
- Choose UDP or TCP based on your installation and device requirements; Plaspy accepts both on port 8888 and will detect the protocol automatically.
- Confirm any regional or EOL related differences with Teltonika when procuring devices or planning large deployments.

## Why Use Plaspy with This Configuration

Using the Teltonika FMC920 with Plaspy provides a compact tracking solution that can be quickly pointed to the shared Plaspy server endpoint so location and telemetry are visible in a single fleet management platform. This configuration supports typical fleet workflows including real time position updates, alerts, and remote control features when enabled.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the most current device specific configuration instructions, firmware notes, and technical support confirm details on the official Teltonika website https://www.teltonika-gps.com/ as manufacturer specifications and setup methods may change over time.
