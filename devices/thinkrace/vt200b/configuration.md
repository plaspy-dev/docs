---
slug: /thinkrace/vt200b/configuration
id: vt200b-configuration
sidebar_label: Configuration
title: ThinkRace - VT200B Configuration
sidebar_class_name: menu_item_tracker
description: Configure the ThinkRace VT200B for use with Plaspy using public server settings and example SMS commands
keywords:
  - ThinkRace VT200B configuration
  - ThinkRace VT200B setup
  - VT200B server configuration
  - VT200B Plaspy setup
  - ThinkRace GPS tracker configuration
  - OBD2 tracker configuration
  - vehicle tracker setup guide
  - fleet tracking ThinkRace VT200B
  - GPS platform configuration Plaspy
  - ThinkRace VT200B SMS configuration
---

# ThinkRace - VT200B Configuration

This page documents the public configuration context for connecting a ThinkRace VT200B OBD2 tracker to Plaspy. It collects the practical server settings and example commands that are publicly available for the VT200B and explains how those settings are applied so the device can report to Plaspy for tracking and diagnostics. Use this guide alongside your tracker installation and the manufacturer documentation.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps for the VT200B can vary by firmware version, hardware revision, installation method, and vendor tools. The instructions and example SMS commands below reflect public configuration information and are intended as a practical starting point.

## Configuration Overview

This configuration process prepares the VT200B to communicate with Plaspy so the device sends location and diagnostic data to the central Plaspy endpoint. The focus is on setting the APN and the GPRS server address and port used by Plaspy, validating connectivity, and ensuring the device is visible in the Plaspy platform.

- Configure the VT200B network parameters so it can open a data session with Plaspy.
- Set the APN and optional credentials if your SIM carrier requires them.
- Point the VT200B to the Plaspy server endpoint and the shared port used by all devices.
- Validate that the device successfully connects and begins reporting to Plaspy.
- Use the SMS configuration commands shown below if your installation relies on SMS-based setup.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP are both supported on port 8888
- Plaspy automatically detects the tracker protocol when a device connects
- Note: All devices in Plaspy use the same port so the VT200B should use port 8888 for compatibility

## Typical Requirements Before Setup

- Tracker installed and powered via the vehicle OBD2 port or as instructed by the installer.
- A working SIM with data access and SMS capability inserted in the device if SMS configuration is required.
- Correct APN information from your mobile operator (APN, and optionally APN username and password).
- Access to the manufacturer configuration method such as SMS commands or official ThinkRace configuration tools.
- Knowledge of the device password if it is required for SMS configuration (the public example below uses the default password 888888).
- A way to verify device reporting in Plaspy after configuration, such as access to the Plaspy platform.

## How This Tracker Connects to Plaspy

The VT200B is configured to send its telemetry and OBD2 diagnostic messages to the Plaspy server endpoint so the platform can display location, status, and alerts. Plaspy uses a single server endpoint and port and will detect the device protocol automatically when the tracker connects.

- The device opens a GPRS data session and establishes transport to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Data is transmitted over either UDP or TCP depending on device settings and network conditions.
- Plaspy detects the tracker protocol and interprets incoming packets for mapping and diagnostics.
- Successful configuration results in visible device activity and telemetry within the Plaspy platform.
- Alerts and operational status reported by the tracker become available for monitoring and reporting in Plaspy.

## Common Configuration Workflow

1. Access the official ThinkRace configuration method for the VT200B using SMS commands or the manufacturer tool as documented by ThinkRace.
2. Enter the Plaspy server hostname d.plaspy.com or the server IP 54.85.159.138 in the device server configuration.
3. Set the device server port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP transport if the device firmware requires a specific transport selection.
5. Configure the APN and optional APN username and password for the installed SIM so the device can establish GPRS data.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply changes.
7. Validate that the VT200B reports to Plaspy by checking device activity and telemetry within the platform.

## Example Configuration Commands

The VT200B supports SMS-based configuration. The following public SMS commands are provided as examples. The sample device password in these commands is 888888 which is the publicly documented default for the example flow.

1. Set the operator APN. Replace {{apn}} with your carrier APN. If your APN requires a username and password, include {{apnu}} and {{apnp}} as shown; otherwise omit those placeholders.

```
(Set,888888,apn,{{apn}})
```

Optional form with APN username and password:

```
(Set,888888,apn,{{apn}},{{apnu}},{{apnp}})
```

2. Set the GPRS server to point the tracker to Plaspy. This command sets the Plaspy server IP and port 8888.

```
(Set,888888,server,54.85.159.138,8888)
```

Notes on these commands:
- Send each command as a separate SMS from an authorized phone number if the device firmware requires authorization.
- Keep the command order when performing initial setup: set APN first, then server settings.
- The placeholder {{apn}} should be replaced with your carrier APN string. The placeholders {{apnu}} and {{apnp}} represent APN username and APN password and are optional if your operator requires them.
- If your firmware supports setting the server by hostname instead of IP, you can use d.plaspy.com where supported; otherwise use the server IP shown above.

## Configuration Notes

- Firmware and tool differences: exact command formats and required steps can differ by firmware version and the ThinkRace configuration tool. Always confirm syntax against your device manual.
- SMS-based setup: the VT200B public configuration shows SMS commands as a supported method. Use SMS if you cannot access a configuration tool or if the installation requires remote SMS setup.
- Transport selection: Plaspy accepts UDP or TCP on port 8888. If the VT200B firmware has an option to choose transport, select the one appropriate for your network and carrier.
- Default password: the public example uses the default device password 888888 in SMS commands. If you have changed the password, use the current device password.
- Validation: after configuration, verify the device reports to Plaspy by observing device activity in the platform and checking for expected telemetry.

## Why Use Plaspy with This Configuration

Using the VT200B with Plaspy gives organizations unified visibility into vehicle location and OBD2 diagnostics through a single server endpoint and standardized port. For fleet managers and vehicle owners, configuring the tracker to report to Plaspy enables central monitoring, alerting, and operational oversight without per-device server variation.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify device specific configuration methods, firmware behavior, and any updated commands on the ThinkRace official site https://www.thinkrace.com/ as manufacturer documentation and firmware can change over time.
