---
slug: /teltonika/fmm80a/configuration
id: fmm80a-configuration
sidebar_label: Configuration
title: Teltonika - FMM80A Configuration
sidebar_class_name: menu_item_tracker
description: Configure your Teltonika FMM80A for Plaspy with server settings example and commands for quick OBD II deployment
keywords:
  - Teltonika FMM80A configuration
  - FMM80A setup
  - Teltonika GPS tracker configuration
  - Plaspy integration
  - OBD II GPS tracker setup
  - fleet tracking configuration
  - server settings for GPS tracker
  - Teltonika configurator guide
  - real time tracking setup
  - telematics device configuration
---

# Teltonika - FMM80A Configuration

This page provides public configuration guidance for using the Teltonika FMM80A with Plaspy. It covers the shared server settings Plaspy expects, an example command used to set basic connection parameters, and a practical workflow to prepare an FMM80A for reporting to Plaspy. The information below is intended for integrators, technicians, and administrators preparing devices for fleet or rental deployments.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools; follow Teltonika configuration methods (SMS, Configurator, or remote management) appropriate for your device and firmware. The example command shown below demonstrates how basic APN and Plaspy server values may be applied on an FMM80A.

## Configuration Overview

Preparing the FMM80A for Plaspy focuses on giving the device a valid data path and target endpoint so it can begin sending telemetry and position updates to the Plaspy platform. The workflow typically ensures the device has network access, correct APN credentials, and the Plaspy server configured, then validates that data arrives in Plaspy.

- Set the device APN credentials so the tracker can use cellular data for telemetry.
- Configure the device to report to Plaspy using the shared server endpoint and port.
- Choose transport (UDP or TCP) if the device requires an explicit selection.
- Apply and save configuration using Teltonika tools or SMS commands.
- Validate connectivity by confirming the FMM80A appears and reports in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- Device physically installed and powered per Teltonika instructions (OBD II plug in this model).
- Active SIM card with a data plan and correct APN settings for the cellular provider.
- Access to Teltonika configuration methods such as SMS commands, Teltonika Configurator, or remote management tools.
- Credentials and APN details (APN name, APN username, APN password) if your provider requires them.
- A Plaspy account or device registration workflow to link reported devices to your organization.
- Note the device firmware version so you can follow instructions relevant to that release.

## How This Tracker Connects to Plaspy

When configured, the FMM80A sends GPS position and supported telematics to the Plaspy server endpoint and port. Plaspy receives these messages and matches the protocol automatically, allowing the device to be shown on live maps, trigger alerts, and populate historical reports.

- The tracker is set to report to the Plaspy endpoint d.plaspy.com (or the IP 54.85.159.138) on port 8888.
- Transport can be configured as UDP or TCP depending on device options; Plaspy accepts both on the same port.
- Plaspy auto-detects the device protocol so the tracker can begin reporting without manual protocol selection on the platform side.
- Location updates, event notifications, and telemetry messages are forwarded into Plaspy for monitoring and alerts.
- Once the device is visible in Plaspy, use platform dashboards to confirm regular position and event reporting.

## Common Configuration Workflow

1. Access the official Teltonika configuration method for your FMM80A (SMS, Configurator, or Teltonika remote management).
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP address 54.85.159.138 in the device server field.
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP for transport if your device requires an explicit transport selection.
5. Configure APN and related credentials so the device has cellular data access.
6. Apply or save the configuration and reboot the device if the tool or device recommends a restart.
7. Validate that the device reports to Plaspy by checking that it appears in your Plaspy account and confirms recent position or telemetry messages.

## Example Configuration Commands

The FMM80A can be configured using Teltonika SMS or bulk commands to set APN and server parameters. The following public example shows how basic parameters are applied in a single command. Replace the placeholders with your operator APN details as required.

- Example command to set APN and Plaspy server parameters

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on placeholders
- {{apn}} — APN name provided by your cellular provider.
- {{apnu}} — APN username if required by the provider; leave empty if not required.
- {{apnp}} — APN password if required by the provider; leave empty if not required.

This example may be sent via SMS or applied through Teltonika Configurator depending on your chosen configuration workflow and device firmware.

## Configuration Notes

- Teltonika devices frequently support configuration via SMS and the Teltonika Configurator tool; follow the method recommended for your firmware release.
- Transport selection between TCP and UDP may affect message delivery characteristics; choose according to your installation and network constraints.
- Plaspy uses the same port for all devices and performs automatic protocol detection, so server and port values are the key settings to apply on the device.
- Firmware differences or hardware revisions may change parameter IDs or supported commands; confirm parameter numbers with Teltonika documentation for your firmware.
- Use the manufacturer’s remote management tools for bulk updates or FOTA when managing many FMM80A units.

## Why Use Plaspy with This Configuration

Configuring the FMM80A to report to Plaspy delivers a quick path to live tracking, alerts, and fleet visibility. The FMM80A’s plug-and-play OBD II form factor and configurable connectivity make it practical for fleet, rental, and delivery operations that need fast deployment and reliable telemetry feeding into a single platform.

To learn more about Plaspy and how to onboard devices, visit https://www.plaspy.com. For the latest device-specific configuration methods, firmware behavior, and official Teltonika documentation, verify details at https://www.teltonika-gps.com/
