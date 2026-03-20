---
slug: /teltonika/fmb020/configuration
id: fmb020-configuration
sidebar_label: Configuration
title: Teltonika - FMB020 Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for Teltonika FMB020 to connect to Plaspy with shared server settings and commands
keywords:
  - Teltonika FMB020 configuration
  - Teltonika FMB020 setup
  - FMB020 Plaspy configuration
  - Plaspy GPS tracker setup
  - OBD II tracker setup
  - Teltonika tracker server configuration
  - GPS tracker platform setup
  - vehicle tracking configuration
  - BLE sensor integration
  - fleet management tracker
---

# Teltonika - FMB020 Configuration

This page documents the public configuration context for using the Teltonika FMB020 GPS tracker with Plaspy. It focuses on the shared Plaspy server settings and practical steps you can apply to prepare FMB020 units for reporting location and telemetry into Plaspy. Use this guide alongside Teltonika product documentation and your installer tools to complete device provisioning.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps and the available provisioning tools can vary by firmware, hardware revision, installation type and vendor toolset. The instructions below describe the common, public information required to point an FMB020 to Plaspy and validate connectivity.

## Configuration Overview

This configuration process prepares the FMB020 to send data to Plaspy and makes the device visible in the platform. The example command provided in the Example Configuration Commands section shows how basic parameters can be applied in a single line, using placeholders for network credentials.

- Configure APN and network credentials so the device has mobile data connectivity.
- Set the Plaspy server domain or IP and the shared port so the FMB020 reports to the correct endpoint.
- Choose transport type UDP or TCP where the device requires an explicit choice for transport.
- Save and apply configuration, then restart or reinitialize the device if required.
- Validate that the tracker appears in Plaspy and that location and telemetry updates are received.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring your FMB020. Plaspy requires the same port for all supported devices and will automatically detect the tracker protocol when the device connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Confirm the FMB020 has the correct firmware revision for your rollout and that you have access to Teltonika configuration tools
- Ensure the device is powered and installed correctly in the vehicle OBD II port or the chosen installation point
- Have a valid SIM card with a data plan and correct APN credentials for your mobile operator
- Access to Teltonika Configurator, FOTA WEB, or the installer method your organization uses for provisioning
- Administrative access to the Plaspy account or team that will receive and manage the device once it reports

## How This Tracker Connects to Plaspy

When properly configured, the FMB020 sends position and telemetry data to the shared Plaspy endpoint using the server and port settings above. Plaspy receives those reports, matches the device protocol automatically, and makes the device visible in dashboards and reports.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138
- Data is sent on port 8888 which Plaspy uses for all supported devices
- You can select UDP or TCP transport where the device requires a transport selection
- Plaspy automatically detects the tracker protocol and interprets incoming messages for live tracking and event reporting
- Once reporting, the device supplies location and telemetry to Plaspy for mapping, history, and alerts

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software such as Teltonika Configurator or your chosen provisioning tool.
2. Enter the Plaspy server as d.plaspy.com or use the IP 54.85.159.138 in the server field.
3. Set the port to 8888 which is the shared Plaspy port used by all supported devices.
4. Choose UDP or TCP if the FMB020 firmware requires an explicit transport selection for the server connection.
5. Apply or save the configuration so the new parameters are written to the device.
6. Restart the device if the firmware or workflow requires a reboot to apply network and server settings.
7. Validate that the device reports successfully to Plaspy by checking device status and incoming telemetry in your Plaspy account.

## Example Configuration Commands

To configure the basic parameters on your Teltonika device, enter the following command as provided in public device guidance. This example uses placeholders for APN values and sets the Plaspy server domain and port. Keep the placeholders as shown and replace them with real values for your SIM and network.

- Single command example for basic parameters

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command fields
- {{apn}} placeholder is for the mobile network APN name required by the SIM
- {{apnu}} placeholder is for APN username when the operator requires one
- {{apnp}} placeholder is for APN password when required by the operator
- 2004 sets the server domain to d.plaspy.com
- 2005 sets the server port to 8888
- 2006 in this command is the transport related parameter used by the device configuration string where applicable consult Teltonika documentation for exact transport values and meaning

If your provisioning process uses a different interface such as Teltonika Configurator or FOTA WEB, translate these same values into the corresponding fields in those tools.

## Configuration Notes

- Firmware variations can change parameter indices or available configuration methods so confirm parameter mappings with the Teltonika product documentation for your firmware version.
- The FMB020 supports remote management via Teltonika Configurator and FOTA WEB for staged rollouts and firmware updates which can simplify mass provisioning.
- Choose UDP or TCP based on your network design and any firewall rules; Plaspy accepts data over either transport on port 8888.
- SMS based or direct configurator based commands may both be supported depending on your deployment and device firmware consult Teltonika guides for the supported methods.
- Always verify APN credentials with the SIM provider before deploying devices to avoid connectivity delays.

## Why Use Plaspy with This Configuration

Using the Teltonika FMB020 with Plaspy gives fleet operators a fast, low effort path to get OBD II based location and telemetry into their tracking platform. The compact plug and play design of the FMB020 combined with BLE sensor support helps teams deploy at scale while still collecting richer telemetry for alerts, reporting and eco driving analysis.

Learn more about Plaspy and how it handles device connections at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior and parameter mappings verify details on the manufacturer site https://www.teltonika-gps.com/
