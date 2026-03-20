---
slug: /teltonika/fmc003/configuration
id: fmc003-configuration
sidebar_label: Configuration
title: Teltonika - FMC003 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMC003 with Plaspy compatibility and server settings for quick setup
keywords:
  - Teltonika FMC003 configuration
  - Teltonika FMC003 setup for Plaspy
  - FMC003 server configuration
  - FMC003 GPS tracker setup
  - Plaspy tracker configuration
  - Teltonika OBD II tracker configuration
  - FMC003 telemetry integration
  - Plaspy fleet management setup
  - FMC003 APN setup
  - Teltonika device configuration
---

# Teltonika - FMC003 Configuration

This page explains the public configuration context for using the Teltonika FMC003 with Plaspy. It collects the practical server settings and an example command that are commonly used to point FMC003 devices to the Plaspy ingestion endpoint, so installers and fleet managers can prepare devices for platform integration.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocol on connection. Exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools; the FMC003 can be configured with SMS commands or Teltonika configuration tools, and the example command below uses the public parameter style shown in Teltonika resources.

## Configuration Overview

This overview describes the purpose of the minimal configuration required to get an FMC003 reporting into Plaspy. The goal is to set the device APN and server endpoint, choose the transport, and verify that data reaches the Plaspy platform.

- Set the device cellular APN credentials so the FMC003 has an active data connection.
- Configure the server endpoint to point at Plaspy so location and OBD telemetry flow to the platform.
- Select the transport option (UDP or TCP) if the device requires a transport choice.
- Save and apply the configuration using the manufacturer tool or SMS method.
- Validate connectivity so the device appears and reports correctly in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- Device is powered and reachable in the vehicle OBD-II port and showing operational status.
- Valid SIM card with a data plan and correct APN credentials for the cellular network.
- Access to a Teltonika configuration method such as SMS commands, Teltonika Configurator, or FOTA WEB.
- The FMC003 firmware is compatible with the chosen configuration method; check manufacturer release notes.
- A target Plaspy account or project to validate that the device appears and sends telemetry once configured.
- A way to receive device logs or SMS replies for troubleshooting (device phone number or remote management console).

## How This Tracker Connects to Plaspy

The FMC003 is configured to send location and OBD telemetry to Plaspy using the shared platform endpoint and port. Once the device can reach the Plaspy server over the cellular network, Plaspy ingests the feed and associates the device data with your account.

- Device uses the configured APN to obtain mobile data connectivity.
- Tracker sends telemetry to d.plaspy.com on port 8888 using UDP or TCP as configured.
- Plaspy automatically detects the tracker protocol and processes incoming messages.
- Location, odometer, fuel and EV metrics are forwarded to Plaspy for display and reporting.
- Successful configuration is confirmed when the device first appears and reports in the Plaspy platform.

## Common Configuration Workflow

1. Access the official Teltonika configuration method (SMS command, Teltonika Configurator, or FOTA WEB).
2. Enter the Plaspy server domain d.plaspy.com or, where required, the server IP 54.85.159.138 in the server/host field.
3. Set the server port to 8888.
4. Choose UDP or TCP if the device requires transport selection.
5. Configure APN, APN username, and APN password appropriate for the SIM plan.
6. Apply or save the configuration and restart the device if required by the method used.
7. Validate that the device reports to Plaspy and that telemetry is visible in the platform.

## Example Configuration Commands

The FMC003 can accept batch parameter commands. A commonly used public configuration example sets APN credentials and the Plaspy server details. Keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with your network APN, APN username, and APN password.

- This example is provided in the public Teltonika command format and is typically sent via SMS or applied with Teltonika tools.

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command:
- {{apn}} = the APN for your mobile operator.
- {{apnu}} = APN username if required by the operator; leave empty if not used.
- {{apnp}} = APN password if required by the operator; leave empty if not used.
- The string includes the Plaspy server domain d.plaspy.com and port 8888 as required by Plaspy.
- 2006 is a device parameter that relates to transport or connection behavior on Teltonika devices; consult Teltonika documentation for specific numeric values and their meaning for your firmware.
- Send this command using the device phone number as an SMS or apply equivalent settings in Teltonika Configurator or FOTA WEB as preferred.

## Configuration Notes

- Parameter numbers and the exact command format can vary by firmware version; always confirm with the Teltonika user guide for your FMC003 firmware revision.
- Transport selection (UDP vs TCP) is device-specific; if unsure, test both transports or consult Teltonika documentation for recommended values and the meaning of numeric flags like 2006.
- APN, APN username, and APN password are operator specific; incorrect APN settings are the most common cause of connectivity failure.
- Plaspy uses the same port 8888 for all devices and will auto-detect protocol, so once the endpoint is correct the platform should accept messages from supported trackers.
- Use Teltonika remote management tools for bulk updates and FOTA to keep large fleets consistent without manual SMS for every device.

## Why Use Plaspy with This Configuration

Using the Teltonika FMC003 with Plaspy gives fleets a fast, repeatable deployment path for collecting high-fidelity OBD and location telemetry. The FMC003's plug-and-play OBD-II design combined with Plaspy's shared ingestion endpoint simplifies onboarding: configure the APN and point the device at d.plaspy.com on port 8888, and the platform will detect the tracker protocol and begin processing data.

To learn more about Plaspy and get started with fleet integration, visit https://www.plaspy.com. For the latest device-specific commands, firmware behavior, and configuration details for the FMC003, verify current information on the manufacturer's official site https://www.teltonika-gps.com/
