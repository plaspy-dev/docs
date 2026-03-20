---
slug: /appello/tk103b/configuration
id: tk103b-configuration
sidebar_label: Configuration
title: Appello - TK103B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Appello TK103B showing Plaspy server settings and example SMS commands for basic setup
keywords:
  - Appello TK103B configuration
  - Appello TK103B setup
  - Appello TK103B Plaspy
  - Appello GPS tracker configuration
  - TK103B server configuration
  - TK103B APN setup
  - GPS tracker setup Plaspy
  - fleet management TK103B
  - vehicle tracking TK103B
  - GPRS tracker configuration
---

# Appello - TK103B Configuration

This page covers the public configuration context required to use the Appello TK103B tracker with Plaspy. It describes the shared server settings Plaspy expects, the common SMS commands and sequence included in public device documentation, and practical steps to prepare a TK103B for reporting to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this guide as a practical starting point and consult the device manufacturer for any model specific details.

## Configuration Overview

The goal of the configuration process is to prepare the TK103B to communicate reliably with the Plaspy tracking platform and to validate that the device appears in Plaspy. The example commands below use SMS based configuration as shown in public device documentation and illustrate the key steps needed to enable GPRS reporting to Plaspy.

- Configure APN and operator parameters so the tracker's GPRS connection can attach to the mobile network.
- Point the tracker at the Plaspy server endpoint and port so data is routed into the platform.
- Switch the tracker into GPRS reporting mode to enable continuous reporting to Plaspy.
- Verify settings and connectivity with a device query so the tracker is visible in Plaspy.
- Optionally perform a factory reset before initial provisioning when recommended by the installer.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged and powered TK103B unit ready for configuration.
- A valid SIM card with GPRS/data enabled and correct APN information for the mobile operator.
- Access to the manufacturer's public configuration method such as SMS commands or an official configuration tool.
- Knowledge of the device password if required for commands; public documentation shows a common default password 123456.
- Basic GSM/GPRS coverage at the device location to allow the tracker to connect to the mobile network.
- Access to manufacturer documentation or vendor support for firmware specific instructions.

## How This Tracker Connects to Plaspy

The TK103B is configured to send its location and status over GPRS to Plaspy using the shared Plaspy server endpoint and port. Once the tracker is pointed at the Plaspy server and placed into GPRS reporting mode, Plaspy will detect the protocol and accept incoming telemetry for tracking and monitoring in the platform.

- The tracker establishes a GPRS connection and reports location, time, and status information.
- The device is configured to send its data to the Plaspy server endpoint and port listed above.
- Plaspy handles automatic protocol detection so no protocol selection is needed on the platform side.
- Telemetry reported by the tracker becomes visible in Plaspy for real time monitoring and historical playback.
- Alerts and device state information reported by the tracker are forwarded into the Plaspy interface for operational visibility.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TK103B, typically SMS based commands or an authorized tool.
2. Configure the device APN settings for your mobile operator so GPRS data is available.
3. Enter the Plaspy server using either the domain d.plaspy.com or the server IP 54.85.159.138 as required by your configuration method.
4. Set the server port to 8888 which is the port Plaspy uses for all devices.
5. Choose UDP or TCP transport if the device requires a transport selection; either is supported by Plaspy.
6. Apply or save the configuration on the device and restart the tracker if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking device status in the platform or using the device check command.

## Example Configuration Commands

The following commands are taken from public Appello TK103B configuration examples. These are intended to be sent to the tracker as SMS messages. The sample setup uses the public default device password 123456 shown in manufacturer documentation. If your device uses a different password, replace 123456 with your device password.

- Factory reset (optional initial step)
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the operator APN
```text
apn123456 [apn]
```
Note: replace [apn] with your operator APN string.

- Set the APN username and password (optional)
```text
up123456 [apnu] [apnp]
```
Note: replace [apnu] and [apnp] with your APN username and password if required by your operator.

- Set the GPRS server to the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```
Note: this command uses the Plaspy server IP and the Plaspy port. Some devices may accept a domain name instead of the IP; check manufacturer docs for supported adminip formats.

- Switch the tracker to GPRS mode
```text
gprs123456
```

- Check current device settings and status
```text
check123456
```

Keep the command order where shown if following a fresh provisioning flow. The factory reset command is optional and should be used only when a full reset is desired or recommended by the installer.

## Configuration Notes

- The exact SMS command syntax and available parameters can differ by firmware version and region; confirm command formats in the device manual.
- SMS based setup is shown in public documentation for this model, but some vendors provide a configuration tool or USB/serial access instead.
- When available, using the domain d.plaspy.com or the IP 54.85.159.138 are equivalent for pointing the tracker to Plaspy; the provided example uses the IP address as shown in public commands.
- Choose UDP or TCP depending on installer preference and device support; Plaspy accepts either and will detect the protocol automatically.
- The example commands include placeholders such as [apn], [apnu], and [apnp] — replace those with your operator values when sending SMS commands.

## Why Use Plaspy with This Configuration

Using the Appello TK103B with Plaspy gives organizations a straightforward way to centralize location data, alerts, and device state for operational oversight. When the device is configured to report to the Plaspy server endpoint and port, fleet managers can view real time positions, receive event notifications, and integrate tracking data into existing operational workflows.

To learn more about Plaspy and its features visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup information and command syntax with the manufacturer at http://www.cnjeo.com/ before deployment.
