---
slug: /teltonika/fmb003/configuration
id: fmb003-configuration
sidebar_label: Configuration
title: Teltonika - FMB003 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FMB003 with Plaspy server settings and practical setup steps for fleet tracking integration
keywords:
  - Teltonika FMB003 configuration
  - Teltonika FMB003 setup
  - FMB003 Plaspy setup
  - Teltonika GPS tracker configuration
  - FMB003 server configuration
  - Plaspy tracker integration
  - OBD II tracker configuration
  - Teltonika configurator guide
  - GPS tracker server settings
  - Fleet tracker setup Plaspy
---

# Teltonika - FMB003 Configuration

This page covers the public configuration context for using the Teltonika FMB003 tracker with Plaspy. It explains the shared Plaspy server settings you will apply on the device, how those settings are used by the platform, and practical setup notes based on available public commands and manufacturer configuration methods.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the configuration tool you use. Where available, this page includes a public example command for the FMB003 and explains placeholders such as APN values you must provide.

## Configuration Overview

The goal of the configuration process is to point the FMB003 to Plaspy so the device reliably reports location and OEM OBD telemetry to the Plaspy platform. This involves configuring network parameters, the Plaspy server endpoint, and the transport mode that the device will use to send data.

- Configure device network settings including APN and credentials where required.
- Point the tracker to the Plaspy server endpoint so it forwards position and OBD data.
- Select the transport protocol if the device requires a choice between UDP or TCP.
- Apply and save the configuration then restart the device if required by the firmware.
- Validate the tracker appears and reports in Plaspy using the platform visibility tools.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Physical access to the vehicle OBD II port for installation and power verification.
- A working SIM card with a data plan and the APN, username, and password for your mobile operator.
- Access to the official Teltonika configuration method you plan to use such as SMS commands, Teltonika Configurator, or FOTA WEB.
- The FMB003 unit must have compatible firmware for the configuration method you choose.
- Basic account access to Plaspy to confirm the device is reporting after setup.
- A method for viewing device logs or responses from the device to validate successful configuration.

## How This Tracker Connects to Plaspy

When configured, the FMB003 forwards position and OEM OBD telemetry to the Plaspy shared server endpoint and port so Plaspy can ingest and display the data in fleet workflows.

- The tracker sends location updates and OEM OBD parameters to d.plaspy.com on port 8888.
- Plaspy receives device connections over UDP or TCP and automatically detects the tracker protocol.
- Device reports enable visibility in Plaspy dashboards and trigger alerts or automations as configured in the platform.
- The platform maps incoming device data to vehicle records for tracking, mileage and fuel or battery reporting.

## Common Configuration Workflow

1. Access the official Teltonika configuration method you prefer such as SMS, Teltonika Configurator, or FOTA WEB.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server setting section.
3. Set the device port to 8888 which is the shared port Plaspy uses for all devices.
4. Choose UDP or TCP if the device requires transport selection.
5. Set APN, APN username, and APN password values required by your mobile operator.
6. Apply or save the configuration and restart the device if firmware requires it.
7. Validate the device reports to Plaspy by checking device status and incoming data in the platform.

## Example Configuration Commands

The FMB003 can be configured using a batch SMS command format. The public example below sets APN parameters and includes the Plaspy server domain and port. Keep the placeholders as shown and replace them with your actual APN values.

- Replace the placeholders:
  - {{apn}} with your mobile operator APN
  - {{apnu}} with APN username if required
  - {{apnp}} with APN password if required

Example SMS batch command:

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes for this example command:
- The command includes the Plaspy server domain d.plaspy.com and port 8888 so the device can report to Plaspy.
- The placeholders {{apn}}, {{apnu}}, and {{apnp}} must be replaced with your operator APN settings.
- The final parameter in the batch indicates a transport or related flag; follow Teltonika guidance for the correct value depending on whether you choose UDP or TCP.

If you use Teltonika Configurator or FOTA WEB instead of SMS, the same server domain and port values should be entered in the corresponding server fields.

## Configuration Notes

- Teltonika firmware versions and configuration interfaces can differ; confirm parameter IDs and command syntax against the device firmware you have.
- Choose UDP or TCP based on your network policy and device support. Plaspy supports both and will detect the protocol automatically.
- SMS based configuration is commonly supported but requires that the device accepts SMS commands and that the SIM plan allows SMS.
- Always replace APN placeholders with operator specific values before sending configuration commands.
- Verify device visibility in Plaspy after configuration to confirm the device is connected and reporting.

## Why Use Plaspy with This Configuration

Using the Teltonika FMB003 configured to report to Plaspy gives fleet operators simple OBD based telemetry combined with Plaspy visibility and reporting. The plug and play form factor, OEM OBD data, and shared Plaspy server settings enable consistent device rollout and straightforward management for mileage, fuel or battery monitoring and real time tracking.

Learn more about Plaspy on https://www.plaspy.com and verify the latest device specific setup details with the manufacturer at https://www.teltonika-gps.com/ . Device configuration methods, firmware behavior, and manufacturer documentation can change over time so confirm current instructions on the official manufacturer website.
