---
slug: /topfly/solarx_130/configuration
id: solarx_130-configuration
sidebar_label: Configuration
title: TopFly - SolarX 130 Configuration
sidebar_class_name: menu_item_tracker
description: Configure TopFly SolarX 130 for Plaspy with public server settings SMS commands and practical setup guidance
keywords:
  - TopFly SolarX 130 configuration
  - TopFly SolarX 130 setup
  - SolarX 130 Plaspy configuration
  - SolarX 130 server configuration
  - SolarX 130 GPS tracker setup
  - TopFly tracker configuration
  - Plaspy server settings
  - GPS tracker SMS configuration
  - asset tracking SolarX 130
  - trailer tracker configuration
---

# TopFly - SolarX 130 Configuration

This page documents the public configuration context for using the TopFly SolarX 130 with the Plaspy platform. It focuses on the practical, public-facing server settings and the common setup flow needed to point the tracker at Plaspy so that location, alarms and sensor telemetry are visible in your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. Where available, this page includes the SolarX 130 SMS commands that are publicly documented and shows how they map to Plaspy server settings.

## Configuration Overview

The goal of this configuration is to prepare the SolarX 130 to reliably communicate with Plaspy using the platform's shared server endpoint and port. For SolarX 130 the manufacturer provides an SMS based configuration flow that sets timezone, APN, server endpoint and reporting interval.

- Point the device to the Plaspy server endpoint and port so telemetry routes to Plaspy.
- Configure APN and GPRS settings to enable cellular data upload and SMS based commands when required.
- Set the reporting interval to meet your visibility and battery life requirements.
- Verify the device registers and begins sending position and event data to Plaspy.
- Ensure the device password and placeholders such as APN values are filled with your SIM operator details.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the SolarX 130:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol for incoming connections

Note: Plaspy uses the same port 8888 for all supported devices.

## Typical Requirements Before Setup

- A charged SolarX 130 device and physical access for initial configuration or SMS control.
- An active cellular SIM with data enabled and the correct APN details for your operator.
- Ability to send SMS commands to the device phone number if using SMS configuration as shown below.
- The device password used for configuration (the public example commands use the default password 0000).
- Access to TopFly official documentation or tools in case a vendor utility or firmware-specific steps are required.
- Basic knowledge of whether your installation should use UDP or TCP for transport selection.

## How This Tracker Connects to Plaspy

SolarX 130 sends location, alarms and sensor telemetry to the shared Plaspy server endpoint and port so that Plaspy can display and process device data. The device can be configured to upload buffered points when connectivity returns and to report events such as movement or removal.

- The tracker is configured to report to Plaspy using the server endpoint and port specified above.
- Location updates and telemetry are transmitted over cellular data using the configured APN and GPRS server settings.
- Movement, removal and sensor events are forwarded to Plaspy as the device detects them.
- Buffered offline data is uploaded to the Plaspy server once network connectivity resumes.
- Plaspy provides visibility and event processing once the device is successfully reporting to the shared endpoint.

## Common Configuration Workflow

1. Access the official TopFly configuration method for SolarX 130, typically SMS commands or the vendor configuration tool, depending on your device firmware.
2. Enter the Plaspy server endpoint by using either the server IP 54.85.159.138 or the server domain d.plaspy.com where supported.
3. Set the port to 8888 as Plaspy uses this same port for all supported devices.
4. Choose UDP or TCP transport if the device requires selecting a transport protocol.
5. Apply or save the configuration on the device using the manufacturer method (for SMS, send the required SMS commands).
6. Restart the device if the manufacturer instructions require a reboot to apply network settings.
7. Validate that the device reports to Plaspy by checking device online status and initial position in Plaspy.

## Example Configuration Commands

The SolarX 130 provides public SMS commands for common settings. The manufacturer example uses the device password 0000 in the command strings. Preserve the order below when applying these commands during initial setup.

1. Set timezone to UTC 0

```
GMT,0000,0#
```

2. Set the operator APN (placeholders present)

```
APN,0000,[apn],[apnu],[apnp]#
```

- [apn] is the APN name for your SIM operator.
- [apnu] is the APN username if required by your operator, otherwise leave empty.
- [apnp] is the APN password if required, otherwise leave empty.

3. Set the GPRS server to the Plaspy server IP and port

```
IP,0000,54.85.159.138 8888#
```

- This example uses the Plaspy server IP and port as provided in Plaspy public settings.
- If your device firmware supports domain names in the server command, you can substitute d.plaspy.com for the IP address according to manufacturer guidance.

4. Set the reporting interval to 60 seconds

```
TIMER,0000,60:60:0:0#
```

- The TIMER command format and fields follow the device public documentation. Adjust the numeric fields to change intervals as supported.

Important notes about commands
- The example commands use the default device password 0000. Replace this with your device password if it has been changed.
- Keep the commands in the order shown when performing a baseline configuration: timezone, APN, server, then reporting interval.
- If TopFly provides a different configuration channel (USB, vendor app, or cloud tool) use that tool per manufacturer guidance.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available features; verify commands against the TopFly SolarX 130 documentation for your firmware version.
- This model supports SMS based configuration as shown in the example commands; some vendors also provide PC or mobile utilities that achieve the same settings.
- Choose UDP or TCP based on your network and operational preferences; Plaspy will accept either transport on port 8888 and auto detect the device protocol.
- Always replace APN placeholders with the correct values for your SIM operator to enable GPRS data and server uploads.
- After applying settings, confirm the device is visible on Plaspy to verify connectivity and correct server routing.

## Why Use Plaspy with This Configuration

Using the SolarX 130 with Plaspy provides continuous location visibility, event reporting and buffered uploads for deployments with intermittent connectivity. The public configuration process shown here focuses on making the device report reliably to Plaspy so you can monitor assets, receive alarms and integrate telemetry into operational workflows.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific setup details, firmware behavior and the latest manufacturer instructions at https://www.topflytech.com/ to ensure your installation uses the correct commands and procedures.
