---
slug: /aoya/a206b/configuration
id: a206b-configuration
sidebar_label: Configuration
title: AoYa - A206b Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the AoYa A206b tracker to connect with Plaspy using SMS commands and shared server settings
keywords:
  - AoYa A206b configuration
  - AoYa A206b setup
  - AoYa A206b Plaspy
  - AoYa GPS tracker configuration
  - A206b server configuration
  - A206b setup guide
  - Plaspy tracker configuration
  - vehicle GPS tracker setup
  - fleet tracker configuration
  - AoYa A206b SMS commands
---

# AoYa - A206b Configuration

This page covers the public configuration context for using the AoYa A206b tracker with Plaspy. It describes the shared Plaspy server settings you will apply to the device, the typical prerequisites before setup, and the public SMS-based commands provided by the manufacturer for configuring the tracker to report to Plaspy.

Plaspy uses the same server endpoint and port for all supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The AoYa A206b supports SMS configuration and GSM GPRS connectivity, so this guide focuses on applying the public settings and validating connectivity with Plaspy.

## Configuration Overview

The goal of the configuration process is to prepare the A206b to send location and status data to the Plaspy platform using the shared Plaspy server endpoint and port, and to verify that reporting and visibility are working in the platform.

- Configure the device server settings so it reports to Plaspy.
- Provide the operator APN and optional APN credentials so GPRS data can be used.
- Select the transport (UDP or TCP) and set the common Plaspy port for reporting.
- Validate configuration with the device verification command and confirm the device appears in Plaspy.
- Optionally perform a factory reset if starting from unknown settings and then reapply configuration.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept multiple tracker formats on the same port

## Typical Requirements Before Setup

- A working SIM card installed in the A206b with an active data plan and SMS capability
- The device powered and accessible for SMS configuration or via the official manufacturer tool
- Knowledge of the mobile operator APN plus optional APN username and password for the SIM (placeholders shown below)
- A phone capable of sending SMS messages to the tracker and the device default password (public example uses 123456)
- Sufficient battery charge or external power to avoid interruptions during configuration

## How This Tracker Connects to Plaspy

The AoYa A206b is configured to send its GPRS uplink to the shared Plaspy server endpoint and port so location and device events are visible in the Plaspy platform. Plaspy receives the tracker data on the platform port and automatically identifies the tracker protocol for correct processing.

- The device sends location packets to the Plaspy server endpoint and port.
- GPRS is used for data transport after APN and credentials are configured.
- The tracker can use either UDP or TCP transport toward Plaspy on port 8888.
- Plaspy accepts the connection on d.plaspy.com (or the server IP) and auto-detects the tracker protocol.
- Once reporting is active the tracker becomes visible in the Plaspy system for monitoring and alerts.

## Common Configuration Workflow

1. Access the official manufacturer configuration method (AoYa SMS commands as shown below or any manufacturer app/tool you have).
2. If needed, perform an optional factory reset to clear previous settings.
3. Set the correct time zone and operator APN information so GPRS can connect.
4. Enter the Plaspy server host as either d.plaspy.com or the server IP 54.85.159.138 and set the port to 8888.
5. Choose the transport protocol (UDP or TCP) if the device requires an explicit selection.
6. Save or apply the configuration and restart the device if the device requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by using the device verification command and checking device visibility in the Plaspy platform.

## Example Configuration Commands

The A206b supports SMS-based configuration. The manufacturer provides the following public SMS commands. The example password shown below is the device default in the public configuration sample and is 123456. Replace placeholders with your actual values.

- Optional initial factory reset (use only when you want to clear existing settings):
```text
begin123456
```

- Set the time zone to UTC+0 (example):
```text
time zone123456 0
```

- Set the operator APN (replace [apn] with your operator APN):
```text
apn123456 [apn]
```

- (Optional) Set APN username and password if your operator requires them:
```text
up123456 [apnu] [apnp]
```
Note: [apnu] is the APN username placeholder and [apnp] is the APN password placeholder.

- Set the GPRS server to the Plaspy server IP and port:
```text
adminip123456 54.85.159.138 8888
```
Note: This command example uses the Plaspy server IP and port as provided. If your device firmware supports hostnames you may be able to use d.plaspy.com instead of the IP; check the manufacturer documentation before using a hostname.

- Switch the device to GPRS mode and select UDP or TCP as required. Example SMS to use GPRS mode with parameters:
```text
gprs123456,1,1
```
or a simpler form:
```text
gprs123456
```
(Use the form supported by your firmware. The first example is an explicit parameterized form; the second is a common simplified form.)

- Verify current settings with the check command:
```text
check123456
```

Send each command as a separate SMS to the device. Replace 123456 with your device password if it has been changed from the default.

## Configuration Notes

- The A206b supports SMS-based configuration as shown; ensure the SIM can receive SMS and has mobile data for GPRS reporting.
- The example commands use the public default password 123456 in manufacturer examples; change the password if required by your security policy.
- Different firmware versions and hardware revisions may accept slightly different command formats; consult official AoYa documentation if a command returns an error.
- Choose UDP or TCP according to any local network or firewall constraints; Plaspy supports either transport on port 8888 and auto-detects the protocol.
- After applying settings, allow a few minutes for the device to register to the network and start reporting; use the check123456 command to request current settings.

## Why Use Plaspy with This Configuration

Configuring the AoYa A206b to report to Plaspy gives fleet managers and vehicle owners a straightforward way to centralize location, status, and event data in a single platform. Using the shared Plaspy server endpoint and port simplifies device onboarding because the platform automatically detects tracker protocols and handles multiple device formats on the same port.

To learn more about Plaspy and the supported device ecosystem visit https://www.plaspy.com. For the latest device specific configuration details, firmware behavior, and manufacturer instructions verify current information on the official AoYa website http://www.aoyagps.com/
